import type { Lang } from './home';

export interface NewsCopy {
  meta: { title: string; description: string };
  header: { eyebrow: string; heading: string; intro: string };
  backToList: string;
  empty: string;
  viewAll: string;
}

export const news: Record<Lang, NewsCopy> = {
  ja: {
    meta: {
      title: 'お知らせ | オイルキー株式会社',
      description: 'オイルキー株式会社からの製品情報・展示会情報などのお知らせ一覧です。',
    },
    header: {
      eyebrow: 'NEWS',
      heading: 'お知らせ',
      intro: '製品情報、展示会のご案内など、オイルキーからのお知らせをお届けします。',
    },
    backToList: '← お知らせ一覧へ戻る',
    empty: 'お知らせはまだありません。',
    viewAll: 'お知らせ一覧へ →',
  },

  en: {
    meta: {
      title: 'News | Oilkey Corporation',
      description:
        'Product news, exhibition information, and other announcements from Oilkey Corporation.',
    },
    header: {
      eyebrow: 'NEWS',
      heading: 'News',
      intro: 'Product news, exhibition information, and other announcements from Oilkey.',
    },
    backToList: '← Back to News',
    empty: 'No news yet.',
    viewAll: 'View all news →',
  },
};
