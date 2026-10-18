// Thông tin doanh nghiệp & cấu trúc điều hướng.
// LƯU Ý: các con số, địa chỉ, hotline là dữ liệu mẫu — cần Homichi xác nhận trước khi go-live.

export const site = {
  name: 'Homichi',
  legalName: 'Công ty Cổ phần Homichi Việt Nam',
  tagline: 'Nhà sản xuất ODM/OEM thiết bị điện gia dụng',
  description:
    'Homichi là nhà sản xuất ODM/OEM thiết bị điện gia dụng tại Việt Nam — từ R&D, khuôn mẫu đến sản xuất hàng loạt đạt chuẩn quốc tế cho các thương hiệu trong và ngoài nước.',
  hotline: '1900 6868',
  hotlineHref: 'tel:19006868',
  phone: '+84 28 3888 6868',
  email: 'sales@homichi.vn',
  address: 'Lô C2, KCN Tân Phú Trung, Huyện Củ Chi, TP. Hồ Chí Minh, Việt Nam',
  office: 'Tầng 12, Toà nhà Homichi, 68 Nguyễn Huệ, Quận 1, TP. Hồ Chí Minh',
  workingHours: 'Thứ 2 – Thứ 7 · 8:00 – 17:30 (GMT+7)',
  mapEmbed:
    'https://www.openstreetmap.org/export/embed.html?bbox=106.50%2C10.93%2C106.60%2C11.01&layer=mapnik',
  social: [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/' },
    { label: 'Facebook', href: 'https://www.facebook.com/' },
    { label: 'YouTube', href: 'https://www.youtube.com/' },
  ],
  // Endpoint nhận lead (CRM / Formspree / Google Apps Script…). Để trống = chế độ demo (chuyển thẳng sang trang cảm ơn).
  formEndpoint: '',
  files: {
    profile: '/files/homichi-company-profile.pdf',
    catalogue: '/files/homichi-catalogue-2026.pdf',
  },
};

export type NavChild = { label: string; href: string; desc?: string; phase?: 1 | 2 | 3 };
export type NavGroup = { title?: string; items: NavChild[] };
export type NavItem = { label: string; href: string; groups?: NavGroup[]; feature?: { title: string; text: string; href: string; cta: string } };

export const mainNav: NavItem[] = [
  {
    label: 'Về Homichi',
    href: '/ve-homichi/',
    groups: [
      {
        title: 'Doanh nghiệp',
        items: [
          { label: 'Giới thiệu Homichi', href: '/ve-homichi/', desc: 'Câu chuyện, tầm nhìn & giá trị cốt lõi' },
          { label: 'Hành trình phát triển', href: '/ve-homichi/hanh-trinh-phat-trien/', desc: 'Các cột mốc từ 2009' },
          { label: 'Đội ngũ lãnh đạo', href: '/ve-homichi/doi-ngu-lanh-dao/' },
          { label: 'Hệ sinh thái thương hiệu', href: '/ve-homichi/he-sinh-thai/' },
          { label: 'Văn hoá & con người', href: '/ve-homichi/van-hoa-con-nguoi/' },
          { label: 'Trách nhiệm xã hội & ESG', href: '/ve-homichi/esg/' },
          { label: 'Quy trình vận hành', href: '/ve-homichi/quy-trinh/' },
        ],
      },
      {
        title: 'Năng lực',
        items: [
          { label: 'Tổng quan năng lực', href: '/ve-homichi/nang-luc/', desc: 'Con số & hạ tầng sản xuất' },
          { label: 'Nhà máy & dây chuyền', href: '/ve-homichi/nang-luc/nha-may/' },
          { label: 'R&D & thiết kế', href: '/ve-homichi/nang-luc/rd-thiet-ke/' },
          { label: 'Kiểm soát chất lượng', href: '/ve-homichi/nang-luc/kiem-soat-chat-luong/' },
          { label: 'Chứng nhận & tiêu chuẩn', href: '/ve-homichi/nang-luc/chung-nhan/' },
          { label: 'Chuỗi cung ứng & logistics', href: '/ve-homichi/nang-luc/chuoi-cung-ung/' },
          { label: 'Tham quan nhà máy 360°', href: '/ve-homichi/nang-luc/tham-quan-nha-may/' },
        ],
      },
    ],
    feature: { title: 'Hồ sơ năng lực 2026', text: 'Tổng hợp nhà máy, R&D, chứng nhận và khách hàng tiêu biểu trong một tài liệu PDF.', href: '/ho-so-nang-luc/', cta: 'Tải hồ sơ' },
  },
  {
    label: 'Dịch vụ ODM/OEM',
    href: '/dich-vu/',
    groups: [
      {
        title: 'Mô hình hợp tác',
        items: [
          { label: 'ODM — Thiết kế & sản xuất trọn gói', href: '/dich-vu/odm/', desc: 'Từ ý tưởng đến thành phẩm' },
          { label: 'OEM — Sản xuất theo thiết kế', href: '/dich-vu/oem/', desc: 'Theo bản vẽ, thông số của bạn' },
          { label: 'Private label / White label', href: '/dich-vu/private-label/', desc: 'Gắn thương hiệu lên mẫu sẵn có' },
        ],
      },
      {
        title: 'Hợp tác',
        items: [
          { label: 'Quy trình hợp tác', href: '/dich-vu/quy-trinh-hop-tac/' },
          { label: 'MOQ, thời gian & điều kiện', href: '/dich-vu/dieu-kien-hop-tac/' },
          { label: 'Câu hỏi thường gặp', href: '/dich-vu/cau-hoi-thuong-gap/' },
        ],
      },
    ],
    feature: { title: 'Không chắc nên chọn ODM hay OEM?', text: 'So sánh 3 mô hình theo chi phí, thời gian ra thị trường và quyền sở hữu thiết kế.', href: '/dich-vu/#so-sanh', cta: 'Xem so sánh' },
  },
  { label: 'Năng lực', href: '/ve-homichi/nang-luc/' },
  {
    label: 'Sản phẩm',
    href: '/san-pham/',
    // nhóm ngành hàng được build động trong Header từ products.ts
  },
  {
    label: 'Dự án & Đối tác',
    href: '/du-an-doi-tac/',
    groups: [
      {
        items: [
          { label: 'Đối tác & khách hàng', href: '/du-an-doi-tac/' },
          { label: 'Case study', href: '/du-an-doi-tac/#case-study' },
          { label: 'Thị trường xuất khẩu', href: '/du-an-doi-tac/thi-truong-xuat-khau/' },
        ],
      },
    ],
  },
  { label: 'Tin tức', href: '/tin-tuc/' },
];

