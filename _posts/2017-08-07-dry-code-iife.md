---
ID: 2220
title: 'DRY Code: Using IIFEs to Clean Up Code'
# dry-code-iife
author: Tiffany White
post_date: 2017-08-07 19:39:18
post_excerpt: |
  DRY: Don’t Repeat Yourself
  
  As you may have seen in my last post, I have some *ridiculous* conditional statement blocks going on to show/hide the Skycons and for switching up the background photos based on your current weather conditions.
layout: post
link: https://tiffanywhite.tech/dry-code-iife/
published: true
tags: uncategorized
categories:
  - App Updates
  - "Tiffany's Posts"
---


## DRY: Don’t Repeat Yourself

As you may have seen in my last post, I have some *ridiculous* conditional statement blocks going on to show/hide the Skycons and for switching up the background photos based on your current weather conditions.

Each of this `if/else` statements is essentially repeating the same couple of ideas:

```javascript
if (currentIcon === &quot;clear-day&quot;)  {
  $(“#clear-day&quot;).show();
}  else  {
  $(&quot;#clear-day&quot;).hide();
}
```
for the icons and:

```javascript
if (currentIcon === &quot;clear-day&quot;)  {
  $(&quot;body&quot;).css(&quot;background-image&quot;, &quot;url(https://i.imgur.com/voece1h.jpg)&quot;);
}  else if (currentIcon === &quot;partly-cloudy-night&quot;)  { 
  $(&quot;body&quot;).css(&quot;background-image&quot;, &quot;url(https://i.imgur.com/r8haFIj.jpg)&quot;);
}
```
for the backgrounds only repeated *over and over again* for different icons/pictures.

This isn’t DRY: it’s *stupid*.

## Functions for Modularity

I decided to wrap these up in two different closure functions in the form of *IIFEs* or *Immediately Invoked Function Expressions*.

An IIFE wraps your function in parens and then adds an extra *closing* set of parens that invoke the function *immediately* when the interpreter gets to that function.

My current solution [^1]:

```javascript
(function changeBackground(){
  if (currentIcon === &quot;clear-day&quot;) {
    $(&quot;body&quot;).css(&quot;background-image&quot;, &quot;url(https://i.imgur.com/voece1h.jpg)&quot;);
  } else if (currentIcon === &quot;partly-cloudy-night&quot;) {
    $(&quot;body&quot;).css(&quot;background-image&quot;, &quot;url(https://i.imgur.com/r8haFIj.jpg)&quot;);
  } else if (currentIcon === &quot;clear-night&quot;) {
    $(&quot;body&quot;).css(&quot;background-image&quot;, &quot;url(https://i.imgur.com/K6Bazrl.jpg)&quot;);
  } else if (currentIcon === &quot;partly-cloudy-day&quot;) {
    $(&quot;body&quot;).css(&quot;background-image&quot;, &quot;url(https://i.imgur.com/dUS9u9b.jpg)&quot;);
  } else if (currentIcon === &quot;cloudy&quot;) {
    $(&quot;body&quot;).css(&quot;background-image&quot;, &quot;url(https://i.imgur.com/Kx3ku27.jpg)&quot;);
  } else if (currentIcon === &quot;rain&quot;) {
    $(&quot;body&quot;).css(&quot;background-image&quot;, &quot;url(https://i.imgur.com/g4afvja.jpg)&quot;);
  } else if (currentIcon === &quot;sleet&quot;) {
    $(&quot;body&quot;).css(&quot;background-image&quot;, &quot;url(https://i.imgur.com/pjq3VPO.jpg)&quot;);
  } else if (currentIcon === &quot;snow&quot;) {
    $(&quot;body&quot;).css(&quot;background-image&quot;, &quot;url(https://i.imgur.com/vH9cyKD.jpg)&quot;);
  } else if (currentIcon === &quot;wind&quot;) {
    $(&quot;body&quot;).css(&quot;background-image&quot;, &quot;url(https://i.imgur.com/ZtSl66b.jpg)&quot;);
  } else if (currentIcon === &quot;fog&quot;) {
    $(&quot;body&quot;).css(&quot;background-image&quot;, &quot;url(https://i.imgur.com/5z0CXkZ.jpg)&quot;);
  }
})();
```
The same for the icons.

The problem with making this even more DRY is the way Skycons are initiated:

```javascript
let icons = new Skycons({ color: &quot;#fff&quot; });
  
   icons.set(&quot;clear-day&quot;, Skycons.CLEAR_DAY);
   icons.set(&quot;clear-night&quot;, Skycons.CLEAR_NIGHT);
   icons.set(&quot;partly-cloudy-day&quot;, Skycons.PARTLY_CLOUDY_DAY);
   icons.set(&quot;partly-cloudy-night&quot;, Skycons.PARTLY_CLOUDY_NIGHT);
   icons.set(&quot;cloudy&quot;, Skycons.CLOUDY);
   icons.set(&quot;rain&quot;, Skycons.RAIN);
   icons.set(&quot;sleet&quot;, Skycons.SLEET);
   icons.set(&quot;snow&quot;, Skycons.SNOW);
   icons.set(&quot;wind&quot;, Skycons.WIND);
   icons.set(&quot;fog&quot;, Skycons.FOG);

  icons.play();
   }
});
```
So I am looking around for solutions.




