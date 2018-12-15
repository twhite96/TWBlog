---
title: The Danger of Type Coercion in JavaScript
author: Tiffany White
layout: post
date: 2016-02-26T19:40:55-05:00
---

## What is Type Coercion

Type coercion is essentially *implicitly* or *explicitly* changing the data type in JavaScript.

You can do this in a couple of ways but first, let's take a look at some ways the JavaScript engine tries to coerce types.

## Operator Precedence

Knowing operator precedence is a must when working with any programming language. You can check out the [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence) for information about operator precedence.

The operators or operator functions we are going to use in these examples are `< > + - * / == and ===`.

These operators are read from left-to-right in the JavaScript engine. The assignment operator `=` is read from right-to-left.

Take a look at this code:

```javascript
var coerce = 1 < 2 < 3 < 4;
console.log(coerce);
```

Because we are using comparison operators, the console will return a Boolean value. In this case, when the code is run in the console, it returns `true`, like normal humans would assume.

![True](/images/Screenshot2016-02-26_02-42-17_AM.jpg){: .center-image }

But look at this code:

```javascript
var coerce = 4 > 3 > 2 > 1;
console.log(coerce);
```
This is just reversing the order of the numbers and the comparison operators. Normally we'd assume this to be true. But check out the console:

![False](/images/Screenshot2016-02-26_02-45-12_AM.jpg){: .center-image }

It returns `false`. Why? It's coercion.

When the JavaScript engine computates this code, remember, it will read it from left-to-right.

In JavaScript, `true` and `false` have values, where `true` coerces to 1 and `false` coerces to 0. 

`4 > 3` returns `true`. *Now*, JavaScript reads the next operation as `1 > 2` which is obviously going to return `false`. We then have `false > 1` or `0 > 1` which is false.

### Coercion with Equality Operators

Equality operators are the equality `==` and strict equality `===` operators. When we use the plain equality operator, we can coerce a string into a number, a number into a Boolean, etc. Take a look at this code:

```javascript
1 == "1";
```
Here we are saying the data type `number` is equal to the data type `string` which isn't correct. But because we are using the "non-strict" equality operator, it coerces to `true` as we can see in the console:

![Equality](/images/Screenshot2016-02-26_07-31-48_PM.jpg){: .center-image }

You can assume that strict equality, then, would yeild false if we were to enter this into the console:

```javascript
1 === "1";
```

![Strict_equality](/images/Screenshot2016-02-26_07-34-53_PM.jpg){: .center-image }

### Thoughts

There are reasons to use coercion but typically it's bad practice. Apparently some ES6 syntax takes some of the pain of coercion away, but as you can see, you could very well end up with hard to identify bugs in your code so it's best to use strict equality when you are comparing something and consider operator precedence when using comparison operators.
