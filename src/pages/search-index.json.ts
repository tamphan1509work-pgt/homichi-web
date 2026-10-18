import type { APIRoute } from 'astro';
import { categories } from '../data/products';
import { posts, services, caseStudies, newsCategories } from '../data/content';

// Chỉ mục tìm kiếm tĩnh (GĐ2) — client-side, không cần backend.
export const GET: APIRoute = () => {
  const items = [
    ...categories.map((c) => ({ t: c.name, d: c.short, u: `/san-pham/${c.slug}/`, k: 'Ngành hàng' })),
    ...categories.flatMap((c) => c.models.map((m) => ({ t: `${m.code} · ${m.name}`, d: m.summary, u: `/san-pham/${c.slug}/${m.slug}/`, k: 'Sản phẩm' }))),
    ...services.map((s) => ({ t: s.name, d: s.short, u: `/dich-vu/${s.slug}/`, k: 'Dịch vụ' })),
    ...posts.map((p) => ({ t: p.title, d: p.excerpt, u: `/tin-tuc/${p.slug}/`, k: newsCategories.find((c) => c.slug === p.category)?.name ?? 'Tin tức' })),
    ...caseStudies.map((c) => ({ t: c.title, d: c.problem, u: `/du-an-doi-tac/${c.slug}/`, k: 'Case study' })),
    { t: 'Nhà máy & dây chuyền', d: '62.000 m², 24 dây chuyền lắp ráp, SMT, ép nhựa, kim loại tấm.', u: '/ve-homichi/nang-luc/nha-may/', k: 'Năng lực' },
    { t: 'R&D & thiết kế', d: '85 kỹ sư, thiết kế công nghiệp, cơ khí, điện tử, khuôn mẫu.', u: '/ve-homichi/nang-luc/rd-thiet-ke/', k: 'Năng lực' },
    { t: 'Kiểm soát chất lượng (QC/QA)', d: 'IQC, IPQC, FQC, OQC, phòng thử nghiệm, tỉ lệ lỗi.', u: '/ve-homichi/nang-luc/kiem-soat-chat-luong/', k: 'Năng lực' },
    { t: 'Chứng nhận & tiêu chuẩn', d: 'ISO 9001, ISO 14001, ISO 45001, CE, CB, RoHS, BSCI.', u: '/ve-homichi/nang-luc/chung-nhan/', k: 'Năng lực' },
    { t: 'MOQ, thời gian & điều kiện hợp tác', d: 'MOQ, lead time, thanh toán, bảo hành, phí khuôn.', u: '/dich-vu/dieu-kien-hop-tac/', k: 'Dịch vụ' },
    { t: 'Câu hỏi thường gặp', d: 'Giải đáp về MOQ, ODM/OEM, chứng nhận, thanh toán.', u: '/dich-vu/cau-hoi-thuong-gap/', k: 'Hỗ trợ' },
    { t: 'Quy trình hợp tác', d: '7 bước từ tư vấn đến giao hàng.', u: '/dich-vu/quy-trinh-hop-tac/', k: 'Dịch vụ' },
    { t: 'Tải hồ sơ năng lực', d: 'Company profile PDF.', u: '/ho-so-nang-luc/', k: 'Tài liệu' },
    { t: 'Tải catalogue', d: 'Catalogue sản phẩm 2026.', u: '/san-pham/catalogue/', k: 'Tài liệu' },
  ];
  return new Response(JSON.stringify(items), { headers: { 'Content-Type': 'application/json; charset=utf-8' } });
};
