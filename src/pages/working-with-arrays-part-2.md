---
layout: post
title: "Working With Arrays Part 2"
modified:
categories: JavaScript
comments: true
spoiler: You use an array to store data. You can initialize an empty array and then store data in it as well. But that is beyond the scope of this post. There are 4 types of arrays in JavaScript...
date: "2015-12-23"
---

### What is an array?

You use an array to store data. You can initialize an empty array and then store data in it as well. But that is beyond the scope of this post.

There are 4 types of arrays in JavaScript:

* Homogeneous
* Heterogeneous
* Multidimensional
* Jagged (or ragged)

### Homogeneous Arrays

Homogeneous arrays only store one data type. It can be any data type but it can only contain data of that particular type. For example:

    // An array of ints
    var array = [45, 37, 69, 90];

    // An array of Boolean values
    var array = [true, false];

    // An array of Strings
    var array = ["Mom", "Rick", "orange"];

### Hetergeneous Arrays...

Can contain a mixture of data types. For example:

    var anArray = ["peaches", 9, "cream", false];

### Multidimensional Arrays

A multidimensional array is just an array of arrays. Think of them as nested arrays. For example:

    var myArray = [["Mom", 71, "Me", 36], ["John", 40], [true]];

### Jagged Arrays

A jagged array is an array that *looks* like a multidimesional array but does not have a particular order. They  look like this:

    var myArray = [
         ["Jerri", 70, "Tiffany"],
         ["37"],
         ["John", false],
     ];

### An Empty Array

Is an array with nothing in it. For example:

    var anArray = [];

This is useful for loops and adding data later to your program.

These are the types of arrays in JavaScript. I will cover arrays in Java as well.



