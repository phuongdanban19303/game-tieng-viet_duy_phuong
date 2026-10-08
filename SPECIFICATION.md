# TÀI LIỆU ĐẶC TẢ YÊU CẦU PHẦN MỀM (SRS)
## DỰ ÁN: ỨNG DỤNG HỌC CHỮ CÁI TIẾNG VIỆT CHO TRẺ MẦM NON (O - Ô - Ơ)

---

### 1. TỔNG QUAN DỰ ÁN & MỤC TIÊU
- **Tên dự án:** Bé Vui Học Chữ: Chinh Phục O - Ô - Ơ (Mầm Non Vui Nhộn)
- **Đối tượng sử dụng:** Trẻ em mầm non từ 3 - 6 tuổi, phụ huynh, giáo viên mầm non.
- **Mục tiêu:** 
  - Giúp trẻ nhận diện bảng chữ cái tiếng Việt, tập trung chuyên sâu vào nhóm 3 chữ cái dễ nhầm lẫn: **O, Ô, Ơ**.
  - Rèn luyện kỹ năng ghép vần, phát âm chuẩn, nhận diện từ vựng qua hình ảnh thực tế sinh động.
  - Mang lại trải nghiệm chơi mà học thông qua 3 mini-game hấp dẫn với âm thanh tiếng Việt 100% tự nhiên và hiệu ứng âm thanh phong phú.
- **Nền tảng công nghệ:**
  - **Frontend:** React 18+ (Vite), JavaScript (ES6+).
  - **Styling:** CSS3 thuần (Vanilla CSS) với CSS Variables, Glassmorphism, animations mượt mà, layout tương thích Mobile / Tablet / Desktop.
  - **Lưu trữ dữ liệu:** 100% Client-side (LocalStorage / SessionStorage / State RAM), không cần backend.
  - **Âm thanh:** 
    + Phát âm giọng đọc tiếng Việt chuẩn: Google Translate TTS API Proxy (`tl=vi`) kết hợp cơ chế fallback Web Speech Synthesis API.
    + Hiệu ứng âm thanh sinh động (SFX): Sử dụng Web Audio API tổng hợp trực tiếp (không phụ thuộc file ngoài, không lo lỗi 404 mạng).

---

### 2. PHÂN TÍCH CHI TIẾT 3 BỨC ẢNH GIAO DIỆN

#### 2.1. Ảnh 1: Mini-Game 1 - "VƯƠNG QUỐC CHỮ CÁI" (Điền Chữ Vào Ô Trống)
* **Ý tưởng cốt lõi:** Bé nhìn hình ảnh minh họa (ví dụ: chú bò sữa đáng yêu), đọc từ vựng mục tiêu ("CON BÒ"), từ mẫu bị khuyết một chữ cái `C [  ] N BÒ`.
* **Thành phần giao diện:**
  - **Header:** Huy hiệu góc trái ⭐ "VƯƠNG QUỐC CHỮ CÁI"; Thanh tiến trình bên phải (gồm 10-30 chấm tròn/sao hiển thị câu đã làm).
  - **Khung trung tâm (Hero Card):**
    - Khung avatar bo góc pastel hiển thị hình ảnh minh họa con vật/đồ vật (`con bò.png`).
    - Nhãn phụ có icon và tên đầy đủ: `🐄 CON BÒ`.
    - Tiêu đề hướng dẫn to rõ: *"Kéo chữ cái còn thiếu vào ô trống"*.
    - Vùng câu đố: Hiển thị các chữ cái lớn `C [ ? ] N  B Ò` với ô trống có viền đứt đoạn bo tròn (dashed outline).
  - **Khu vực đáp án (Choice Dock):**
    - 3 khối nút chữ cái 3D nổi bật: Khối hồng [ O ], Khối tím [ Ô ], Khối xanh ngọc [ Ơ ].
    - Tương tác: Hỗ trợ cả **Kéo - Thả (Drag & Drop)** lẫn **Chạm/Click trực tiếp** (thân thiện cho bé dùng điện thoại/máy tính bảng).

