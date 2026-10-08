// 30 câu hỏi Mini Game 3: Bé tài ba / Nghiêng đầu tinh mắt (Chọn Trái - Phải)
export const game3Questions = [
  {
    id: 1,
    question: 'Chữ nào là chữ O?',
    left: { letter: 'O', label: 'BÊN TRÁI', hint: 'chữ O tròn như quả trứng' },
    right: { letter: 'Ô', label: 'BÊN PHẢI', hint: '^ chữ O + dấu mũ' },
    correctSide: 'left'
  },
  {
    id: 2,
    question: 'Chữ nào là chữ Ô?',
    left: { letter: 'O', label: 'BÊN TRÁI', hint: 'chữ tròn xoe' },
    right: { letter: 'Ô', label: 'BÊN PHẢI', hint: 'chữ có đội nón' },
    correctSide: 'right'
  },
  {
    id: 3,
    question: 'Chữ nào có râu là chữ Ơ?',
    left: { letter: 'Ơ', label: 'BÊN TRÁI', hint: 'chữ có móc râu nhỏ' },
    right: { letter: 'O', label: 'BÊN PHẢI', hint: 'chữ không có râu' },
    correctSide: 'left'
  },
  {
    id: 4,
    question: 'Chữ nào có mũ là chữ Ô?',
    left: { letter: 'Ơ', label: 'BÊN TRÁI', hint: 'chữ có râu' },
    right: { letter: 'Ô', label: 'BÊN PHẢI', hint: 'chữ có mũ nhọn' },
    correctSide: 'right'
  },
  {
    id: 5,
    question: 'Hình quả trứng tròn xoe là chữ O?',
    left: { letter: 'O', label: 'BÊN TRÁI', hint: 'O tròn như quả trứng gà' },
    right: { letter: 'Ơ', label: 'BÊN PHẢI', hint: 'chữ có cái râu' },
    correctSide: 'left'
  },
  {
    id: 6,
    question: 'Từ nào chứa chữ O?',
    left: { letter: 'CON BÒ', label: 'BÊN TRÁI', hint: 'có 2 chữ O' },
    right: { letter: 'CÁ RÔ', label: 'BÊN PHẢI', hint: 'chứa chữ Ô' },
    correctSide: 'left'
  },
  {
    id: 7,
    question: 'Từ nào chứa chữ Ô?',
    left: { letter: 'LÁ CỜ', label: 'BÊN TRÁI', hint: 'chứa chữ Ơ' },
    right: { letter: 'CÁI Ô', label: 'BÊN PHẢI', hint: 'chứa chữ Ô' },
    correctSide: 'right'
  },
  {
    id: 8,
    question: 'Từ nào chứa chữ Ơ?',
    left: { letter: 'QUẢ BƠ', label: 'BÊN TRÁI', hint: 'chứa chữ Ơ' },
    right: { letter: 'QUẢ NHO', label: 'BÊN PHẢI', hint: 'chứa chữ O' },
    correctSide: 'left'
  },
  {
    id: 9,
    question: 'Chữ O nằm ở bên nào?',
    left: { letter: 'Ô', label: 'BÊN TRÁI', hint: 'đây là chữ Ô' },
    right: { letter: 'O', label: 'BÊN PHẢI', hint: 'đây là chữ O' },
    correctSide: 'right'
  },
  {
    id: 10,
    question: 'Chữ Ơ nằm ở bên nào?',
    left: { letter: 'Ơ', label: 'BÊN TRÁI', hint: 'đây là chữ Ơ' },
    right: { letter: 'Ô', label: 'BÊN PHẢI', hint: 'đây là chữ Ô' },
    correctSide: 'left'
  },
  {
    id: 11,
    question: 'Chữ nào đội nón xinh là chữ Ô?',
    left: { letter: 'O', label: 'BÊN TRÁI', hint: 'chữ tròn không nón' },
    right: { letter: 'Ô', label: 'BÊN PHẢI', hint: 'chữ đội nón xinh' },
    correctSide: 'right'
  },
  {
    id: 12,
    question: 'Chữ nào có móc râu bên phải là chữ Ơ?',
    left: { letter: 'Ơ', label: 'BÊN TRÁI', hint: 'móc râu xinh xắn' },
    right: { letter: 'O', label: 'BÊN PHẢI', hint: 'chữ tròn trịa' },
    correctSide: 'left'
  },
  {
    id: 13,
    question: 'Chữ Ô viết hoa là chữ nào?',
    left: { letter: 'Ô', label: 'BÊN TRÁI', hint: 'chữ Ô in hoa' },
    right: { letter: 'O', label: 'BÊN PHẢI', hint: 'chữ O in hoa' },
    correctSide: 'left'
  },
  {
    id: 14,
    question: 'Chữ Ơ viết thường là chữ nào?',
    left: { letter: 'o', label: 'BÊN TRÁI', hint: 'chữ o viết thường' },
    right: { letter: 'ơ', label: 'BÊN PHẢI', hint: 'chữ ơ viết thường' },
    correctSide: 'right'
  },
  {
    id: 15,
    question: 'Chữ nào trong từ "CON VOI"?',
    left: { letter: 'O', label: 'BÊN TRÁI', hint: 'c-o-n v-o-i' },
    right: { letter: 'Ơ', label: 'BÊN PHẢI', hint: 'không có trong từ' },
    correctSide: 'left'
  },
  {
    id: 16,
    question: 'Chữ nào trong từ "CÔ GIÁO"?',
    left: { letter: 'O', label: 'BÊN TRÁI', hint: 'chữ O' },
    right: { letter: 'Ô', label: 'BÊN PHẢI', hint: 'chữ Ô trong từ CÔ' },
    correctSide: 'right'
  },
  {
    id: 17,
    question: 'Chữ nào trong từ "LÁ CỜ"?',
    left: { letter: 'Ơ', label: 'BÊN TRÁI', hint: 'chữ Ơ trong từ CỜ' },
    right: { letter: 'O', label: 'BÊN PHẢI', hint: 'chữ O' },
    correctSide: 'left'
  },
  {
    id: 18,
    question: 'Chữ nào trong từ "CON HỔ"?',
    left: { letter: 'Ơ', label: 'BÊN TRÁI', hint: 'chữ Ơ' },
    right: { letter: 'Ô', label: 'BÊN PHẢI', hint: 'chữ Ô trong từ HỔ' },
    correctSide: 'right'
  },
  {
    id: 19,
    question: 'Chữ nào tròn như trăng rằm?',
    left: { letter: 'O', label: 'BÊN TRÁI', hint: 'O tròn như trăng rằm' },
    right: { letter: 'Ô', label: 'BÊN PHẢI', hint: 'chữ có chóp nón' },
    correctSide: 'left'
  },
  {
    id: 20,
    question: 'Chữ Ơ thêm dấu hỏi là chữ ở bên nào?',
    left: { letter: 'Ở', label: 'BÊN TRÁI', hint: 'chữ Ở (Ơ + dấu hỏi)' },
    right: { letter: 'Ổ', label: 'BÊN PHẢI', hint: 'chữ Ổ (Ô + dấu hỏi)' },
    correctSide: 'left'
  },
  {
    id: 21,
    question: 'Chữ Ô thêm dấu ngã là chữ ở bên nào?',
    left: { letter: 'Õ', label: 'BÊN TRÁI', hint: 'chữ Õ (O + dấu ngã)' },
    right: { letter: 'Ỗ', label: 'BÊN PHẢI', hint: 'chữ Ỗ (Ô + dấu ngã)' },
    correctSide: 'right'
  },
  {
    id: 22,
    question: 'Chữ nào trong từ "CHÙM NHO"?',
    left: { letter: 'O', label: 'BÊN TRÁI', hint: 'chữ O trong NHO' },
    right: { letter: 'Ô', label: 'BÊN PHẢI', hint: 'chữ Ô' },
    correctSide: 'left'
  },
  {
    id: 23,
    question: 'Chữ nào trong từ "CÁI NƠ"?',
    left: { letter: 'O', label: 'BÊN TRÁI', hint: 'chữ O' },
    right: { letter: 'Ơ', label: 'BÊN PHẢI', hint: 'chữ Ơ trong NƠ' },
    correctSide: 'right'
  },
  {
    id: 24,
    question: 'Chữ nào trong từ "BÔNG HOA"?',
    left: { letter: 'Ô', label: 'BÊN TRÁI', hint: 'chữ Ô trong BÔNG' },
    right: { letter: 'Ơ', label: 'BÊN PHẢI', hint: 'chữ Ơ' },
    correctSide: 'left'
  },
  {
    id: 25,
    question: 'Chữ nào trong từ "ĐỒNG HỒ"?',
    left: { letter: 'O', label: 'BÊN TRÁI', hint: 'chữ O' },
    right: { letter: 'Ô', label: 'BÊN PHẢI', hint: 'chữ Ô trong HỒ' },
    correctSide: 'right'
  },
  {
    id: 26,
    question: 'Chữ O viết thường là chữ nào?',
    left: { letter: 'o', label: 'BÊN TRÁI', hint: 'chữ o nhỏ nhắn' },
    right: { letter: 'ô', label: 'BÊN PHẢI', hint: 'chữ ô có nón' },
    correctSide: 'left'
  },
  {
    id: 27,
    question: 'Chữ Ô viết thường là chữ nào?',
    left: { letter: 'ơ', label: 'BÊN TRÁI', hint: 'chữ ơ có râu' },
    right: { letter: 'ô', label: 'BÊN PHẢI', hint: 'chữ ô có nón' },
    correctSide: 'right'
  },
  {
    id: 28,
    question: 'Chữ nào trong từ "CƠM TRẮNG"?',
    left: { letter: 'Ơ', label: 'BÊN TRÁI', hint: 'chữ Ơ trong CƠM' },
    right: { letter: 'O', label: 'BÊN PHẢI', hint: 'chữ O' },
    correctSide: 'left'
  },
  {
    id: 29,
    question: 'Chữ nào trong từ "BÓNG BAY"?',
    left: { letter: 'O', label: 'BÊN TRÁI', hint: 'chữ O trong BÓNG' },
    right: { letter: 'Ơ', label: 'BÊN PHẢI', hint: 'chữ Ơ' },
    correctSide: 'left'
  },
  {
    id: 30,
    question: 'Chữ nào trong từ "CỐC SỮA"?',
    left: { letter: 'Ơ', label: 'BÊN TRÁI', hint: 'chữ Ơ' },
    right: { letter: 'Ô', label: 'BÊN PHẢI', hint: 'chữ Ô trong CỐC' },
    correctSide: 'right'
  }
];
