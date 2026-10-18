// Ngành hàng & mẫu sản phẩm tiêu biểu. Không bán lẻ, không giá — mọi CTA dẫn về RFQ.
// Cấu trúc này tương ứng với một collection CMS (mỗi ngành hàng 1 URL, mỗi mẫu 1 URL).

export type ArtKey = 'fan' | 'aircon' | 'induction' | 'hood' | 'heater' | 'purifier';
export type Tone = 'stone' | 'sage' | 'eucalyptus' | 'olive' | 'dark' | 'frost';

export interface Model {
  slug: string;
  code: string;
  name: string;
  summary: string;
  badge?: string;
  specs: [string, string][];
  highlights: string[];
  customization: { label: string; options: string[] }[];
  moq: string;
  leadTime: string;
}

export interface Category {
  slug: string;
  code: string;
  name: string;
  nameEn: string;
  short: string;
  intro: string;
  art: ArtKey;
  tone: Tone;
  capacity: string;
  lines: string;
  certifications: string[];
  capabilities: { title: string; text: string }[];
  models: Model[];
}

export const categories: Category[] = [
  {
    slug: 'quat-dien',
    code: 'FN',
    name: 'Quạt điện',
    nameEn: 'Electric fans',
    short: 'Quạt đứng, quạt tháp, quạt tuần hoàn không khí với động cơ BLDC tiết kiệm điện.',
    intro:
      'Ngành hàng lâu năm nhất của Homichi. Chúng tôi làm chủ toàn bộ chuỗi — từ cánh quạt cân bằng động, động cơ AC/BLDC đến bo mạch điều khiển và ứng dụng IoT.',
    art: 'fan',
    tone: 'stone',
    capacity: '1.200.000 sp/năm',
    lines: '6 dây chuyền lắp ráp · 1 dây chuyền quấn động cơ',
    certifications: ['TCVN 7826', 'IEC 60335-2-80', 'CE', 'RoHS'],
    capabilities: [
      { title: 'Động cơ BLDC tự phát triển', text: '12 cấp tốc độ, giảm tới 65% điện năng so với động cơ AC truyền thống.' },
      { title: 'Cân bằng động cánh quạt', text: 'Kiểm 100% trên máy cân bằng, độ rung < 0,8 mm/s.' },
      { title: 'Tích hợp IoT', text: 'Module Wi-Fi/BLE tương thích Tuya, Google Home, ứng dụng riêng của thương hiệu.' },
    ],
    models: [
      {
        slug: 'hm-fs16-bldc',
        code: 'HM-FS16',
        name: 'Quạt đứng BLDC 16"',
        summary: 'Quạt đứng động cơ một chiều, vận hành êm 22 dB, điều khiển cảm ứng và remote.',
        badge: 'Bán chạy',
        specs: [
          ['Công suất', '28 W'],
          ['Động cơ', 'BLDC 24 V DC'],
          ['Sải cánh', '400 mm · 7 cánh'],
          ['Tốc độ', '12 cấp'],
          ['Độ ồn', '≤ 22 dB(A) ở cấp 1'],
          ['Hẹn giờ', '1 – 12 giờ'],
          ['Kích thước', '420 × 380 × 1.120 mm'],
        ],
        highlights: ['Tiết kiệm tới 65% điện năng', 'Đảo chiều 3D 90° × 120°', 'Chế độ gió tự nhiên & ngủ'],
        customization: [
          { label: 'Màu thân', options: ['Trắng ngà', 'Xám tro', 'Xanh rêu', 'Theo Pantone'] },
          { label: 'Thương hiệu', options: ['In lụa logo', 'Khắc laser', 'Hộp màu theo nhận diện'] },
          { label: 'Tính năng', options: ['Wi-Fi/Tuya', 'Cảm biến nhiệt độ', 'Pin sạc dự phòng'] },
        ],
        moq: '1.000 sp/màu',
        leadTime: '35 – 45 ngày',
      },
      {
        slug: 'hm-tw42-tower',
        code: 'HM-TW42',
        name: 'Quạt tháp 42"',
        summary: 'Thiết kế tối giản cho không gian nhỏ, luồng gió dàn trải, ion lọc không khí.',
        specs: [
          ['Công suất', '45 W'],
          ['Động cơ', 'AC / tuỳ chọn BLDC'],
          ['Chiều cao', '1.070 mm'],
          ['Tốc độ', '3 cấp · 3 chế độ'],
          ['Độ ồn', '≤ 38 dB(A)'],
          ['Tính năng', 'Ion âm, hẹn giờ 8 giờ'],
        ],
        highlights: ['Chân đế chống lật', 'Màn hình LED ẩn', 'Lưới lọc tháo rửa'],
        customization: [
          { label: 'Màu thân', options: ['Trắng', 'Đen nhám', 'Theo Pantone'] },
          { label: 'Thương hiệu', options: ['In lụa logo', 'Hộp màu'] },
          { label: 'Tính năng', options: ['Động cơ BLDC', 'Wi-Fi', 'Phun sương'] },
        ],
        moq: '1.000 sp',
        leadTime: '40 – 50 ngày',
      },
      {
        slug: 'hm-ac10-circulator',
        code: 'HM-AC10',
        name: 'Quạt tuần hoàn 10"',
        summary: 'Quạt tuần hoàn không khí xoắn ốc, đẩy gió xa 20 m, kết hợp với điều hoà để làm mát nhanh.',
        badge: 'Mới',
        specs: [
          ['Công suất', '32 W'],
          ['Động cơ', 'BLDC'],
          ['Tầm gió', '20 m'],
          ['Đảo chiều', 'Ngang 90° · dọc 105°'],
          ['Độ ồn', '≤ 26 dB(A)'],
        ],
        highlights: ['Luồng gió xoắn ốc', 'Gấp gọn', 'Điều khiển bằng giọng nói'],
        customization: [
          { label: 'Màu thân', options: ['Trắng ngà', 'Xanh eucalyptus', 'Theo Pantone'] },
          { label: 'Thương hiệu', options: ['Logo nổi khuôn', 'In lụa', 'Hộp màu'] },
        ],
        moq: '800 sp',
        leadTime: '35 – 45 ngày',
      },
    ],
  },
  {
    slug: 'dieu-hoa',
    code: 'AC',
    name: 'Điều hoà không khí',
    nameEn: 'Air conditioners',
    short: 'Điều hoà treo tường Inverter 9.000 – 24.000 BTU và điều hoà di động.',
    intro:
      'Dây chuyền lắp ráp dàn lạnh, dàn nóng với hệ thống hút chân không, nạp gas tự động và buồng thử tải nhiệt độ — đảm bảo hiệu suất năng lượng ổn định theo TCVN 7830.',
    art: 'aircon',
    tone: 'sage',
    capacity: '320.000 bộ/năm',
    lines: '3 dây chuyền dàn lạnh · 2 dây chuyền dàn nóng',
    certifications: ['TCVN 7830', 'Nhãn năng lượng 5 sao', 'CB', 'CE'],
    capabilities: [
      { title: 'Buồng thử enthalpy', text: 'Đo năng suất lạnh và CSPF theo TCVN 7830:2021 tại chỗ.' },
      { title: 'Gas R32 / R410A', text: 'Trạm nạp gas định lượng tự động, kiểm rò bằng helium.' },
      { title: 'Bo Inverter', text: 'Hợp tác R&D bo điều khiển với đối tác Nhật Bản, tối ưu cho khí hậu nhiệt đới.' },
    ],
    models: [
      {
        slug: 'hm-ws12-inverter',
        code: 'HM-WS12',
        name: 'Điều hoà treo tường Inverter 12.000 BTU',
        summary: 'Inverter 1 chiều, gas R32, CSPF 6,1 — đạt nhãn năng lượng 5 sao.',
        badge: 'Bán chạy',
        specs: [
          ['Năng suất lạnh', '12.000 BTU/h'],
          ['Môi chất', 'R32'],
          ['CSPF', '6,1 W/W'],
          ['Độ ồn dàn lạnh', '≤ 24 dB(A)'],
          ['Dàn trao đổi', 'Ống đồng · lá tản Blue Fin'],
          ['Nguồn', '220 – 240 V / 50 Hz'],
        ],
        highlights: ['Nhãn năng lượng 5 sao', 'Tự làm sạch dàn lạnh', 'Chế độ ngủ thông minh'],
        customization: [
          { label: 'Mặt nạ', options: ['Trắng bóng', 'Vân gương', 'Theo thiết kế'] },
          { label: 'Thương hiệu', options: ['Logo mạ chrome', 'In UV', 'Hộp & sách HDSD'] },
          { label: 'Tính năng', options: ['Wi-Fi', 'Ion Plasma', 'Lọc PM2.5'] },
        ],
        moq: '500 bộ',
        leadTime: '50 – 60 ngày',
      },
      {
        slug: 'hm-pt09-portable',
        code: 'HM-PT09',
        name: 'Điều hoà di động 9.000 BTU',
        summary: 'Gọn, không cần lắp đặt — phù hợp căn hộ, văn phòng nhỏ và kênh bán online.',
        specs: [
          ['Năng suất lạnh', '9.000 BTU/h'],
          ['Môi chất', 'R290'],
          ['Chức năng', 'Làm lạnh · hút ẩm · quạt'],
          ['Độ ồn', '≤ 52 dB(A)'],
          ['Khối lượng', '24 kg'],
        ],
        highlights: ['Gas thân thiện R290', 'Bánh xe 360°', 'Tự bay hơi nước ngưng'],
        customization: [
          { label: 'Màu thân', options: ['Trắng', 'Xám', 'Theo Pantone'] },
          { label: 'Thương hiệu', options: ['In lụa logo', 'Hộp màu'] },
        ],
        moq: '300 bộ',
        leadTime: '45 – 55 ngày',
      },
    ],
  },
  {
    slug: 'bep-tu',
    code: 'IH',
    name: 'Bếp từ',
    nameEn: 'Induction cooktops',
    short: 'Bếp từ đơn, đôi, bếp từ – hồng ngoại âm & dương; mặt kính Schott, Eurokera.',
    intro:
      'Từ cuộn dây đồng, bo công suất IGBT đến mặt kính ceramic, Homichi tối ưu cho bếp Việt: công suất cao, chống tràn, bảo vệ quá nhiệt và ổn định khi điện áp dao động.',
    art: 'induction',
    tone: 'dark',
    capacity: '600.000 sp/năm',
    lines: '4 dây chuyền · 1 dây chuyền SMT',
    certifications: ['IEC 60335-2-6', 'EMC', 'CE', 'RoHS'],
    capabilities: [
      { title: 'Bo IGBT nội bộ', text: 'Thiết kế & SMT tại nhà máy, kiểm burn-in 4 giờ với 100% bo mạch.' },
      { title: 'Đa dạng mặt kính', text: 'Kính Schott Ceran, Eurokera, NEG — in họa tiết & cảm ứng theo yêu cầu.' },
      { title: 'Chế độ nấu Việt', text: 'Lẩu, xào, hầm, chiên — thuật toán công suất tối ưu cho món Á.' },
    ],
    models: [
      {
        slug: 'hm-id72-double',
        code: 'HM-ID72',
        name: 'Bếp từ đôi âm 72 cm',
        summary: 'Hai vùng nấu Booster 2.400 W, khoá trẻ em, cảm biến chống tràn.',
        badge: 'Bán chạy',
        specs: [
          ['Tổng công suất', '4.000 W'],
          ['Vùng nấu', '2 × Ø 220 mm'],
          ['Mặt kính', 'Ceramic Schott / Eurokera'],
          ['Điều khiển', 'Cảm ứng trượt Slider'],
          ['Kích thước khoét đá', '680 × 400 mm'],
        ],
        highlights: ['Booster 2.400 W', 'Bảo vệ quá áp 280 V', 'Tự nhận diện nồi'],
        customization: [
          { label: 'Mặt kính', options: ['Đen trơn', 'Vân đá', 'In logo phản quang'] },
          { label: 'Viền', options: ['Không viền', 'Viền inox', 'Vát cạnh'] },
          { label: 'Tính năng', options: ['Liên kết hút mùi', 'Hẹn giờ từng vùng'] },
        ],
        moq: '500 sp',
        leadTime: '40 – 50 ngày',
      },
      {
        slug: 'hm-ih21-single',
        code: 'HM-IH21',
        name: 'Bếp từ đơn dương 2.100 W',
        summary: 'Bếp từ đơn phổ thông, mặt kính chịu lực, phù hợp kênh siêu thị & thương mại điện tử.',
        specs: [
          ['Công suất', '2.100 W'],
          ['Chế độ', '8 chế độ nấu cài sẵn'],
          ['Mặt kính', 'Kính cường lực đen'],
          ['Khối lượng', '2,4 kg'],
        ],
        highlights: ['Giá thành tối ưu', 'Thiết kế mỏng 52 mm', 'Hộp quà tặng'],
        customization: [
          { label: 'Mặt kính', options: ['In họa tiết', 'In logo'] },
          { label: 'Phụ kiện', options: ['Kèm nồi lẩu', 'Kèm vỉ nướng'] },
        ],
        moq: '1.000 sp',
        leadTime: '30 – 40 ngày',
      },
      {
        slug: 'hm-ix90-hybrid',
        code: 'HM-IX90',
        name: 'Bếp từ – hồng ngoại kết hợp',
        summary: 'Một vùng từ, một vùng hồng ngoại — nấu được mọi loại nồi, phù hợp thị trường xuất khẩu.',
        badge: 'Mới',
        specs: [
          ['Tổng công suất', '4.200 W'],
          ['Vùng nấu', 'Từ Ø 220 · Hồng ngoại Ø 200'],
          ['Mặt kính', 'Eurokera'],
          ['Điện áp', '220 – 240 V'],
        ],
        highlights: ['Nấu mọi loại nồi', 'Cảnh báo nhiệt dư', 'Chứng nhận CE'],
        customization: [
          { label: 'Mặt kính', options: ['Đen trơn', 'Viền in họa tiết'] },
          { label: 'Thương hiệu', options: ['In logo', 'Hộp & HDSD đa ngôn ngữ'] },
        ],
        moq: '500 sp',
        leadTime: '45 – 55 ngày',
      },
    ],
  },
  {
    slug: 'may-hut-mui',
    code: 'HD',
    name: 'Máy hút mùi',
    nameEn: 'Range hoods',
    short: 'Hút mùi áp tường, kính cong, âm tủ — lưu lượng 750 – 1.200 m³/h.',
    intro:
      'Gia công kim loại tấm, hàn laser và đánh bóng inox ngay tại nhà máy. Mỗi máy được đo lưu lượng hút và độ ồn trong buồng tiêu âm trước khi xuất xưởng.',
    art: 'hood',
    tone: 'eucalyptus',
    capacity: '250.000 sp/năm',
    lines: '2 dây chuyền · xưởng gia công kim loại tấm',
    certifications: ['IEC 60335-2-31', 'CE', 'RoHS'],
    capabilities: [
      { title: 'Gia công kim loại tấm', text: 'Cắt laser fiber, chấn CNC, hàn laser — kiểm soát dung sai ±0,2 mm.' },
      { title: 'Buồng tiêu âm', text: 'Đo độ ồn và lưu lượng hút cho 100% sản phẩm xuất xưởng.' },
      { title: 'Động cơ đồng', text: 'Động cơ lõi đồng 100%, tuỳ chọn động cơ BLDC tiết kiệm điện.' },
    ],
    models: [
      {
        slug: 'hm-hw90-wall',
        code: 'HM-HW90',
        name: 'Hút mùi áp tường kính cong 90 cm',
        summary: 'Kính cường lực cong, lưu lượng 1.000 m³/h, cảm ứng vẫy tay.',
        specs: [
          ['Lưu lượng hút', '1.000 m³/h'],
          ['Độ ồn', '≤ 52 dB(A)'],
          ['Động cơ', 'Lõi đồng 200 W'],
          ['Lọc', 'Lưới inox 5 lớp'],
          ['Chiếu sáng', 'LED 2 × 2 W'],
        ],
        highlights: ['Cảm ứng vẫy tay', 'Lưới lọc rửa máy rửa bát', 'Van chống trào ngược'],
        customization: [
          { label: 'Vật liệu', options: ['Inox 304', 'Sơn tĩnh điện đen', 'Kính đen'] },
          { label: 'Thương hiệu', options: ['Logo khắc laser', 'Logo kim loại'] },
        ],
        moq: '300 sp',
        leadTime: '40 – 50 ngày',
      },
      {
        slug: 'hm-hb70-builtin',
        code: 'HM-HB70',
        name: 'Hút mùi âm tủ 70 cm',
        summary: 'Âm tủ bếp, mặt kéo trượt, phù hợp căn hộ chung cư và dự án bất động sản.',
        badge: 'Dự án',
        specs: [
          ['Lưu lượng hút', '750 m³/h'],
          ['Độ ồn', '≤ 48 dB(A)'],
          ['Động cơ', 'BLDC 65 W'],
          ['Kích thước', '700 × 280 × 180 mm'],
        ],
        highlights: ['Động cơ BLDC', 'Lắp đặt nhanh cho dự án', 'Bảo hành 36 tháng'],
        customization: [
          { label: 'Mặt kéo', options: ['Inox', 'Kính', 'Theo màu tủ'] },
          { label: 'Đóng gói', options: ['Đóng gói dự án', 'Hộp bán lẻ'] },
        ],
        moq: '200 sp',
        leadTime: '35 – 45 ngày',
      },
    ],
  },
  {
    slug: 'binh-nuoc-nong',
    code: 'WH',
    name: 'Bình nước nóng',
    nameEn: 'Water heaters',
    short: 'Bình nước nóng gián tiếp 15 – 30 L và máy nước nóng trực tiếp có bơm trợ lực.',
    intro:
      'Ruột bình tráng men titanium nung ở 850 °C, thanh magie chống ăn mòn và hệ thống chống giật ELCB. Mỗi bình được thử áp 0,8 MPa trước khi đóng gói.',
    art: 'heater',
    tone: 'olive',
    capacity: '400.000 sp/năm',
    lines: '3 dây chuyền · lò tráng men tự động',
    certifications: ['TCVN 5699-2-21', 'IEC 60335-2-35', 'CB'],
    capabilities: [
      { title: 'Lò tráng men tự động', text: 'Phun men tĩnh điện & nung 850 °C cho lớp men đồng đều, chống ăn mòn.' },
      { title: 'Thử áp 100%', text: 'Thử kín ở 0,8 MPa và thử bền 15.000 chu kỳ trên mẫu đại diện.' },
      { title: 'An toàn điện', text: 'ELCB chống giật, rơ-le nhiệt kép, chống bỏng.' },
    ],
    models: [
      {
        slug: 'hm-wh20-indirect',
        code: 'HM-WH20',
        name: 'Bình nước nóng gián tiếp 20 L',
        summary: 'Bình vuông tráng men titanium, thanh đốt đồng, tiết kiệm điện 30%.',
        badge: 'Bán chạy',
        specs: [
          ['Dung tích', '20 L'],
          ['Công suất', '2.500 W'],
          ['Ruột bình', 'Thép tráng men titanium'],
          ['Áp lực làm việc', '0,8 MPa'],
          ['An toàn', 'ELCB · rơ-le nhiệt kép'],
        ],
        highlights: ['Bảo hành ruột bình 7 năm', 'Lớp cách nhiệt PU 30 mm', 'Đèn báo nhiệt'],
        customization: [
          { label: 'Kiểu dáng', options: ['Vuông', 'Tròn đứng', 'Ngang mỏng'] },
          { label: 'Màu', options: ['Trắng', 'Xám bạc', 'Theo Pantone'] },
          { label: 'Tính năng', options: ['Màn hình số', 'Wi-Fi hẹn giờ'] },
        ],
        moq: '500 sp',
        leadTime: '35 – 45 ngày',
      },
      {
        slug: 'hm-dh45-direct',
        code: 'HM-DH45',
        name: 'Máy nước nóng trực tiếp 4.500 W',
        summary: 'Làm nóng tức thì, có bơm trợ lực, phù hợp nhà phố & khách sạn.',
        specs: [
          ['Công suất', '4.500 W'],
          ['Bơm trợ lực', 'Có'],
          ['Cấp chống nước', 'IPX4'],
          ['An toàn', 'ELCB 15 mA'],
        ],
        highlights: ['Làm nóng trong 3 giây', 'Bộ sen tắm đi kèm', 'Mỏng 85 mm'],
        customization: [
          { label: 'Màu mặt', options: ['Trắng', 'Đen', 'Theo thiết kế'] },
          { label: 'Phụ kiện', options: ['Sen tăng áp', 'Bộ lọc nước'] },
        ],
        moq: '500 sp',
        leadTime: '30 – 40 ngày',
      },
    ],
  },
];

export const findCategory = (slug: string) => categories.find((c) => c.slug === slug);

export const allModels = categories.flatMap((c) => c.models.map((m) => ({ ...m, category: c })));