#### 2.2. Ảnh 2: Mini-Game 2 - "BÉ HÁI HOA" (Thu Hoạch Chữ Cái Vào Giỏ)
* **Ý tưởng cốt lõi:** Bối cảnh khu vườn cổ tích rực rỡ với cầu vồng, bướm bay, mây trời. Bé có một chiếc giỏ đựng hoa và nhiệm vụ hái đúng bông hoa chứa chữ cái tương ứng để ghép thành từ đúng.
* **Thành phần giao diện:**
  - **Header:**
    - Logo hoa đào: `🌸 BÉ HÁI HOA - Chinh phục O • Ô • Ơ`.
    - Thanh nhiệm vụ: "THỬ THÁCH" cùng tiến trình số `01/30` và hàng ngôi sao nhỏ xinh.
  - **Khung gợi ý bên trái (Hint Card):**
    - Tag lấp lánh `✨ Từ gợi ý: CON`.
    - Chữ hiển thị to: `C [ ? ] N` (ô vuông bo tròn có dấu hỏi chấm màu tím nhạt).
    - Dòng chữ nhắc nhở: *"Hãy hái bông hoa có chữ cái đúng nhé!"*.
  - **Vùng tương tác bên phải (Garden & Basket Area):**
    - Chiếc giỏ mây vàng pastel: `BÔNG HOA CHỮ CÁI` (Vùng nhận diện drop target).
    - 3 bông hoa biểu cảm cười toe toét đáng yêu:
      + Bông hoa hồng: Chữ `O`
      + Bông hoa tím: Chữ `Ô`
      + Bông hoa xanh mint: Chữ `Ơ`
    - Nút/Banner khích lệ: *"Giỏi lắm! Kéo bông hoa vào giỏ nhé!"*.

#### 2.3. Ảnh 3: Mini-Game 3 - "BÉ TÀI BA / NGHIÊNG ĐẦU TINH MẮT" (Chọn Đáp Án 2 Chiều)
* **Ý tưởng cốt lõi:** Dạng câu hỏi lựa chọn nhị phân (A/B - Trái/Phải). Trẻ có thể chơi bằng cách:
  - Bấm nút Trái (←) / Phải (→) trên màn hình cảm ứng hoặc chuột.
  - Dùng bàn phím máy tính (phím mũi tên `ArrowLeft` / `ArrowRight`).
  - (Mở rộng tùy chọn) Nhận diện cử chỉ nghiêng đầu qua Camera (Head Tilt Detection bằng webcam).
* **Thành phần giao diện:**
  - **Header:** Điểm tích lũy ⭐ [ Số điểm ], Nút loa phát lại câu hỏi 🔊, Thanh đo năng lượng / thời gian / câu hỏi dạng kẹo dẻo pastel.
  - **Khung câu hỏi lớn:**
    - Nhãn chỉ số câu: `CÂU 01/30`.
    - Câu hỏi to rõ: `Chữ nào là chữ O?` (hoặc `Từ nào chứa chữ Ô?`).
    - Hướng dẫn phụ: *"Nghiêng đầu hoặc bấm mũi tên để chọn"*.
  - **Khung avatar trạng thái trung tâm:**
    - Hình em bé hoạt hình với vòng tròn trạng thái xanh lá: `ĐÃ SẴN SÀNG`.
    - Chú thích: *"Giữ đầu thẳng để chờ câu hỏi"*.
  - **2 Cánh cửa lựa chọn:**
    - Bên trái (Hồng pastel): `← BÊN TRÁI` - Chữ cái to `O`.
    - Bên phải (Xanh bạc hà): `BÊN PHẢI →` - Chữ cái to `Ô` kèm gợi ý con `^ chữ O + dấu mũ`.
  - **Cụm điều khiển phụ dưới đáy:** 2 nút điều hướng mũi tên tròn lớn màu hồng và xanh cho bé ấn nhanh trên điện thoại.

---

### 3. KIẾN TRÚC KỸ THUẬT & HỆ THỐNG ÂM THANH

#### 3.1. Hệ thống Âm thanh Tiếng Việt Chuẩn (Vietnamese TTS Engine)
1. **Google Translate TTS Endpoint (`tl=vi`):**
   - URL mẫu: `https://translate.google.com/translate_tts?ie=UTF-8&tl=vi&client=tw-ob&q={encoded_text}`
   - Được bao bọc qua Audio Service trong React:
     - Tự động encode URI component tiếng Việt chuẩn có dấu.
     - Cơ chế Audio Pool / Cache: Lưu lại các audio object đã tải vào RAM để lần sau bấm phát tức thì, không tốn băng thông.
