import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import vm from 'node:vm';
import { EventEmitter } from 'node:events';
const source = fs.readFileSync(new URL('../server.mjs', import.meta.url), 'utf8');
function setup(dir = fs.mkdtempSync(path.join(os.tmpdir(), 'chua-test-'))) {
  const messages = [], timers = [];
  const sandbox = { fs, path, __dirname:dir, ROOT:dir, process:{env:{}}, console:{log(){}},
    setInterval(){}, clearInterval(){}, setTimeout(fn, delay){ const t={fn,delay}; timers.push(t); return t; }, clearTimeout(t){ if(t)t.cancelled=true; },
    broadcast(m){ messages.push(m); } };
  vm.createContext(sandbox);
  let code = source.slice(source.indexOf('const TTS_DIR'), source.indexOf('/* -------------------------------------------------------------- server */'));
  vm.runInContext(code + `\nsettings.gifts.readAll=false; settings.gifts.minDiamonds=Infinity;
    globalThis.api={seat,onGift,expireSeats,viewers,totals,connectTikTok,disconnectTikTok,
    useLib(lib){TikTokLib=lib},get state(){return tiktokState}};`, sandbox);
  return { api:sandbox.api, dir, messages, timers };
}
test('full room still announces and persists a new donor; history survives restart', () => {
  const env=setup();
  try {
    for(let i=0;i<100;i++){ const {v}=env.api.seat('u'+i,'User '+i); v.coins=1; }
    env.api.onGift('new','New donor','Rose',3,2);
    assert.equal(env.api.viewers.size,100);
    assert.equal(env.messages.at(-1).t,'gift');
    assert.equal(env.messages.at(-1).total,6);
    const restored=setup(env.dir);
    assert.equal(restored.api.seat('new','New donor').v.coins,6);
    restored.api.onGift('new','New donor','Rose',1,2);
    assert.equal(restored.messages.at(-1).total,8);
  } finally { fs.rmSync(env.dir,{recursive:true,force:true}); }
});
test('simulated gifts are excluded from durable history and comments are not spoken', () => {
  const env=setup();
  try {
    env.api.onGift('sim_Test','Test','Rose',1,1,undefined,true);
    assert.equal(fs.existsSync(path.join(env.dir,'data/gifts.jsonl')),false);
    const {v}=env.api.seat('real','Real'); v.lastText='untrusted text'; v.lastTextAt=Date.now();
    env.api.onGift('real','Real','Rose',1,1);
    assert.notEqual(env.messages.at(-1).prayer,'untrusted text');
  } finally { fs.rmSync(env.dir,{recursive:true,force:true}); }
});
test('superseded connections cannot emit gifts or overwrite the current connection; disconnect cancels retry', async () => {
  const env=setup(), conns=[];
  class Conn extends EventEmitter {
    constructor(id){super(); this.id=id; conns.push(this);}
    connect(){return new Promise(resolve=>{this.resolve=resolve;});}
    disconnect(){this.closed=true;}
  }
  env.api.useLib({TikTokLiveConnection:Conn,WebcastEvent:{CHAT:'chat',GIFT:'gift',MEMBER:'member',LIKE:'like'},ControlEvent:{DISCONNECTED:'disconnected',ERROR:'error'}});
  try {
    const first=env.api.connectTikTok('first');
    const second=env.api.connectTikTok('second');
    assert.equal(conns[0].closed,true);
    conns[1].resolve({roomId:'2'}); await second;
    conns[0].resolve({roomId:'1'}); await first;
    assert.equal(env.api.state.uniqueId,'second');
    conns[0].emit('gift',{user:{uniqueId:'old'},repeatCount:1});
    assert.equal(env.api.totals.has('old'),false);
    const gift={user:{uniqueId:'donor',nickname:'Donor'},giftDetails:{giftType:1,giftName:'Rose',diamondCount:2},repeatCount:3};
    conns[1].emit('gift',{...gift,repeatEnd:false});
    assert.equal(env.api.totals.has('donor'),false);
    conns[1].emit('gift',{...gift,repeatEnd:true});
    assert.equal(env.api.totals.get('donor'),6);
    conns[1].emit('disconnected');
    assert.equal(env.timers.at(-1).delay,2000);
    env.api.disconnectTikTok();
    assert.equal(env.timers.at(-1).cancelled,true);
    assert.equal(env.api.state.status,'idle');
  } finally { fs.rmSync(env.dir,{recursive:true,force:true}); }
});

