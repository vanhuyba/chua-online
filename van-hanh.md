# Bàn giao vận hành Chánh Điện TikTok LIVE

## Cấu hình chuẩn đã được người dùng chốt — 02/11/2026

**Ưu tiên mục này hơn các ghi chép cũ bên dưới.** Nhãn mới nhất theo yêu cầu: tiêu đề bảng “Công Đức”; hướng dẫn “🎁 Tặng quà được xướng tên hồi hướng” (icon hộp quà). Người dùng yêu cầu ghi nhớ toàn bộ cấu hình hiện tại, tắt LIVE và khi họ yêu cầu bật lại thì thiết lập như bản này. Không tự bật khi chưa được yêu cầu.

- Tài khoản `@hannie.l.lm.n`; tiêu đề Studio “Chánh Điện Tịnh Tâm · Nhạc thiền”, danh mục Music. Cảnh dọc 1080×1920, nguồn Link `http://localhost:3000/live/overlay.html?autoplay=1&v=light-banners`, âm thanh nguồn bật, Custom resolution 1080×1920, Always keep active bật.
- Scene “Screen + Camera”: Link phủ toàn cảnh, FaceTime HD Camera rất nhỏ góc dưới phải (khoảng 240×135 pixel đầu ra; hình đang tối); micro mute. Không mở rộng camera. Tài khoản từng bị buộc thêm camera khi Go LIVE, giữ nguồn camera và kiểm tra yêu cầu thực tế lần sau. Nguồn Google Chrome có trong danh sách nhưng không dùng làm cảnh chính.
- Viewer Wishes là bảng quà gốc TikTok có thể chọn, Vertical, bên phải cách mép khoảng 120px. 6 mục: GG→Thi cử; Heart Me→Sức khỏe; Rose→Tình duyên; Ice Cream Cone→Gia đạo; Finger Heart→Bình an; Doughnut→Tài lộc. Display points OFF, Display timer OFF. Kiểm tra bật Start mỗi phiên nếu cần; không thay bằng bảng HTML tĩnh. Có vùng cuộn.
- Controller: Nam Minh (vi-VN-NamMinhNeural), pitch -18Hz, rate -20%; nhạc nền ON, mõ ON, BPM52; đọc kinh tự động ON mỗi3 phút. Tiêu đề “Chánh Điện Tịnh Tâm”; dòng phụ “Nam Mô A Di Đà Phật”. Chỗ tự mở rộng24→400; joinOnEnter OFF. Bot OFF; không đổ người mẫu khi phát thật.
- Người bình luận/tặng quà có nhân vật; không tạo nhân vật cho mọi lượt vào. Nhân vật vắng tương tác5 phút được dọn; quà ghi ledger. Nhận quà đọc tên/cảm ơn/lời chúc theo chủ đề và chuyển động7 giây; quà ngoài danh sách dùng chúc chung. Không bật đọc mọi bình luận.
- Bố cục HTML: cảm ơn left120/top350, width230, chữ18/tiêu đề21px; hướng dẫn left120/top630,width250,chữ21px. Banner quà/kinh left/right120,top1140; quà xếp hàng, kinh không chồng quà. Banner nhẹ: tên26px,dòng quà20px,lời chúc21px; nền32–42%, viền1px; kinh23px,nền38%. Không trở lại bản nền đặc/chữ lớn. Xem CSS `live/overlay.html` để lấy thông số chính xác.
- Cách bật lại: kiểm tra server trước; nếu chưa chạy dùng Node22 trong `live/`; mở controller, xác nhận cấu hình trên; kiểm tra scene/camera/micro/Link/Viewer Wishes; Go LIVE theo yêu cầu; sau khi phát mới kết nối username trên controller; xác nhận đồng hồ, upload/FPS, kết nối ✓ và âm thanh. Không mua xu/tặng quà để test. Không khởi động lại server nếu không cần vì mất ghế đang hoạt động.
- Bản nguồn hiện tại và các thay đổi chưa commit phải được giữ. Ledger `live/data/gifts.jsonl` không xóa. Không lưu mật khẩu/cookie/stream key vào tài liệu.

Cập nhật ngày 01/11/2026, giờ Việt Nam. Đây là ghi chép bàn giao cho Cursor, không phải bằng chứng trạng thái LIVE tại thời điểm đọc. Mốc xác minh kết nối cuối cùng: **23:51:36**.

## Đọc nhanh trước khi tiếp tục

