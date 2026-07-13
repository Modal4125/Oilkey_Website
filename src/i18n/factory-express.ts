import type { Lang } from './home';

export interface FactoryExpressCopy {
  meta: { title: string; description: string };
  header: { eyebrow: string; heading: string; intro: string };
  /** Shown on the EN page: translation disclaimer (Japanese edition is authoritative) */
  jaNotice?: string;
  /** Labels for the PDF / Excel download buttons */
  downloads: { pdf: string; xlsx: string };
  /** Note explaining that OKS product names link to the manufacturer's site */
  oksLinkNote: string;
  /** Suffix after the product count, e.g. "35 製品" */
  countSuffix: string;
  notesLabel: string;
  note: string;
  contactCta: string;
  downloadsCta: string;
}

export const factoryExpress: Record<Lang, FactoryExpressCopy> = {
  ja: {
    meta: {
      title: 'F@ctory Express 製品カタログ | オイルキー株式会社',
      description:
        'OKS特殊潤滑剤と自社製グリースガン関連製品のWebカタログ「F@ctory Express」。グリース・ペースト・乾燥潤滑剤・オイル・防錆・防食剤・ケミカル用品の仕様と価格をご覧いただけます。',
    },
    header: {
      eyebrow: 'F@CTORY EXPRESS',
      heading: 'F@ctory Express 製品カタログ',
      intro:
        'OKS特殊潤滑剤と自社製グリースガン関連製品のWebカタログです。Eプライスはご注文数量が1個の場合の価格（円）です。10個単位のご注文には割引価格が適用されます。',
    },
    downloads: { pdf: 'PDF版をダウンロード ↓', xlsx: 'Excel版をダウンロード ↓' },
    oksLinkNote:
      'OKS製品名のリンクは、メーカー OKS 社（ドイツ）の製品ページ（英語）を新しいタブで開きます。',
    countSuffix: '製品',
    notesLabel: '注記',
    note: '価格・納期・在庫については、お気軽にお問い合わせください。FAX注文書・見積依頼書はカタログ・資料ダウンロードのページにございます。',
    contactCta: 'お問い合わせ',
    downloadsCta: 'カタログ・資料ダウンロード',
  },

  en: {
    meta: {
      title: 'F@ctory Express Product Catalogue | Oilkey Corporation',
      description:
        'The F@ctory Express web catalogue — OKS specialty lubricants and Oilkey grease gun products: greases, pastes, dry lubricants, oils, corrosion protection, and maintenance chemicals.',
    },
    header: {
      eyebrow: 'F@CTORY EXPRESS',
      heading: 'F@ctory Express Product Catalogue',
      intro:
        'The web catalogue of OKS specialty lubricants and our own grease gun products. The E-price is the unit price (JPY) for an order of one; discounted pricing applies to orders in units of ten.',
    },
    jaNotice:
      'Translated from the Japanese catalogue for reference — the Japanese edition is authoritative. All prices are in Japanese yen. For assistance in English, please contact us.',
    downloads: { pdf: 'Download PDF ↓', xlsx: 'Download Excel ↓' },
    oksLinkNote:
      "OKS product names link to the manufacturer's product pages on oks-germany.com (new tab).",
    countSuffix: ' products',
    notesLabel: 'Notes',
    note: 'For pricing, lead times, and stock, please get in touch — fax order and quote forms are available on the downloads page.',
    contactCta: 'Contact Us',
    downloadsCta: 'Catalogue & Downloads',
  },
};
