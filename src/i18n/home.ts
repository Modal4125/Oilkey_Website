export type Lang = 'ja' | 'en';

export interface HomeCopy {
  meta: { title: string; description: string };
  hero: {
    eyebrow: string;
    headingPre: string;
    headingEm: string;
    headingPost: string;
    lead: string;
    catalogueCta: string;
    contactCta: string;
    spec: { title: string; rows: { k: string; v: string }[] };
  };
  trust: { num: string; label: string }[];
  business: {
    eyebrow: string;
    headingLines: [string, string];
    intro: string;
    pillars: { tag: string; title: string; body: string }[];
  };
  products: {
    eyebrow: string;
    heading: string;
    intro: string;
    linkLabel: string;
    items: { icon: string; title: string; body: string }[];
  };
  apps: { eyebrow: string; heading: string; items: string[] };
  catalogue: {
    eyebrow: string;
    heading: string;
    intro: string;
    download: string;
    rows: { badge: string; title: string; meta: string }[];
  };
  news: { eyebrow: string; heading: string };
  cta: { heading: string; body: string; form: string; tel: string; telHref: string };
}

export const home: Record<Lang, HomeCopy> = {
  ja: {
    meta: {
      title: 'Oilkey Corporation — 精密潤滑を、1963年から。',
      description:
        '欧州一流ブランド OKS・BANTLEON の日本総代理店として、また自社工場でのグリースガン製造を通じ、工作機械から航空機まで、あらゆる産業機械の摩擦・摩耗課題に応えています。',
    },
    hero: {
      eyebrow: 'SPECIALTY LUBRICANTS SINCE 1963',
      headingPre: '精密潤滑を、',
      headingEm: '1963年',
      headingPost: 'から。',
      lead: '欧州一流ブランド OKS・BANTLEON の日本総代理店として、また自社工場でのグリースガン製造を通じ、工作機械から航空機まで、あらゆる産業機械の摩擦・摩耗課題に応えています。',
      catalogueCta: '製品カタログを見る ↓',
      contactCta: 'お問い合わせ',
      spec: {
        title: 'Corporate Data / 会社概要',
        rows: [
          { k: '設立 Founded', v: '1963.06' },
          { k: '所在地 Location', v: '堺市西区 / Sakai, Osaka' },
          { k: '主要取扱 Brands', v: 'OKS / BANTLEON' },
          { k: '製造 Manufacturing', v: 'In-house' },
          { k: '対応分野 Sectors', v: '6 Industries' },
        ],
      },
    },
    trust: [
      { num: '1963', label: '設立 — 60年超の実績' },
      { num: '2', label: '独占輸入ブランド（OKS / BANTLEON）' },
      { num: '自社', label: 'グリースガン一貫製造' },
      { num: '6', label: '対応産業分野' },
    ],
    business: {
      eyebrow: 'BUSINESS',
      headingLines: ['3つの事業の柱で、', '潤滑に関するあらゆるニーズに。'],
      intro:
        '市場の声を製品開発に直接反映させながら、開発・輸入・製造の3領域を自社で完結させています。',
      pillars: [
        {
          tag: 'DEVELOPMENT',
          title: 'オリジナル製品開発',
          body: 'ユーザーの現場視点を大切にしながら、特色あるオリジナル潤滑製品を開発。市場のニーズを直接製品に反映します。',
        },
        {
          tag: 'EXCLUSIVE IMPORT',
          title: '海外一流メーカー品の独占輸入',
          body: 'ドイツの OKS・BANTLEON をはじめとする海外一流メーカーの独占輸入により、最高品質の製品を直接お届けします。',
        },
        {
          tag: 'MANUFACTURING',
          title: '自社工場での一貫製造',
          body: 'グリースガンをはじめとする潤滑関連製品を自社工場で製造。品質管理から供給まで一貫体制を確立しています。',
        },
      ],
    },
    products: {
      eyebrow: 'PRODUCTS',
      heading: '取扱製品',
      intro: '特殊潤滑油からドライ潤滑剤、防錆剤まで。詳細は取扱製品ページをご覧ください。',
      linkLabel: '詳しく見る →',
      items: [
        {
          icon: 'drop',
          title: '特殊潤滑油 OKS',
          body: 'ドイツ OKS 社の特殊潤滑油。高温・高荷重・特殊環境に対応。',
        },
        {
          icon: 'grease-gun',
          title: 'グリースガン',
          body: '自社製造の F@ctory Express グリースガンシリーズ。',
        },
        {
          icon: 'layers',
          title: 'ドライ潤滑剤',
          body: 'フッ素樹脂（PTFE）・ベントン系のドライ潤滑コーティング。',
        },
        {
          icon: 'shield',
          title: '防錆剤',
          body: '金属部品の防錆・防食に対応する各種コーティング剤。',
        },
      ],
    },
    apps: {
      eyebrow: 'APPLICATIONS',
      heading: '対応分野',
      items: ['工作機械', '建設機械', '自動車', '農業機械', '航空機', '船舶'],
    },
    catalogue: {
      eyebrow: 'CATALOGUE & DOWNLOADS',
      heading: 'カタログ・資料ダウンロード',
      intro: '製品カタログ・注文書などの PDF 資料をこちらからダウンロードいただけます。',
      download: 'ダウンロード ↓',
      rows: [
        { badge: 'PDF', title: 'OKS 特殊潤滑油 総合カタログ', meta: 'General Catalogue — 4.2MB' },
        {
          badge: 'PDF',
          title: 'グリースガン製品カタログ（F@ctory Express）',
          meta: 'Grease Gun Catalogue — 2.8MB',
        },
        { badge: 'PDF', title: 'ドライ潤滑剤 製品資料', meta: 'Dry Lubricants — 1.6MB' },
        { badge: 'FAX', title: 'FAX注文書・見積依頼書', meta: 'Order / Quote Forms — 480KB' },
      ],
    },
    news: {
      eyebrow: 'NEWS',
      heading: 'お知らせ',
    },
    cta: {
      heading: '製品や導入について、お気軽にご相談ください。',
      body: '潤滑に関するお困りごとから、OKS・BANTLEON製品の見積もりまで、専門スタッフが対応いたします。',
      form: 'お問い合わせフォーム',
      tel: 'TEL: 072-284-1711',
      telHref: 'tel:0722841711',
    },
  },

  en: {
    meta: {
      title: 'Oilkey Corporation — Precision Lubrication Since 1963',
      description:
        'Exclusive Japan distributor for leading European brands OKS and BANTLEON, and in-house grease gun manufacturer. We solve friction and wear challenges across every industry, from machine tools to aircraft.',
    },
    hero: {
      eyebrow: 'SPECIALTY LUBRICANTS SINCE 1963',
      headingPre: 'Precision lubrication,',
      headingEm: 'since 1963',
      headingPost: '.',
      lead: 'As the exclusive Japan distributor for leading European brands OKS and BANTLEON, and through grease gun manufacturing at our own factory, we solve friction and wear challenges across every industry — from machine tools to aircraft.',
      catalogueCta: 'View Product Catalogue ↓',
      contactCta: 'Contact Us',
      spec: {
        title: 'Corporate Data',
        rows: [
          { k: 'Founded', v: '1963.06' },
          { k: 'Location', v: 'Sakai, Osaka' },
          { k: 'Brands', v: 'OKS / BANTLEON' },
          { k: 'Manufacturing', v: 'In-house' },
          { k: 'Sectors', v: '6 Industries' },
        ],
      },
    },
    trust: [
      { num: '1963', label: 'Founded — over 60 years in business' },
      { num: '2', label: 'Exclusive import brands (OKS / BANTLEON)' },
      { num: 'In-house', label: 'End-to-end grease gun manufacturing' },
      { num: '6', label: 'Industries served' },
    ],
    business: {
      eyebrow: 'BUSINESS',
      headingLines: ['Three pillars of business,', 'for every lubrication need.'],
      intro:
        'Development, import, and manufacturing — all completed in-house, with market feedback flowing directly into our products.',
      pillars: [
        {
          tag: 'DEVELOPMENT',
          title: 'Original Product Development',
          body: 'We develop distinctive lubrication products from the user’s point of view, bringing real-world needs directly into the design.',
        },
        {
          tag: 'EXCLUSIVE IMPORT',
          title: 'Exclusive Import of Leading Brands',
          body: 'As the exclusive Japan importer for OKS and BANTLEON of Germany, we deliver the highest-quality products directly to our customers.',
        },
        {
          tag: 'MANUFACTURING',
          title: 'In-House Manufacturing',
          body: 'Grease guns and related lubrication products are manufactured at our own factory, with quality control and supply under one roof.',
        },
      ],
    },
    products: {
      eyebrow: 'PRODUCTS',
      heading: 'Products',
      intro:
        'From specialty lubricants to dry film coatings and corrosion protection. See the products page for the full range.',
      linkLabel: 'Learn more →',
      items: [
        {
          icon: 'drop',
          title: 'OKS Specialty Lubricants',
          body: 'Specialty lubricants from OKS Germany, engineered for high temperature, high load, and demanding environments.',
        },
        {
          icon: 'grease-gun',
          title: 'Grease Guns',
          body: 'Our own F@ctory Express grease gun series, made in-house.',
        },
        {
          icon: 'layers',
          title: 'Dry Lubricants',
          body: 'PTFE and bentone-based dry film lubricant coatings.',
        },
        {
          icon: 'shield',
          title: 'Corrosion Inhibitors',
          body: 'Coatings that protect metal parts from rust and corrosion.',
        },
      ],
    },
    apps: {
      eyebrow: 'APPLICATIONS',
      heading: 'Applications',
      items: [
        'Machine Tools',
        'Construction Machinery',
        'Automotive',
        'Agricultural Machinery',
        'Aircraft',
        'Marine',
      ],
    },
    catalogue: {
      eyebrow: 'CATALOGUE & DOWNLOADS',
      heading: 'Catalogue & Downloads',
      intro: 'Product catalogues, order forms, and other PDF resources are available for download.',
      download: 'Download ↓',
      rows: [
        { badge: 'PDF', title: 'OKS Specialty Lubricants', meta: 'General Catalogue — 4.2MB' },
        {
          badge: 'PDF',
          title: 'Grease Gun Catalogue (F@ctory Express)',
          meta: 'Product Catalogue — 2.8MB',
        },
        { badge: 'PDF', title: 'Dry Lubricants', meta: 'Technical Documents — 1.6MB' },
        { badge: 'FAX', title: 'Fax Order & Quote Forms', meta: 'Order / Quote Forms — 480KB' },
      ],
    },
    news: {
      eyebrow: 'NEWS',
      heading: 'News',
    },
    cta: {
      heading: 'Talk to us about products and applications.',
      body: 'From lubrication challenges to quotes for OKS and BANTLEON products, our specialist staff are here to help.',
      form: 'Contact Form',
      tel: 'TEL: +81-72-284-1711',
      telHref: 'tel:+81722841711',
    },
  },
};
