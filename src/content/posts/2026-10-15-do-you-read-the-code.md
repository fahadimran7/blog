---
title: "Do you actually read the code anymore?"
date: 2026-10-15
description: "Raw thoughts on not reading the code AI writes for me."
tags: ["ai", "programming"]
---

I've seen quite a few videos on this from people like [Theo](https://x.com/theo) and other self-proclaimed "10x devs". And now the [recent talk](https://youtu.be/vDjW_dRyKXY) by [DHH](https://x.com/dhh) at Rails World 2026 really pissed off a lot of people.

![YouTube thumbnail: a man in a suit and sunglasses in front of the words "STOP READING CODE"](./images/stop-reading-code.jpg)

Here's the gist:

"you shouldn't read the code anymore."

"If you want to move fast with AI and you keep reading every line, there's no point, as you can't unlock the productivity gains it promises."

"The rate at which it spews out code makes it nearly impossible for us to keep up anyway."

"Models have gotten so good that they produce better code than most engineers like you and me."

Funnily enough, my own experience has been going the same way.

I'm not saying I'm 10x more productive or building the next unicorn with AI, but in my day-to-day work I've started reading the code less and less. Models like Opus 5.5 and GPT-6 Astra have actually been really good.

But even before that, this had been my workflow for quite some time. I start a conversation with the agent, kind of like I would with a coworker. I talk through the idea and the edge cases, ask for feedback, and clarify the details that are in my head. Once I'm at a place where the flow is mostly clear, I ask the agent to start implementation. It's basically plan mode without using the "plan mode" setting.

I do read the output when we are discussing and push back here and there, but I don't really review the code. And I'm not alone in that. I've talked to colleagues working at other companies, and they feel the same way. It might be that most of us are not doing real "engineering" anyway. Most software is just CRUD with a UI slapped on top, or an AI wrapper with a fancy name. And agents have gotten really good at it.

On my personal side projects, I'm less worried about code quality in general than I would be with a really critical piece of software, since I have one user anyway (yes, me, ofc). But even for work, I've shipped entire features and bug fixes without reading much of the code. It mostly went fine, which is genuinely a shock given where we were just a year ago.

Don't get me wrong, I do believe there should be guardrails. Good test coverage, a CI pipeline that runs those tests on every PR and blocks the merge when something breaks, and a review agent going over the changes. A lot of this is automated now, and having another agent review the code does help. It points out real issues. I've done it, and I see other people doing it as well.

But the fact remains that "humans" aren't really reading the code anymore. Well, at least most of us aren't.

And yes, it is making us dumber. We're offloading more and more of our thinking, reasoning, and our cognitive abilities to these agents and have essentially become a "meat proxy".

I'm not sure how long we can keep doing this, or if there'll come a time when we will focus on the code again. But for now, as the models keep getting better, I think it's only going to get worse for us humans.
