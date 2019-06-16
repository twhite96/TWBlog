---
title: "Day 4: Lightbox"
author: Tiffany White
date: "2015-08-11"
category: "Daily Progress"
cover: 1.jpg
---
![](1.jpg)

So yesterday we made a simple lightbox for a set of images, which I found hard to follow the lesson somehow.

Assigning jQuery elements to a variable has proven to be extremely useful. For instance this bit of code:



```js
var $overlay = $('<div id="overlay"></div></div>');
var $image = $("<img>");
var $caption = $("");

$overlay.append($image);
// Add overly

$("body").append($overlay);
// An image
 // A caption

$overlay.append($caption);`
```
We don't have to continually write out jQuery objects, we can just refer to them in the variables that preceded the block of code where we need them.

We did more appending and we learned about the

`.attr()`

method which we passed in the string, ("href") after attaching it to

`$(this)`

. We wanted to make sure the image we clicked on in the image gallery would execute the behavior we wanted, which was popping up the lightbox. Using

`$(this).attr("href")`

assured us that we were clicking the linked image attribute in the HTML, and it wouldn't matter which image was clicked. Here is the last part of the code:


```js
//Capture the click event on a link to an image
$("#imageGallery a").click(function(event){
   event.preventDefault();
   var imageLocation = $(this).attr("href");
 //Update overlay with the image linked in the link
   $image.attr("src", imageLocation);

//Show the overlay.
   $overlay.show();

//Get child's alt attribute and set caption
   var captionText = $(this).children("img").attr("alt");
   $caption.text(captionText);

});

//When overlay is clicked
  $overlay.click(function(){
 //Hide the overlay
  $overlay.hide();
});
```