test('proto/v3 chat and gift create the same viewer, preserve gift value, and deduplicate final events', async () => {
  const env=setup(); let conn;
  class Conn extends EventEmitter { constructor(){super();conn=this;} async connect(){return {roomId:'live'};} disconnect(){} }
  env.api.useLib({TikTokLiveConnection:Conn,WebcastEvent:{CHAT:'chat',GIFT:'gift',MEMBER:'member',LIKE:'like'},ControlEvent:{DISCONNECTED:'disconnected',ERROR:'error'}});
  try {
    await env.api.connectTikTok('channel');
    const user={id:'730001',nickname:'Diệu An',displayId:'dieu.an',avatarThumb:{urlList:['https://example.com/avatar.png']}};
    conn.emit('chat',{user,content:'Nam mô A Di Đà Phật'});
    assert.equal(env.api.viewers.get(user.id).lastText,'Nam mô A Di Đà Phật');
    const gift={user,gift:{type:1,name:'Hoa hồng',diamondCount:2},repeatCount:3,common:{msgId:'gift-final-1'}};
    conn.emit('gift',{...gift,repeatEnd:0});
    assert.equal(env.api.totals.has(user.id),false);
    conn.emit('gift',{...gift,repeatEnd:1});
    conn.emit('gift',{...gift,repeatEnd:1});
    const gifts=env.messages.filter(m=>m.t==='gift');
    assert.equal(gifts.length,1);
    assert.equal(gifts[0].name,'Diệu An');
    assert.equal(gifts[0].giftName,'Hoa hồng');
    assert.equal(gifts[0].coins,6);
    assert.equal(env.api.viewers.size,1);
    assert.equal(JSON.parse(fs.readFileSync(path.join(env.dir,'data/gifts.jsonl'),'utf8')).coins,6);
  } finally { fs.rmSync(env.dir,{recursive:true,force:true}); }
});

test('gift motion leaves the seat and returns without drifting after seven seconds', () => {
  const html=fs.readFileSync(new URL('../overlay.html',import.meta.url),'utf8');
  const start=html.indexOf('      v.giftT=Math.max');
  const end=html.indexOf('    }      // glide',start);
  assert.ok(start>0 && end>start);
  const context=vm.createContext({v:{giftT:7,seat:{x:400,y:1400},x:400,y:1400,ft:0,frame:7,state:'sit'},dt:1/60});
  const step=new vm.Script('{'+html.slice(start,end)+'}');
  let moved=false;
  for(let i=0;i<600;i++){step.runInContext(context);if(context.v.y<1350)moved=true;}
  assert.equal(moved,true);
  assert.ok(Math.abs(context.v.x-400)<0.1 && Math.abs(context.v.y-1400)<0.1);
  assert.equal(context.v.frame,7);
  assert.equal(context.v.flip,false);
});

test('idle seats expire, active seats stay and returning donors retain gift totals', () => {
  const env = setup();
  try {
    env.api.onGift('donor', 'Donor', 'Rose', 3, 1);
    const idle = env.api.viewers.get('donor');
    const active = env.api.seat('active', 'Active').v;
    const now = Date.now();
    idle.lastAt = now - 300_000;
    active.lastAt = now - 299_999;
    env.api.expireSeats(now);
    assert.equal(env.api.viewers.has('donor'), false);
    assert.equal(env.api.viewers.has('active'), true);
    assert.equal(env.messages.at(-1).t, 'leave');
    assert.equal(env.messages.at(-1).id, 'donor');
    assert.equal(env.api.seat('donor', 'Donor').v.coins, 3);
  } finally { fs.rmSync(env.dir, {recursive:true, force:true}); }
});
