import { getCollection, type CollectionEntry } from "astro:content";
import readingTime from "reading-time";

export type Post = CollectionEntry<"posts">;

// Drafts show up in `npm run dev` but never in a production build.
export async function getPosts(): Promise<Post[]> {
  const posts = await getCollection("posts", ({ data }) => import.meta.env.DEV || !data.draft);
  return posts.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

export async function getTags(): Promise<Map<string, Post[]>> {
  const tags = new Map<string, Post[]>();
  for (const post of await getPosts()) {
    for (const tag of post.data.tags) tags.set(tag, [...(tags.get(tag) ?? []), post]);
  }
  return new Map([...tags].sort(([a], [b]) => a.localeCompare(b)));
}

export const minutes = (post: Post) => `${Math.max(1, Math.round(readingTime(post.body ?? "").minutes))} min read`;

export const fmt = (d: Date, opts: Intl.DateTimeFormatOptions = { month: "short", day: "numeric", year: "numeric" }) =>
  d.toLocaleDateString("en-US", { ...opts, timeZone: "UTC" });

export const iso = (d: Date) => d.toISOString().slice(0, 10);
