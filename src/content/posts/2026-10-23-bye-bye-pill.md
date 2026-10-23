---
title: "Bye bye, Pill"
date: 2026-10-23
description: "I'm sunsetting Pill, the scratch pad app I vibe coded to hold my follow-up prompts."
tags: ["ai", "programming"]
draft: false
---

I worked on an app called Pill for a while. I've decided to sunset it.

Pill was inspired by two apps. The interface came from [Clicky](https://www.heyclicky.com/). If you don't know it, it's an AI assistant that looks at your screen, and you can do all sorts of cool stuff with it. It's a really good product, and I'm a really big fan of [Farza](https://x.com/FarzaTV). He posted a reel on Instagram where the agent collapsed into a bubble on screen, kind of like a chat bubble, and you could click on it and it would expand and do all sorts of things. I really liked that interaction.

The functionality came from [Copper](https://shadcn.com/copper), an app by shadcn. You write follow-up prompts and save them someplace. Copper is paid, and I didn't want to pay for it.

So I tried vibe coding it, and it turned out surprisingly well. It was a scratch pad that would live on your screen, pill shaped, and it would expand when you hover over it. You could write things you wanted to remember for later and attach images. Then there were more features like categories, one click to send into any app, copying multiple things, and stuff like that.

<video src="/posts/bye-bye-pill/pill.mp4" poster="/posts/bye-bye-pill/pill.jpg" controls muted playsinline preload="none" width="1664" height="1080"></video>

My main use case was this: when I'm working with an agent, I usually have follow-up prompts. And before you say I should be token maxing and just use a new thread or a worktree: there are legitimate use cases where you have to work in the same thread, especially when you're iterating on UI. The fixes depend on each other, and usually the output of the first one is needed for the second. So yeah, don't give me that.

Natively, I don't think Claude Code has a very good way to handle this. There is a queue feature, but sometimes you add a few prompts to the queue, then the original prompt comes back and you notice it has an issue. Now all of the prompts in the queue need to go after that issue is fixed. It becomes a mess.

So I would write those prompts in Pill, work in Claude Code, and send them off once the work was done.

That went well for some time, but then I started using T3 Code. T3 Code has a better feature for stashing your prompts, and I made it even better for my use case: I [asked Opus 5.5 to build a UI for it](/posts/just-change-it) inside the T3 Code app. That covered all of the use cases I had for Pill.

Pill was primarily built for myself, so if I'm not using it, I don't think there's any point in continuing to work on it. It's not exactly a clipboard manager either. There are a lot of those for Mac, like [Maccy](https://maccy.app/), and they're pretty good. Pill is not that. So I've taken down the website and archived the repo. I did spend money on the domain, which kind of sucks now. I might use it for some other project in the future, maybe.

There's this thing called the [sunk cost fallacy](https://en.wikipedia.org/wiki/Sunk_cost#Fallacy_effect), and I think I was a victim of it for some time. My thought process was that if I could make Pill better, I would start using it. And I did add a lot of features. There was a complete redesign, a lot of animations and all these "shashkay".

But sometimes the solution to a problem is very simple, and it doesn't need an app at all. This is very hard for us developers using AI, because now we just point Opus at anything and everything and try to build an app. If something works in your existing workflow, or a slight change to a tool you already use means you don't have to context switch, that will always beat a third-party app, if that's the entire use case.

That's what happened with me. I didn't earn a single penny, but I learned something, and I think there's an elegance in simplicity.

So that was it for Pill. Bye bye. It was vibe coded anyway.
