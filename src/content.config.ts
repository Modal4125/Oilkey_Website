import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const locale = z.enum(['ja', 'en']);

// Simple content-driven pages (e.g. privacy policy, legal notices) and
// per-route SEO metadata. Bespoke pages like /company or /business are
// hand-built as .astro templates and don't need to live here.
const pages = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/pages' }),
  schema: z.object({
    lang: locale,
    title: z.string(),
    description: z.string(),
    draft: z.boolean().default(false),
  }),
});

// Product catalogue entries. Not wired into any route yet — this is scaffolding
// for when real product data (from OKS, BANTLEON, F@ctory Express, etc.) lands.
const products = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/products' }),
  schema: z.object({
    lang: locale,
    name: z.string(),
    category: z.string(),
    manufacturer: z.string().optional(),
    summary: z.string(),
    specs: z.record(z.string(), z.string()).optional(),
    image: z.string().optional(),
    catalogUrl: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

// Downloadable catalogue PDFs, grouped by category on /catalogue.
// Drop the PDF into public/downloads/ and point `file` at it.
const catalogue = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/catalogue' }),
  schema: z.object({
    lang: locale,
    title: z.string(),
    category: z.string(),
    /** Public URL path of the PDF, or an external https URL rendered as a link-out */
    file: z.string(),
    /** Display size string, e.g. "4.2MB" — omit for external links */
    size: z.string().optional(),
    /** Optional descriptor shown before the size, e.g. "General Catalogue" */
    note: z.string().optional(),
    badge: z.string().default('PDF'),
    /** Sort key within the page; categories are ordered by their first entry */
    order: z.number().default(999),
    draft: z.boolean().default(false),
  }),
});

// News / notices list.
const news = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/news' }),
  schema: z.object({
    lang: locale,
    title: z.string(),
    date: z.coerce.date(),
    tag: z.string(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { pages, products, news, catalogue };
