# Blog

Personal blog. Astro 7, fully static, zero client JS except the theme toggle, code-copy/heading anchors on posts, and Pagefind on /search.

## "add blog post"

When the user says "add blog post" (with notes, a topic, or a draft):

1. Create `src/content/posts/YYYY-MM-DD-<slug>.md` using **today's date** (or `npm run new "Title" tag1 tag2`, which scaffolds it as a draft).
2. Front matter (validated in `src/content.config.ts`; build fails if wrong):
   ```yaml
   title: "..."
   date: YYYY-MM-DD HH:MM   # time is optional; only orders same-day posts
   description: "One line. Shown on the home page, in RSS and in link previews."
   tags: ["lowercase", "single-word"]
   draft: false          # true = visible in `npm run dev` only
   # updated: YYYY-MM-DD # add when meaningfully editing an old post
   ```
3. Write in the user's voice: short, plain, first person. Use `##` for sections (they become the "On this page" list once there are 2+). Fenced code blocks with a language.
4. Reuse existing tags where possible: `ls` the posts and grep `tags:` first.
5. Run `npm run build` to verify. Don't commit or push unless asked.

URL is `/posts/<slug>` (date prefix is stripped). Never rename a published post's file: it changes the URL.

## Layout

- `src/site.config.ts`: name, domain, bio, social links. Change personal info here.
- `src/content/posts/`: all posts.
- `src/pages/about.md`: about page.
- `src/styles/global.css`: all styling (one file, CSS variables for light/dark).
- `src/pages/og/[slug].png.ts`: build-time share images.
- Sitemap `lastmod` comes from `updated ?? date` (see `astro.config.mjs`).

## Commands

`npm run dev` · `npm run build` (Astro + Pagefind index) · `npm run preview` · `npm run check`
