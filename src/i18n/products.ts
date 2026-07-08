import type { Lang } from './home';

export interface ProductCategory {
  /** English eyebrow tag shown above the title */
  tag: string;
  title: string;
  body: string;
  /** Standards / certifications mentioned for the category, shown as chips */
  standards?: string[];
  /** Section anchor on the F@ctory Express catalogue page (see data/factory-express.ts) */
  catalogueId: string;
}

export interface ProductsCopy {
  meta: { title: string; description: string };
  header: { eyebrow: string; heading: string; intro: string };
  categories: ProductCategory[];
  /** Label of the per-category link into the F@ctory Express catalogue */
  catalogueLink: string;
  note: string;
  catalogueCta: string;
  contactCta: string;
}

// Category copy carried over from the previous site (oilkey.co.jp/items/).
export const products: Record<Lang, ProductsCopy> = {
  ja: {
    meta: {
      title: '取扱製品 | オイルキー株式会社',
      description:
        '注油機器関連製品、グリース、ペースト、乾燥潤滑剤、オイル、防錆・防食剤、ケミカルまで。潤滑油分野のエキスパート会社として幅広い製品を取りそろえています。',
    },
    header: {
      eyebrow: 'PRODUCTS',
      heading: '取扱製品',
      intro: '潤滑油分野のエキスパート会社としての幅広い品揃えが高く評価されています。',
    },
    categories: [
      {
        tag: 'LUBRICATION EQUIPMENT',
        title: '注油機器関連製品',
        catalogueId: 'related-products',
        body: '高圧グリースガンとグリースニップルなどを製造販売しています。グリースガンは自社ブランド「F@ctory Express」シリーズとして展開。グリースニップルは1個から大量見積りまで即日回答いたします。JIS規格品および海外規格品もあります。',
        standards: ['JIS規格', '海外規格'],
      },
      {
        tag: 'GREASE',
        title: 'グリース',
        catalogueId: 'grease',
        body: '基油（ベースオイル）に増ちょう剤を分散させ、添加剤を加えた半固体状潤滑剤です。固体潤滑剤を添加した製品もあります。食品機械用（NSFカテゴリーH1正規登録済）も各種取りそろえています。オイルでも高粘着性のポリイソブチレン系チェーンオイルはここに含まれます。EU基準に適合した生分解性グリースもご用意しています。その他、MIL規格品・NATO規格品・ドイツ陸軍規格品も扱っています。',
        standards: ['NSF H1', 'MIL規格', 'NATO規格', 'ドイツ陸軍規格', '生分解性（EU基準）'],
      },
      {
        tag: 'PASTE',
        title: 'ペースト',
        catalogueId: 'paste',
        body: '高濃度の固体潤滑剤にオイルと添加剤を加えたペースト状固体潤滑剤です。最も耐熱性・極圧性に優れた潤滑剤です。グリースと比較して、固体潤滑剤の配合比率が高いのが特徴です。ねじの焼付き防止・機械の組立・部品圧入・なじみ運転などに使用されます。高温になる金型・ダイスのボルト用としても最適です。',
        standards: ['MIL規格', 'ドイツ鉄道規格'],
      },
      {
        tag: 'DRY LUBRICANTS',
        title: '乾燥潤滑剤',
        catalogueId: 'dry-lubricants',
        body: '固体潤滑剤・レジン・添加剤からなる乾燥皮膜型固体潤滑剤です。コーティング後に乾燥し潤滑面に強固な皮膜を形成します。粉末状の製品が必要な場合は、粒径別にモリブデンパウダーも取りそろえています。',
      },
      {
        tag: 'OIL',
        title: 'オイル',
        catalogueId: 'oil',
        body: '基油（ベースオイル）に各種添加剤を配合した高機能潤滑油です。基油の種類により、鉱油系・合成油系に分けられます。食品機械用（NSFカテゴリーH1正規登録済）も取りそろえています。',
        standards: ['NSF H1'],
      },
      {
        tag: 'CORROSION PROTECTION',
        title: '防錆・防食剤',
        catalogueId: 'corrosion-protection',
        body: 'エポキシ系・アクリル系の亜鉛・アルミニウム・ステンレス粉末配合品などがあります。海洋構造物・橋梁・道路設備・プラント・タンク・鋼管・沿岸建築物・煙管・エキゾーストパイプ・海上輸送・船舶・マリン用品・金型保管用の防錆・防食剤です。現場で手軽に使用できるスプレー缶入りもそろっています。',
        standards: ['MIL規格', 'TÜV認証'],
      },
      {
        tag: 'CHEMICALS',
        title: 'ケミカル',
        catalogueId: 'chemicals',
        body: '設備保全・生産管理・自動車・二輪車・建設機械・電子産業向けケミカル用品です。',
      },
    ],
    catalogueLink: 'F@ctory Express カタログ →',
    note: '製品詳細は F@ctory Express カタログをご覧ください。品選定のご相談もお気軽にどうぞ。',
    catalogueCta: 'カタログを見る',
    contactCta: 'お問い合わせ',
  },

  en: {
    meta: {
      title: 'Products | Oilkey Corporation',
      description:
        'From lubrication equipment, greases, and pastes to dry lubricants, oils, corrosion protection, and chemicals — a full product range from a specialist in lubrication.',
    },
    header: {
      eyebrow: 'PRODUCTS',
      heading: 'Products',
      intro:
        'Our breadth of product range — built as a specialist in the lubrication field — is one of the things customers value most.',
    },
    categories: [
      {
        tag: 'LUBRICATION EQUIPMENT',
        title: 'Lubrication Equipment',
        catalogueId: 'related-products',
        body: 'We manufacture and sell high-pressure grease guns and grease nipples, with grease guns offered under our own F@ctory Express brand. Grease nipple enquiries — from a single piece to volume quotes — are answered the same day. Both JIS-standard and overseas-standard items are available.',
        standards: ['JIS', 'Overseas standards'],
      },
      {
        tag: 'GREASE',
        title: 'Grease',
        catalogueId: 'grease',
        body: 'Semi-solid lubricants made by dispersing a thickener in a base oil and blending in additives; grades with added solid lubricants are also available. The range includes food-machinery greases (NSF category H1 registered), high-tack polyisobutylene chain oils, and biodegradable greases conforming to EU standards, as well as products to MIL, NATO, and German Army specifications.',
        standards: ['NSF H1', 'MIL', 'NATO', 'German Army spec', 'Biodegradable (EU)'],
      },
      {
        tag: 'PASTE',
        title: 'Paste',
        catalogueId: 'paste',
        body: 'Paste-type solid lubricants combining a high concentration of solid lubricant with oil and additives — the most heat-resistant, extreme-pressure lubricants we offer. Compared with grease, pastes carry a much higher ratio of solid lubricant. They are used to prevent thread seizure and in machine assembly, press-fitting, and running-in, and are ideal for bolts on molds and dies that run hot.',
        standards: ['MIL', 'German Rail spec'],
      },
      {
        tag: 'DRY LUBRICANTS',
        title: 'Dry Lubricants',
        catalogueId: 'dry-lubricants',
        body: 'Dry-film solid lubricants composed of solid lubricant, resin, and additives. Applied as a coating, they dry to form a tough lubricating film on the surface. Where powder is required, molybdenum powders are available by particle size.',
      },
      {
        tag: 'OIL',
        title: 'Oil',
        catalogueId: 'oil',
        body: 'High-performance lubricating oils blending base oil with additive packages, available in mineral and synthetic types. Food-machinery grades (NSF category H1 registered) are also available.',
        standards: ['NSF H1'],
      },
      {
        tag: 'CORROSION PROTECTION',
        title: 'Rust & Corrosion Preventives',
        catalogueId: 'corrosion-protection',
        body: 'Epoxy- and acrylic-based coatings loaded with zinc, aluminum, or stainless steel powder. They protect offshore structures, bridges, road facilities, plants, tanks, steel pipe, coastal buildings, flues and exhaust pipes, marine transport, ships and marine equipment, and molds and dies in storage. Convenient aerosol cans are available for on-site use.',
        standards: ['MIL', 'TÜV certified'],
      },
      {
        tag: 'CHEMICALS',
        title: 'Chemicals',
        catalogueId: 'chemicals',
        body: 'Chemical products for plant maintenance, production management, automotive, motorcycle, construction machinery, and the electronics industry.',
      },
    ],
    catalogueLink: 'View in catalogue →',
    note: 'See the F@ctory Express catalogue for product details — and feel free to ask us for help selecting the right product.',
    catalogueCta: 'View Catalogue',
    contactCta: 'Contact Us',
  },
};