## DRY: Don’t Repeat Yourself

As you may have seen in my last post, I have some *ridiculous* conditional statement blocks going on to show/hide the Skycons and for switching up the background photos based on your current weather conditions.

Each of this `if/else` statements is essentially repeating the same couple of ideas:

```javascript
if (currentIcon === &quot;clear-day&quot;)  {
  $(“#clear-day&quot;).show();
}  else  {
  $(&quot;#clear-day&quot;).hide();
}
```
for the icons and:

```javascript
if (currentIcon === &quot;clear-day&quot;)  {
  $(&quot;body&quot;).css(&quot;background-image&quot;, &quot;url(https://i.imgur.com/voece1h.jpg)&quot;);
}  else if (currentIcon === &quot;partly-cloudy-night&quot;)  { 
  $(&quot;body&quot;).css(&quot;background-image&quot;, &quot;url(https://i.imgur.com/r8haFIj.jpg)&quot;);
}
```
for the backgrounds only repeated *over and over again* for different icons/pictures.

This isn’t DRY: it’s *stupid*.

## Functions for Modularity

I decided to wrap these up in two different closure functions in the form of *IIFEs* or *Immediately Invoked Function Expressions*.

An IIFE wraps your function in parens and then adds an extra *closing* set of parens that invoke the function *immediately* when the interpreter gets to that function.

My current solution [^1]:

```javascript
(function changeBackground(){
  if (currentIcon === &quot;clear-day&quot;) {
    $(&quot;body&quot;).css(&quot;background-image&quot;, &quot;url(https://i.imgur.com/voece1h.jpg)&quot;);
  } else if (currentIcon === &quot;partly-cloudy-night&quot;) {
    $(&quot;body&quot;).css(&quot;background-image&quot;, &quot;url(https://i.imgur.com/r8haFIj.jpg)&quot;);
  } else if (currentIcon === &quot;clear-night&quot;) {
    $(&quot;body&quot;).css(&quot;background-image&quot;, &quot;url(https://i.imgur.com/K6Bazrl.jpg)&quot;);
  } else if (currentIcon === &quot;partly-cloudy-day&quot;) {
    $(&quot;body&quot;).css(&quot;background-image&quot;, &quot;url(https://i.imgur.com/dUS9u9b.jpg)&quot;);
  } else if (currentIcon === &quot;cloudy&quot;) {
    $(&quot;body&quot;).css(&quot;background-image&quot;, &quot;url(https://i.imgur.com/Kx3ku27.jpg)&quot;);
  } else if (currentIcon === &quot;rain&quot;) {
    $(&quot;body&quot;).css(&quot;background-image&quot;, &quot;url(https://i.imgur.com/g4afvja.jpg)&quot;);
  } else if (currentIcon === &quot;sleet&quot;) {
    $(&quot;body&quot;).css(&quot;background-image&quot;, &quot;url(https://i.imgur.com/pjq3VPO.jpg)&quot;);
  } else if (currentIcon === &quot;snow&quot;) {
    $(&quot;body&quot;).css(&quot;background-image&quot;, &quot;url(https://i.imgur.com/vH9cyKD.jpg)&quot;);
  } else if (currentIcon === &quot;wind&quot;) {
    $(&quot;body&quot;).css(&quot;background-image&quot;, &quot;url(https://i.imgur.com/ZtSl66b.jpg)&quot;);
  } else if (currentIcon === &quot;fog&quot;) {
    $(&quot;body&quot;).css(&quot;background-image&quot;, &quot;url(https://i.imgur.com/5z0CXkZ.jpg)&quot;);
  }
})();
```
The same for the icons.

The problem with making this even more DRY is the way Skycons are initiated:

```javascript
let icons = new Skycons({ color: &quot;#fff&quot; });
  
   icons.set(&quot;clear-day&quot;, Skycons.CLEAR_DAY);
   icons.set(&quot;clear-night&quot;, Skycons.CLEAR_NIGHT);
   icons.set(&quot;partly-cloudy-day&quot;, Skycons.PARTLY_CLOUDY_DAY);
   icons.set(&quot;partly-cloudy-night&quot;, Skycons.PARTLY_CLOUDY_NIGHT);
   icons.set(&quot;cloudy&quot;, Skycons.CLOUDY);
   icons.set(&quot;rain&quot;, Skycons.RAIN);
   icons.set(&quot;sleet&quot;, Skycons.SLEET);
   icons.set(&quot;snow&quot;, Skycons.SNOW);
   icons.set(&quot;wind&quot;, Skycons.WIND);
   icons.set(&quot;fog&quot;, Skycons.FOG);

  icons.play();
   }
});
```
So I am looking around for solutions.





[^1]: This isn’t ideal either and I am currently asking around about it.