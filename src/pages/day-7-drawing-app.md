---
ID: 562
title: "Day 7: Drawing App"
author: Tiffany White
date: "2015-08-20"
layout: post
link: >
  https://tiffanywhite.tech/day-7-drawing-app/
published: true
tags:
  - daily progress
  - day 7
  - drawing app
  - Treehouse
categories:
  - Daily Progress
---
<img class="aligncenter" src="https://res.cloudinary.com/twhiteblog/image/upload/v1547077532/2015-8-19-_2015-08-19_-_Screenshot_2015-08-19_-_-_nreumn.jpg" alt="Day_7" />

We used more HTML5 and JavaScript in this exercise. We had an HTML5

```html
<canvas></canvas>
```
element which we have to use JavaScript interactivity to; we can’t use pure jQuery to make this app work so if JavaScript is disabled, the app won’t work.

We used new event handlers like


```js
$canvas.mousedown(function(e) {
 lastEvent = e;
 mouseDown = true;
}).mousemove(function(e) {
}).mouseup(function() {
}).mouseleave(function() {
});
```

```js
$canvas.mousedown(function(e) {
 lastEvent = e;
 mouseDown = true;
}).mousemove(function(e) {
}).mouseup(function() {
}).mouseleave(function() {
});
```


Obviously this code doesn’t work in its current state, but I digress. So drawing the line in the app consists of

`.mousedown() .mousemove() .mouseup() .mouseleave()`

so when you click initally, mousedown, move the mouse, mousemove, release the button on the mouse, mouseup, and when the mouse leaves the DOM element it was bound to, mouseleave, which won’t make an awkward line when the mouse comes back into the DOM element.

Learned new methods like

`.siblings()`

which will access the siblings in a child element and execute an event handler or another method.

We learned JavaScript specific ways to make the canvas interactive. The code looks like this:

```js
$canvas.mousedown(function(e) {
 lastEvent = e;
 mouseDown = true;
}).mousemove(function(e) {
 if(mouseDown) {
 context.beginPath();
 context.moveTo(lastEvent.offsetX, lastEvent.offsetY);
 context.lineTo(e.offsetX, e.offsetY);
 context.strokeStyle = color;
 context.stroke();
 lastEvent = e;
 }
}).mouseup(function() {
 mouseDown = false;
}).mouseleave(function() {
 $canvas.mouseup
});
```
`context.beginPath()`

and such are the ways in which you can implement drawing interactivity to your app. The full thing is on CodePen or just work with it here:

<iframe height='610' scrolling='no' title='Canvas Example' src='//codepen.io/twhite96/embed/preview/bdPrvw/?height=610&theme-id=22729&default-tab=js,result' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/twhite96/pen/bdPrvw/'>Canvas Example</a> by Tiffany White (<a href='https://codepen.io/twhite96'>@twhite96</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>