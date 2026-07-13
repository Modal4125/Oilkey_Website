import type { Lang } from './home';

export interface CatalogueCopy {
  meta: { title: string; description: string };
  header: { eyebrow: string; heading: string; intro: string };
  download: string;
  empty: string;
}

export const catalogue: Record<Lang, CatalogueCopy> = {
  ja: {
    meta: {
      title: 'カタログ・資料ダウンロード | オイルキー株式会社',
      description:
        'OKS特殊潤滑油の総合カタログ、AVIA油圧作動油、F@ctory Expressグリースガン製品カタログ、OILKEY 8000などオリジナル製品・廃番製品の製品資料、注文書のPDF資料をダウンロードいただけます。',
    },
    header: {
      eyebrow: 'CATALOGUE & DOWNLOADS',
      heading: 'カタログ・資料ダウンロード',
      intro: '製品カタログ・注文書などの PDF 資料をこちらからダウンロードいただけます。',
    },
    download: 'ダウンロード ↓',
    empty: '資料は準備中です。公開まで今しばらくお待ちください。',
  },

  en: {
    meta: {
      title: 'Catalogue & Downloads | Oilkey Corporation',
      description:
        'Download PDF resources from Oilkey Corporation — OKS specialty lubricant catalogues, AVIA hydraulic fluid, F@ctory Express grease gun catalogues, product sheets for Oilkey originals and discontinued products, and order forms.',
    },
    header: {
      eyebrow: 'CATALOGUE & DOWNLOADS',
      heading: 'Catalogue & Downloads',
      intro: 'Product catalogues, order forms, and other PDF resources are available for download.',
    },
    download: 'Download ↓',
    empty: 'Downloads are being prepared — please check back soon.',
  },
};
