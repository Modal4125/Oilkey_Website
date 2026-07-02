# Claude Code Prompts — Oilkey Site Build

How to use this: run these roughly in order, in a fresh project folder, inside Claude Code (terminal or VS Code extension). Before Prompt 1, put these three files in the project root so Claude Code can read them directly:

- `homepage-mockup.html`
- `sitemap-content-outline.md`
- `page-copy.md`

Each prompt is written to be pasted as-is. Adjust anything in `[brackets]`.

---

### Prompt 1 — Scaffold the project

```
I'm rebuilding a corporate website for Oilkey Corporation (oilkey.com), a Japanese
industrial lubricants manufacturer/importer. It needs to be bilingual (Japanese
primary, English secondary at /en/), SEO-friendly, and mostly static content
(no user accounts, no dynamic app logic beyond a contact form).

Scaffold a new Astro project for this. Set up:
- TypeScript
- Tailwind CSS
- A content collections structure for: pages, products (future), and news posts
- A basic i18n routing setup: default routes in Japanese (e.g. /company), English
  mirror routes under /en/ (e.g. /en/company)
- ESLint + Prettier

Explain the folder structure once it's set up before we go further.
```

---

### Prompt 2 — Turn the mockup into a design system

```
Read homepage-mockup.html in the project root — it's a static HTML/CSS mockup of
the homepage design direction I want (industrial/technical/clean corporate:
graphite ink, hydraulic blue and amber accents, Zen Kaku Gothic New for headings,
Noto Sans JP for body, IBM Plex Mono for spec/data figures, hairline rules,
crosshair corner marks as a recurring motif).

Extract this into a proper design system for the Astro project:
- Tailwind config with the color tokens, font families, and spacing/border
  patterns from the mockup
- Reusable Astro components for: Header/Nav (with JP/EN toggle), Hero,
  SpecPanel (the crosshair-cornered data panel), Footer, Button (primary/outline
  variants), SectionHeading (eyebrow + heading + intro pattern), ProductCard,
  CatalogueRow (PDF download row)
- Keep the visual language identical to the mockup — don't reinterpret it

Show me the component breakdown before writing all the code.
```

---

### Prompt 3 — Build the homepage from the components

```
Using the components we just built, assemble the actual homepage
(/ and /en/) matching the section order and content from homepage-mockup.html:
hero, trust bar, business pillars, product grid, applications strip, catalogue
CTA, news preview, footer.

Use the Japanese copy from the mockup as-is for the JP version. For the EN
version, translate naturally rather than word-for-word — keep it corporate and
concise.
```

---

### Prompt 4 — Build Company, Business, and Contact pages

```
Read page-copy.md in the project root — it has drafted JP/EN copy for the
Company, Business, and Contact pages, including a suggested contact form field
list.

Build these three pages (/company, /business, /contact and their /en/ mirrors)
using the existing design system components. For Company, render the corporate
overview as a proper spec-style table consistent with the SpecPanel visual
language. For Business, use the three-pillar layout pattern from the homepage.
For Contact, build the form UI (don't wire up submission yet — that's the next
prompt) plus the direct contact info block.

Some fields in page-copy.md are marked [CONFIRM] or [ ] — leave clearly marked
placeholder text in those spots (e.g. "[Representative name — confirm]") rather
than inventing values, so I know what's still outstanding.
```

---

### Prompt 5 — Wire up the contact form backend

```
The old site used a CGI script for its contact form, which I'm not carrying
over. Set up a modern form submission flow for the /contact page:

- [Pick one: a serverless function that sends email via Resend/SendGrid, OR a
  simple integration with a form service like Formspree, OR a serverless
  function that writes to a database — tell me if you want a recommendation
  based on our hosting choice]
- Server-side validation matching the required fields in page-copy.md
- Success and error states in the UI (in both JP and EN)
- Basic spam protection (honeypot field or similar — nothing that requires a
  paid CAPTCHA service unless I ask for one)

Ask me for any API keys/credentials you need rather than hardcoding anything.
```

---

### Prompt 6 — Catalogue & PDF migration (Phase 1 priority)

```
Build the /catalogue page (and /en/ mirror) as a simple categorized list of
downloadable PDFs, matching the CatalogueRow component style from the mockup.

I'll provide the actual PDF files and their titles/categories separately.
For now, scaffold the page to pull PDF entries from a content collection
(e.g. src/content/catalogue/*.md with frontmatter: title, category, file path,
file size) so I can drop in real PDFs and metadata afterward without touching
the page template.
```

---

### Prompt 7 — News section

```
Build /news (list + individual post template) and /en/news using a content
collection for posts (frontmatter: title, date, tag, slug; body in Markdown).
Match the news list visual style from the homepage mockup (date + tag + title
row). Add 2-3 placeholder posts I can replace with real content.
```

---

### Prompt 8 — Redirects and SEO cleanup

```
The old site (oilkey.co.jp) used URLs like /business/index.html. Set up 301
redirects from the old URL patterns to the new clean paths (e.g.
/business/index.html -> /business) so we don't lose any inbound links/SEO
when we cut over. Also add: meta descriptions per page (JP/EN), Open Graph
tags, an XML sitemap, and hreflang tags linking the JP/EN page pairs together.
```

---

## Notes on sequencing
- Do Prompts 1–3 in one sitting so the design system and homepage land together — it's easier to review the visual direction once, early, than to fix it after five pages are built on top of it.
- Prompt 5 (contact form) needs a decision from you first: which email/form service you want to use. Happy to help you weigh options if you're not sure — just ask before running that prompt.
- Prompts 6 and 7 can happen in either order or in parallel once the design system is in place.