- Mục tiêu của người dùng: phát Chánh Điện lên TikTok; người bình luận có nhân vật; người tặng quà được đọc tên và nhân vật chuyển động. Người dùng muốn camera nhỏ nhất có thể để không che cảnh.
- **Đã phát LIVE thật** trên tài khoản `@hannie.l.lm.n`, tên hiển thị “Hannie lì lợm nè”. LIVE Studio đã có người xem và bình luận thật.
- **Đã khắc phục kết nối TikTok**: server ghi `[23:39:30] ✅ Đã kết nối live @hannie.l.lm.n`; bảng điều khiển hiện dấu ✓. Không còn kết luận rằng bắt buộc mua EulerStream Business để kết nối cơ bản.
- **Đã nhận quà thật và chạy tương tác:** Hamster 🐹 tặng Rose ×1 lúc 23:52:03; Hằng ahii💁‍♀️ tiếp tục tặng Rose. Có nhật ký thật, MP3 TTS, banner và nhân vật đứng lên di chuyển trong LIVE Studio. Nguồn âm thanh bật và có meter xanh; chưa nghe đối chiếu từ thiết bị người xem.
- Đã thêm chuyển động 7 giây khi nhận sự kiện quà và cập nhật nguồn Link trong LIVE Studio để tải mã mới.
- LIVE đang chạy ở lần kiểm tra gần nhất. Trước khi sửa nguồn, khởi động lại server hoặc bấm nút phát/dừng, kiểm tra trạng thái thực tế. Không tự dừng LIVE chỉ để kiểm thử.
- Các thay đổi vẫn ở working tree, chưa commit. Có thể người dùng đang mở Cursor cùng thư mục; kiểm tra diff trước khi sửa, không ghi đè thay đổi của họ.

## Cấu trúc và lệnh chạy

Thư mục dự án: `/Users/huyba/Documents/chua-online`.

| Thành phần | Vai trò |
| --- | --- |
| `index.html`, `assets/` | Web tĩnh, ảnh nhân vật, nền chánh điện và nhạc |
| `live/server.mjs` | HTTP/WebSocket localhost, nhận sự kiện TikTok, quản lý người xem, ghi quà, tạo TTS |
| `live/control.html` | Bảng điều khiển và công cụ mô phỏng |
| `live/overlay.html` | Canvas 9:16, nhân vật, hiệu ứng, phát âm thanh |
| `live/tests/live.test.mjs` | Kiểm thử hồi quy backend với kết nối giả lập |
| `live/data/gifts.jsonl` | Nhật ký quà thật, tạo khi có quà; không đưa vào Git/HTTP |
| `live/tts/` | MP3 tạm từ Edge TTS, không đưa vào Git |

Yêu cầu Node.js >=20. Đã chạy bằng Node 22.22.3. Shell đăng nhập từng chọn nhầm Node cũ; nếu gặp lỗi cú pháp `||=`, kiểm tra `node -v`, tránh đổi mã để tương thích Node cũ.

```bash
cd /Users/huyba/Documents/chua-online/live
npm install
npm start
```

- Bảng điều khiển: `http://localhost:3000/live/control.html`
- Overlay: `http://localhost:3000/live/overlay.html`
- Nguồn Link đang dùng trong Studio: `http://localhost:3000/live/overlay.html?autoplay=1&v=gift-motion`
- Kiểm thử: `npm test` trong `live/`, hoặc `npm test --prefix live` từ gốc dự án.
- Kiểm tra tiến trình trước khi chạy thêm server: `lsof -nP -iTCP:3000 -sTCP:LISTEN`. Không hardcode PID từ phiên làm việc cũ.

Server chỉ bind `127.0.0.1:3000`. Không cần công khai cổng ra Internet để phát LIVE.

## Cấu hình LIVE Studio đã thực hiện

- Cài TikTok LIVE Studio cho Mac Apple silicon từ trang chính thức `https://www.tiktok.com/studio/download`.
- Trang cấp quyền đã xác nhận **Approved**. Trước đó app có lúc hiện “No access” khi chưa đồng bộ trạng thái; sau đó đã phát thật thành công.
- Tiêu đề: **Chánh Điện Tịnh Tâm · Nhạc thiền**; chủ đề **Music**.
- Khung dọc 1080×1920, 30 FPS. Bitrate đã thấy trong cài đặt là 4800 kbps, âm thanh 128 kbps; kiểm tra lại nếu cần thay đổi.
- Nguồn **Link** bật âm thanh, Custom resolution 1080×1920, Always keep active, đã Fit to screen.
- Có thêm nguồn **Window capture / Google Chrome**, trỏ tới cửa sổ Chrome riêng chứa overlay, nằm dưới Link. Không chuyển cửa sổ này sang nội dung riêng tư khi đang bắt hình.
- Đã gỡ các nguồn mẫu ban đầu (Alert, Goal, Image, Display capture, Camera mẫu), sau đó thêm lại camera thật theo yêu cầu của TikTok.
- TikTok hiện thông báo **“A camera source is required to ensure real-time interactions during your LIVE.”** đối với tài khoản này. Nguồn Link hoặc Window capture riêng không đủ để bắt đầu phiên.
- Người dùng đã **đồng ý bật camera và phát cùng Chánh Điện**. Camera FaceTime HD Camera đã thêm, thu nhỏ khoảng 240×135 pixel trên khung đầu ra, đặt sát góc dưới bên phải. Đã thử kéo nhỏ hơn nhưng không thấy kích thước giảm thêm. Không khẳng định đây là giới hạn chính thức của TikTok.
- Micro đã tắt để không thu âm môi trường. Nhạc/giọng đọc của nguồn Link vẫn bật. Muốn người dùng nói chuyện cần bật micro theo nhu cầu của họ.
- Nguồn Link đã đổi URL thêm `v=gift-motion` để tải chuyển động mới mà không dừng LIVE. Chỉ lưu file HTML trên đĩa không làm trang nguồn đang mở tự tải lại.