export const footerNav = [
  {
    title: 'Về Homichi',
    items: [
      { label: 'Giới thiệu', href: '/ve-homichi/' },
      { label: 'Hành trình phát triển', href: '/ve-homichi/hanh-trinh-phat-trien/' },
      { label: 'Văn hoá & con người', href: '/ve-homichi/van-hoa-con-nguoi/' },
      { label: 'Trách nhiệm xã hội & ESG', href: '/ve-homichi/esg/' },
      { label: 'Năng lực sản xuất', href: '/ve-homichi/nang-luc/' },
      { label: 'Chứng nhận', href: '/ve-homichi/nang-luc/chung-nhan/' },
    ],
  },
  {
    title: 'Dịch vụ',
    items: [
      { label: 'ODM trọn gói', href: '/dich-vu/odm/' },
      { label: 'OEM theo thiết kế', href: '/dich-vu/oem/' },
      { label: 'Private label', href: '/dich-vu/private-label/' },
      { label: 'Quy trình hợp tác', href: '/dich-vu/quy-trinh-hop-tac/' },
      { label: 'Câu hỏi thường gặp', href: '/dich-vu/cau-hoi-thuong-gap/' },
    ],
  },
  {
    title: 'Tài nguyên',
    items: [
      { label: 'Danh mục sản phẩm', href: '/san-pham/' },
      { label: 'Tải catalogue', href: '/san-pham/catalogue/' },
      { label: 'Tải hồ sơ năng lực', href: '/ho-so-nang-luc/' },
      { label: 'Tin tức & sự kiện', href: '/tin-tuc/' },
      { label: 'Đặt lịch tham quan', href: '/dat-lich-tham-quan/' },
    ],
  },
];

export const legalNav = [
  { label: 'Bảo mật thông tin', href: '/chinh-sach-bao-mat/' },
  { label: 'Điều khoản sử dụng', href: '/dieu-khoan-su-dung/' },
  { label: 'Cookie', href: '/cookie/' },
];

// Con số năng lực dùng chung (trang chủ, hub năng lực, hồ sơ)
export const keyStats = [
  { value: 17, suffix: '', label: 'năm kinh nghiệm sản xuất thiết bị điện gia dụng' },
  { value: 62000, suffix: 'm²', label: 'diện tích nhà xưởng tại KCN Tân Phú Trung' },
  { value: 24, suffix: '', label: 'dây chuyền lắp ráp & SMT bán tự động' },
  { value: 3.2, suffix: 'tr', label: 'sản phẩm mỗi năm — công suất thiết kế' },
];
