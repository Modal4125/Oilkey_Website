export const prerender = false;

import type { APIRoute } from 'astro';
import { Resend } from 'resend';
import { CONTACT_FROM_EMAIL, CONTACT_TO_EMAIL, RESEND_API_KEY } from 'astro:env/server';
import { contact } from '../../i18n/contact';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const field = (data: FormData, key: string) => String(data.get(key) ?? '').trim();

const redirectTo = (path: string) =>
  new Response(null, { status: 303, headers: { Location: path } });

export const POST: APIRoute = async ({ request }) => {
  let data: FormData;
  try {
    data = await request.formData();
  } catch {
    return redirectTo('/contact?error=validation');
  }

  const lang = field(data, 'lang') === 'en' ? 'en' : 'ja';
  const base = lang === 'en' ? '/en/contact' : '/contact';
  const t = contact[lang].form;

  // Honeypot: hidden field real users never fill. Pretend success so bots
  // can't tell they were filtered.
  if (field(data, 'website') !== '') {
    return redirectTo(`${base}?sent=1`);
  }

  const name = field(data, 'name');
  const company = field(data, 'company');
  const department = field(data, 'department');
  const email = field(data, 'email');
  const phone = field(data, 'phone');
  const inquiryType = field(data, 'inquiryType');
  const message = field(data, 'message');
  const consent = data.get('consent') !== null;
  const products = data
    .getAll('products')
    .map((p) => String(p))
    .filter((p) => t.productOptions.includes(p));

  const invalid =
    name === '' ||
    name.length > 100 ||
    company === '' ||
    company.length > 100 ||
    department.length > 100 ||
    !EMAIL_RE.test(email) ||
    email.length > 200 ||
    phone.length > 50 ||
    !t.inquiryOptions.includes(inquiryType) ||
    message === '' ||
    message.length > 5000 ||
    !consent;

  if (invalid) {
    return redirectTo(`${base}?error=validation`);
  }

  const subject =
    lang === 'en'
      ? `[Web Inquiry] ${inquiryType} — ${company} / ${name}`
      : `【Webお問い合わせ】${inquiryType} — ${company} ${name}`;

  const label = (en: string, ja: string) => (lang === 'en' ? en : ja);
  const body = [
    label(
      'New inquiry from the website contact form.',
      'ウェブサイトのお問い合わせフォームより送信されました。',
    ),
    '',
    `${label('Name', 'お名前')}: ${name}`,
    `${label('Company', '会社名')}: ${company}`,
    `${label('Department', '部署名')}: ${department || '-'}`,
    `Email: ${email}`,
    `${label('Phone', '電話番号')}: ${phone || '-'}`,
    `${label('Inquiry type', 'お問い合わせ種別')}: ${inquiryType}`,
    `${label('Products of interest', 'ご興味のある製品')}: ${products.length > 0 ? products.join(' / ') : '-'}`,
    '',
    `${label('Message', 'お問い合わせ内容')}:`,
    message,
  ].join('\n');

  try {
    const resend = new Resend(RESEND_API_KEY);
    const { error } = await resend.emails.send({
      from: CONTACT_FROM_EMAIL,
      to: CONTACT_TO_EMAIL,
      replyTo: email,
      subject,
      text: body,
    });
    if (error) {
      console.error('Resend error:', error);
      return redirectTo(`${base}?error=server`);
    }
    return redirectTo(`${base}?sent=1`);
  } catch (err) {
    console.error('Contact form send failed:', err);
    return redirectTo(`${base}?error=server`);
  }
};