2. **Kịch bản đọc phát âm:**
   - **Bắt đầu câu hỏi:** Đọc tự động đề bài (VD: *"Kéo chữ cái còn thiếu vào ô trống: Con bò"*, *"Chữ nào là chữ O?"*).
   - **Khi chạm / click vào chữ cái:** Đọc tên chữ cái đó (VD: bé chạm vào chữ O -> phát *"chữ O"*, chạm Ô -> phát *"chữ Ô"*, chạm Ơ -> phát *"chữ Ơ"*).
   - **Khi trả lời đúng:** 
     - Phát chuông Chime + câu khích lệ tiếng Việt: *"Đúng rồi! Bé giỏi quá!"*, *"Chính xác!"*, *"Tuyệt vời!"*.
     - Đọc lại toàn bộ từ vựng đã hoàn chỉnh (VD: *"Con bò"*).
   - **Khi trả lời sai:** 
     - Phát âm thanh Boing hoạt hình.
     - Đọc nhẹ nhàng nhắc nhở: *"Chưa đúng rồi, bé thử lại nhé!"*, *"Bé hãy nhìn kỹ hơn nhé!"*.
3. **Cơ chế Fallback:**
   - Nếu thiết bị offline hoàn toàn hoặc bị chặn CORS từ Google TTS, hệ thống tự động fallback về `window.speechSynthesis` với `lang: 'vi-VN'`.

#### 3.2. Hiệu ứng Âm thanh Sinh Động (Web Audio API Synthesizer)
Tất cả âm thanh micro-interaction được tổng hợp bằng code Web Audio API (`AudioContext`), đảm bảo 100% hoạt động offline, độ trễ 0ms:
- **Pop bong bóng (`playPopSound`):**
  - Sine wave với tần số biến thiên nhanh từ 600Hz lên 1200Hz trong 0.08 giây, decay exponential.
  - Kích hoạt khi: Chạm vào bông hoa, bắt đầu nhấc chữ cái, ấn nút chuyển câu.
- **Chime chuông leng keng (`playChimeSuccess`):**
  - Hợp âm 3 nốt thánh thót (C6 - E6 - G6 - C7 tương ứng 1046Hz, 1318Hz, 1567Hz, 2093Hz) với triangle wave và decay chậm có độ ngân vang.
  - Kích hoạt khi: Hoàn thành câu hỏi đúng, nhận được sao.
- **Boing lò xo hoạt hình (`playBoingWrong`):**
  - Dạng sóng Sawtooth/Sine kết hợp bộ điều biến dao động tần số (Pitch bend trượt từ 320Hz xuống 120Hz rồi nảy lên 180Hz) tạo cảm giác vui nhộn, không gây áp lực sợ hãi cho trẻ nhỏ.
  - Kích hoạt khi: Kéo nhầm ô, chọn đáp án sai.
- **Fanfare chiến thắng (`playCelebrationSound`):**
  - Giai điệu ngắn chúc mừng khi hoàn thành đủ 30 câu hỏi của mini-game kèm hiệu ứng pháo hoa giấy confetti.

---

### 4. THIẾT KẾ CƠ SỞ DỮ LIỆU FRONT-END (90 CÂU HỎI O - Ô - Ơ)
Toàn bộ dữ liệu được lưu dưới dạng file JSON/JS module tĩnh tại `src/data/`. Mỗi game sở hữu đúng **30 câu hỏi** chuyên biệt.

#### 4.1. Cấu trúc dữ liệu tổng quát
```javascript
// Cấu trúc Question Type Game 1 (Vương Quốc Chữ Cái)
{
  id: 1,
  type: 'fill_in_blank',
  letterTarget: 'O', // O, Ô, hoặc Ơ
  wordFull: 'CON BÒ',
  wordDisplayPrefix: 'C',
  wordDisplaySuffix: 'N BÒ',
  missingIndex: 1,
  options: ['O', 'Ô', 'Ơ'],
  correctAnswer: 'O',
  icon: '🐄',
  speechPrompt: 'Kéo chữ cái còn thiếu vào ô trống. Con bò.',
  speechFull: 'Con bò'
}

// Cấu trúc Question Type Game 2 (Bé Hái Hoa)
{
  id: 1,
  type: 'flower_basket',
  targetWord: 'CON',
  wordWithBlank: 'C ? N',
  correctLetter: 'O',
  options: [
    { letter: 'O', color: '#ff7eb3' },
    { letter: 'Ô', color: '#8e78ff' },
    { letter: 'Ơ', color: '#38ef7d' }
  ],
  speechHint: 'Từ gợi ý: Con. Hãy hái bông hoa có chữ cái đúng nhé!'
}

// Cấu trúc Question Type Game 3 (Nghiêng Đầu / 2 Chiều Trái Phải)
{
  id: 1,
  type: 'left_right_choice',
  questionTitle: 'Chữ nào là chữ O?',
  subHint: 'Nghiêng đầu hoặc bấm nút để chọn',
  leftOption: { letter: 'O', label: 'BÊN TRÁI', hint: 'chữ tròn như quả trứng' },
  rightOption: { letter: 'Ô', label: 'BÊN PHẢI', hint: 'chữ O có đội mũ' },
  correctSide: 'left', // 'left' hoặc 'right'
  speechQuestion: 'Chữ nào là chữ O?'
}
```

