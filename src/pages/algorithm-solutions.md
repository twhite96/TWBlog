---
ID: 1179
title: Algorithm Solutions
author: Tiffany White
date: "2016-06-19"
layout: post
link: >
  https://tiffanywhite.tech/algorithm-solutions/
published: true
tags: uncategorized
categories:
  - Daily Progress
  - Programming
---


![](https://res.cloudinary.com/twhiteblog/image/upload/v1552108351/Header%20Images/algos.png)

&nbsp;

I’ve completed three more Free Code Camp algorithms since my last go on May 30th.

I needed less guidance on these particular algorithms, all but one. The algorithm solutions weren’t too hard to come up with, however on <em>Slasher FLick</em> I really overcomplicated my solution. I was thinking way too hard about how to solve it— new array? Should I `return newArray` as a part of the function call? Do I `push` the result of the cut off part of the array into `newArray`?

The instructions were:
<blockquote>Return the remaining elements of an array after chopping off n elements from the head.

The head means the beginning of the array, or the zeroth index.

Remember to use Read-Search-Ask if you get stuck. Write your own code.

Here are some helpful links:

Array.slice()

Array.splice()</blockquote>
Seems simple enough. But I was thinking too much and making it more complex than it needed to be because of my recent previous solutions.

I used `splice` instead of `slice` as `splice` returns the chopped off part as a new array. For these instructions, here was the initial code:

```js

function slasher(arr, howMany) {
// it doesn't always pay to be first

}
slasher(["burgers", "fries", "shake"], 1);
```

Originally I had this:


```js
function slasher(arr, howMany) {
// it doesn't always pay to be first
  var newArray = [];
  arr.splice(0, howMany);
   return newArray;
}
slasher(["burgers", "fries", "shake"], 1);
```


I would get a double array, because like I said, `splice` returns a new array from the chopped off part. So I tried to use a non-initialized variable— `var newArray;`— that returned a TypeError.

I went to the <a href="https://www.freecodecamp.com/wiki/en/" target="_blank">Free Code Camp wiki</a> to look at the explanation in more detail. I finally came up with an <em>Aha</em>! Moment. I only needed to return the array that was resulting in the `splice` method.

I settled on my final solution here:


```js
function slasher(arr, howMany) {
// it doesn't always pay to be first
  arr.splice(0, howMany);
   return arr;
}

slasher(["burgers", "fries", "shake"], 1);
```

Not too bad.

<h2>Getting Easier?</h2>
That one was easier to do. I hardly needed any help from Gitter. But then…

<strong>Mutations</strong>.

The instructions:

> **Mutations**

> Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.
> For example, `["hello", "Hello"]`, should return true because all of the letters in the second string are present in the first, ignoring case.
> The arguments `["hello", "hey"]` should return false because the string "hello" does not contain a "y".
> Lastly, `["Alien", "line"]`, should return true because all of the letters in "line" are present in "Alien".
> Remember to use Read-Search-Ask if you get stuck. Write your own code.
> Here are some helpful links:
> String.indexOf()

I thought, <em>okay. I got this.</em>

The code:

```js
function mutation(arr) {

}

mutation(["hello", "hey"]);
```
I started out with this:

```js
function mutation(arr) {

  for (var i = 0; i < arr.length; i++) {
    if (arr === arr.indexOf(i)) {
    return true;
   } else {
    return false;
  }

}

mutation(["hello", "hey"]);
```


That didn’t work. I went to Gitter.

A guy there told me I needed to compare two arrays. I couldn’t figure out what he meant by that. <em>To the wiki</em>.

There I found out I should use `toLowerCase` and think about turning the array strings into an array of `chars`.

So then I came up with this:

```js
var arr1 = arr.toLowerCase();
var arr2 = arr.toLowerCase();
var chars = arr1.split(" ");
```

as part of the equation. That also didn’t work. By this time, I am tired, it is late and I just wanted this to work. I went back to the wiki and found the solution.

I wouldn’t have ever came up with this yesterday night:

```js
function mutation(arr) {
  var arr1 = arr[1].toLowerCase();
  var arr2 = arr[0].toLowerCase();
  for (var i = 0; i < arr1.length; i++) {
    if (arr2.indexOf(arr1[i]) < 0)
      return false;
  }
return true;
}

mutation(["hello", "hey"]);
```


I am studying this. I am trying to figure out what is going on here and I will probably go to Code Newbie Slack to ask around.
<h2>Back At It</h2>
I am doing the <strong>Falsy Bouncer</strong> algorithm after this post. It looks easy enough, and if I get stuck I will go to Gitter instead of the wiki as the solutions are there. You don’t have to look, but I was tired and frustrated last night which is never a good mix.

I will also be reading all the algorithm books I have and the Coursera courses I downloaded from Stanford.