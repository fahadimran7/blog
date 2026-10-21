#!/usr/bin/env node
// Usage: npm run new "My post title" [tag1 tag2 ...]
import fs from "node:fs";
import path from "node:path";

const [title, ...tags] = process.argv.slice(2);
if (!title) {
  console.error('Usage: npm run new "My post title" [tag1 tag2 ...]');
  process.exit(1);
}

const now = new Date();
const date = [now.getFullYear(), now.getMonth() + 1, now.getDate()].map((n) => String(n).padStart(2, "0")).join("-");
const time = [now.getHours(), now.getMinutes()].map((n) => String(n).padStart(2, "0")).join(":");
const slug = title.toLowerCase().normalize("NFKD").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
const file = path.join("src/content/posts", `${date}-${slug}.md`);

if (fs.existsSync(file)) {
  console.error(`Already exists: ${file}`);
  process.exit(1);
}

fs.writeFileSync(
  file,
  `---
title: ${JSON.stringify(title)}
date: ${date} ${time}
description: ""
tags: [${tags.map((t) => JSON.stringify(t)).join(", ")}]
draft: true
---

`,
);
console.log(`Created ${file}  (draft: set draft: false to publish)`);
