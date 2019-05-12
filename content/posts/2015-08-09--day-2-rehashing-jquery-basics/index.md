---
title: "Day 2: Rehashing jQuery Basics"
author: "Tiffany White"
date: "2015-08-09"
category: "Daily Updates"
cover: 1.png
---

![](./2.png)

So today I went over jQuery basics, documentation and a total disruption of what I learned on Free Code Camp and Codecademy.

At both Free Code Camp and Codecademy I learned to write:

```js
$(document).ready
```

before all the other code to help load the DOM before the rest of the page gets loaded. Without that, the wisdom was, some of your code wouldn’t load first, animations, etc would break because they were loaded a little down further in your js document.

But throughout Treehouse courses we always put the script tags at the end of the HTML document, right before the end

```html
</body>
```

tag. This loads the document <strong>first</strong> before any JavaScript or jQuery.

So imagine my surprise when we were writing:

```js
$(“.warning”).hide().show(“slow”);
```

without the

```js
$(document).ready
```

at the top of the document.

Basically it was all videos. I’ll post more tomorrow as I do it. Excited about my progress.
