# Homichi — Website thương hiệu ODM/OEM

Website giới thiệu thương hiệu **Homichi** — nhà sản xuất ODM/OEM thiết bị điện gia dụng. Giao diện được xây dựng theo `DESIGN.md` (phong cách "living organism under laboratory glass": canvas Snow White, Forest Depths, tiêu đề trọng lượng mảnh 300–350, nút pill, không shadow/gradient) và sơ đồ `Homichi_Sitemap.md`.

Mục tiêu chuyển đổi: **Yêu cầu báo giá (RFQ)** và **Tải hồ sơ năng lực**.

## Công nghệ

- [Astro 5](https://astro.build) — xuất site tĩnh (HTML/CSS/JS thuần), không phụ thuộc runtime phía server.
- CSS thuần với design tokens (`src/styles/global.css`), font Inter + JetBrains Mono (substitute cho Seed Sans / Seed Sans Mono theo DESIGN.md).
- Không framework UI phía client; tương tác viết bằng TypeScript nhẹ (`src/scripts/main.ts`).

## Chạy dự án

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # xuất ra dist/
npm run preview   # xem bản build
```

`dist/` có thể deploy lên bất kỳ static hosting nào (Vercel, Netlify, Cloudflare Pages, GitHub Pages, S3…).

## Cấu trúc

```
src/
  data/          # Nội dung (tương đương collection CMS)
    site.ts      # Thông tin công ty, menu, con số năng lực, endpoint form
    products.ts  # Ngành hàng & mẫu sản phẩm
    content.ts   # Dịch vụ, quy trình, FAQ, chứng nhận, đối tác, case study, tin tức, timeline
  components/    # Header (mega menu), Footer, PageHero, CTA, Frame/Art (minh hoạ line-art), card…
  layouts/Base.astro   # SEO, Open Graph, JSON-LD Organization, cookie banner
  scripts/main.ts      # Reveal, count-up, drawer, consent, validate & gửi form
  pages/         # Mỗi file = 1 URL
public/files/    # PDF hồ sơ năng lực & catalogue (bản placeholder)
```

## Bản đồ trang (đã hiện thực)

| Nhóm | URL |
|---|---|
| Trang chủ | `/` · `/en/` |
| Về Homichi | `/ve-homichi/` · `hanh-trinh-phat-trien/` · `doi-ngu-lanh-dao/` · `he-sinh-thai/` · `van-hoa-con-nguoi/` · `esg/` · `quy-trinh/` |
| Năng lực | `/ve-homichi/nang-luc/` · `nha-may/` · `rd-thiet-ke/` · `kiem-soat-chat-luong/` · `chung-nhan/` · `chuoi-cung-ung/` · `tham-quan-nha-may/` |
| Dịch vụ ODM/OEM | `/dich-vu/` · `odm/` · `oem/` · `private-label/` · `quy-trinh-hop-tac/` · `dieu-kien-hop-tac/` · `cau-hoi-thuong-gap/` |
| Sản phẩm | `/san-pham/` · `/san-pham/[nganh-hang]/` · `/san-pham/[nganh-hang]/[mau]/` · `catalogue/` · `nganh-hang-mo-rong/` |
| Dự án & Đối tác | `/du-an-doi-tac/` · `/du-an-doi-tac/[case-study]/` · `thi-truong-xuat-khau/` |
| Tin tức | `/tin-tuc/` · `/tin-tuc/chuyen-muc/[chuyen-muc]/` · `/tin-tuc/[bai-viet]/` |
| Liên hệ & Báo giá | `/lien-he/` · `/bao-gia/` (RFQ 3 bước) · `/ho-so-nang-luc/` · `/dat-lich-tham-quan/` · `/cam-on/` |
| Chính sách | `/chinh-sach-bao-mat/` · `/dieu-khoan-su-dung/` · `/cookie/` (+ banner consent) |
| Tiện ích | `/tim-kiem/` · `404` · `sitemap.xml` · `robots.txt` |

## Điểm nổi bật UX

- **RFQ nhiều bước** (Dự án → Quy mô → Liên hệ) có kiểm tra dữ liệu từng bước, kéo-thả tệp đính kèm, honeypot chống spam.
- **Trang mẫu sản phẩm** có bộ chọn tuỳ biến (màu, thương hiệu, tính năng) — lựa chọn được đính kèm tự động vào RFQ (`/bao-gia/?model=…&category=…&note=…`).
- CTA "Yêu cầu báo giá" luôn hiện trên header sticky và cuối mọi trang.
- Hồ sơ năng lực tải sau khi để lại thông tin (thu lead), chuyển tới trang cảm ơn để đo chuyển đổi (`/cam-on/?type=rfq|contact|profile|visit`).
- SEO: meta/OG, canonical, `hreflang`, JSON-LD (Organization, BreadcrumbList, FAQPage, Product, Article), sitemap tự sinh.
- Accessibility: skip link, focus ring rõ ràng, mega menu dùng được bằng bàn phím (Esc để đóng), tôn trọng `prefers-reduced-motion`.

## Cần Homichi cung cấp / xác nhận trước khi go-live

1. **Số liệu & thông tin công ty** trong `src/data/*.ts` hiện là dữ liệu mẫu (con số năng lực, địa chỉ, hotline, MST, chứng nhận, khách hàng, case study, tin tức).
2. **Ảnh/video thật** của nhà máy & sản phẩm — các khung minh hoạ line-art (`<Frame art="…">`) là placeholder có chủ đích, thay bằng `<img>` khi có tư liệu.
3. **Endpoint nhận lead**: điền `formEndpoint` trong `src/data/site.ts` (CRM, Formspree, Google Apps Script…). Khi để trống, form chạy ở chế độ demo (chuyển thẳng tới trang cảm ơn, không gửi dữ liệu).
4. **PDF hồ sơ năng lực & catalogue** chính thức thay vào `public/files/`.
5. **Trang Hệ sinh thái**: chốt danh sách thương hiệu thành viên được công khai (theo khảo sát: không đưa Chillami).
6. **Đội ngũ lãnh đạo** (GĐ2): chỉ bật khi lãnh đạo đồng ý công khai hình ảnh/thông tin.
7. **Tiếng Anh**: hiện có trang chủ `/en/`; các trang con cần dịch nội dung để mở rộng.
8. **Logo khách hàng**: kiểm tra NDA trước khi công khai.
9. Đổi `site` trong `astro.config.mjs` và `public/robots.txt` sang domain chính thức.
