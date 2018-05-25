---
ID: 2230
title: 'Mission DRY: Accomplished'
# mission-dry-accomplished
author: Tiffany White
post_date: 2017-08-16 22:43:40
post_excerpt: 'When working with multiple levels of conditionals, it helps to DRY things up a bit: not repeating yourself can give performance gains as well as make your code more readable and elegant.'
layout: post
link: >
  https://tiffanywhite.tech/mission-dry-accomplished/
published: true
tags:
  - DRY code
  - javascript
  - map
categories:
  - Web Development
---


When working with multiple levels of conditionals, it helps to DRY things up a bit: not repeating yourself can give performance gains as well as make your code more readable and elegant.

Here is one of the monstrosities I had before:

```javascript
if (currentIcon === &quot;clear-day&quot;)   {
  $(&quot;body&quot;).css(&quot;background-image&quot;, &quot;url(https://i.imgur.com/voece1h.jpg)&quot;);
  }   else if (currentIcon === &quot;partly-cloudy-night&quot;)   {
  $(&quot;body&quot;).css(&quot;background-image&quot;, &quot;url(https://i.imgur.com/r8haFIj.jpg)&quot;);
  }   else if (currentIcon === &quot;clear-night&quot;)   {
  $(&quot;body&quot;).css(&quot;background-image&quot;, &quot;url(https://i.imgur.com/K6Bazrl.jpg)&quot;);
  }   else if (currentIcon === &quot;partly-cloudy-day&quot;).  {
  $(&quot;body&quot;).css(&quot;background-image&quot;, &quot;url(https://i.imgur.com/dUS9u9b.jpg)&quot;);
  }   else if (currentIcon === &quot;cloudy&quot;)   {
  $(&quot;body&quot;).css(&quot;background-image&quot;, &quot;url(https://i.imgur.com/Kx3ku27.jpg)&quot;);
  }   else if (currentIcon === &quot;rain&quot;)   {
  $(&quot;body&quot;).css(&quot;background-image&quot;, &quot;url(https://i.imgur.com/g4afvja.jpg)&quot;);
  }   else if (currentIcon === sleet)   {
  $(&quot;body&quot;).css(&quot;background-image&quot;, &quot;url(https://i.imgur.com/pjq3VPO.jpg)&quot;);
  }   else if (currentIcon === snow)   {
  $(&quot;body&quot;).css(&quot;background-image&quot;, &quot;url(https://i.imgur.com/vH9cyKD.jpg)&quot;);
  }   else if (currentIcon === wind)   {
  $(&quot;body&quot;).css(&quot;background-image&quot;, &quot;url(https://i.imgur.com/ZtSl66b.jpg)&quot;);
  }   else if (currentIcon === fog)   {
  $(&quot;body&quot;).css(&quot;background-image&quot;, &quot;url(https://i.imgur.com/5z0CXkZ.jpg)&quot;);
}

```

Really gross, right?

Consulting LinkedIn and Slack proved to be fruitful.

## Changing `if/else` Chains Into Map Objects

A hash map is an object that you can iterate over like an array. The definition of a Map object can be [found on the MDN.](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map)

