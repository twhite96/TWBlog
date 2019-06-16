---
title: "Digging Into OOP JavaScript"
author: Tiffany White
date: "2016-04-25"
category: "Daily Progress"
cover: 1.jpeg
---

![](1.jpeg)

On Treehouse, I am going through their Full-stack JavaScript track and we came up on OOP JavaScript.

Learning about Objects, state, and the origin and usage of `this` is intriguing as I have learned a bit about OOP through Java during my time at Pitt.

JavaScript doesn’t have regular Classes and instead uses Prototypes. Classical inheritance is seen as a big problem in JavaScript, which when you consider JavaScript doesn’t have real Classes, it makes sense. Brandon Eich, the creator of JavaScript admitted he wanted JavaScript to look like the little brother of Java, which leaves us with syntax that looks like Java when we use things like Constructors. For instance, in Java, you create a new Object like this:

```java

// Imports APIs

import java.util.Scanner;

import java.io*;


// Class definition

public class P3A1_White

{

// Main method

    public static void main(String[] args)

   {

      Scanner keyboard = new Scanner(System.in);

```

Where we are importing the Scanner Class and any I/O classes that Java has. We create a new Object here from the Scanner Class by using `Scanner keyboard = new Scanner(System.in);`. This is an example of Classical inheritance, creating Objects from either predefined Classes in the Java API or Classes you create.

The syntax for creating Objects in JavaScript from Constructors, which is not the same as a Constructor function in Java, looks similar to creating an Object in Java.

Take a look:

```js
function MyClass(name) {
}

var bob = new MyClass();

  bob.set_name('Bob');

  bob.announce(); // id is 1, name shows as &quot;Bob&quot;

var john = new MyChildClass('Doe');

  john.set_name('John');

  john.announce(); // id is 2, name shows as &quot;John Doe&quot;

    alert(john instanceof MyClass); // true

```

Notice how we created the Objects: with the `new` keyword. Also notice that we have an `instanceof` operator. In Java, you create an `instanceof` a class by creating an Object through Classical inheritance. Here you’re creating an `instanceof` the constructor.prototype in the object’s prototype chain. This is weird and I am not sure why Prototypal inheritance wasn’t used.

<h2>Coding Daily</h2>
I have pretty much stuck to what I said I was going to do. I had Sunday off and I really missed it. Some days I start later than others, like today as I am being killed by allergies and am sluggish. But tonight I am going back to Treehouse and Free Code Camp before bed.


![](2.png)

<h2>Thoughts</h2>
I won’t get into which is better, Prototypal of Classical Inheritance. There are plenty of <a href="http://stackoverflow.com/questions/2800964/benefits-of-prototypal-inheritance-over-classical" target="_blank">articles</a> about <a href="https://medium.com/javascript-scene/common-misconceptions-about-inheritance-in-javascript-d5d9bab29b0a#.irm1j6oxw" target="_blank">this</a>.

I am reading a lot of Eric Elliott’s posts on the topic. It doesn’t jive with the stuff I am learning as it leans heavily on Prototypal Inheritance features in ES6. But I need to learn the OOP way first, at least for now, to lessen confusion.