#### 4.2. Danh sách 30 câu hỏi Game 1: Vương quốc chữ cái (Điền chữ vào ô trống)
1. **CON BÒ** -> `C [O] N BÒ` (Con bò)
2. **CÁ RÔ** -> `CÁ R [Ô]` (Cá rô)
3. **LÁ CỜ** -> `LÁ C [Ơ]` (Lá cờ)
4. **CÁ VOI** -> `CÁ V [O] I` (Cá voi)
5. **CÁI Ô** -> `CÁI [Ô]` (Cái ô)
6. **QUẢ BƠ** -> `QUẢ B [Ơ]` (Quả bơ)
7. **CON GÀ TRỐNG** -> `GÀ TR [Ố] NG` (Gà trống)
8. **QUẢ NHO** -> `QUẢ NH [O]` (Quả nho)
9. **CÂY NƠ** -> `CÁI N [Ơ]` (Cái nơ)
10. **TỔ CHIM** -> `T [Ổ] CHIM` (Tổ chim)
11. **HOA HỒNG** -> `HOA H [Ồ] NG` (Hoa hồng)
12. **CHỢ QUÊ** -> `CH [Ợ] QUÊ` (Chợ quê)
13. **CON THỎ** -> `CON TH [Ỏ]` (Con thỏ)
14. **CỦ CÀ RỐT** -> `CÀ R [Ố] T` (Cà rốt)
15. **DÒNG SÔNG** -> `S [Ô] NG` (Sông)
16. **THƯỚC ĐO** -> `THƯỚC Đ [O]` (Thước đo)
17. **CON HỔ** -> `CON H [Ổ]` (Con hổ)
18. **BỜ HỒ** -> `B [Ờ] HỒ` (Bờ hồ)
19. **ĐÔI GIÀY** -> `Đ [Ô] I GIÀY` (Đôi giày)
20. **LỌ HOA** -> `L [Ọ] HOA` (Lọ hoa)
21. **CƠM SƯỜN** -> `C [Ơ] M` (Cơm)
22. **QUẢ TÁO** -> `QUẢ TÁ [O]` (Quả táo)
23. **CÁI CỐC** -> `CÁI C [Ố] C` (Cái cốc)
24. **CÁI NỒI** -> `CÁI N [Ồ] I` (Cái nồi)
25. **TRÁI MƠ** -> `TRÁI M [Ơ]` (Trái mơ)
26. **ÁO MƯA** -> `[Á] O MƯA` (Áo mưa)
27. **TÔ CƠM** -> `T [Ô] CƠM` (Tô cơm)
28. **VỞ VẼ** -> `V [Ở] VẼ` (Vở vẽ)
29. **CHÙM BÓNG** -> `B [Ó] NG` (Bóng bay)
30. **ĐỒ CHƠI** -> `ĐỒ CH [Ơ] I` (Đồ chơi)

