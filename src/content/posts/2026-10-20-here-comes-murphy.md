---
title: "Here comes Murphy"
date: 2026-10-20
description: "A system design question from the masterclass I'm taking, and my take on it as someone still learning this stuff."
tags: ["system-design"]
---

![Tweet by @system_monarch: "Netflix staff system design round. Interviewer: One of your 200 instances has a bad config. It returns a 500 error in 2ms for every request. Your load balancer uses least-connections. Within a minute, 40% of all traffic is going to the broken instance. Why?"](./images/netflix-least-connections.jpg)
*Screenshot: [@system_monarch](https://x.com/system_monarch) on X.*

This got posted in the [system design masterclass](https://www.umer-farooq.com/system-design-masterclass) I'm taking. There was a lot of back and forth on it, which helped me a lot, so here's my two cents. I'm still a student here and most of this stuff is new to me, so I might be wrong about some of it.

The health check is probably only checking that the server is up and that the basic services are running. That part is fine on the broken instance, so the check returns a 200 and it stays in rotation.

The 40% comes from least-connections. The broken instance fails every request in 2ms, so it always has the fewest open connections, and the load balancer keeps sending it more traffic.

The actual problem is the bad config. We have a running joke in our WhatsApp group whenever something breaks: here comes [Murphy](https://en.wikipedia.org/wiki/Murphy%27s_law). This time Murphy is sitting in the config.

The fix I'd go with is proper monitoring on every instance. Observability (I still can't spell it on the first try) matters a lot when you're designing a large system. If the error rate for an instance goes above some threshold, it pages someone. That person can fix the config, or kill the instance and provision a new one.

You could probably automate that too. I haven't looked into how people do it yet, so I'm not sure. But a system that kills instances and spins up new ones based on error rates, with no one involved, seems scary to me. My brain is more relaxed with a human in the loop for this one.

That's my take, anyway.
