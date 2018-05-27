---
layout: post
title: CSS Animations, Part 1
modified:
categories: CSS
excerpt: As you may know, you can animate pretty much anything with JavaScript and jQuery. jQuery makes it easier as it is a pretty neat and simple JavaScript library.
tags: [css, css animations]
comments: true
read_time: true
image:
  feature: Panorama.jpg
  credit: Divine Mayhem Photography
  creditlink: http://www.divinemayhem.com/
date: 2016-09-20T00:15:15-04:00
---
As you may know, you can animate pretty much anything with JavaScript and jQuery. jQuery makes it easier as it is a pretty neat and simple JavaScript library. No need to use {% highlight ruby linenos %}document.getElementByID{% endhighlight %} when you can use {% highlight ruby linenos %}$(#myID).animate({left: '250px'});{% endhighlight %}.

You can also animate things with CSS. There are debates on whether [CSS animations are faster than JavaScript animations](https://davidwalsh.name/css-js-animation) and generally, if you are using vanilla JS and not a heavy library like jQuery, JavaScript animation perf is comparable to CSS.

## So How Do You Animate with CSS?

There are basically two ways to animate properties in CSS: *transition* and *transform*.

Not all CSS properties are animatable. See [this list](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_animated_properties) for animatable properties.

Animating a property with CSS is fairly straight-forward.

Take the animatable property: `opacity`. We can animate the `opacity` on an image overlay so that when we hover over it with the mouse, the opacity of the overlay will decrease on the image. You can do that with something like this:

{% highlight ruby linenos %}
.overlay {
	opacity: 0;
	transition-property: opacity;
	transition-duration: .4s;
}

.overlay:hover {
	opacity: 2;
}
{% endhighlight %}

Here, we are selecting the `overlay` class, and adding a base property to that class. Inside of the class selection, we set the `opacity` to `0` and add the transition with `transition-property` which selects the property you want to animate and `transition-duration` which tells the browser how long the animation lasts.

Once you hover over the image, the opacity will be set to `2,` and when you switch off of it, it will go back down to `0` since we told the browser by the first CSS declaration we needed to have the opacity return to `0` once the hover state was over.

## Not Too Bad, Right?

It is fairly simple, once you get the hang of it. I will be posting more about CSS transitions as I learn them. Meanwhile, here is [nice little table](http://leaverou.github.io/animatable/) of animatable properties by [Lea Verou](http://lea.verou.me/) that animate when you hover over them.
