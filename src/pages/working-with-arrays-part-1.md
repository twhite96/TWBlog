---
layout: post
title: "Working With Arrays, Part 1"
spoiler: This will be a series on working with arrays.
tags: [JavaScript, arrays]
date: "2015-11-29"
---

*This will be a series on working with arrays. Not sure how long it will be but there is so much rich information about arrays in JavaScript that I don't think I could fit it all into one post. It may not be a series after all; I may just revisit the topic every now and again.*

## Arrays

An array is an object in JavaScript. It is a global object set out in a list between two brackets ```[]```. Elements in an array are separated by a comma. An array can have any type of data, in any order, inside of the brackets.

For instance:

	var myArray = ["John", 39, "Tiffany", 37, false];

is a typical array. Usually we can get the index, or position, of a piece of data in an array by bracket or dot notation.

Arrays in JavaScript can have a mixture of data types; in my example above I mix strings, numbers, and a boolean data type in one array.

## Initializing an Array

You can initialize an array as follows:

    var myArray = [10];

You can also initalize an empty array such as:

    var emptyArray = [];

This is useful for having a place to hold values that will be initialized later in your code.

## Accessing Array Elements

You can access array elements by their index in the console. JavaScript arrays are zero-indexed, much like Java and other languages. An example of the syntax:

    var indexOfArray = ["Jerri", 69, "Tiffany" 37, false];
    console.log(indexOfArray[4]); // This would return the boolean value 'false'
    console.log(indexOfArray.[2]); // This is accessing an array with dot notation.
    // This would return 'Tiffany'

    console.log(indexOfArray.1); // This isn't proper syntax as properties that begin with
    // a number can't be accessed using dot notation
    console.log(indexOfArray.0); // This is okay as it is a string

## The .length Property

You can see how many items are in an array with the ```.length``` property. The syntax is similar to accessing an index with dot notation:

    var howMany = ["Jerri", 69, "Tiffany" 37, false];
    console.log(howMany.length); // this will return 5 as there are 5 items in the array.
    // Not to be confused with *indeces*

These are some basic facts about JavaScript arrays. Stay tuned for more.




