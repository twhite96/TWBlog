---
title: Completed The First Front-End Project
author: Tiffany White
date: "2016-02-29"
category: "Free Code Camp"
cover: 1.jpg
---

So I finished the first front-end project for Free Code Camp in a couple days. It doesn’t render really well on mobile. I can’t seem to get the button I have at the bottom to do the following with the jQuery I have:

```js
$('.center_button').on('click touchstart', function() {
	$('.center_button').css({
		'position': 'fixed',
		'bottom': 0,
		'left': 0,
		'right': 0
	});
	$('p').toggle(1000);
});
```

Minimal jQuery to achieve a nice effect. It works on tablets though not quite the way it is intended.

I will probably work on it some more during the coming weeks.
### On To The Next One

Our next front-end project will be a little bit more difficult and will probably take me a lot more time. Here is what the example like, down below. The scrolling of the images is janky and I am not crazy about the design but I like what he did.
