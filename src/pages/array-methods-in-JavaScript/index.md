---
title: Array Methods in JavaScript
layout: post
author: Tiffany White
date: "2016-02-11"
---


### Different Types of Methods

There are a few basic methods to work with arrays in JavaScript. The most basic and, perhaps the most familiar, is the `.length()` method.

You can get the length of the elements in an array with with this method and a `for` loop, which is an iterator/counter loop. For more information about for loops, check [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration#for_statement).

An example of iterating through an array with a for loop to find the index of an element:

```javascript
var array = ["Tiffany", "Cheerios", "ice cream", "pig", "Macbook"];
	
for (var i = 0; i < array.length; i++) {
	var index = array[i];
	console.log('Index: ', index);
}
```
	
This will list all the elements in the array to the console, as well as an `undefined` since I'm not returning a value.

#### forEach() Method

Another method worth noting is the `forEach()` method which is another iterator and perhaps more syntatic sugar than a for loop. It is worth mentioning that `forEach()` has perf costs and for large records and datasets, a `for` loop would be a better choice.

An example of a `forEach` on an array would look like this:

```javascript
var array = [1,2,3,4,5,6,7,8,9,0];
     
array.forEach(function(item, index) {
     console.log(item);
 });
```
     
 This does essentially the same thing as a `for` loop only it is cleaner and perhaps easier to use.

#### map() Method

This method creates a new method from elements in an old method using a callback function with three arguments: `currentValue`, `index`, and `array`.

You can use `map()`to parse an array of objects or return a new array full of different number sets than the previous array. For instance:

```javascript
var even = [2,4,6,8];
	
var odd = even.map(function(num) {
	return num + 1;
});
```
    
is something I could use to find and return a new array of odd numbers from an old array of even ones.

#### concat() Method

This method just concatenates two arrays into one. For instance:

```javascript
    var greetArr = ["Hello", "World!"],
    jsArr = ["Javascript", "is", "fun!"];
    
    var jsGreet = greetArr.concat(jsArr);
    
    console.log(jsGreet);
```
    
This will concatenate the arrays out to look like this:
`["Hello", "World!", "Javascript", "is", "fun!"]`

While we don't want the commas in between the words, this gives you a basic idea of what `concat` does.

#### Thoughts

These are just some of my favorite array methods for JavaScript. There are way more and you can find them in the Mozilla [docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array).
   