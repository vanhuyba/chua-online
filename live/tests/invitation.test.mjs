import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
const html=fs.readFileSync(new URL('../overlay.html',import.meta.url),'utf8');
const code=html.slice(html.indexOf('const INVITATION_TEXT='),html.indexOf('/* ======================= effects'));
test('independent two and five minute reminders retain one pending voice each and prioritize gifts',()=>{
 const shown=[],queued=[];
 const sandbox={performance:{now:()=>0},giftHide:null,ttsPlaying:false,ttsQ:[],AC:{state:'running'},setInterval(){},clearTimeout(){},setTimeout(){},document:{getElementById:id=>id==='invitationText'?{set textContent(t){shown.push(t);}}:{classList:{add(){},remove(){}}}},queueTTS:(url,start)=>queued.push({url,start})};
 vm.createContext(sandbox);vm.runInContext(code+'\nglobalThis.tick=maybeInviteGuests;',sandbox);
 sandbox.tick(119999);assert.equal(shown.length,0);
 sandbox.giftHide=1;sandbox.tick(120000);assert.equal(shown.length,1);assert.equal(queued.length,0);
 sandbox.tick(240000);assert.equal(shown.length,2);
 sandbox.tick(300000);assert.ok(shown.at(-1).includes('Tiger'));assert.equal(queued.length,0);
 sandbox.giftHide=null;sandbox.tick(301000);assert.equal(queued.length,1);assert.ok(queued[0].url.includes('table-invitation'));
 sandbox.ttsPlaying=true;sandbox.tick(302000);assert.equal(queued.length,1);
 sandbox.ttsPlaying=false;sandbox.tick(303000);assert.equal(queued.length,2);assert.ok(queued[1].url.includes('order-invitation'));
 sandbox.tick(304000);assert.equal(queued.length,2);
 sandbox.giftHide=1;sandbox.tick(600000);assert.ok(shown.at(-1).includes('10 xu'));assert.ok(shown.at(-1).includes('Tiger'));
});

test('fireworks require a single gift over 300 coins and expire after twenty seconds',()=>{
 const source=html.slice(html.indexOf('let fireworksUntil='),html.indexOf('const fx=[], petals=[];'));
 const context=vm.createContext({performance:{now:()=>100}});
 vm.runInContext(source+'\nglobalThis.fxAPI={triggerGiftFireworks,drawGiftFireworks,get until(){return fireworksUntil},particles:fireworkParticles};',context);
 const a=context.fxAPI;
 assert.equal(a.triggerGiftFireworks({coins:300,total:9999}),false);assert.equal(a.until,0);
 assert.equal(a.triggerGiftFireworks({coins:301,name:'Guest'}),true);assert.equal(a.until,20100);
 a.particles.push({});a.drawGiftFireworks(20100,.016);assert.equal(a.particles.length,0);
 assert.equal(a.triggerGiftFireworks({coins:600},1000),true);assert.equal(a.until,21000);
});
