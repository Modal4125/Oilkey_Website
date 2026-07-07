import type { Lang } from './home';

export interface CompanyCopy {
  meta: { title: string; description: string };
  header: { eyebrow: string; heading: string };
  overview: {
    title: string;
    rows: { k: string; v: string; mono?: boolean }[];
    agencies: { k: string; items: { label: string; org: string; url: string }[] };
  };
  message: { eyebrow: string; heading: string; paras: string[]; signature: string };
  principle: { eyebrow: string; heading: string; slogan: string; imageAlt: string };
  history: { eyebrow: string; heading: string; items: { year: string; text: string }[] };
  access: {
    eyebrow: string;
    heading: string;
    place: string;
    address: string;
    mapsLabel: string;
    mapTitle: string;
  };
}

export const company: Record<Lang, CompanyCopy> = {
  ja: {
    meta: {
      title: '会社案内 | オイルキー株式会社',
      description:
        '1963年設立。特殊潤滑油・潤滑関連製品の輸入販売、オリジナル製品の開発、グリースガンほか関連機器の製造を行うオイルキー株式会社の会社案内です。',
    },
    header: { eyebrow: 'COMPANY', heading: '会社案内' },
    overview: {
      title: 'Corporate Data / 会社概要',
      rows: [
        { k: '会社名', v: 'オイルキー株式会社（Oilkey Corporation）' },
        { k: '登記上本社', v: '大阪府堺市南区槇塚台4-4-18' },
        { k: '堺営業所', v: '〒593-8314 大阪府堺市西区太平寺617-2F' },
        { k: '工場', v: '大阪府堺市西区太平寺602' },
        { k: 'TEL / FAX', v: '072-284-1711 / 072-298-7790', mono: true },
        { k: 'Email', v: 'oilkey@oilkey.co.jp', mono: true },
        { k: '設立年', v: '1963年6月26日（昭和38年）' },
        { k: '資本金', v: '1,000万円' },
        { k: '代表取締役', v: '山田ウィニー' },
        {
          k: '事業内容',
          v: 'グリースガン等潤滑油関連品製造販売、特殊ケミカル製品・潤滑関連製品の輸入販売',
        },
      ],
      agencies: {
        k: '代理店',
        items: [
          {
            label: 'ドイツ OKS 社　日本総代理店',
            org: 'OKS Spezialschmierstoffe GmbH（英語）',
            url: 'https://www.oks-germany.com/en/',
          },
          {
            label: 'ドイツ BANTLEON 社　日本総代理店',
            org: 'Hermann Bantleon GmbH（英語）',
            url: 'https://www.bantleon.de/en/',
          },
        ],
      },
    },
    message: {
      eyebrow: 'MESSAGE',
      heading: 'ごあいさつ',
      paras: [
        'オイルキー株式会社は、1963年の設立以来、ユーザーの皆様の視点を大切にしながら、特色あるオリジナル製品の開発に取り組んでまいりました。',
        'さらに、ドイツ OKS 社・BANTLEON 社をはじめとする海外一流メーカー品の独占輸入により、最高品質の製品を皆様に直接お届けする体制を確立しています。',
        '工作機械、建設機械、自動車、農業機械、航空機、船舶など、さまざまな産業の現場から寄せられる声を製品開発に直接反映させ、潤滑に関するあらゆるニーズにすばやくお応えできるよう、日々システムの改善に努めております。',
        '社員一同、心を新たに社業に邁進してまいります。今後とも変わらぬご支援を賜りますよう、よろしくお願い申し上げます。',
      ],
      signature: '代表取締役 山田ウィニー',
    },
    principle: {
      eyebrow: 'PRINCIPLE',
      heading: '経営理念',
      slogan: '人にやさしく、環境にやさしい製品の普及を通じて、産業と社会の発展に寄与します。',
      imageAlt: 'OKS・AVIA をはじめとする取扱製品',
    },
    history: {
      eyebrow: 'HISTORY',
      heading: '沿革',
      items: [
        { year: '1956年', text: '東洋光器製作所として発足。' },
        {
          year: '1963年',
          text: '株式会社に改組と同時に、オイルキー株式会社に社名変更。現在に至る。',
        },
      ],
    },
    access: {
      eyebrow: 'ACCESS',
      heading: 'アクセス',
      place: 'オイルキー株式会社 堺営業所',
      address: '〒593-8314 大阪府堺市西区太平寺617-2F',
      mapsLabel: 'Google マップで開く',
      mapTitle: 'オイルキー株式会社（堺市西区太平寺）の地図',
    },
  },

  en: {
    meta: {
      title: 'Company | Oilkey Corporation',
      description:
        'Corporate profile of Oilkey Corporation — importer of specialty lubricants, developer of original lubrication products, and manufacturer of grease guns since 1963.',
    },
    header: { eyebrow: 'COMPANY', heading: 'Company' },
    overview: {
      title: 'Corporate Overview',
      rows: [
        { k: 'Company name', v: 'Oilkey Corporation (オイルキー株式会社)' },
        { k: 'Registered head office', v: '4-4-18 Makizukadai, Minami-ku, Sakai, Osaka, Japan' },
        { k: 'Sakai office', v: '617-2F Taiheiji, Nishi-ku, Sakai, Osaka 593-8314, Japan' },
        { k: 'Factory', v: '602 Taiheiji, Nishi-ku, Sakai, Osaka, Japan' },
        { k: 'Tel / Fax', v: '+81-72-284-1711 / +81-72-298-7790', mono: true },
        { k: 'Email', v: 'oilkey@oilkey.co.jp', mono: true },
        { k: 'Founded', v: 'June 26, 1963' },
        { k: 'Capital', v: 'JPY 10,000,000' },
        { k: 'Representative Director', v: 'Winnie Yamada' },
        {
          k: 'Business',
          v: 'Manufacture and sale of grease guns and other lubrication equipment; import and sale of specialty chemical products and lubrication-related products',
        },
      ],
      agencies: {
        k: 'Distributorships',
        items: [
          {
            label: 'Exclusive Japan distributor for OKS (Germany)',
            org: 'OKS Spezialschmierstoffe GmbH',
            url: 'https://www.oks-germany.com/en/',
          },
          {
            label: 'Exclusive Japan distributor for BANTLEON (Germany)',
            org: 'Hermann Bantleon GmbH',
            url: 'https://www.bantleon.de/en/',
          },
        ],
      },
    },
    message: {
      eyebrow: 'MESSAGE',
      heading: 'Message',
      paras: [
        'Since our founding in 1963, Oilkey Corporation has developed distinctive original lubrication products by staying close to the needs of the people who use them.',
        'As the exclusive Japan importer of leading overseas manufacturers — including OKS and BANTLEON of Germany — we deliver the highest-quality products directly to our customers.',
        'We bring the voice of the field — from machine tools and construction machinery to automotive, agricultural machinery, aircraft, and marine applications — directly into our product development, and continue to refine our systems so we can respond quickly to any lubrication challenge.',
        'We thank you for your continued support as we move forward.',
      ],
      signature: 'Winnie Yamada, Representative Director',
    },
    principle: {
      eyebrow: 'PRINCIPLE',
      heading: 'Our philosophy',
      slogan:
        'Contributing to the development of industry and society through products that are kind to people and gentle on the environment.',
      imageAlt: 'Oilkey product lineup, including OKS and AVIA lubricants',
    },
    history: {
      eyebrow: 'HISTORY',
      heading: 'History',
      items: [
        { year: '1956', text: 'Established as Toyo Koki Seisakusho.' },
        {
          year: '1963',
          text: 'Incorporated as a company and renamed Oilkey Corporation, as we remain today.',
        },
      ],
    },
    access: {
      eyebrow: 'ACCESS',
      heading: 'Access',
      place: 'Oilkey Corporation — Sakai Office',
      address: '617-2F Taiheiji, Nishi-ku, Sakai, Osaka 593-8314, Japan',
      mapsLabel: 'Open in Google Maps',
      mapTitle: 'Map showing the location of Oilkey Corporation in Sakai, Osaka',
    },
  },
};
