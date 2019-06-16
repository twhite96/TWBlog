---
title: "Day 9: Finishing Intermediate JavaScript on Treehouse Plus: New Contributor"
author: Tiffany White
date: "2015-10-18"
category: "Daily Progress"
cover: 1.jpg
---

![](1.jpg)

<h3>Traversing the DOM</h3>

So I learned more about traversing the DOM with JavaScript instead of the sugary jQuery library which makes me feel great. I like jQuery and all, but knowing how to code something in pure JavaScript is something I think every new developer needs to learn and learn <strong>before</strong> learning any libraries or learning concurrently with JavaScript, like Treehouse does with it’s jQuery and JavaScript courses.

One of my favorite things about this was instead of having to use the `onclick()` event handler to traverse a certain part of the DOM (when something is clicked) you could listen for any type of click events with `addEventListener()` to listen for a click on an element specified as the argument to the method. For instance here:



```js
addButton.onclick = addTask;
//Set the click handler to the addTask function
addButton.addEventListener("click", addTask);
addButton.addEventListener("click", ajaxRequest);
```

This is much faster and easier than traversing each element with the `onclick()` method.

<h3>Welcome Aboard Nick Lash as a New Contributor to the Blog</h3>

Nick and I connected on LinkedIn and, impressed with my social media and blogging output, reached out to me to collaborate on the blog and my podcast which is no longer active. I found a place for him to write here and he will be a co-host on my weekly show which hasn’t been weekly in a minute. My fault totally. But that changes with Nick on board.

Thanks Nick and I hope you get something out of it. I hope my readers enjoy his posts as well. You can find Nick on <a href="https://twitter.com/NicholasLash">Twitter</a>.
