import bangChuImg from '@/src/assets/images/bang_chu_ha_anh_phuong_1790160299522.jpg';
import dangTranHaImg from '@/src/assets/images/guardian_dang_tran_ha_v2_1790182956030.jpg';
import lienPhamImg from '@/src/assets/images/guardian_lien_pham_1790160328956.jpg';
import phuongTuImg from '@/src/assets/images/guardian_phuong_tu_1790160342836.jpg';
import nguyetNguyenImg from '@/src/assets/images/guardian_nguyet_nguyen_1790160358617.jpg';
import hoangVanImg from '@/src/assets/images/guardian_hoang_van_1790160371689.jpg';
import avatarSwordswomanImg from '@/src/assets/images/avatar_peerless_swordswoman_1790160385396.jpg';
import avatarSwordsmanImg from '@/src/assets/images/avatar_chivalric_swordsman_1790160398966.jpg';

import { Guardian, PlayerAvatar } from '../types/game';

export const BANG_CHU = {
  name: 'Hà Ánh Phượng',
  title: 'Hồng Y Tông Chủ',
  honorific: 'Hồng Y Tông Chủ Hà Ánh Phượng',
  signatureColor: 'Crimson Red & Midnight Black',
  weapon: 'Thanh Phong Bảo Kiếm',
  image: bangChuImg,
  description: 'Hồng Y Tông Chủ uy chấn thiên hạ, khoác chiến bào xích diễm lộng lẫy, tay cầm Thanh Phong bảo kiếm, ánh mắt uy nghiêm mà nhân hậu. Người sáng lập tông môn và dẫn lối cho vạn hiệp khách chinh phục đỉnh cao Anh ngữ.',
  quotes: [
    'Chào mừng thiếu hiệp bước vào English Wulin! Giang hồ hiểm trở, nhưng chí khí Anh ngữ của Hồng Y Tông Môn ta là bất diệt!',
    'Muốn xưng bá võ lâm Anh ngữ, trước tiên phải luyện vững căn cơ từ vựng!',
    'Ngộ tính không tệ! Một đòn xuất chiêu sắc bén, đã phá giải toàn bộ chướng ngại!',
    'Hồng Y Tông Chủ dặn dò: Hãy kiên trì rèn luyện mỗi ngày, đại nghiệp ắt thành!',
    'Vạn kiếm quy tông, tri thức hội tụ! Hãy tiến lên tầng cao mới của giang hồ!'
  ]
};

export const GUARDIANS: Guardian[] = [
  {
    id: 'guardian-dang-tran-ha',
    name: 'Đặng Trần Hà',
    title: 'Hộ Pháp Huyền Lam - Văn Khúc Tinh Quân',
    specialty: 'Grammar & Logic - Trận Pháp Ngữ Pháp',
    colorName: 'Huyền Lam (Navy / Deep Blue)',
    colorHex: '#1e3a8a',
    image: dangTranHaImg,
    quote: 'Ngữ pháp tựa như kinh mạch của võ học. Kinh mạch thông suốt, chiêu thức mới uy lực.',
    description: 'Võ học tông sư trung niên điềm tĩnh, mái tóc điểm sương đốm bạc toát lên vẻ uyên bác trác tuyệt, khoác lam y thêu bạc, chưởng quản các thử thách cú pháp và logic biện luận uyên thâm.'
  },
  {
    id: 'guardian-lien-pham',
    name: 'Liên Phạm',
    title: 'Hộ Pháp Tử Vân - Thần Tiêu Kiếm Vũ',
    specialty: 'Speaking & Communication - Khẩu Quyết Giao Tiếp',
    colorName: 'Tử Vân (Purple / Lavender)',
    colorHex: '#7c3aed',
    image: lienPhamImg,
    quote: 'Ngữ điệu như tiếng cầm du dương, phát âm chuẩn xác tựa nhát kiếm trúng đích.',
    description: 'Nữ hiệp kiêu sa trong tà áo tím thướt tha, chuyên tâm rèn luyện ngữ điệu, phản xạ giao tiếp và sự tự tin đàm đạo.'
  },
  {
    id: 'guardian-phuong-tu',
    name: 'Phương Tú',
    title: 'Hộ Pháp Bích Ngọc - Thanh Trúc Đan Tâm',
    specialty: 'Vocabulary & Growth - Từ Vựng Vạn Biến',
    colorName: 'Bích Ngọc (Emerald / Jade Green)',
    colorHex: '#059669',
    image: phuongTuImg,
    quote: 'Mỗi từ vựng là một phiến lá trúc. Ngàn phiến lá kết tụ thành rừng trúc bạt ngàn.',
    description: 'Nữ kiếm khách tràn đầy năng lượng thanh xuân trong y phục ngọc bích, phụ trách khai mở Tàng Kinh Các từ vựng phong phú.'
  },
  {
    id: 'guardian-nguyet-nguyen',
    name: 'Nguyệt Nguyễn',
    title: 'Hộ Pháp Nguyệt Ảnh - Bạch Nguyệt Minh Tâm',
    specialty: 'Reading & Comprehension - Độc Thư Phá Giới',
    colorName: 'Nguyệt Bạch (White / Silver / Pale Blue)',
    colorHex: '#0284c7',
    image: nguyetNguyenImg,
    quote: 'Đọc hiểu sâu sắc như ánh trăng rọi thấu màn đêm, nhìn thấu huyền cơ văn bản.',
    description: 'Tiên tử nguyệt cung khoác trường bào lụa trắng bạc tinh khôi, thấu suốt các bài đọc hiểu và cấu trúc văn chương phức tạp.'
  },
  {
    id: 'guardian-hoang-van',
    name: 'Hoàng Vân',
    title: 'Hộ Pháp Kim Diễm - Xích Phượng Cửu Thiên',
    specialty: 'Listening & Rhythm - Thính Âm Định Vị',
    colorName: 'Hoàng Kim (Gold / Amber / Orange)',
    colorHex: '#d97706',
    image: hoangVanImg,
    quote: 'Lắng nghe từng biến chuyển của gió, bắt trọn từng ngữ âm tinh tế của vạn vật.',
    description: 'Nữ kiệt rực rỡ khí phách trong y phục hoàng kim đan hỏa, khơi gợi nội lực nghe hiểu và nhịp điệu tiếng Anh sôi động.'
  }
];