## Nguyên nhân lỗi kết nối và cách đã sửa

Ban đầu cấu hình thư viện:

```js
{ enableExtendedGiftInfo: true, processInitialData: false }
```

Khi tài khoản LIVE thật, thư viện báo lỗi từ `fetchWebcastSignatureFromEulerRoute`: endpoint yêu cầu Business plan. Đã từng diễn giải quá rộng rằng mọi kết nối đều cần gói Business; **kết luận này đã được sửa sau khi thử thành công luồng cơ bản**.

Đã thử độc lập rồi áp dụng vào `connectTikTok()`:

```js
new TikTokLiveConnection(uniqueId, {
  enableExtendedGiftInfo: false,
  fetchRoomInfoOnConnect: false,
  processInitialData: false,
});
```

Kết quả thử độc lập: kết nối thành công tới room `7703241316955687698` trong phiên này. Room ID thay đổi theo phiên, không hardcode để dùng về sau.

Kết quả trên server thực tế: log kết nối thành công lúc 23:39:30 và trạng thái ✓ trên bảng điều khiển.

Không bật lấy danh mục quà mở rộng chỉ để có tên quà nếu chưa kiểm tra yêu cầu dịch vụ.

### Lỗi schema đã sửa sau khi kết nối

Connector 2.5.0 dùng `tiktok-live-proto/v3`. Mã cũ đọc trường v1 nên log có quà nhưng bỏ qua vì thiếu ID. Đã sửa adapter:

- ID: `user.id` (fallback `userId`, `uniqueId`, `displayId`); tên từ `nickname`/`displayId`; ảnh từ `avatarThumb.urlList`.
- Bình luận từ `content`, fallback `comment`.
- Quà từ `gift.{type,name,diamondCount}`, fallback `giftDetails`/`extendedGiftInfo`.
- Chuẩn hóa `repeatEnd` dạng số; chỉ xử lý lần kết thúc combo loại 1; chống trùng bằng `common.msgId` với bộ nhớ giới hạn 2.000 ID.

Server đã khởi động lại áp dụng adapter, kết nối lúc **23:51:36**. Quà Rose thật đã xác nhận tên và giá trị 1; chưa kiểm chứng mọi loại quà có giá trị lớn bằng giao dịch thật.

Không dùng mật khẩu/cookie/session TikTok, không gửi thông tin đăng nhập sang dịch vụ ký. Chưa mua gói hay tạo tài khoản EulerStream.

## Các sửa đổi trong mã đã hoàn tất

### Nhận quà và lưu dữ liệu

- `onGift()` không bỏ qua thông báo/TTS khi hết 100 chỗ và không thể thêm người ngồi. Người không có chỗ vẫn được banner và lời cảm ơn; chưa có nhân vật để chạy hiệu ứng riêng trong trường hợp đó.
- Chuẩn hóa ID và bỏ qua sự kiện thiếu ID để tránh gộp người vào `undefined`.
- Ghi quà thật vào `live/data/gifts.jsonl`; khôi phục tổng điểm khi người xem trở lại sau khi server chạy lại.
- Quà từ lệnh thử/bot không ghi vào lịch sử thật.
- Chặn HTTP truy cập `/live/data/`; thêm thư mục dữ liệu vào `.gitignore`.
- Nhật ký là điểm tương tác, không phải số dư tiền/kim cương được TikTok xác nhận.

### Kết nối TikTok

- Dùng số phiên kết nối để vô hiệu hóa callback từ kết nối cũ, tránh kết nối chồng ghi đè trạng thái hoặc cộng quà từ kết nối đã hủy.
- Tự thử lại sau 2, 4, 8, 16, 32, tối đa 60 giây. Bấm Ngắt sẽ hủy thử lại.
- Bảng điều khiển hiển thị lỗi và khóa nút Kết nối khi đang kết nối.
- Đã áp dụng cấu hình WebSocket cơ bản nêu trên và kết nối thành công.

### Giọng đọc

