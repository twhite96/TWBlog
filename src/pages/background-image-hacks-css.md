---
ID: 2189
title: Background Image Hacks in CSS
author: Tiffany White
date: "2017-08-04"
spoiler: Yesterday I found myself in a situation where the background image in my freeCodeCamp Weather App on mobile was cut off at the bottom. Needed some background image hacks in css to fix it.
layout: post
link: >
  https://tiffanywhite.tech/background-image-hacks-css/
published: true
tags:
  - css
  - freecodecamp
  - weather app
categories:
  - Web Development
---


Yesterday [^1] I found myself in a situation where the background image in my freeCodeCamp Weather App on mobile was cut off at the bottom. Needed some background image hacks in css to fix it.

## For context

My code for switching up the background depending on your weather conditions is as follows:

```javascript
const iconMap = {
  "clear-day": "url(https://res.cloudinary.com/twhiteblog/image/upload/v1534887427/Weather%20App%20Images/sunny.jpg)",
  "partly-cloudy-night": "url(https://res.cloudinary.com/twhiteblog/image/upload/v1534887409/Weather%20App%20Imafineas-anton-136459_copy.jpg)",
  "clear-night": "url(https://res.cloudinary.com/twhiteblog/image/upload/v1534887421/Weather%20App%20Images/sam-mcjunkin-38078.jpg)",
  "partly-cloudy-day": "url(https://res.cloudinary.com/twhiteblog/image/upload/v1534887413/Weather%20App%20Images/jeff-nafura-294909.",
  "cloudy": "url(https://res.cloudinary.com/twhiteblog/image/upload/v1534887428/Weather%20App%20Images/jonatan-pie-260835.jpg)",
  "rain": "url(https://res.cloudinary.com/twhiteblog/image/upload/v1534887410/Weather%20App%20Images/3opt_rain.jpg)",
  "sleet": "url(https://res.cloudinary.com/twhiteblog/image/upload/v1534887412/Weather%20App%20Images/jonatan-pie-190398.jpg)",
  "snow": "url(https://res.cloudinary.com/twhiteblog/image/upload/v1534887417/Weather%20App%20Images/snow.jpg)",
  "wind": "url(https://res.cloudinary.com/twhiteblog/image/upload/v1534887424/Weather%20App%20Images/jon-flobrant-2845.jpg)",
  "fog": "url(https://res.cloudinary.com/twhiteblog/image/upload/v1534887392/Weather%20App%20Images/elaine-li-416.jpg)"

 (function() {
   $("body").css("background-image", iconMap[currentIcon]);
 })();

```

This bug had been bothering me for a week or so. I searched on Stack Overflow for an appropriate solution and found that I could use a `div` wrapper and add:

```css
body {
   background-size: cover;
   background-repeat: no-repeat;
}
```

I added the wrapper but nothing happened.

I also already had my main content wrapped in a `div`:

```html
<div class="wrapper">
  <div class="col-md-12">
    <header>
      <h1 class="h1-title">Local Weather App </h1>
      <h3></h3>
    </header>
```
## Object-fit, etc

You can usually `object-fit` on an image with the properties: `fill`, `cover`, `contain`, `scale-down`, or `none`:

![![]](https://res.cloudinary.com/twhiteblog/image/upload/v1527285535/fill_pdgsiz.jpg)

![![]](https://res.cloudinary.com/twhiteblog/image/upload/v1527285814/cover_ewgvo4.jpg)

![![contain]](https://res.cloudinary.com/twhiteblog/image/upload/v1527285527/contain_au90pq.jpg)

![![scale-down]](https://res.cloudinary.com/twhiteblog/image/upload/v1527285644/scaled_down_vm42wb.jpg)
*scale-down*

![](https://res.cloudinary.com/twhiteblog/image/upload/v1527285586/none_zulsuj.jpg)
*none*

I tried `object-fit: cover` on the body. Didn’t work. Same with `contain`, `scale-down`, and `fill`.

I searched some more and found the answer on a Treehouse forum.

```css
html {
   min-height: 100%;
}
```
I tried `height: 100%` on the `body` but that didn’t work either.

Since the `html` element is actually at the root of the `document` and `body` descends from the `html` element, applying the global style to the `html` element actually makes sense.

Also, because I am specifying a minimum height that happens to be a percentage, it makes it responsive because I am not specifying a fixed size in the viewport.

Now, I have a mobile app that looks like this:

<img class=" wp-image-2182 aligncenter" src="https://tiffanywhite.tech/wp-content/uploads/2017/08/IMG_3816.png" width="262" height="458" />

Still, I need to fix the loading issue. Thats for another day.

You can find the weather app at [https://twhite96.github.io/Weather\_App](https://twhite96.github.io/Weather_App).

[^1]: And for several days before that actually.