export const PLAYER_AVATARS: PlayerAvatar[] = [
  {
    id: 'avatar-peerless-swordswoman',
    name: 'Hồng Nhan Kiếm Thần',
    gender: 'female',
    title: 'Tuyệt Sắc Kiếm Khách',
    image: avatarSwordswomanImg,
    sect: 'Nga Mi Phái',
    description: 'Mỹ nhân áo đỏ điểm huyền sam, kiếm pháp thanh thoát như hoa tuyết rơi, ý chí kiên định chinh phục giang hồ.'
  },
  {
    id: 'avatar-chivalric-swordsman',
    name: 'Thiếu Niên Hiệp Khách',
    gender: 'male',
    title: 'Ngự Phong Kiếm Hiệp',
    image: avatarSwordsmanImg,
    sect: 'Hoa Sơn Phái',
    description: 'Tuấn lãng tiêu sái, lam sam phiêu dật, kiếm chỉ trời cao quyết một lòng rèn giũa công lực Anh ngữ đỉnh cao.'
  },
  {
    id: 'avatar-bang-chu-disciple',
    name: 'Xích Vũ Chân Truyền',
    gender: 'female',
    title: 'Chân Truyền Đệ Tử Hồng Y Tông Chủ',
    image: bangChuImg,
    sect: 'Hồng Y Tông Môn',
    description: 'Đệ tử chân truyền của Hồng Y Tông Chủ Hà Ánh Phượng, mang phong thái uy nghi, nhiệt huyết bảo vệ chính đạo võ lâm.'
  },
  {
    id: 'avatar-scholar-guardian',
    name: 'Huyền Lam Môn Đồ',
    gender: 'male',
    title: 'Thư Sinh Kiếm Khách',
    image: dangTranHaImg,
    sect: 'Võ Đang Phái',
    description: 'Điềm đạm nho nhã, tâm đắc trận pháp ngữ pháp, lấy trí tuệ và sự kiên trì làm thanh kiếm sắc bén nhất.'
  },
  {
    id: 'avatar-emerald-swordswoman',
    name: 'Bích Diệp Nữ Hiệp',
    gender: 'female',
    title: 'Thanh Phong Thần Nữ',
    image: phuongTuImg,
    sect: 'Tiêu Dao Phái',
    description: 'Thanh tú rạng ngời như đọt trúc non sau mưa, linh hoạt tích lũy vốn từ vựng dồi dào muôn phương.'
  },
  {
    id: 'avatar-moon-heroine',
    name: 'Bạch Nguyệt Tiên Tử',
    gender: 'female',
    title: 'Minh Nguyệt Ẩn Sĩ',
    image: nguyetNguyenImg,
    sect: 'Cổ Mộ Phái',
    description: 'Thanh khiết như sương mai, tĩnh lặng phân tích và phá giải mọi đoạn văn đọc hiểu khúc khuỷu.'
  }
];

export const WUXIA_TITLES = [
  { minLevel: 1, title: 'Tân Thủ Giang Hồ' },
  { minLevel: 5, title: 'Thiếu Hiệp Sơ Xuất' },
  { minLevel: 10, title: 'Phong Vân Kiếm Khách' },
  { minLevel: 15, title: 'Uy Chấn Tứ Hải' },
  { minLevel: 20, title: 'Danh Chấn Võ Lâm' },
  { minLevel: 25, title: 'Võ Học Tông Sư' },
  { minLevel: 30, title: 'Nhất Đại Cao Thủ' }
];

export function getTitleForLevel(level: number): string {
  const match = [...WUXIA_TITLES].reverse().find(t => level >= t.minLevel);
  return match ? match.title : 'Tân Thủ Giang Hồ';
}
