---
layout: post
title: "Primitive Data Types in Java"
modified:
categories: Java
comments: true
spoiler: Variables in Java need to be declared before they can be used in Java because it is a *statically-typed* language. Because of this, you need to state the type of variable you are declaring.
date: "2016-02-19"
---

Variables in Java need to be declared before they can be used in Java because it is a *statically-typed* language. Because of this, you need to state the type of variable you are declaring.

A variable's data type tells Java what type of data the variable contains. For instance, an `int` contains an integer value. You can perform operations on the `int` data type like any other value number value.

There are 8 *primitive* data types in Java. Primitive types are defined by Java and cannot be used elsewhere in your code. [^1]

[^1]: For instance, you cannot write `String int = "Integer";` which is a convulted example but it stresses the point I'm trying to make.

The primitive data types in Java are:

* int: -2<sup>31</sup> -  2<sup>31</sup>-1
* short: -32,768 - 32,767 (inclusive)
* byte: -128 - 127 (inclusive)
* float:  *decimal value*
* double: *decimal value*
* long: -2<sup>63</sup> -  2<sup>63</sup>-1
* boolean: `true` or `false` values
* char: Unicode characters - '\u0000' to '\uffff' or 0 - 65,535 (inclusive)

### Literals

Primitive data types are not objects instantiated from classes. You do not create a new one with the `new` keyword. Instead, you write the *literal* values of the data type when declaring and initilaizing the variables. For instance:

```java
public static void main(String[]args) {
	double balance = 0.00;
	char grade = 'B';
```
Note: You need to use single quotes in the initialization of a Unicode character with the `char` data type.

### Thoughts

Java primitive data types are different than JavaScript data types. I will post more on JavaScript data types soon.



