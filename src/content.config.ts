import { defineCollection } from "astro:content";
import { z } from "astro/zod";
import { glob } from "astro/loaders";

// `date: 2026-10-21` or `date: 2026-10-21 17:05`. Times are only used to order
// same-day posts, so they're read as UTC to keep the displayed day unchanged.
const postDate = z.preprocess(
  (v) => (typeof v === "string" && /^\d{4}-\d{2}-\d{2}[ T]\d{2}:\d{2}$/.test(v) ? `${v.replace(" ", "T")}:00Z` : v),
  z.coerce.date(),
);

const posts = defineCollection({
  // Files are named YYYY-MM-DD-slug.md; the URL uses only the slug.
  loader: glob({
    pattern: "**/*.md",
    base: "./src/content/posts",
    generateId: ({ entry }) =>
      entry.replace(/\.md$/, "").replace(/^\d{4}-\d{2}-\d{2}-/, ""),
  }),
  schema: z.object({
    title: z.string(),
    date: postDate,
    updated: postDate.optional(),
    description: z.string(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

export const collections = { posts };