- Edge TTS tiếng Việt: Nam Minh/Hoài My qua `msedge-tts`.
- Tạo âm thanh có timeout 20 giây và đóng tài nguyên khi lỗi.
- Hàng đợi server tối đa 15 câu; overlay tối đa 10 câu, bỏ câu chờ quá 60 giây; một lần phát có timeout 45 giây để hàng đợi không treo.
- Có `?autoplay=1` cho nguồn Link. Nếu AudioContext bị trình duyệt chặn thì vẫn cần nút bật âm thanh; không coi autoplay thành công chỉ vì có query string.
- **Hiện chỉ đọc tên người tặng, tên/số quà và lời nguyện có sẵn. Không đọc bình luận tự do.** Đã bỏ cách lấy bình luận gần nhất làm lời đọc để tránh phát nội dung không phù hợp. Nếu người dùng yêu cầu đọc bình luận, cần bổ sung chế độ kiểm duyệt/duyệt câu và mô tả đúng hành vi; không nói tính năng đó đã có.

### Nhân vật khi được tặng quà

- `giftFx()` gán `v.giftT = 7`.
- Trong vòng vẽ, nhân vật ở chỗ ngồi đi theo đường cong tiến ra trước và quay về trong khoảng 7 giây; sprite có animation dùng các frame đi bộ, sau đó về frame ngồi.
- Các skin không có animation vẫn dịch chuyển vị trí với hình tĩnh.
- Nếu người mới còn đang đi vào chỗ thì hiệu ứng chuyển động quà bắt đầu sau khi hoàn tất đi/ngồi; thời gian quà không giảm trong nhánh đang đi vào.
- Còn banner, hào quang, hoa/tim và hiệu ứng theo mức quà.
- Đã quan sát nhân vật Hằng đứng lên di chuyển khi có Rose thật trong LIVE Studio. Test số học xác nhận rời chỗ rồi trở về sai số dưới 0,1 pixel và frame ngồi sau 10 giây.

## Những gì đã kiểm tra và giới hạn bằng chứng

Đã đạt:

1. `node --check live/server.mjs` và kiểm tra cú pháp script trong control/overlay.
2. `git diff --check`.
3. **5 test đã pass**: hết chỗ vẫn thông báo/lưu/khôi phục quà; tách mô phỏng và không lấy bình luận tự do làm lời đọc; kết nối cũ/retry/combo; schema v3 chat/quà và chống trùng; chuyển động rời chỗ rồi quay về.
4. HTTP overlay trả 200; đường dẫn lịch sử quà trả 404.
5. LIVE Studio đang phát thật, có người xem/bình luận; sau adapter v3, bình luận mới tạo nhân vật. Lần chụp cuối thấy **26/36** nhân vật trong overlay.
6. Nhật ký quà thật: Hamster Rose ×1 lúc 23:52:03; Hằng có 6 sự kiện Rose ×1 từ 23:52:56 đến 23:55:18. Đây là các sự kiện sau sửa, không bao gồm quà trước lúc kết nối đúng.
7. MP3 thật đầu tiên: `live/tts/tts_1793551923638_1.mp3`, 137.376 byte. LIVE Studio hiển thị banner Hằng, nhân vật đứng lên, nguồn âm thanh bật và meter xanh; micro vẫn tắt.
8. Ảnh bằng chứng: `/private/tmp/chua-live-interactions.png` (file tạm, có thể mất sau khi dọn máy).

Giới hạn bằng chứng:

- Chưa nghe đối chiếu tiếng đọc từ thiết bị người xem. File MP3 và meter xanh chứng minh tạo âm thanh/nguồn đang xuất tín hiệu, không thay thế kiểm tra nghe từ xa.
- Test chuyển động kiểm tra chính đoạn mã tính vị trí/frame; không phải test ảnh canvas hoặc âm thanh đầu ra Studio.
- Combo và quà lớn được kiểm tra bằng sự kiện giả lập; quà thật đã quan sát là Rose.
- Các bình luận/quà trước khi kết nối không replay (`processInitialData: false`).

## Việc Cursor nên làm tiếp, theo thứ tự

1. Kiểm tra trạng thái thực tế server, dấu ✓ và LIVE Studio trước khi thao tác. Không khởi động lại hoặc bấm phát lần nữa chỉ để kiểm tra.
2. Đối chiếu tiếng đọc trên điện thoại/thiết bị người xem; nếu không nghe, kiểm tra âm lượng nguồn Link, global audio và giới hạn autoplay. Không bật micro để sửa tiếng TTS.
3. Khi tự nhiên có combo/quà loại khác, đối chiếu tên, số lượng, giá trị và chống trùng với nhật ký. Không mua xu/tặng quà bằng tiền người dùng để kiểm thử.
4. Theo dõi hàng đợi giọng đọc khi quà liên tục và chuyển động nhiều nhân vật; chỉ thêm test khi có lỗi cụ thể.
5. Nếu người dùng muốn đọc lời bình luận tự do, đó là chức năng tiếp theo cần bổ sung; hiện chỉ đọc tên/quà và lời nguyện có sẵn.
6. Giữ tài liệu này cập nhật, phân biệt quà thật và mô phỏng. Các thay đổi hiện chưa commit.

