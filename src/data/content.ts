// Nội dung dùng chung: dịch vụ, quy trình, FAQ, đối tác, case study, tin tức, timeline.
// Tất cả là nội dung mẫu để dựng giao diện — thay bằng dữ liệu thật từ CMS.

export const services = [
  {
    slug: 'odm',
    code: 'ODM',
    name: 'ODM — Thiết kế & sản xuất trọn gói',
    short: 'Homichi lo từ ý tưởng, thiết kế công nghiệp, R&D, khuôn mẫu đến sản xuất hàng loạt.',
    bestFor: 'Thương hiệu muốn ra sản phẩm mới mà chưa có đội R&D',
    time: '4 – 7 tháng',
    ownership: 'Thiết kế độc quyền theo hợp đồng',
    moq: 'Từ 1.000 sp',
    involvement: 'Thấp — bạn duyệt ở các mốc chính',
  },
  {
    slug: 'oem',
    code: 'OEM',
    name: 'OEM — Sản xuất theo thiết kế của khách',
    short: 'Sản xuất chính xác theo bản vẽ, thông số và tiêu chuẩn kỹ thuật do bạn cung cấp.',
    bestFor: 'Doanh nghiệp đã có thiết kế, cần năng lực sản xuất ổn định',
    time: '2 – 4 tháng',
    ownership: '100% thuộc khách hàng',
    moq: 'Từ 500 sp',
    involvement: 'Cao — bạn cung cấp hồ sơ kỹ thuật',
  },
  {
    slug: 'private-label',
    code: 'PL',
    name: 'Private label / White label',
    short: 'Gắn thương hiệu của bạn lên mẫu sản phẩm đã hoàn thiện, sẵn chứng nhận — ra thị trường nhanh nhất.',
    bestFor: 'Nhà bán lẻ, chuỗi siêu thị, thương hiệu TMĐT',
    time: '4 – 8 tuần',
    ownership: 'Thương hiệu thuộc khách · thiết kế thuộc Homichi',
    moq: 'Từ 300 sp',
    involvement: 'Rất thấp — chọn mẫu, màu, bao bì',
  },
];

export const processSteps = [
  { code: '01', title: 'Tư vấn & tiếp nhận yêu cầu', time: '1 – 3 ngày', text: 'Kỹ sư dự án làm việc cùng bạn về thị trường mục tiêu, giá mục tiêu, tiêu chuẩn và sản lượng. Ký NDA nếu cần.' },
  { code: '02', title: 'Đề xuất giải pháp & báo giá', time: '5 – 7 ngày', text: 'Phương án kỹ thuật, BOM sơ bộ, báo giá theo bậc sản lượng và kế hoạch tiến độ.' },
  { code: '03', title: 'Thiết kế & phát triển', time: '4 – 12 tuần', text: 'Thiết kế công nghiệp, cơ khí, điện tử; mô phỏng nhiệt – dòng khí; làm khuôn mẫu.' },
  { code: '04', title: 'Mẫu thử & duyệt mẫu', time: '2 – 4 tuần', text: 'Mẫu T1/T2, thử nghiệm độ bền, an toàn điện. Bạn nhận mẫu thực tế để duyệt (Golden sample).' },
  { code: '05', title: 'Kiểm định & chứng nhận', time: '3 – 6 tuần', text: 'Thử nghiệm tại phòng lab nội bộ và phòng thí nghiệm bên thứ ba (TÜV, Intertek, Quatest 3).' },
  { code: '06', title: 'Sản xuất hàng loạt', time: '30 – 60 ngày', text: 'Chạy thử Pilot run, sau đó sản xuất hàng loạt với kiểm soát IQC – IPQC – OQC.' },
  { code: '07', title: 'Đóng gói & giao hàng', time: 'Theo Incoterms', text: 'Đóng gói theo nhận diện thương hiệu, kiểm hàng trước giao (PSI), giao FOB / CIF / DDP.' },
];

