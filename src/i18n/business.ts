import type { Lang } from './home';

export interface BusinessPillar {
  tag: string;
  title: string;
  paras: string[];
  items?: { label?: string; text: string }[];
  after?: string;
}

export interface BusinessCopy {
  meta: { title: string; description: string };
  header: { eyebrow: string; heading: string; intro: string };
  pillars: BusinessPillar[];
}

export const business: Record<Lang, BusinessCopy> = {
  ja: {
    meta: {
      title: '事業案内 | オイルキー株式会社',
      description:
        'オイルキーは「開発」「輸入」「製造」の3つの事業を自社で完結させることで、潤滑に関するあらゆるニーズにスピーディーにお応えしています。',
    },
    header: {
      eyebrow: 'BUSINESS',
      heading: '事業案内',
      intro:
        'オイルキーは「開発」「輸入」「製造」の3つの事業を自社で完結させることで、潤滑に関するあらゆるニーズにスピーディーにお応えしています。',
    },
    pillars: [
      {
        tag: 'DEVELOPMENT',
        title: 'オリジナル製品開発',
        paras: [
          '現場のユーザー視点を最優先に、特色あるオリジナル潤滑製品を開発しています。市場からの声を製品企画・改良に直接反映させることで、既製品では対応しきれない特殊なニーズにも応えてきました。今後も、実際に製品を使う現場との対話を通じて、開発を続けてまいります。',
        ],
      },
      {
        tag: 'EXCLUSIVE IMPORT',
        title: '海外一流メーカー品の独占輸入',
        paras: [
          'ドイツの OKS 社、BANTLEON 社という、いずれも欧州の潤滑技術をリードするメーカーの製品を、日本国内における独占的な輸入元として取り扱っています。',
        ],
        items: [
          {
            label: 'OKS',
            text: '高温・高荷重・薬品環境など、特殊な条件下での使用に対応する特殊潤滑油シリーズ',
          },
          { label: 'BANTLEON', text: '[製品特徴・取扱カテゴリ — 要確認]' },
        ],
        after:
          '独占輸入という体制により、価格・品質・供給の安定性においても、直接メーカーと連携した対応が可能です。',
      },
      {
        tag: 'MANUFACTURING',
        title: '自社工場での一貫製造',
        paras: [
          'グリースガンをはじめとする潤滑関連機器を、自社工場で一貫して製造しています。「F@ctory Express」ブランドとして展開するグリースガンシリーズは、企画から製造、品質管理までを社内で行うことで、現場のニーズに即した仕様変更や短納期対応を実現しています。',
        ],
        items: [
          { text: 'ドライ潤滑剤（フッ素樹脂／PTFE、ベントン系）の製造・販売' },
          { text: '防錆剤の製造・販売' },
          { text: '各種グリースガン、関連消耗品の製造' },
        ],
      },
    ],
  },

  en: {
    meta: {
      title: 'Business | Oilkey Corporation',
      description:
        'Oilkey brings development, import, and manufacturing together under one roof, so we can respond quickly to any lubrication need.',
    },
    header: {
      eyebrow: 'BUSINESS',
      heading: 'Business',
      intro:
        'Oilkey brings development, import, and manufacturing together under one roof, so we can respond quickly to any lubrication need.',
    },
    pillars: [
      {
        tag: 'DEVELOPMENT',
        title: 'Original Product Development',
        paras: [
          "We develop distinctive lubrication products with the end user's perspective always in mind. By feeding feedback from the field directly into product planning and refinement, we've been able to meet specialized needs that off-the-shelf products can't address — and we keep developing through ongoing dialogue with the people actually using our products.",
        ],
      },
      {
        tag: 'EXCLUSIVE IMPORT',
        title: 'Exclusive Import of Leading Overseas Manufacturers',
        paras: [
          'We are the exclusive Japan importer for OKS and BANTLEON of Germany, two manufacturers that lead European lubrication technology.',
        ],
        items: [
          {
            label: 'OKS',
            text: 'a range of specialty lubricants engineered for demanding conditions: high temperature, high load, and chemical exposure',
          },
          { label: 'BANTLEON', text: '[product line / category — confirm]' },
        ],
        after:
          'As the exclusive importer, we work directly with these manufacturers on pricing, quality, and supply stability.',
      },
      {
        tag: 'MANUFACTURING',
        title: 'In-House Manufacturing',
        paras: [
          'We manufacture grease guns and related lubrication equipment end-to-end at our own factory. Our grease gun lineup, sold under the "F@ctory Express" brand, is planned, produced, and quality-checked in-house — which lets us respond to custom specifications and short lead times that off-the-shelf suppliers can\'t match.',
        ],
        items: [
          { text: 'Manufacture and sale of dry lubricants (PTFE / Bentone-based)' },
          { text: 'Manufacture and sale of corrosion inhibitors' },
          { text: 'Manufacture of grease guns and related consumables' },
        ],
      },
    ],
  },
};
