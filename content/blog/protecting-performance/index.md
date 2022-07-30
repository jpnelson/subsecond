---
title: Protecting performance
description: Performance is a problem. The evidence is clear – performance affects your business goals, your user’s happiness, and it impacts areas with poor connectivity even more than you might expect.
date: "2019-03-10T03:00:00.000Z"
---

Performance is important for your users, your business, and the world. We need to pick good metrics that reflect real user experiences – and there are many available to choose from.

So now we've picked our meaningful metric, and a tool to measure it with.

Now what?

Maybe you're thinking that now we need to actually fix performance. This is undoubtedly true! We won't address that in this blog though – there is plenty of dedicated resources for telling you what to improve. A great starting resource is [the audits panel](https://developers.google.com/web/tools/lighthouse/) in the Chrome devtools.

A natural follow up question might be, how long will it take to fix those performance issues?

This is _not_ the right question to be asking. We're in it for the long run – performance is a cultural change we need to make, not a one off effort that we can do once.

# The planning phase

Often, performance regressions happen when a feature request materialises in a ticket of some form – a feature that will degrade performance is requested, and it's too late to reverse course. At this point, it's already too late to change things – we need a way of influencing planning much earlier than this, and we need a structured way of making sure that this conversation about performance happens much earlier, during the planning phase.

# Performance budgets

![Piggy bank](./budget.jpg)

[Performance budgets](https://speedcurve.com/blog/performance-budgets-in-action/) are a great way of having this conversation in a structured way. The key steps are:

## 1. Choose the right metrics

During the previous part, we talked about choosing the right metric – it's important to do this, so that we're focusing on a meaningful metric to improve.

## 2. Get everyone to agree on a limit

Whoever makes planning decisions needs to agree that the metric (and the limit) that you have chosen for your budget is a good goal.

## 3. Bring it up during planning

When engineering is involved in planning decisions, this goal needs to be kept in mind and talked about. When things being talked about would impact the performance budget, this needs to be brought up.

## 4. Figure out how to stay in budget

During this planning phase, compromises can be sought. It might be that the feature itself can be changed to perform better, or it might be that some other performance improvement can be made to allow the budget to be kept overall.

## Choosing a limit

![A picture of a speed limit sign](./limit.png)

Choosing an exact number for the limit is difficult, but here are some things to keep in mind:

0.1 seconds - tasks are considered **"instant"**, in that the user does not perceive a delay (eg. good goal for first input delay)
1.0 seconds - **flow of thought** is maintained throughout tasks (good goal for subsequent response times)
10 seconds - **task switch** occurs after this (definitely do not aim for longer than this on any metric)

Other questions to ask might be:

> What is the current state?

or

> What are your competitors doing?

Either of these questions can produce a limit that should be fairly easy to agree to – if your competitor is beating you, a sensible goal might be to beat your competitor!

[performancebudget.io](https://performancebudget.io) is a useful tool for choosing a bundle size metric based on page load time – but remember from the previous post, total bundle size may not correlate with the real user experience, if heaving caching or code splitting is happening. It's important to measure real user experiences too, and it's good to pick a budget based on a metric more like that.

# Apdex

[Apdex](http://apdex.org/overview.html) is another useful, "meta metric" that can be used to protect your performance and measure it at a high level.

In the context of meaningful metrics however, there are two things that I would warn against in the usage of Apdex.

## Pick your t value carefully

Apdex works by picking a "t" value, that represents what a user would consider a "tolerable" page load. Anything less than t is considered "satisfied", and anything less than `t*4` is considered "tolerable"

Picking a t value of anything much more than 1s can lead to misleading metrics. Consider a t value of `t=2`. Page loads taking less than 8 seconds would be considered "tolerating", which is quite close to the limit before a user will tasks switch. It is likely that users who load pages in 8 seconds are dissatisfied in lots of use cases, and in this case, the Apdex metric does not reflect it well.

## Pick your "load" metric carefully

Apdex also requires a concept of "load time" itself. If you plug in an incorrect load time (maybe you would be using DOMContentLoaded instead of Time to interactive), your Apdex will be incorrect too.

With this in mind, Apdex can be a useful tool for protecting performance. It can be used to normalise metrics into a simple number – this might be useful for aggregating Apdexes. However, without a shared t value, it is hard to compare different Apdex numbers, and hard to relate to their values. A budget or goal measured in seconds can be easier to relate to, and compare.

---

Over the course of this blog series, we have learnt to measure _real_ user experiences, and pick the right metric to do that. Quickly check that the metric you have chosen is being triggered when in a meaningful state.

Ultimately, for me, dollars aren't inspiring – but making the internet better for everyone, and enabling the open exchange of information for the world, is an inspiring goal. Meaningful metrics are an important step to this goal. Let's make the internet better for everyone! ✨