export const faqs = [
  { q: 'MOQ (số lượng đặt hàng tối thiểu) của Homichi là bao nhiêu?', a: 'MOQ phụ thuộc vào ngành hàng và mô hình hợp tác: Private label từ 300 sản phẩm, OEM từ 500 sản phẩm, ODM từ 1.000 sản phẩm cho mỗi mẫu. Với đơn hàng thử nghiệm thị trường, chúng tôi có thể linh hoạt MOQ trong lần đặt đầu tiên.' },
  { q: 'Khác biệt giữa ODM và OEM là gì?', a: 'ODM: Homichi thiết kế và sản xuất trọn gói, bạn sở hữu thương hiệu (và có thể mua độc quyền thiết kế). OEM: bạn cung cấp thiết kế, bản vẽ và thông số; Homichi sản xuất đúng theo đó. Private label là hình thức nhanh nhất: gắn thương hiệu lên mẫu sẵn có.' },
  { q: 'Thời gian từ lúc bắt đầu đến khi có hàng là bao lâu?', a: 'Private label: 4 – 8 tuần. OEM: 2 – 4 tháng (tuỳ khuôn mẫu). ODM sản phẩm mới: 4 – 7 tháng bao gồm thiết kế, mẫu thử, chứng nhận và sản xuất. Đơn tái đặt hàng thường 30 – 45 ngày.' },
  { q: 'Thiết kế và khuôn mẫu thuộc quyền sở hữu của ai?', a: 'Với OEM, toàn bộ thiết kế thuộc về khách hàng. Với ODM, chúng tôi có phương án chuyển giao độc quyền thiết kế và khuôn mẫu theo hợp đồng. Mọi thông tin dự án được bảo mật theo NDA.' },
  { q: 'Homichi có hỗ trợ chứng nhận cho thị trường xuất khẩu không?', a: 'Có. Chúng tôi hỗ trợ hồ sơ và thử nghiệm để đạt CE, CB, RoHS, ERP, SASO, KC… thông qua phòng lab nội bộ và các tổ chức như TÜV Rheinland, Intertek, SGS.' },
  { q: 'Điều khoản thanh toán thông thường như thế nào?', a: 'Thông thường: đặt cọc 30% khi xác nhận đơn hàng, 70% còn lại trước khi giao hàng hoặc theo L/C. Phí khuôn mẫu (nếu có) được thanh toán riêng và có thể hoàn lại theo sản lượng.' },
  { q: 'Tôi có thể tham quan nhà máy trước khi hợp tác không?', a: 'Hoàn toàn có thể. Bạn có thể đặt lịch tham quan trực tiếp tại KCN Tân Phú Trung (Củ Chi, TP. HCM) hoặc tham quan trực tuyến qua video 360° cùng kỹ sư của chúng tôi.' },
  { q: 'Chính sách bảo hành cho sản phẩm OEM/ODM ra sao?', a: 'Chúng tôi cam kết tỉ lệ lỗi theo AQL đã thống nhất và cung cấp 1 – 2% linh kiện dự phòng. Thời hạn bảo hành sản phẩm (12 – 84 tháng tuỳ ngành hàng) do hai bên thoả thuận trong hợp đồng.' },
];

export const certifications = [
  { code: 'ISO 9001:2015', name: 'Hệ thống quản lý chất lượng', org: 'Bureau Veritas', valid: '2027' },
  { code: 'ISO 14001:2015', name: 'Hệ thống quản lý môi trường', org: 'Bureau Veritas', valid: '2027' },
  { code: 'ISO 45001:2018', name: 'An toàn & sức khoẻ nghề nghiệp', org: 'TÜV Rheinland', valid: '2028' },
  { code: 'CE', name: 'Phù hợp tiêu chuẩn Liên minh châu Âu', org: 'TÜV Rheinland', valid: 'Theo sản phẩm' },
  { code: 'CB Scheme', name: 'Chứng nhận an toàn điện IECEE', org: 'Intertek', valid: 'Theo sản phẩm' },
  { code: 'RoHS', name: 'Hạn chế chất độc hại', org: 'SGS', valid: 'Theo sản phẩm' },
  { code: 'TCVN / QCVN', name: 'Hợp quy an toàn điện & EMC Việt Nam', org: 'Quatest 3', valid: 'Theo sản phẩm' },
  { code: 'BSCI', name: 'Đánh giá trách nhiệm xã hội', org: 'amfori', valid: '2026' },
];