## Lưu ý khi thao tác trên máy đang phát

- Giữ camera nhỏ ở góc dưới bên phải theo yêu cầu người dùng; không che thông báo, nhân vật hoặc cảnh chính.
- Không tự bật micro. Người dùng chỉ vừa cho phép camera, và micro hiện tắt.
- Nguồn Link ở trên Window capture; camera ở trên cùng. Đừng kéo nhầm Link khi muốn resize camera. Trong phiên điều khiển đã có lần kéo nhầm, đã khôi phục Link bằng Fit to screen.
- Khi UI báo người dùng vừa thay đổi app, đọc lại trạng thái trước khi thao tác. Không dùng tọa độ/ID cũ sau khi đổi cửa sổ hoặc mở hộp thoại.
- Khởi động lại server làm mất danh sách chỗ ngồi hiện tại (điểm quà thật có lưu), gián đoạn TTS và socket; không dừng luồng LIVE Studio nhưng vẫn ảnh hưởng trải nghiệm. Cân nhắc trước khi làm.
- Đổi HTML cần reload nguồn đang chạy. Chỉ reload bảng điều khiển không cập nhật nguồn Link trong Studio.
- Không đăng nhập dịch vụ khác, gửi cookie TikTok, mua gói, hay tắt kiểm tra bảo mật để sửa kết nối nếu chưa có yêu cầu phù hợp.

## Khôi phục sau sập nguồn — 02/11/2026, 00:17 giờ Việt Nam

- Người dùng yêu cầu phát lại sau khi máy sập nguồn. Server cũ đã dừng; chạy lại bằng Node 22.22.3, lắng nghe localhost:3000 lúc 00:16:51.
- LIVE Studio báo phiên vẫn tồn tại; đã chọn **Continue LIVE**, không tạo phiên chồng. Xác nhận đồng hồ phát tăng, upload ~2.209 kbps, FPS 30, frame drops 0.
- Nguồn Link tự hiện lại Chánh Điện; camera vẫn nhỏ góc dưới phải, micro tắt, âm thanh nguồn có meter xanh. Nguồn Chrome dự phòng báo mất cửa sổ sau khởi động lại; Link chính vẫn hiển thị đúng nên không sửa nguồn khi đang phát.
- Kết nối lại @hannie.l.lm.n thành công lúc 00:17:35. Có 5 nhân vật từ bình luận thật sau khôi phục. Danh sách chỗ ngồi cũ mất do server dừng; lịch sử quà trên đĩa vẫn được giữ.
- Bằng chứng tạm: /private/tmp/chua-live-restored.png. Không cam kết máy không tiếp tục sập nguồn; chưa xác định nguyên nhân phần cứng/nguồn điện.

## Tự rời chỗ — 02/11/2026, 00:31 giờ Việt Nam

- Thêm `expireSeats()` chạy mỗi 15 giây: xóa chỗ nếu không tương tác 5 phút, phát sự kiện `leave` tới overlay/control. Bình luận hoặc quà gia hạn `lastAt`; không dùng tim để gia hạn.
- Áp dụng cho cả người tặng quà; tổng quà trong ledger không xóa, người quay lại được khôi phục điểm. Đây là số tương tác gần đây, không phải số người đang xem TikTok; người xem im lặng cũng có thể hết chỗ.
- Đổi nhãn overlay thành “tương tác gần đây”. Nguồn Link đã nạp `?autoplay=1&v=idle-seats`.
- 6 test pass, gồm hết hạn đúng mốc 5 phút, giữ người còn hoạt động và khôi phục điểm người tặng quay lại. `git diff --check` đạt.
- Server khởi động lại lúc 00:30:46, nối TikTok thành công 00:31:00; LIVE Studio vẫn đang phát. Đã thấy 2 nhân vật từ tương tác thật sau cập nhật. Ảnh tạm `/private/tmp/chua-live-idle-seats.png`.
- Quan sát phiên trước cập nhật: Edge TTS có lúc lỗi stream đóng sớm. Chức năng tự rời chỗ không sửa lỗi TTS đó; cần xử lý riêng nếu tái diễn.

## Nâng sức chứa — 02/11/2026, 01:05 giờ Việt Nam

