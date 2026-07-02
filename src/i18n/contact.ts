import type { Lang } from './home';

export interface ContactCopy {
  meta: { title: string; description: string };
  header: { eyebrow: string; heading: string; intro: string };
  form: {
    required: string;
    name: string;
    company: string;
    department: string;
    email: string;
    phone: string;
    inquiryType: string;
    selectPlaceholder: string;
    inquiryOptions: string[];
    products: string;
    productOptions: string[];
    message: string;
    consentText: string;
    consentLink: string;
    submit: string;
    postSubmit: string;
    errorValidation: string;
    errorServer: string;
  };
  panel: {
    title: string;
    address: string;
    tel: string;
    hours: string;
    fax: string;
    email: string;
    addressLabel: string;
    telLabel: string;
    hoursLabel: string;
    faxLabel: string;
    emailLabel: string;
  };
}

export const contact: Record<Lang, ContactCopy> = {
  ja: {
    meta: {
      title: 'お問い合わせ | オイルキー株式会社',
      description:
        '製品に関するご質問、お見積もり、カタログのご請求など、お気軽にお問い合わせください。担当者より折り返しご連絡いたします。',
    },
    header: {
      eyebrow: 'CONTACT',
      heading: 'お問い合わせ',
      intro:
        '製品に関するご質問、お見積もり、カタログのご請求など、お気軽にお問い合わせください。担当者より折り返しご連絡いたします。',
    },
    form: {
      required: '必須',
      name: 'お名前',
      company: '会社名',
      department: '部署名',
      email: 'メールアドレス',
      phone: '電話番号',
      inquiryType: 'お問い合わせ種別',
      selectPlaceholder: '選択してください',
      inquiryOptions: [
        '製品について',
        'お見積もり依頼',
        'カタログ請求',
        '取引に関するお問い合わせ',
        'その他',
      ],
      products: 'ご興味のある製品（複数選択可）',
      productOptions: ['OKS特殊潤滑油', 'グリースガン', 'ドライ潤滑剤', '防錆剤', 'その他'],
      message: 'お問い合わせ内容',
      consentText: '個人情報の取り扱いについて同意する',
      consentLink: 'プライバシーポリシー',
      submit: '送信する',
      postSubmit:
        'お問い合わせいただきありがとうございます。内容を確認のうえ、担当者より2〜3営業日以内にご連絡いたします。',
      errorValidation: '入力内容に不備があります。必須項目をご確認のうえ、再度送信してください。',
      errorServer:
        '送信に失敗しました。時間をおいて再度お試しいただくか、お電話（072-284-1711）またはメール（oilkey@oilkey.co.jp）にてご連絡ください。',
    },
    panel: {
      title: 'Direct Contact / 直接のお問い合わせ',
      addressLabel: '所在地',
      address: '〒593-8314 大阪府堺市西区太平寺617',
      telLabel: 'TEL',
      tel: '072-284-1711',
      hoursLabel: '受付時間',
      hours: '平日 9:00〜17:00',
      faxLabel: 'FAX',
      fax: '072-298-7790',
      emailLabel: 'Email',
      email: 'oilkey@oilkey.co.jp',
    },
  },

  en: {
    meta: {
      title: 'Contact | Oilkey Corporation',
      description:
        'Product questions, quote requests, and catalogue requests — get in touch with Oilkey Corporation and a member of our team will respond directly.',
    },
    header: {
      eyebrow: 'CONTACT',
      heading: 'Contact',
      intro:
        'For product questions, quote requests, or catalogue requests, please get in touch — a member of our team will respond directly.',
    },
    form: {
      required: 'Required',
      name: 'Name',
      company: 'Company name',
      department: 'Department',
      email: 'Email',
      phone: 'Phone number',
      inquiryType: 'Inquiry type',
      selectPlaceholder: 'Please select',
      inquiryOptions: [
        'Product question',
        'Quote request',
        'Catalogue request',
        'Business inquiry',
        'Other',
      ],
      products: 'Product(s) of interest',
      productOptions: [
        'OKS Specialty Lubricants',
        'Grease Guns',
        'Dry Lubricants',
        'Corrosion Inhibitors',
        'Other',
      ],
      message: 'Message',
      consentText: 'I agree to the handling of my personal information',
      consentLink: 'Privacy Policy',
      submit: 'Send Message',
      postSubmit:
        'Thank you for contacting us. We’ll review your message and respond within 2–3 business days.',
      errorValidation:
        'Some required fields were missing or invalid. Please check the form and try again.',
      errorServer:
        'Something went wrong sending your message. Please try again later, or reach us by phone (+81-72-284-1711) or email (oilkey@oilkey.co.jp).',
    },
    panel: {
      title: 'Direct Contact',
      addressLabel: 'Address',
      address: '617 Taiheiji, Nishi-ku, Sakai, Osaka 593-8314, Japan',
      telLabel: 'Tel',
      tel: '+81-72-284-1711',
      hoursLabel: 'Hours',
      hours: 'Weekdays 9:00–17:00 JST',
      faxLabel: 'Fax',
      fax: '+81-72-298-7790',
      emailLabel: 'Email',
      email: 'oilkey@oilkey.co.jp',
    },
  },
};