export const partners = [
  'NORDHAUS', 'KIMURA', 'Vela Home', 'ALTO', 'Saigon Mart', 'Mekong Retail', 'BLUEHAVEN', 'TERRA', 'Sakura Living', 'Linh An Group',
];

export const markets = [
  { region: 'Việt Nam', share: 58, note: 'Thương hiệu nội địa, chuỗi siêu thị điện máy, dự án BĐS' },
  { region: 'Đông Nam Á', share: 17, note: 'Philippines, Malaysia, Campuchia, Lào' },
  { region: 'Nhật Bản & Hàn Quốc', share: 11, note: 'Thương hiệu private label, kênh TMĐT' },
  { region: 'Trung Đông', share: 8, note: 'UAE, Ả Rập Xê-út (SASO)' },
  { region: 'Châu Âu & Úc', share: 6, note: 'Đức, Ba Lan, Úc (CE, SAA)' },
];

export const caseStudies = [
  {
    slug: 'bldc-fan-nhat-ban',
    client: 'Thương hiệu gia dụng Nhật Bản',
    title: 'Dòng quạt BLDC cho thị trường Nhật — từ bản phác thảo đến kệ hàng trong 5 tháng',
    model: 'ODM',
    category: 'Quạt điện',
    art: 'fan' as const,
    tone: 'stone' as const,
    results: [
      ['5 tháng', 'từ concept đến xuất container đầu tiên'],
      ['0,6%', 'tỉ lệ lỗi sau 12 tháng bán'],
      ['120.000', 'sản phẩm năm đầu'],
    ],
    problem: 'Khách hàng cần một dòng quạt BLDC siêu êm, thiết kế tối giản kiểu Nhật, đạt tiêu chuẩn PSE và giá thành cạnh tranh với nhà máy Trung Quốc.',
    solution: 'Đội R&D Homichi phát triển động cơ BLDC 7 cánh mới, tối ưu biên dạng cánh trên phần mềm CFD, đồng thời thiết kế khuôn nhựa ABS kháng UV. Toàn bộ thử nghiệm PSE được thực hiện song song với giai đoạn làm khuôn.',
    outcome: 'Sản phẩm đạt độ ồn 19 dB ở cấp thấp nhất, tiết kiệm 62% điện năng. Khách hàng đã đặt thêm 2 mẫu mới cho mùa hè kế tiếp.',
  },
  {
    slug: 'hut-mui-du-an-bds',
    client: 'Chủ đầu tư bất động sản tại TP. HCM',
    title: '3.200 bộ bếp từ & hút mùi âm tủ cho dự án căn hộ cao cấp',
    model: 'OEM',
    category: 'Bếp từ · Máy hút mùi',
    art: 'hood' as const,
    tone: 'eucalyptus' as const,
    results: [
      ['3.200', 'bộ thiết bị bếp giao đúng tiến độ'],
      ['36 tháng', 'bảo hành tại công trình'],
      ['−18%', 'chi phí so với thiết bị nhập khẩu'],
    ],
    problem: 'Chủ đầu tư cần bộ thiết bị bếp đồng bộ với thiết kế tủ, giao hàng theo từng block và có đội kỹ thuật bảo hành tại chỗ.',
    solution: 'Homichi sản xuất theo bản vẽ của đơn vị thiết kế nội thất, đóng gói dự án theo mã căn và phối hợp lắp đặt cùng nhà thầu tủ bếp.',
    outcome: 'Hoàn thành bàn giao 4 block trong 5 tháng, tỉ lệ lỗi lắp đặt dưới 0,3%.',
  },
  {
    slug: 'private-label-sieu-thi',
    client: 'Chuỗi bán lẻ điện máy',
    title: 'Ra mắt nhãn hàng riêng 12 SKU chỉ trong 8 tuần',
    model: 'Private label',
    category: 'Đa ngành hàng',
    art: 'induction' as const,
    tone: 'dark' as const,
    results: [
      ['12', 'SKU ra mắt cùng lúc'],
      ['8 tuần', 'từ chọn mẫu đến lên kệ'],
      ['+27%', 'biên lợi nhuận so với hàng phân phối'],
    ],
    problem: 'Chuỗi bán lẻ muốn có nhãn hàng riêng để cải thiện biên lợi nhuận nhưng không có đội ngũ phát triển sản phẩm.',
    solution: 'Khách hàng chọn 12 mẫu từ catalogue sẵn có; Homichi thiết kế lại mặt hiển thị, bao bì, HDSD theo nhận diện và lo toàn bộ hồ sơ hợp quy.',
    outcome: 'Nhãn hàng riêng đạt doanh số vượt kế hoạch 140% sau quý đầu tiên.',
  },
];