- Nâng giới hạn server lên 400; tự mở rộng 24 → 36 → 64 → 100 → 144 → 225 → 400. Overlay thêm lưới 12×12, 15×15, 20×20; controller có lựa chọn mới. Cơ chế hết hạn 5 phút giữ nguyên.
- 7 test pass, gồm vượt 100 lên 144 và chứa đủ 400, đầy phòng vẫn thông báo/lưu quà. Chưa đo FPS với 400 nhân vật thực tế; nhân vật/tên sẽ nhỏ ở mật độ cao.
- Đã chạy server mới lúc 01:04:40, kết nối TikTok lúc 01:05:01; nguồn Link nạp `?autoplay=1&v=capacity400`. LIVE Studio vẫn phát 30 FPS, có tương tác thật. Khởi động lại đã làm mới danh sách chỗ; điểm quà giữ trong ledger.
- Ảnh tạm: `/private/tmp/chua-live-capacity400.png`.

## Phát lại và kiểm tra camera — 02/11/2026, khoảng 06:12

- Server đã dừng, được chạy lại lúc 06:09:36. Đã thử bỏ nguồn Camera rồi bấm Go LIVE: Studio mở Add camera, báo rõ “A camera source is required to ensure real-time interactions during your LIVE.” Yêu cầu này vẫn áp dụng cho tài khoản trong lần thử hiện tại.
- Thêm lại FaceTime HD Camera, thu nhỏ khoảng 240×135 pixel đầu ra và đặt góc dưới phải; ảnh camera đang rất tối/đen, không khẳng định thấy rõ người. Micro tắt, nguồn âm thanh có meter xanh.
- Đã bắt đầu phiên mới, thấy đồng hồ tăng, upload 3259 kbps, FPS 30 và người xem vào. Kết nối lại sự kiện TikTok trên controller.
- Ảnh tạm `/private/tmp/chua-live-camera-required.png`.

## Đổi nhãn theo yêu cầu người dùng — 02/11/2026

- Overlay đổi tiêu đề bảng “Công Đức” thành “Cảm ơn người ủng hộ”; dòng tổng điểm trong banner quà đổi “công đức” thành “điểm ủng hộ”.
- Đã nạp nguồn Link `?autoplay=1&v=thanks` và xác nhận chữ mới trên LIVE Studio; không khởi động lại server. `git diff --check` đạt.
- Phạm vi chỉ đổi nhãn/điểm. Dòng “xướng tên hồi hướng” và nội dung lời nguyện/kinh vẫn còn; không coi thay nhãn là hoàn tất rà soát pháp lý.

- Theo yêu cầu tiếp theo, đã đổi dòng “Tặng quà được xướng tên hồi hướng” thành “💛 Cảm ơn sự ủng hộ của bạn”. Nguồn Link hiện `?autoplay=1&v=thanks2`; đã thấy chữ mới trên LIVE. Nội dung TTS/kinh chưa đổi trong lần sửa chữ này.

## Quà & lời chúc — 02/11/2026, 06:53–06:55

- Thêm danh mục `GIFT_WISHES` tại server: TikTok→Sức khỏe; Rose/Hoa hồng→Tình duyên; Ice Cream Cone/Kem ốc quế→Gia đạo; Finger Heart(s)/Tim ngón tay→Bình an; Doughnut/Donut→Tài lộc. So khớp tên chính xác đã chuẩn hóa, không suy đoán theo giá quà. Tên chưa biết dùng 3 câu chúc chung luân phiên ngẫu nhiên.
- Mỗi gift event có `topic`, `icon`, `prayer`; giọng đọc đổi sang “Cảm ơn [tên] đã gửi [quà/số lượng]. Chúc…”; không còn dùng “Phật tử… thành tâm dâng…” trong lời đọc quà. Banner hiện loại quà/số lượng/chủ đề và lời chúc. Chuyển động quà và điểm vẫn giữ.
- Overlay có bảng Quà & lời chúc bên phải, dùng emoji minh họa (không phải ảnh quà TikTok chính thức). Bảng cảm ơn chuyển lên phía trên. Nguồn Link hiện `?autoplay=1&v=gift-wishes2`.
- Server được khởi động lại để áp dụng; LIVE Studio tiếp tục phát. Controller đã kết nối lại, có bình luận thật tạo nhân vật. 8 test pass, gồm tên quà tiếng Anh/Việt và fallback cho Rose Bear; chưa xác minh quà thật cho đủ 5 nhóm sau bản này, chưa nghe đối chiếu TTS trên điện thoại người xem.
- Ảnh tạm: `/private/tmp/chua-live-gift-wishes.png`.

## Bảng quà gốc TikTok Viewer Wishes — 02/11/2026, khoảng 07:17–07:20