#### 4.3. Danh sách 30 câu hỏi Game 2: Bé hái hoa (Kéo hoa vào giỏ)
1. Từ **CON**: `C ? N` -> Hái hoa `O`
2. Từ **CÔ**: `C ?` -> Hái hoa `Ô`
3. Từ **BƠ**: `B ?` -> Hái hoa `Ơ`
4. Từ **CHÒ**: `CH ?` -> Hái hoa `O`
5. Từ **GỖ**: `G ?` -> Hái hoa `Ô`
6. Từ **CỜ**: `C ?` -> Hái hoa `Ơ`
7. Từ **VOI**: `V ? I` -> Hái hoa `O`
8. Từ **HỔ**: `H ?` -> Hái hoa `Ô`
9. Từ **MƠ**: `M ?` -> Hái hoa `Ơ`
10. Từ **BÓNG**: `B ? NG` -> Hái hoa `O`
11. Từ **TỔ**: `T ?` -> Hái hoa `Ô`
12. Từ **NƠ**: `N ?` -> Hái hoa `Ơ`
13. Từ **NHO**: `NH ?` -> Hái hoa `O`
14. Từ **RỔ**: `R ?` -> Hái hoa `Ô`
15. Từ **SỢ**: `S ?` -> Hái hoa `Ơ`
16. Từ **THỎ**: `TH ?` -> Hái hoa `O`
17. Từ **CỘT**: `C ? T` -> Hái hoa `Ô`
18. Từ **LỢN**: `L ? N` -> Hái hoa `Ơ`
19. Từ **LỌ**: `L ?` -> Hái hoa `O`
20. Từ **HỒ**: `H ?` -> Hái hoa `Ô`
21. Từ **CHỢ**: `CH ?` -> Hái hoa `Ơ`
22. Từ **KHO**: `KH ?` -> Hái hoa `O`
23. Từ **SỐ**: `S ?` -> Hái hoa `Ô`
24. Từ **CỞI**: `C ? I` -> Hái hoa `Ơ`
25. Từ **CHÓ**: `CH ?` -> Hái hoa `O`
26. Từ **RỐT**: `R ? T` -> Hái hoa `Ô`
27. Từ **MỞ**: `M ?` -> Hái hoa `Ơ`
28. Từ **ĐÒ**: `Đ ?` -> Hái hoa `O`
29. Từ **CỐC**: `C ? C` -> Hái hoa `Ô`
30. Từ **TƠ**: `T ?` -> Hái hoa `Ơ`

#### 4.4. Danh sách 30 câu hỏi Game 3: Bé tài ba (Chọn Trái - Phải)
1. "Chữ nào là chữ **O**?" -> Trái: `O` | Phải: `Ô` -> Chọn **Trái**
2. "Chữ nào là chữ **Ô**?" -> Trái: `O` | Phải: `Ô` -> Chọn **Phải**
3. "Chữ nào có râu là chữ **Ơ**?" -> Trái: `Ơ` | Phải: `O` -> Chọn **Trái**
4. "Chữ nào có mũ là chữ **Ô**?" -> Trái: `Ơ` | Phải: `Ô` -> Chọn **Phải**
5. "Hình quả trứng tròn xoe là chữ **O**?" -> Trái: `O` | Phải: `Ơ` -> Chọn **Trái**
6. "Từ nào chứa chữ **O**?" -> Trái: `CON BÒ` | Phải: `CÁ RÔ` -> Chọn **Trái**
7. "Từ nào chứa chữ **Ô**?" -> Trái: `LÁ CỜ` | Phải: `CÁI Ô` -> Chọn **Phải**
8. "Từ nào chứa chữ **Ơ**?" -> Trái: `QUẢ BƠ` | Phải: `QUẢ NHO` -> Chọn **Trái**
9. "Chữ **O** nằm ở bên nào?" -> Trái: `Ô` | Phải: `O` -> Chọn **Phải**
10. "Chữ **Ơ** nằm ở bên nào?" -> Trái: `Ơ` | Phải: `Ô` -> Chọn **Trái**
11. "Chữ nào đội nón xinh là chữ **Ô**?" -> Trái: `O` | Phải: `Ô` -> Chọn **Phải**
12. "Chữ nào có móc râu bên phải là chữ **Ơ**?" -> Trái: `Ơ` | Phải: `O` -> Chọn **Trái**
13. "Chữ **Ô** viết hoa là chữ nào?" -> Trái: `Ô` | Phải: `O` -> Chọn **Trái**
14. "Chữ **Ơ** viết thường là chữ nào?" -> Trái: `o` | Phải: `ơ` -> Chọn **Phải**
15. "Chữ nào trong từ 'CON VOI'?" -> Trái: `O` | Phải: `Ơ` -> Chọn **Trái**
16. "Chữ nào trong từ 'CÔ GIÁO'?" -> Trái: `O` | Phải: `Ô` -> Chọn **Phải**
17. "Chữ nào trong từ 'LÁ CỜ'?" -> Trái: `Ơ` | Phải: `O` -> Chọn **Trái**
18. "Chữ nào trong từ 'CON HỔ'?" -> Trái: `Ơ` | Phải: `Ô` -> Chọn **Phải**
19. "Chữ nào tròn như trăng rằm?" -> Trái: `O` | Phải: `Ô` -> Chọn **Trái**
20. "Chữ **Ơ** thêm dấu hỏi là chữ ở bên nào?" -> Trái: `Ở` | Phải: `Ổ` -> Chọn **Trái**
21. "Chữ **Ô** thêm dấu ngã là chữ ở bên nào?" -> Trái: `Õ` | Phải: `Ỗ` -> Chọn **Phải**
22. "Chữ nào trong từ 'CHÙM NHO'?" -> Trái: `O` | Phải: `Ô` -> Chọn **Trái**
23. "Chữ nào trong từ 'CÁI NƠ'?" -> Trái: `O` | Phải: `Ơ` -> Chọn **Phải**
24. "Chữ nào trong từ 'BÔNG HOA'?" -> Trái: `Ô` | Phải: `Ơ` -> Chọn **Trái**
25. "Chữ nào trong từ 'ĐỒNG HỒ'?" -> Trái: `O` | Phải: `Ô` -> Chọn **Phải**
26. "Chữ **O** viết thường là chữ nào?" -> Trái: `o` | Phải: `ô` -> Chọn **Trái**
27. "Chữ **Ô** viết thường là chữ nào?" -> Trái: `ơ` | Phải: `ô` -> Chọn **Phải**
28. "Chữ nào trong từ 'CƠM TRẮNG'?" -> Trái: `Ơ` | Phải: `O` -> Chọn **Trái**
29. "Chữ nào trong từ 'BÓNG BAY'?" -> Trái: `O` | Phải: `Ơ` -> Chọn **Trái**
30. "Chữ nào trong từ 'CỐC SỮA'?" -> Trái: `Ơ` | Phải: `Ô` -> Chọn **Phải**

