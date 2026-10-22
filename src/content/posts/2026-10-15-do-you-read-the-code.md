---
title: "Do you actually read the code anymore?"
date: 2026-10-15
description: "Raw thoughts on not reading the code AI writes for me."
tags: ["ai", "programming"]
---

I've seen quite a few videos on this from people like [Theo](https://x.com/theo) and other self-proclaimed "10x devs". And now the [recent talk](https://youtu.be/vDjW_dRyKXY) by [DHH](https://x.com/dhh) at Rails World 2026 really pissed off a lot of people.

![YouTube thumbnail: a man in a suit and sunglasses in front of the words "STOP READING CODE"](./images/stop-reading-code.jpg)

The arguments usually go like this:

"You can't unlock the 100000000000x productivity gains we've been promised with AI if you keep reading every line it generates."

"If you're reading most of the code, you aren't generating enough code, and aren't as productive as me aka. [insert fav hype-bro]."

"Models have gotten so good that they produce better code than most "normal" engineers anyway." 

"If [XYZ] big-name company with millions of users can get away without reading code, so can you and your shitty startup with zero users."

Now whether you buy into all of this is on you. I can only say that my own experience has been going in a similar direction. I'm NOT saying I'm 10x more productive or building the next unicorn with AI, but in my day-to-day work I've started reading the code less and less. 

Models like Opus 5.5 and GPT-6 Astra have actually been really good. But even before these, this had been my workflow for quite some time. I start a conversation with the agent, kind of like I would with a coworker. I talk through the idea and the edge cases, ask for feedback, and clarify the details that are in my head. Once I'm at a place where the flow is mostly clear, I ask the agent to start implementation. It's basically plan mode without using "plan mode" explicitly. I do read the output when we are discussing and push back here and there, but I don't really review the code. 

And I'm not alone in that. I've talked to colleagues working at other companies, and they feel the same way. It might be that most of us are not doing real "engineering" anyway. Most software is just CRUD with a UI slapped on top, or an AI wrapper with a fancy name. And agents have gotten really good at building these.

On my side projects, I'm less worried about code quality in general than I would be with a really critical piece of software, since I have one user anyway (yes, me, ofc). But even for work, I've shipped entire features and bug fixes without reading much of the code. It mostly went fine, which is genuinely a shock given where we were just a year ago.

Don't get me wrong, I DO believe there should be guardrails. You shouldn't "vibe" your way into production. Good test coverage, a CI pipeline that runs those tests on every PR and blocks the merge when something breaks, and a review agent going over the changes. A lot of this is automated now, and having another agent review the code does help. It points out real issues. I've done it, and I see other people doing it as well.

But the fact remains that "humans" aren't really reading the code anymore. Well, at least most of us aren't.

And yes, it is making us dumber. We're offloading more and more of our thinking, reasoning, and our cognitive abilities to these agents and have essentially become a "meat proxy".

I'm not sure how long we can keep doing this, or if there'll come a time when we will focus on the code again. But for now, as the models keep getting better, I think it's only going to get worse for us humans.