- Người dùng làm rõ muốn bảng người xem bấm chọn quà, không phải hình HTML cố định. Đã tìm **Tools → Viewer Wishes** trong LIVE Studio, tạo từ template rồi thay từng quà/tên.
- Đã **Start** thành công; Studio hiện “Viewer Wishes list” và bảng dọc gốc bên phải. 6 mục theo thứ tự hiện tại: GG→Thi cử (1 xu), Heart Me→Sức khỏe (1), Rose→Tình duyên (1), Ice Cream Cone→Gia đạo (1), Finger Heart→Bình an (5), Doughnut→Tài lộc (30). Giá hiển thị lúc cấu hình, có thể thay đổi theo TikTok.
- Người dùng đã chọn Heart Me và GG cho hai chủ đề mới. Tắt Display points và Display timer. Không cần tự restart vòng đếm khi timer tắt.
- Đã bỏ aside bảng quà HTML, chuyển bảng cảm ơn lên trái để tránh chồng Viewer Wishes; nguồn Link `?autoplay=1&v=native-wishes6b`.
- Backend đổi Sức khỏe từ TikTok sang Heart Me; thêm GG với câu “Chúc bạn ôn tập hiệu quả, giữ bình tĩnh, tự tin và làm bài thật tốt.” Quà khác giữ fallback chung. 8 test pass.
- Server áp dụng lúc 07:17:05, connector xác nhận kết nối 07:17:50. LIVE Studio tiếp tục phát. Chưa trực tiếp kiểm tra thao tác bấm/gửi quà từ điện thoại người xem hoặc quà thật Heart Me/GG sau sửa; không tự chi xu để test.
- Ảnh `/private/tmp/chua-native-wishes6.png`. Bảng dọc TikTok có vùng cuộn, có thể chỉ thấy 5/6 mục cùng lúc.

## Thu gọn hai khung bên trái — 02/11/2026

- Theo ảnh người dùng: giảm chữ nội dung 25→21px, tiêu đề cảm ơn 30→24px; thu chiều rộng nội dung 290→250px và padding 14×18px.
- Cả hai khung dịch từ left 24→120px để khoảng cách mép trái cân với bảng quà gốc bên phải. Giữ cao độ hiện tại.
- Đã nạp nguồn Link `?autoplay=1&v=compact-cards` và kiểm tra trực quan trên LIVE Studio, phiên LIVE tiếp tục. Ảnh `/private/tmp/chua-compact-cards.png`.

## Chống chồng khung và banner — 02/11/2026

- Bảng cảm ơn xuống top 350px (cách cụm đồng hồ), rộng 230px; chữ 18px, tiêu đề 21px. Giới hạn chiều cao 220px để không đè hướng dẫn bên dưới.
- Banner quà và kinh chuyển sang vùng riêng top 1140px, dưới các khung cố định và bảng quà TikTok. Thu chữ tên 34px/nội dung 25–26px; tên dài rút gọn, nội dung xuống dòng; giới hạn chiều cao 300px.
- Banner quà xếp hàng, hiện lần lượt, cách nhau 500ms; tối đa 20 mục chờ. Kinh không bật banner khi đang hiện/quá trình chuyển banner quà. Quà đến sẽ ẩn banner kinh ngay.
- Kiểm tra JS syntax và timer giả lập: hai quà hiện đúng thứ tự, kinh không chồng quà và có thể hiện lại khi hết hàng. Đạt; diff check đạt. LIVE nạp `?autoplay=1&v=no-overlap`; ảnh `/private/tmp/chua-no-overlap.png`.

## Banner nhẹ và nhỏ hơn — 02/11/2026

- Theo yêu cầu: tên người gửi 34→26px, dòng quà 25→20px, lời chúc 26→21px; banner kinh 30→23px. Giảm padding còn 12×18px.
- Nền quà từ 95% xuống 32–42%, nền kinh 86% xuống 38%; viền 1px, giảm ánh sáng bao quanh. Thêm bóng chữ nhẹ để vẫn đọc được trên cảnh nền.
- Đã nạp nguồn LIVE `?autoplay=1&v=light-banners`, phiên phát tiếp tục. Diff check đạt. Ảnh trạng thái `/private/tmp/chua-light-banners.png` (chưa có banner xuất hiện ở thời điểm chụp).

## Đã kết thúc theo yêu cầu — 02/11/2026

- Đã bấm End LIVE → End now. Xác nhận Studio trở lại Go LIVE, upload0 kbps/FPS0 và màn hình tổng kết. Thời lượng1:37:34,1.9K lượt xem,13 follower mới,18 người tặng,21 diamonds,ước tính0.08USD (số do Studio hiển thị).
- Đã bấm Ngắt trên controller để dừng kết nối/retry sau phiên. Trước khi ngắt có rate_limit_account_minute; lần sau không bấm kết nối liên tục, chờ nếu còn giới hạn. Server local để sẵn, không xóa cấu hình hay ledger.
- Ảnh xác nhận `/private/tmp/chua-live-ended.png`. Chỉ bật lại khi người dùng yêu cầu, dùng mục cấu hình chuẩn ở đầu tài liệu.

