---
title: Measuring performance
description: Performance is a problem. The evidence is clear – performance affects your business goals, your user’s happiness, and it impacts areas with poor connectivity even more than you might expect.
date: "2019-03-10T01:00:00.000Z"
---

Performance is a problem. The evidence is clear – performance affects your business goals, your user’s happiness, and it impacts areas with poor connectivity even more than you might expect.

It’s really tempting to immediately think, “I already know what to do! Let’s just fix the problem”

Certainly, there are some quick performance wins out there. However, if you want to permanently and certainly improve performance, we need a different approach.

> You can’t improve what you can’t measure

This is a popular saying. The rationale is: changing something requires knowledge of both what you want to change, and critically, *how to tell if your changes worked*. It’s important to know if your changes have made an impact, and by how much, so that you know whether you should keep performing that action, or try something else.

However, I think it is still missing something

> You can’t **meaningfully** improve what you can’t **meaningfully** measure

We want to be measuring the right thing. If we measure the wrong thing, it’s worse than measuring nothing – we think that we’re having an impact, but we are not solving a meaningful problem. We’re just improving random numbers.

So, we must carefully and deliberately examine what it is we’re measuring, and make sure that what we’re measuring is “meaningful”

# What is meaningful?

![A picture of plato](./plato.png)

That’s a great question. In the context of the universe… hard to say. But in a performance context, we have a clear answer:

*Meaningful = better for our users*

Ultimately, we’re making websites and apps for users. We’re fixing performance for our users, in the hope that we’re making existing experiences great, and enabling more (and possibly different!) users than we had before to use the information we hold.

# A user centric definition of performance

We’ve found a problem that is blocking this: performance. Let’s define “performance” for our purposes as:

> The time for a *page* to *load* for a *user*

We can break this down to understand what it really is that we’re trying to measure.

## What is a page?

![A page in a book](./page.png)


From the users perspective, a “page” has the following :

1. Behaviour
2. Appearance
3. Media
4. Information
5. Semantic information

Which, from a computer’s perspective, is:

1. Javascript
2. CSS
3. Assets
4. Data
5. HTML

So if we want to truly understand a page, and how it is loaded, from the users perspective, we have to understand how these things get delivered to the user

<style>
.pageload {
  display: flex;
  width: 100%;
  overflow: scroll;
  background: black;
  color: white;
  margin: 10px 0;
}

.item {
  display: flex;
  flex-direction: column;
  margin: 5px;
  text-align: center;
  min-width: 150px;
}

.row {
  background: white;
  color: black;
  padding: 10px;
  margin-bottom: 5px;
}


.item.spa .row {
  background: #643C97;
  color: white;
}
</style>

<div class="pageload">
    <div class="item">
        <div class="row">DNS Lookup</div>
    </div>
    <div class="item">
        <div class="row">GET request</div>
    </div>
    <div class="item">
        <div class="row">Parse HTML</div>
    </div>
    <div class="item">
        <div class="row">Fetch JS</div>
        <div class="row">Fetch CSS</div>
    </div>
    <div class="item">
        <div class="row">Parse JS</div>
        <div class="row">Parse CSS</div>
    </div>
    <div class="item">
        <div class="row">Layout / paint</div>
    </div>
    <div class="item">
        <div class="row">Fetch deferred JS</div>
    </div>
    <div class="item">
        <div class="row">Fetch more data</div>
    </div>
    <div class="item">
        <div class="row">Event handler</div>
    </div>
</div>


But, are we done? Traditionally, yes. Each of these iterations is considered a page. However, today, the user might perceive something quite different as a “page”

<div class="pageload">
      <div class="item">
        <div class="row">DNS Lookup</div>
      </div>
      <div class="item">
        <div class="row">GET request</div>
      </div>
      <div class="item">
        <div class="row">Parse HTML</div>
      </div>
      <div class="item">
        <div class="row">Fetch JS</div>
        <div class="row">Fetch CSS</div>
      </div>
      <div class="item">
        <div class="row">Parse JS</div>
        <div class="row">Parse CSS</div>
      </div>
      <div class="item">
        <div class="row">Layout / paint</div>
      </div>
      <div class="item">
        <div class="row">Fetch deferred JS</div>
      </div>
      <div class="item">
        <div class="row">Fetch more data</div>
      </div>
      <div class="item">
        <div class="row">Event handler</div>
      </div>
      <div class="item spa">
        <div class="row">Push state</div>
        <div class="row">Load data</div>
      </div>
      <div class="item spa">
        <div class="row">Rerender</div>
      </div>
    </div>

Noting the addition at the end – from the users perspective, there is not much difference between a page loaded through an SPA transition, and the first page load of a site.

So, ultimately, a page is:

* A HTML document
* A single page app state
* An app state
* Whatever your users think it is

## What is “loading”?

Watch the video below, and decide when you think the page has loaded

`youtube: https://www.youtube.com/watch?v=voHaPuTVjvE`

> Load is not a single moment in time — it’s an experience that no one metric can fully capture. There are multiple moments during the load experience that can affect whether a user perceives it as "fast" or “slow” – https://w3c.github.io/paint-timing/ 

There is no one event, or one easy answer to say when a page has loaded. It might even require knowledge of the future! You may think a page has loaded, until you see that there was actually more to come. It’s also a spectrum – we have varying states of “loaded-ness”, and a metric compresses this into a single number.

For this reason, we need to be very careful about how we’re picking the metric. It should represent what the user thinks of as “loading”, and ideally, would have a way of representing the user’s perception of "loaded-ness".

## Who are our “users”?

![The game of guess who](./users.png)


Who your users are might be obvious, but that may also be hard to determine. There are many variables to consider: users with fast or slow cpu’s, users with fast or slow internet connections. They may be a regular visitor, or it may be their first time. All of these factors impact the overall experience, and it’s important to measure them to get a better understanding of performance.

---

Now we know what is involved in loading a page, from the users perspective, we can start thinking about which metrics to actually use to measure this experience

