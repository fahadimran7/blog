# blog

```sh
npm install
npm run dev                               # http://localhost:4321
npm run new "Post title" tag1 tag2         # new draft in src/content/posts/
npm run build && npm run preview           # production build + search index
```

Write a post: add `src/content/posts/YYYY-MM-DD-slug.md`, set `draft: false`, push.
Personal details live in `src/site.config.ts`. See `CLAUDE.md` for conventions.

Deploy anywhere static: build command `npm run build`, output `dist/`.