export const timeline = [
  { year: '2009', title: 'Khởi đầu từ một xưởng 1.500 m²', text: 'Thành lập tại Bình Dương, gia công động cơ quạt và linh kiện nhựa cho các thương hiệu nội địa.' },
  { year: '2012', title: 'Dây chuyền quạt điện đầu tiên', text: 'Ra mắt dây chuyền lắp ráp quạt hoàn chỉnh, sản lượng 200.000 sp/năm.' },
  { year: '2015', title: 'ISO 9001 & đơn hàng xuất khẩu đầu tiên', text: 'Đạt chứng nhận ISO 9001, xuất khẩu lô quạt đầu tiên sang Campuchia và Philippines.' },
  { year: '2018', title: 'Nhà máy Củ Chi đi vào vận hành', text: 'Khánh thành nhà máy 38.000 m² tại KCN Tân Phú Trung, mở rộng sang bếp từ và bình nước nóng.' },
  { year: '2020', title: 'Trung tâm R&D & phòng lab nội bộ', text: 'Đầu tư trung tâm R&D với 40 kỹ sư, phòng thử nghiệm an toàn điện và buồng tiêu âm.' },
  { year: '2022', title: 'Điều hoà Inverter & dây chuyền SMT', text: 'Đưa vào vận hành dây chuyền SMT và dây chuyền lắp ráp điều hoà không khí.' },
  { year: '2024', title: 'Mở rộng giai đoạn 2 — 62.000 m²', text: 'Hoàn thiện xưởng gia công kim loại tấm, lắp đặt điện mặt trời áp mái 2,4 MWp.' },
  { year: '2026', title: 'Đối tác ODM của 60+ thương hiệu', text: 'Phục vụ khách hàng tại 14 quốc gia, công suất 3,2 triệu sản phẩm mỗi năm.' },
];

export const values = [
  { code: '01', title: 'Chính xác', text: 'Mỗi con số, mỗi dung sai đều được đo lường. Chúng tôi tin chất lượng bắt đầu từ sự tỉ mỉ.' },
  { code: '02', title: 'Minh bạch', text: 'Báo giá rõ ràng theo BOM, tiến độ cập nhật hàng tuần, nhà máy luôn mở cửa cho đối tác.' },
  { code: '03', title: 'Đồng hành', text: 'Thành công của Homichi đo bằng thành công của thương hiệu đối tác trên thị trường.' },
  { code: '04', title: 'Bền vững', text: 'Thiết kế tiết kiệm năng lượng, vật liệu tái chế và sản xuất có trách nhiệm.' },
];

export const newsCategories = [
  { slug: 'tin-homichi', name: 'Tin Homichi', desc: 'Hoạt động doanh nghiệp, ký kết và mở rộng nhà máy.' },
  { slug: 'hoi-cho-trien-lam', name: 'Hội chợ & triển lãm', desc: 'Lịch tham gia triển lãm, gặp gỡ đối tác quốc tế.' },
  { slug: 'kien-thuc-odm-oem', name: 'Kiến thức ODM/OEM', desc: 'Hướng dẫn chọn nhà máy, quy trình phát triển sản phẩm.' },
];

export interface Post {
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  date: string;
  read: string;
  art: 'fan' | 'aircon' | 'induction' | 'hood' | 'heater' | 'factory' | 'lab' | 'globe';
  tone: 'stone' | 'sage' | 'eucalyptus' | 'olive' | 'dark' | 'frost';
  body: string; // HTML từ CMS
}

