---
title: "My First Module: Lessons"
author: Tiffany White
spoiler: "Taking a script from Joel Hooks, I struggled with making it an npm module. Here are some mistakes and lessons learned."
date: 2019-02-07
---


[Joel Hooks](https://twitter.com/jhooks), creator of [egghead.io](https://egghead.io) [wrote a post](https://joelhooks.com/a-handy-npm-script-for-creating-a-new-gatsby-blog-post) on automating new posts for Gatsby with a basic npm script.

I decided that, with a few modifications specific to [Gatsby Starter Blog](https://www.gatsbyjs.org/starters/gatsbyjs/gatsby-starter-blog/), I would publish it as a package on `npm`.

## First to market? Hardly ever

I had the seriously amateur notion that I would be the only one with this script in the registry. There were a couple others already, some more thought out than mine, using *way* more technology than needed but hey. I guess it looks good on your GitHub.

It didn't stop me though.

I continued to research how to make the module and publish it.

## Errors

There are too many errors here to list. Last night I was so frustrated with Googling, I went to the `npm` support forums and asked what seemed to be like a newb question.

I got a response though that got me thinking about how I was structuring my `package.json` file.

Take a look at the old `package.json` file:
```js
{
  "name": "new-post-gatsby-starter-blog",
  "version": "1.1.5",
  "description": "create a new post in gatsby starter blog format with a simple command",
  "main": "/bin/index.js",
  "repository": {
    "type": "git",
    "url": "git+https://github.com/twhite96/gatsby-starter-blog-new-post.git"
  },
  "bin": {
    "new-post": "bin/new-post.js"
  },
  "keywords": [
    "gatsby-starter-blog",
    "blog",
    "post",
    "gatsby",
    "npm"
  ],
  "author": "Tiffany White",
  "license": "MIT",
  "bugs": {
    "url": "https://github.com/twhite96/gatsby-starter-blog-new-post/issues"
  },
  "homepage": "https://github.com/twhite96/gatsby-starter-blog-new-post#readme",
  "devDependencies": {
    "date-fns": "^1.30.1",
    "slug": "^0.9.3",
    "slugify": "^1.3.4"
  },
  "dependencies": {
    "shelljs": "^0.8.3"
  },
  "scripts": {
    "new-post": "new-post"
  }
}
```

Here, I was using *core dependencies* as *dev dependencies*. I should really research the difference, because when the person on the forums ran my script, he got an error related to having `slug` as a dev dependency:

```js{3}
"devDependencies": {
  "date-fns": "^1.30.1",
  "slug": "^0.9.3",
  "slugify": "^1.3.4"
},
```

I decided to move these to the core dependencies and rerun things.

## Scripts unneeded

Another pain point was that I was cobbling together information from all across the internet and trying to parse it all was a problem. I got information from YouTube, the `npm blog`, Medium, anywhere I could find how to do this, I tried to implement in my own module.

One of the things I was doing wrong was using an arbitrary `npm script` as well as putting the executable in the `bin` folder and specifiying this in the `package.json` file.

I removed the `scripts` object, first. Secondly, whenever I was trying to run it I was running it with `npm run new-post` to which I got the error: `missing script: new-post`. I don't know why that is, but further research is needed on `npm scripts`.

## Global install

The forum commenter showed me *how* he installed it and ran it.

`npm install --global new-post-gatsby-starter-blog`

I wasn't installing it globally and I still don't have it local to a specific project; I am working on this.

He also ran the script with `new-post` and it worked, but there were errors.

One was the `slug` issue. I fixed that, but I was *still* getting weird errors.

## Can't find module <project/bin/new-post>

This one was weird and I attributed it to not having my `main` object pointing to the right file. With that modification and removal of the `scripts` object, everything is working as it should.

## Lesson: research before doing something like this

I did it hastily to just *have it up there first* which meant there were pretty bad errors and frustrations that could have been avoided. I should have done more thorough research so that I wouldn't have skimmed so much information on the topic, then trying to cobble together bits and pieces of videos and articles I found on the web.

Before I publish [Check Yo Self CLI](https://checkyoself-cli.netlify.com/docs/doc1.html) I plan on doing a bit more research and planning.

## Where to Find the Module

You can find it on [npm](https://www.npmjs.com/package/new-post-gatsby-starter-blog) and see releases on my [GitHub](https://github.com/twhite96/gatsby-starter-blog-new-post).

---

### Sign Up for the Newsletter. No spam. I hate that, too.

<iframe scrolling="no" width="100% !important" height="220px" style="border:1px #ccc solid !important" class="lazyload" src="https://buttondown.email/tiffanywhite? as_embed=true"></iframe>

---
<a href="https://www.buymeacoffee.com/twhitedev" target="_blank"><img src="https://www.buymeacoffee.com/assets/img/custom_images/purple_img.png" alt="Buy Me A Coffee" style="height: auto !important;width: auto !important;" ></a>