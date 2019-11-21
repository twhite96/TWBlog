#! /usr/bin/env node

const fs = require('fs')
const slugify = require('slug')
const dateFns = require('date-fns')
const title = process.argv[2]

if (!title) {
 throw 'a title is required!';c
}
const slug = slugify(title.toLowerCase());
const date = dateFns.format(new Date(), 'YYYY-MM-DD');
const dir = `./_drafts/${date}-${slug}`;

if (!dir) {
  throw 'this directory does not exist!';
}

fs.writeFileSync(
 `${dir}.md`,
`---
title: "${title}"
layout: post
tags: []
featured_image:
---`,
 function(err) {
 if (err) {
 return console.log(err)
 }
 console.log(`${title} was created!`)
 },
)