export const posts: Post[] = [
  {
    slug: 'homichi-khanh-thanh-mo-rong-giai-doan-2',
    category: 'tin-homichi',
    title: 'Homichi khánh thành mở rộng nhà máy giai đoạn 2, nâng công suất lên 3,2 triệu sản phẩm/năm',
    excerpt: 'Giai đoạn 2 bổ sung 24.000 m² nhà xưởng, xưởng gia công kim loại tấm và hệ thống điện mặt trời áp mái 2,4 MWp.',
    date: '2026-09-12',
    read: '4 phút',
    art: 'factory',
    tone: 'dark',
    body: `<p>Ngày 12/09/2026, Homichi chính thức khánh thành giai đoạn 2 của nhà máy tại KCN Tân Phú Trung, nâng tổng diện tích nhà xưởng lên 62.000 m² và công suất thiết kế lên 3,2 triệu sản phẩm mỗi năm.</p>
<h2>Đầu tư vào tự động hoá</h2>
<p>Giai đoạn mở rộng tập trung vào tự động hoá: robot gắp sản phẩm ở cuối dây chuyền, hệ thống AGV vận chuyển linh kiện và phần mềm MES theo dõi sản xuất theo thời gian thực.</p>
<blockquote>“Chúng tôi không mở rộng để làm nhiều hơn, mà để làm tốt hơn — mỗi sản phẩm đều có thể truy xuất đến từng linh kiện.”</blockquote>
<h2>Năng lượng sạch</h2>
<p>Hệ thống điện mặt trời áp mái 2,4 MWp đáp ứng khoảng 35% nhu cầu điện năng của nhà máy, giúp giảm hơn 2.000 tấn CO₂ mỗi năm.</p>
<ul><li>24.000 m² nhà xưởng mới</li><li>8 dây chuyền lắp ráp bổ sung</li><li>Xưởng gia công kim loại tấm cắt laser fiber</li></ul>`,
  },
  {
    slug: 'homichi-tai-canton-fair-140',
    category: 'hoi-cho-trien-lam',
    title: 'Gặp Homichi tại Canton Fair kỳ 140 — gian hàng 15.2 J18',
    excerpt: 'Ra mắt dòng quạt tuần hoàn BLDC và bếp từ kết hợp hồng ngoại cho thị trường xuất khẩu.',
    date: '2026-10-02',
    read: '2 phút',
    art: 'globe',
    tone: 'sage',
    body: `<p>Homichi tham gia Hội chợ Canton Fair kỳ 140 (Quảng Châu) từ 15 – 19/10/2026 tại khu Thiết bị gia dụng, gian hàng 15.2 J18.</p>
<h2>Sản phẩm trưng bày</h2>
<ul><li>Quạt tuần hoàn BLDC HM-AC10</li><li>Bếp từ – hồng ngoại kết hợp HM-IX90</li><li>Hút mùi âm tủ HM-HB70 cho dự án</li></ul>
<p>Quý đối tác vui lòng đặt lịch hẹn trước để gặp trực tiếp đội ngũ kỹ sư dự án của chúng tôi.</p>`,
  },
  {
    slug: 'odm-va-oem-khac-nhau-the-nao',
    category: 'kien-thuc-odm-oem',
    title: 'ODM và OEM khác nhau thế nào? Chọn mô hình nào cho thương hiệu gia dụng?',
    excerpt: 'So sánh hai mô hình theo chi phí, thời gian ra thị trường, quyền sở hữu trí tuệ và mức độ kiểm soát.',
    date: '2026-08-20',
    read: '7 phút',
    art: 'lab',
    tone: 'stone',
    body: `<p>Khi phát triển sản phẩm điện gia dụng mang thương hiệu riêng, câu hỏi đầu tiên thường là: nên hợp tác theo mô hình <strong>ODM</strong> hay <strong>OEM</strong>?</p>
<h2>OEM — bạn có thiết kế, nhà máy sản xuất</h2>
<p>Original Equipment Manufacturing: bạn cung cấp bản vẽ, thông số kỹ thuật, BOM; nhà máy sản xuất đúng theo đó. Phù hợp khi bạn đã có đội R&D và muốn kiểm soát hoàn toàn sản phẩm.</p>
<h2>ODM — nhà máy thiết kế và sản xuất</h2>
<p>Original Design Manufacturing: nhà máy đảm nhận cả thiết kế. Bạn tiết kiệm chi phí R&D và rút ngắn thời gian ra thị trường.</p>
<h2>Bảng so sánh nhanh</h2>
<table><thead><tr><th>Tiêu chí</th><th>OEM</th><th>ODM</th></tr></thead><tbody>
<tr><td>Thiết kế</td><td>Khách hàng</td><td>Nhà máy</td></tr>
<tr><td>Thời gian</td><td>2 – 4 tháng</td><td>4 – 7 tháng</td></tr>
<tr><td>Chi phí ban đầu</td><td>Khuôn mẫu</td><td>R&D + khuôn mẫu</td></tr>
<tr><td>Sở hữu thiết kế</td><td>100% khách hàng</td><td>Theo hợp đồng</td></tr>
</tbody></table>
<h2>Lời khuyên</h2>
<p>Nếu bạn mới bắt đầu, hãy cân nhắc Private label để thử nghiệm thị trường, sau đó chuyển sang ODM cho sản phẩm chủ lực.</p>`,
  },
  {
    slug: '5-tieu-chi-chon-nha-may-odm',
    category: 'kien-thuc-odm-oem',
    title: '5 tiêu chí đánh giá một nhà máy ODM thiết bị điện gia dụng',
    excerpt: 'Từ hệ thống chất lượng, phòng lab nội bộ đến khả năng chứng nhận xuất khẩu — checklist cho bộ phận mua hàng.',
    date: '2026-07-08',
    read: '6 phút',
    art: 'factory',
    tone: 'eucalyptus',
    body: `<p>Chọn đúng nhà máy là quyết định quan trọng nhất trong vòng đời sản phẩm. Dưới đây là 5 tiêu chí bộ phận mua hàng nên kiểm tra khi audit nhà cung cấp.</p>
<ol><li><strong>Hệ thống quản lý chất lượng</strong> — ISO 9001, quy trình IQC/IPQC/OQC, tiêu chuẩn AQL.</li><li><strong>Năng lực R&D</strong> — số kỹ sư, phần mềm thiết kế, khả năng làm khuôn.</li><li><strong>Phòng thử nghiệm</strong> — an toàn điện, độ bền, EMC.</li><li><strong>Chứng nhận xuất khẩu</strong> — kinh nghiệm CE, CB, SASO…</li><li><strong>Tài chính & minh bạch</strong> — báo giá theo BOM, sẵn sàng cho audit.</li></ol>`,
  },
  {
    slug: 'homichi-ky-ket-doi-tac-nhat-ban',
    category: 'tin-homichi',
    title: 'Homichi ký kết hợp tác chiến lược R&D bo mạch Inverter với đối tác Nhật Bản',
    excerpt: 'Thỏa thuận 5 năm tập trung phát triển bo điều khiển Inverter cho điều hoà và động cơ BLDC.',
    date: '2026-05-16',
    read: '3 phút',
    art: 'aircon',
    tone: 'olive',
    body: `<p>Homichi và một tập đoàn linh kiện điện tử Nhật Bản đã ký kết thoả thuận hợp tác chiến lược 5 năm về nghiên cứu, phát triển bo mạch điều khiển Inverter.</p><p>Hợp tác giúp Homichi làm chủ công nghệ lõi cho dòng điều hoà và quạt BLDC, rút ngắn thời gian phát triển sản phẩm mới xuống còn 4 tháng.</p>`,
  },
];

export const findPost = (slug: string) => posts.find((p) => p.slug === slug);
export const categoryName = (slug: string) => newsCategories.find((c) => c.slug === slug)?.name ?? '';

export const formatDate = (iso: string) => {
  const [y, m, d] = iso.split('-');
  return `${d}.${m}.${y}`;
};
