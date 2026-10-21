import fs from "node:fs";
import satori from "satori";
import { Resvg } from "@resvg/resvg-js";
import type { APIContext } from "astro";
import { SITE } from "../../site.config";
import { fmt, getPosts, type Post } from "../../lib/posts";

const font = (weight: number) =>
  fs.readFileSync(`node_modules/@fontsource/inter/files/inter-latin-${weight}-normal.woff`);
const fonts = [
  { name: "Inter", data: font(400), weight: 400 as const },
  { name: "Inter", data: font(700), weight: 700 as const },
];

export async function getStaticPaths() {
  const posts = await getPosts();
  return [
    { params: { slug: "default" }, props: { post: undefined } },
    ...posts.map((post) => ({ params: { slug: post.id }, props: { post } })),
  ];
}

// Satori takes a React-style element tree; plain objects keep this dependency-free.
const h = (type: string, style: Record<string, unknown>, children: unknown) => ({
  type,
  props: { style, children },
});

export async function GET({ props }: APIContext) {
  const post = props.post as Post | undefined;
  const title = post?.data.title ?? SITE.greeting;
  const sub = post ? fmt(post.data.date) : SITE.url.replace(/^https?:\/\//, "");

  const svg = await satori(
    h("div", { width: "100%", height: "100%", display: "flex", flexDirection: "column", background: "#fdfdfc", fontFamily: "Inter" }, [
      h("div", { display: "flex", flexDirection: "column", justifyContent: "space-between", flexGrow: 1, padding: "64px 72px" }, [
        h("div", { display: "flex", fontSize: 30, fontWeight: 700, color: "#0b6bcb" }, SITE.title),
        h("div", { display: "flex", fontSize: title.length > 60 ? 56 : 68, fontWeight: 700, lineHeight: 1.15, letterSpacing: -1.5, color: "#1d1d1f" }, title),
        h("div", { display: "flex", fontSize: 28, color: "#6b6b70" }, `${SITE.author} · ${sub}`),
      ]),
      h("div", { display: "flex", height: 16, background: "#0b6bcb" }, []),
    ]) as any,
    { width: 1200, height: 630, fonts },
  );

  const png = new Resvg(svg).render().asPng();
  return new Response(new Uint8Array(png), { headers: { "Content-Type": "image/png" } });
}
