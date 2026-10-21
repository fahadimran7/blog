// @ts-check
import fs from "node:fs";
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import { SITE } from "./src/site.config.ts";

// Map /posts/<slug> → last modified date (updated ?? date) for sitemap <lastmod>.
const POSTS_DIR = "./src/content/posts";
const lastmod = new Map(
  fs.readdirSync(POSTS_DIR).filter((f) => f.endsWith(".md")).map((f) => {
    const src = fs.readFileSync(`${POSTS_DIR}/${f}`, "utf8");
    const field = (/** @type {string} */ k) => src.match(new RegExp(`^${k}:\\s*["']?(\\d{4}-\\d{2}-\\d{2})`, "m"))?.[1];
    const slug = f.replace(/\.md$/, "").replace(/^\d{4}-\d{2}-\d{2}-/, "");
    return [`/posts/${slug}`, field("updated") ?? field("date")];
  }),
);

export default defineConfig({
  site: SITE.url,
  trailingSlash: "never",
  build: { format: "file" },
  integrations: [
    sitemap({
      filter: (page) => !page.endsWith("/search"),
      serialize(item) {
        const date = lastmod.get(new URL(item.url).pathname);
        if (date) item.lastmod = new Date(date).toISOString();
        return item;
      },
    }),
  ],
  markdown: {
    shikiConfig: { theme: "github-dark-default" },
  },
});