---

### 5. HỆ THỐNG LƯU TRỮ VÀ TÍNH ĐIỂM (LOCAL STORAGE ARCHITECTURE)

#### 5.1. Dữ liệu lưu trữ LocalStorage Key: `MAM_NON_GAME_STATE`
```json
{
  "currentUser": "Bé Ngoan",
  "totalStars": 45,
  "highScores": {
    "game1_kingdom": 28,
    "game2_flower": 30,
    "game3_clever": 25
  },
  "progress": {
    "game1_kingdom": { "currentQuestion": 1, "completed": false, "stars": 28 },
    "game2_flower": { "currentQuestion": 1, "completed": true, "stars": 30 },
    "game3_clever": { "currentQuestion": 1, "completed": false, "stars": 25 }
  },
  "soundSettings": {
    "ttsEnabled": true,
    "sfxEnabled": true,
    "volume": 1.0
  }
}
```

#### 5.2. Quy tắc chấm điểm và hiệu ứng khen thưởng
- Mỗi câu đúng ngay lần đầu: **+1 Ngôi sao vàng** ⭐ + Âm thanh Chime leng keng + Pháo hoa nhỏ.
- Nếu chọn sai: Rung nhẹ thẻ (shake animation), âm Boing ngộ nghĩnh, trừ cơ hội sao hoàn hảo câu đó nhưng cho phép trẻ thử lại đến khi đúng.
- Khi hoàn thành 30/30 câu: Màn hình Vinh Quang (Victory Modal) với cúp vàng, bắn pháo hoa confetti toàn màn hình, phát âm thanh chúc mừng: *"Hoan hô bé đã hoàn thành xuất sắc thử thách!"*.

---

### 6. THIẾT KẾ GIAO DIỆN & TRẢI NGHIỆM NGƯỜI DÙNG (UI/UX DESIGN SYSTEM)

#### 6.1. Bảng màu Pastel Mầm Non (Color Palette)
- **Primary Pink:** `#FF758C` / `#FF7EB3` (Màu hồng đào ngọt ngào)
- **Primary Purple:** `#8E78FF` / `#A18CD1` (Màu tím hoa oải hương mộng mơ)
- **Primary Green:** `#38EF7D` / `#48CAE4` (Màu xanh mint lá cây non tươi mát)
- **Sun Yellow:** `#FDCB6E` / `#FFEAA7` (Màu vàng mặt trời, ngôi sao)
- **Background Sky:** Linear gradient `#E0F2FE` sang `#FDF2F8` (Màu trời mây kẹo ngọt)
- **Card Background:** Trắng ngọc trai mềm với bóng mờ mềm mại (`box-shadow: 0 12px 30px rgba(0,0,0,0.06)`).

