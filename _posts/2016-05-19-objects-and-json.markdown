---
layout: post
title: "Objects and JSON"
modified: 2016-06-15T16:10:44-04:00
categories: JavaScript, JSON
excerpt: When thinking about JavaScript objects, it is important to think about them in terms of real life objects. For instance, you have a cup, which is an object. The object has some properties...
tags: []
comments: true
---

![JSON](/images/JSON and Objects.png)

## What are JavaScript Objects?

When thinking about JavaScript objects, it is important to think about them in terms of real life objects. For instance, you have a cup, which is an object. The object has some *properties*: it is white, it has some text, it is holds 12 oz, it is used for coffee, etc.

Now that we have a real life model of what a JavaScript object is like, we can begin to think about how to translate that into working code.

### How to Create an Object in JavaScript

Basically, the syntax will look like this:

{% highlight ruby linenos %}
objectName.propertyName
{% endhighlight %}

Let's take a look at some simple examples of what are called *object literals*.

### Object Literal Syntax

An object literal represents a value that you *literally* add to your script. It has a fixed value.

Here is the syntax of an object literal:

{% highlight ruby linenos %}
var obj = {
prop1: "string",
prop2: 2,
prop3: false
};
{% endhighlight %}

We assign the object literal to a variable `obj`. The following are what we call *name/value pairs* or *key/value pairs* where `name` or `key` is a property of the object and `value` is the value of that property.

### Object Constructors

Another way to write an object in JavaScript is to create an object constructor. You create an object constructor with the `new` keyword.

{% highlight ruby linenos %}
var cats = new Cat();
cats.color = "Calico";
cats.gender = "male";
cats.age = 2;
{% endhighlight %}

We add properties to the Cat constructor through dot notation and adding a value, much like before:

### Accessing Properties

You can access properties in an object with *dot* or *bracket* notation. For instance:

{% highlight ruby linenos %}
obj.prop ="value"
obj[prop] = "value"
{% endhighlight %} 

If we take a look at our Cat constructor, we can access its age by using either dot or bracket notation:

{% highlight ruby linenos %}
var atticus = cats["age"];
var felix = cats.age;
{% endhighlight %}

This will return the value **2** for atticus and felix.

## JSON

JSON stands for JavaScript Object Notation. It is used to serialize objects, arrays, strings and other data structures and literals.

JavaScript objects and JSON have a similar syntaxt but there are distinct differences. 

JSON syntax:

{% highlight ruby linenos %}
{
	employees:
		[{ "name" : "John"},
		 {"age": "40"},
		 {"employeeID": "347642"}]
}
{% endhighlight %}

Looks similar but it isn't. It is a simpler way to exhange data. Previously XML was used to store and exhange serialized data but this is far simpler and is the most widely adopted way to do this.

### Conclusion

There is so much more to get into with JavaScript Objects. As I get to know more I will post it. Soon, I'll go over prototypal inheritance, `this`, and more.




