---
title: "You can just change it"
date: 2026-10-21 13:40
description: "T3 Code didn't have a place to keep follow-up prompts, so I asked Claude to add one."
tags: ["ai", "open-source"]
---

I've been using [T3 Code](https://t3.codes/) for the past few weeks. While an agent works on a prompt, I usually end up with follow-ups I want to send next. Most of them are issues I notice while testing the previous output, and they often have a screenshot or a recording attached.

I wanted a place to keep those so I don't forget them, and I didn't want to open another app for it. T3 Code is open source, so I asked Claude to add it. A couple of prompts later it was working.

It's built on the stash feature T3 Code already had. There's a Later tab for follow-ups and a Templates tab for prompts I reuse a lot. Templates don't get cleared when you send them.

<video src="/posts/just-change-it/prompts-panel.mp4" poster="/posts/just-change-it/prompts-panel.jpg" controls muted playsinline preload="none" width="1280" height="830"></video>

Code's on [my fork](https://github.com/fahadimran7/t3code/tree/feat/prompts-surface) if anyone wants it.

A few years ago I wouldn't have done this. I'd have had to figure out someone else's codebase first, and for something this small I would've opened an issue and waited, or just lived without it.

Now if I'm using something open source and want it to work differently, I can ask an agent to change it. In my experience it does a pretty good job most of the time. I don't have to wait for anyone to ship it.

I think I'm going to do this a lot more.