[Adam Recvlohe](https://linkedin.com/in/adamrecvlohe), a fellow freeCodeCamp Camper on LinkedIn recommended I use a Map for changing the background of my freeCodeCamp Weather App dynamically. He showed me some code and I eventually settled on this:

```javascript
const iconMap = {
  &quot;clear-day&quot;: &quot;url(https://s3.us-east-2.amazonaws.com/weatherappfcc/sunny.jpg)&quot;,
  &quot;partly-cloudy-night&quot;: &quot;url(https://s3.us-east-2.amazonaws.com/weatherappfcc/fineas-anton-136459+copy.jpg)&quot;,
  &quot;clear-night&quot;: &quot;url(https://s3.us-east-2.amazonaws.com/weatherappfcc/sam-mcjunkin-38078.jpg)&quot;,
  &quot;partly-cloudy-day&quot;: &quot;url(https://s3.us-east-2.amazonaws.com/weatherappfcc/jeff-nafura-294909.jpg)&quot;,
 &quot;cloudy&quot;: &quot;url(https://s3.us-east-2.amazonaws.com/weatherappfcc/jonatan-pie-260835.jpg)&quot;,
 &quot;rain&quot;: &quot;url(https://s3.us-east-2.amazonaws.com/weatherappfcc/3opt\_rain.jpeg)&quot;,
 &quot;sleet&quot;: &quot;url(https://s3.us-east-2.amazonaws.com/weatherappfcc/jonatan-pie-190398.jpg)&quot;,
 &quot;snow&quot;: &quot;url(https://s3.us-east-2.amazonaws.com/weatherappfcc/snow.jpg)&quot;,
 &quot;wind&quot;: &quot;url(https://s3.us-east-2.amazonaws.com/weatherappfcc/jon-flobrant-2845.jpg)&quot;,
 &quot;fog&quot;: &quot;url(https://s3.us-east-2.amazonaws.com/weatherappfcc/elaine-li-416.jpg)&quot;
};

(function() {
  $(&quot;body&quot;).css(&quot;background-image&quot;, iconMap[currentIcon]);
})();
```

Here, we take a `Map` object and use an anonymous function calls the `.css` jQuery method on the body which will change the background image by injecting that css into the body. Also as an argument to the css method is an iteration over the `iconMap` Map object that maps each image to the currently displayed Skycon.

## Next: Cleaning Up The `if/else` Mess of an Icon Display

Up above you probably observed my conditional hell. It was the same for the icons where I called the jQuery `show()`/`hide()` methods in `if/else` statements for *every*. *Icon*. **Pure insanity**.

I went to the Code Newbie Slack and asked [Joseph Rex](https://twitter.com/josephrexme) for help as he has been guiding me through a few of the Express and other JavaScript problems I have been having. After some bugs and error handling we came up with a nifty ES6 solution that is much cleaner, using Template Literals to clean up the constant calls to each icon.

```javascript
// Write a function that takes two parameters
let iconDisplay = (iconName, current) => {
   //Assign a template literal to a constant that will
//represent each icon
   const jqObj = $(`#${iconName}`);
   // Use the ternary operator to determine with the //iconName is the current icon being shown for the condition
//and based on that, show or hide the appropriate icon
   iconName === current ? jqObj.show() : jqObj.hide();
};

 // call the function and compare it to the Skycon for each 
 // Weather condition.
 iconDisplay("clear-day", currentIcon);
 iconDisplay("clear-night", currentIcon);
 iconDisplay("partly-cloudy-day", currentIcon);
 iconDisplay("partly-cloudy-night", currentIcon);
 iconDisplay("cloudy", currentIcon);
 iconDisplay("fog", currentIcon);
 iconDisplay("rain", currentIcon);
 iconDisplay("sleet", currentIcon);
 iconDisplay("snow", currentIcon);
 iconDisplay("wind", currentIcon);

```

Pretty cool.

## Learning Express with The Web Developer Bootcamp




When working with multiple levels of conditionals, it helps to DRY things up a bit: not repeating yourself can give performance gains as well as make your code more readable and elegant.

Here is one of the monstrosities I had before:

```javascript
if (currentIcon === &quot;clear-day&quot;)   {
  $(&quot;body&quot;).css(&quot;background-image&quot;, &quot;url(https://i.imgur.com/voece1h.jpg)&quot;);
  }   else if (currentIcon === &quot;partly-cloudy-night&quot;)   {
  $(&quot;body&quot;).css(&quot;background-image&quot;, &quot;url(https://i.imgur.com/r8haFIj.jpg)&quot;);
  }   else if (currentIcon === &quot;clear-night&quot;)   {
  $(&quot;body&quot;).css(&quot;background-image&quot;, &quot;url(https://i.imgur.com/K6Bazrl.jpg)&quot;);
  }   else if (currentIcon === &quot;partly-cloudy-day&quot;).  {
  $(&quot;body&quot;).css(&quot;background-image&quot;, &quot;url(https://i.imgur.com/dUS9u9b.jpg)&quot;);
  }   else if (currentIcon === &quot;cloudy&quot;)   {
  $(&quot;body&quot;).css(&quot;background-image&quot;, &quot;url(https://i.imgur.com/Kx3ku27.jpg)&quot;);
  }   else if (currentIcon === &quot;rain&quot;)   {
  $(&quot;body&quot;).css(&quot;background-image&quot;, &quot;url(https://i.imgur.com/g4afvja.jpg)&quot;);
  }   else if (currentIcon === sleet)   {
  $(&quot;body&quot;).css(&quot;background-image&quot;, &quot;url(https://i.imgur.com/pjq3VPO.jpg)&quot;);
  }   else if (currentIcon === snow)   {
  $(&quot;body&quot;).css(&quot;background-image&quot;, &quot;url(https://i.imgur.com/vH9cyKD.jpg)&quot;);
  }   else if (currentIcon === wind)   {
  $(&quot;body&quot;).css(&quot;background-image&quot;, &quot;url(https://i.imgur.com/ZtSl66b.jpg)&quot;);
  }   else if (currentIcon === fog)   {
  $(&quot;body&quot;).css(&quot;background-image&quot;, &quot;url(https://i.imgur.com/5z0CXkZ.jpg)&quot;);
}

```

Really gross, right?

Consulting LinkedIn and Slack proved to be fruitful.

## Changing `if/else` Chains Into Map Objects

A hash map is an object that you can iterate over like an array. The definition of a Map object can be [found on the MDN.](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map)

[Adam Recvlohe](https://linkedin.com/in/adamrecvlohe), a fellow freeCodeCamp Camper on LinkedIn recommended I use a Map for changing the background of my freeCodeCamp Weather App dynamically. He showed me some code and I eventually settled on this:

```javascript
const iconMap = {
  &quot;clear-day&quot;: &quot;url(https://s3.us-east-2.amazonaws.com/weatherappfcc/sunny.jpg)&quot;,
  &quot;partly-cloudy-night&quot;: &quot;url(https://s3.us-east-2.amazonaws.com/weatherappfcc/fineas-anton-136459+copy.jpg)&quot;,
  &quot;clear-night&quot;: &quot;url(https://s3.us-east-2.amazonaws.com/weatherappfcc/sam-mcjunkin-38078.jpg)&quot;,
  &quot;partly-cloudy-day&quot;: &quot;url(https://s3.us-east-2.amazonaws.com/weatherappfcc/jeff-nafura-294909.jpg)&quot;,
 &quot;cloudy&quot;: &quot;url(https://s3.us-east-2.amazonaws.com/weatherappfcc/jonatan-pie-260835.jpg)&quot;,
 &quot;rain&quot;: &quot;url(https://s3.us-east-2.amazonaws.com/weatherappfcc/3opt\_rain.jpeg)&quot;,
 &quot;sleet&quot;: &quot;url(https://s3.us-east-2.amazonaws.com/weatherappfcc/jonatan-pie-190398.jpg)&quot;,
 &quot;snow&quot;: &quot;url(https://s3.us-east-2.amazonaws.com/weatherappfcc/snow.jpg)&quot;,
 &quot;wind&quot;: &quot;url(https://s3.us-east-2.amazonaws.com/weatherappfcc/jon-flobrant-2845.jpg)&quot;,
 &quot;fog&quot;: &quot;url(https://s3.us-east-2.amazonaws.com/weatherappfcc/elaine-li-416.jpg)&quot;
};

(function() {
  $(&quot;body&quot;).css(&quot;background-image&quot;, iconMap[currentIcon]);
})();
```

Here, we take a `Map` object and use an anonymous function calls the `.css` jQuery method on the body which will change the background image by injecting that css into the body. Also as an argument to the css method is an iteration over the `iconMap` Map object that maps each image to the currently displayed Skycon.

## Next: Cleaning Up The `if/else` Mess of an Icon Display

Up above you probably observed my conditional hell. It was the same for the icons where I called the jQuery `show()`/`hide()` methods in `if/else` statements for *every*. *Icon*. **Pure insanity**.

I went to the Code Newbie Slack and asked [Joseph Rex](https://twitter.com/josephrexme) for help as he has been guiding me through a few of the Express and other JavaScript problems I have been having. After some bugs and error handling we came up with a nifty ES6 solution that is much cleaner, using Template Literals to clean up the constant calls to each icon.

```javascript
// Write a function that takes two parameters
let iconDisplay = (iconName, current) => {
   //Assign a template literal to a constant that will
//represent each icon
   const jqObj = $(`#${iconName}`);
   // Use the ternary operator to determine with the //iconName is the current icon being shown for the condition
//and based on that, show or hide the appropriate icon
   iconName === current ? jqObj.show() : jqObj.hide();
};

 // call the function and compare it to the Skycon for each 
 // Weather condition.
 iconDisplay("clear-day", currentIcon);
 iconDisplay("clear-night", currentIcon);
 iconDisplay("partly-cloudy-day", currentIcon);
 iconDisplay("partly-cloudy-night", currentIcon);
 iconDisplay("cloudy", currentIcon);
 iconDisplay("fog", currentIcon);
 iconDisplay("rain", currentIcon);
 iconDisplay("sleet", currentIcon);
 iconDisplay("snow", currentIcon);
 iconDisplay("wind", currentIcon);

```

Pretty cool.

## Learning Express with The Web Developer Bootcamp





Pretty soon I’ll be diving deep into how much I am learning about Express with The Web Developer Bootcamp. To get a sense of where I was a couple days ago, [read this](https://medium.com/100-days-of-code/100-days-of-code-day-17-7b04669c68c6).