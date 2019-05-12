---
title: Concise, Modular JavaScript
author: Tiffany White
date: "2017-03-18"
category: "Web Development"
cover: 1.png
---


Working with JavaScript again at Treehouse, I went over the Arrow Syntax again[^1].

Before it really wasn’t making much sense. I mean, I *thought* I had it down, but really, it was too fast and too complicated for me at the time. I wanted to learn ES2015 and write, clean, concise, modular javascript.

## So What’s Different?

I actually rewatched the videos with Andrew Chalkley this time[^2].

Take a look at this code:

```js
const name = "Andrew";
const sayName = function() {
  const message = "My name is " + name;
  console.log(message);
}
// Two lines of code, cannot reduce to one line.
const sayName = () => {
  const message = "My name is " + name;
  console.log(message);
}
const sayBye = () => {
  console.log("Bye " + name);
}
```

Here we are taking no arguments passed to the function `sayName()`[^3]. With arrow functions, we can write modular, clean code[^4]. We can get rid of the `function` keyword and replace it with `=>`. Pretty nifty, eh?

## Single Argument Functions

Take a look at this code:

```js
const square = function(x) {
  return x * x;
}
// One argument and one line of code you can remove the parens, the return statement, and curly braces
const square = x => x * x;
const cube = (x) => {
  return square(x) * x;
}
```

When we have a single argument passed to a function, much like the no arguments function, we replace the `function` keyword with an `=>`. But we can also *remove the curly brackets, the parens, and the return statement*.[^5]

This is getting pretty awesome.

## Multiple Argument Functions

Take another gander at this code:

```js
// One line of code and multiple arguements can be reduced to one line but because of multiple arguements you need to keep the parens.
const multiply = (x, y) => x * y;
const add = (a, b) => {
  return a + b;
}
const subtract = (a, b) => {
  return a - b;
}
```

Here, we can do pretty much the same thing as in the single argument function, only we need to keep the parens. Still, you can get rid of the curly braces, and the one line of code in the block.

## It’s Really All The Same

Check out this snippet:

```js
//Function Declaration
function divide1(a, b) {
  return a / b;
}
//Function Expression
const divide2 = function(a, b) {
  return a / b;
}
//Arrow Function Expression
const divide3 = (a, b) => {
  return a / b;
}
//Arrow Function Expression - concise
const divide4 = (a, b) => a / b;
```

It’s just a cleaner, more modular way to write code. I hear you can write modular JavaScript with Promises but I am not there yet.

## Enrolled in Coursera Course

I am doing their Java Data Structures and Algorithms course. They waived the tuition and so I am starting soon. The capstone is what I am really looking forward to. I need to put in the work: 4-6 hours a week. Not too bad.
## Thoughts?

Have anything to add? Leave me a comment. :-)
<iframe width="480" height="236" src="//giphy.com/embed/l3q2zVr6cu95nF6O4" frameborder="0" webkitallowfullscreen="webkitallowfullscreen" mozallowfullscreen="mozallowfullscreen" allowfullscreen="allowfullscreen"></iframe>


[^1]: I called them lambda functions in [this post](https://helloburgh.me/2016/08/13/es6-and-lambdas/). I don’t think they’re the same, however.
[^2]: I actually rewatched them a couple times and downloaded the completed workspace.
[^3]: Learning ES2015 and so we are now using `const`.
[^4]: Much to the rejoicing of [Uncle Bob Martin](https://twitter.com/unclebobmartin?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor).




[^5]: As stated in the comment, you can only do this when there is one line of code in the code block and one argument.