#### 6.2. Typography & Nút bấm
- **Font chữ:** `Comfortaa`, `Baloo 2` hoặc `Nunito` (Font tròn trịa, không chân, thân thiện tối đa với trẻ em tập đọc).
- **Kích thước nút bấm:** Tối thiểu 64px x 64px trên Mobile để bàn tay nhỏ của bé chạm cực kỳ dễ dàng, không bị bấm nhầm.
- **Phản hồi xúc giác/hoạt họa:** Nút bấm có hiệu ứng phồng xẹp 3D nảy (bouncy spring animation) khi click/chạm.

#### 6.3. Khả năng tương thích Responsive
- **Mobile (Dưới 640px):** Bố cục 1 cột dọc thông minh, các thẻ chữ cái co giãn to vừa ngón tay cái, menu điều hướng nổi cố định dưới chân.
- **Tablet / iPad (768px - 1024px):** Bố cục tối ưu theo chiều ngang/dọc như ảnh thiết kế mẫu Canva, rổ hoa và khung từ vựng nằm cân xứng 2 bên.
- **Desktop (Trên 1024px):** Khung ứng dụng đặt trong canvas tỉ lệ vàng 16:9 hoặc bo cong chuẩn mực, có phím tắt bàn phím (Mũi tên ← / →, phím 1, 2, 3).

---

### 7. CẤU TRÚC THƯ MỤC DỰ ÁN DỰ KIẾN (VITE + REACT)
```
game_tieng_viet/
├── index.html
├── package.json
├── vite.config.js
├── public/
│   ├── favicon.ico
│   └── images/              # Ảnh minh họa con bò, cá voi, cái ô...
├── src/
│   ├── main.jsx
│   ├── App.jsx
│   ├── index.css            # Toàn bộ design token, pastel theme, keyframe animations
│   ├── data/
│   │   ├── game1KingdomQuestions.js   # 30 câu hỏi Game 1
│   │   ├── game2FlowerQuestions.js    # 30 câu hỏi Game 2
│   │   └── game3CleverQuestions.js    # 30 câu hỏi Game 3
│   ├── services/
│   │   ├── audioService.js            # Quản lý Google TTS + fallback SpeechSynthesis
│   │   ├── sfxService.js              # Web Audio API tổng hợp Pop, Chime, Boing, Fanfare
│   │   └── storageService.js          # Quản lý LocalStorage tiến trình & điểm số
│   ├── components/
│   │   ├── Navbar.jsx                 # Thanh chuyển đổi giữa 3 Game, điểm sao, nút bật/tắt loa
│   │   ├── ProgressBar.jsx            # Tiến trình 01/30 câu hỏi dạng sao
│   │   ├── VictoryModal.jsx           # Màn hình vinh quang cúp vàng + confetti
│   │   └── HeadTiltDetector.jsx       # Component nhận diện camera (tùy chọn)
│   └── games/
│       ├── GameKingdom.jsx            # Game 1: Vương quốc chữ cái (Điền từ)
│       ├── GameFlowerBasket.jsx       # Game 2: Bé hái hoa vào giỏ
│       └── GameCleverChoice.jsx       # Game 3: Nghiêng đầu / Chọn Trái - Phải
└── SPECIFICATION.md                   # File tài liệu đặc tả này
```

---

### 8. KẾ HOẠCH TRIỂN KHAI VÀ NGHIỆM THU
1. **Giai đoạn 1:** Khởi tạo dự án Vite React, cài đặt font chữ trẻ em, cấu hình Design System Vanilla CSS rực rỡ, bo tròn, hoạt ảnh sinh động.
2. **Giai đoạn 2:** Xây dựng 2 module âm thanh cốt lõi: `audioService.js` (Google TTS tiếng Việt) và `sfxService.js` (Web Audio API: Pop, Chime, Boing).
3. **Giai đoạn 3:** Tạo cơ sở dữ liệu hoàn chỉnh 90 câu hỏi (30 câu x 3 game) cho các chữ O, Ô, Ơ.
4. **Giai đoạn 4:** Lập trình chi tiết 3 Mini-Games theo đúng thiết kế của 3 bức ảnh.
5. **Giai đoạn 5:** Tích hợp LocalStorage, màn hình chúc mừng cúp vàng, kiểm thử responsive trên Mobile, iPad và máy tính.
