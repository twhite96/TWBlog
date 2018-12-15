---
ID: 972
title:'Free Code Camp Portfolio: Unlocked
author: Tiffany White
date: "2016-03-19"
layout: post
link: >
  https://tiffanywhite.tech/portfolio-unlocked/
published: true
tags: uncategorized
categories:
  - Daily Progress
  - Free Code Camp
  - Front-End
  - Programming
  - "Tiffany's Posts"
  - Web Development
---
So I started the portfolio project on March 10th and finished it today. I had help from the Gitter chat but not as much as last time.

I took the example code and re-engineered it to fit what I wanted to do. I added an unordered list, a cover photo, a mailto: link and a few other things.

The thing I struggled with the most was horizontal scrolling on mobile with Bootstrap. When looking at the Pen on mobile, you had some overflow, which totally defeats the purpose of a responsive design! So I went to Google and found a few Stack Overflow articles and found the right media query along with some other css that I edited to fit my project. I used:
```css
@media screen and (max-width: 767px) {
  body {
  overflow-x: hidden !important;
}
.container {
   max-width: 100% !important;
   overflow-x: hidden !important;
   margin-left: auto;
   margin-right: auto;
   padding-left: 0px;
   padding-right: 0px;
   }
}
```
This allowed me to negated the overflow on the x axis part of the page which is horizontal. You essentially hide the overflow. But that wasn’t enough. Adjusting the margins and padding really made the responsiveness on my iPhone so much better.

You can find the Pen below.

<iframe height='300' scrolling='no' title='Portfolio Jank' src='//codepen.io/twhite96/embed/zLmWgK/?height=300&theme-id=22729&default-tab=html,result' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/twhite96/pen/zLmWgK/'>Portfolio Jank</a> by Tiffany White (<a href='https://codepen.io/twhite96'>@twhite96</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>