## Phát lại theo cấu hình chuẩn — 02/11/2026, khoảng 20:15

- Server được chạy lại20:10:34 (Node22); nguồn Link nạp `?autoplay=1&v=light-banners-resume`, độ phân giải1080×1920, sound/always active ON. Controller đúng cấu hình chuẩn.
- Theo yêu cầu kiểm tra camera: tắt hiển thị nguồn camera rồi bấm Go LIVE; Studio không phát, hiện Add camera source. Bật lại hiển thị nguồn camera rồi Go LIVE thành công. Camera vẫn nhỏ góc dưới phải, mic mute. Không kết luận camera nhỏ/tối bảo đảm tuân thủ nội dung.
- Viewer Wishes giữ đủ6 mục,Vertical,points/timer OFF; đã Start now và bảng xuất hiện bên phải. LIVE tăng đồng hồ qua1 phút,upload3071kbps,FPS30,âm thanh có meter xanh.
- Controller kết nối ✓ @hannie.l.lm.n lúc20:15:24. Ảnh `/private/tmp/chua-live-resumed.png`. Phiên đang phát, không tự kết thúc.


## Khôi phục chữ theo yêu cầu — 02/11/2026

- Đổi bảng thành “✦ Công Đức ✦”, hướng dẫn “🎁 Tặng quà được xướng tên hồi hướng”. Chỉ đổi chữ/icon, không sửa giọng đọc quà hoặc cơ chế tương tác. Nguồn Link dùng `?autoplay=1&v=cong-duc-gift-icon`.

## Khôi phục sau sập máy — 02/11/2026, khoảng 21:05

- Server dừng do sự cố, đã chạy lại Node22 lúc21:02:56. Studio về Go LIVE; đã phát lại thành công, đồng hồ qua1:42,upload1635kbps,FPS30,âm thanh meter xanh,micro mute,camera nhỏ góc dưới phải.
- Giữ nhãn Công Đức và 🎁 Tặng quà được xướng tên hồi hướng, bố cục/banner nhẹ. Viewer Wishes đã Start lại đủ6 mục,Vertical,points/timer OFF.
- Connector ✓ @hannie.l.lm.n lúc21:05:52; có bình luận thật và nhân vật mới. Ghế trước sập mất do trạng thái trong RAM; không xóa ledger quà. Ảnh `/private/tmp/chua-recovered-live.png`.

## Phiên iPad riêng @minhthuy14092510 — 02/11/2026,21:32

- Người dùng xác nhận tài khoản iPad có LIVE chia sẻ màn hình. Đã chuẩn bị server thứ hai, chưa xác nhận iPad đã bắt đầu phát; controller chưa kết nối TikTok vì phải phát trước.
- Lệnh: `LIVE_INSTANCE=minhthuy14092510 PORT=3001 HOST=0.0.0.0 LAN_OVERLAY_HOST=192.168.2.19 /Users/huyba/.nvm/versions/node/v22.22.3/bin/node server.mjs` trong thư mục live.
- Controller Mac http://localhost:3001/live/control.html, đã điền minhthuy14092510. Overlay iPad http://192.168.2.19:3001/live/overlay.html (cùng Wi-Fi; địa chỉ IP có thể đổi). Trên iPad bấm bật âm thanh, mở cảnh rồi dùng TikTok chia sẻ màn hình. Chưa xác minh âm thanh trình duyệt có được TikTok thu hay không; cần nghe bằng thiết bị người xem.
- LIVE_INSTANCE tách tts/ledger vào live/data/instances/minhthuy14092510; không xóa/chung TTS với3000. LAN chỉ cho overlay/assets/tts; controller và WebSocket control chỉ cho địa chỉ loopback thực tế. Không mở router/public Internet.
- 8 test đạt; HTTP LAN overlay200/control403/data403,WebSocket control bị chặn. Có sửa tiếp kiểm tra remoteAddress sau đó để chống giả Host. Không restart server3000, phiên thứ nhất không bị sửa.
- Bảng quà native Viewer Wishes của phiên Studio không tự đi theo HTML trên iPad; cần cấu hình trong ứng dụng TikTok nếu có tính năng tương đương. Không khẳng định đã sao chép bảng bấm quà sang iPad.


## Hủy phiên iPad theo yêu cầu — 02/11/2026

- Đã dừng server3001; hoàn tác toàn bộ LIVE_INSTANCE/RUNTIME và LAN_OVERLAY_HOST cùng định tuyến TTS riêng, khôi phục kiểm thử về điểm bắt đầu const TTS_DIR. Cấu hình iPad ở mục trước không còn áp dụng.
- Giữ nguyên server/LIVE3000 đang chạy, danh mục lời chúc và toàn bộ chỉnh sửa overlay trước đó. Không xóa dữ liệu quà.
