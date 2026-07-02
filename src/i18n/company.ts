import type { Lang } from './home';

export interface CompanyCopy {
  meta: { title: string; description: string };
  header: { eyebrow: string; heading: string };
  overview: { title: string; rows: { k: string; v: string; mono?: boolean }[] };
  message: { eyebrow: string; heading: string; paras: string[] };
  access: { eyebrow: string; heading: string; items: string[]; note?: string };
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
        { k: '商号', v: 'オイルキー株式会社（Oilkey Corporation）' },
        { k: '設立', v: '1963年6月' },
        { k: '資本金', v: '1,000万円 [要確認]' },
        { k: '代表者', v: '[代表者名 — 要確認]' },
        { k: '所在地', v: '〒593-8314 大阪府堺市西区太平寺617' },
        { k: 'TEL / FAX', v: '072-284-1711 / 072-298-7790', mono: true },
        { k: 'Email', v: 'oilkey@oilkey.co.jp', mono: true },
        {
          k: '事業内容',
          v: '特殊潤滑油・潤滑関連製品の輸入販売、オリジナル製品の開発、グリースガンほか関連機器の製造',
        },
      ],
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
    },
    access: {
      eyebrow: 'ACCESS',
      heading: 'アクセス',
      items: [
        '南海本線「湊駅」より徒歩 [ ] 分 — [最寄駅・所要時間 要確認]',
        '阪堺線 [ ] — [要確認]',
        'お車の場合：阪神高速堺線 [ ] 出口より約 [ ] 分 — [要確認]',
      ],
      note: '※ 現サイトの地図・アクセス情報を移行するか、最新の地図データをご提供ください。',
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
        { k: 'Company name', v: 'Oilkey Corporation' },
        { k: 'Founded', v: 'June 1963' },
        { k: 'Capital', v: 'JPY 10,000,000 [confirm]' },
        { k: 'Representative', v: '[Representative name — confirm]' },
        { k: 'Address', v: '617 Taiheiji, Nishi-ku, Sakai, Osaka 593-8314, Japan' },
        { k: 'Tel / Fax', v: '+81-72-284-1711 / +81-72-298-7790', mono: true },
        { k: 'Email', v: 'oilkey@oilkey.co.jp', mono: true },
        {
          k: 'Business',
          v: 'Import and sale of specialty lubricants and related products; development of original products; in-house manufacturing of grease guns and related equipment',
        },
      ],
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
    },
    access: {
      eyebrow: 'ACCESS',
      heading: 'Access',
      items: ['[Directions / nearest station / driving access — confirm]'],
    },
  },
};
