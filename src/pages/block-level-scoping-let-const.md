---
ID: 1252
title: Function vs. Block Level Scoping with let and const
author: Tiffany White
date: "2016-08-25"
layout: post
link: >
  https://tiffanywhite.tech/block-level-scoping-let-const/
published: true
tags: uncategorized
categories:
  - General Updates
  - JavaScript
  - "Tiffany's Posts"
---

This is an exposè on the difference between function and block level scope using `let` and `const` in JavaScript. The following explanation is how I’ve come to understand them so far <sup><a id="ffn1" href="#fn1" class="footnote">1</a></sup>.

## Function or Lexical Scope

Take this code:


```js
  function foo(a) {
   var b = 2;
   // some code
   function bar() {
   // ...
  }
  // more code
  var c = 3;
}
```

Here we have a function `foo` that sits in the global scope. Nested within this scope is the function `bar()` and nested inside `foo`. Also within `foo`, we have the variable declaration `var b = 2;` and `var c = 3;`. Each of these belong to scope— `foo` to the global scope, `var b`, `var b`, and `var c` all scope to `foo`. Each of these scopes have access to functions and identifiers of the scopes outside them. None of these functions or identifiers are accessible outside of the function scope `foo`.

## Disadvantages of Function Scopes

**Hoisting by the interpreter**

The first pass the interpreter does on var processes it and lifts it to the top of the scope. It then processes the function declarations as uninitialized variables. <sup><a id="ffn2" href="#fn2" class="footnote">2</a></sup>

*An example of hoisting*:

```js
function bar() {
  if (!foo) {
    var foo = 10;
  }
  alert(foo);
}
bar(); // alerts 10 instead of reference error
```

**Having to use an IIFE** <sup><a id="ffn3" href="#fn3" class="footnote">3</a></sup>

For beginners like me, this is confusing syntax. I see all IIFE as closures and I am sure that’s not the case. For instance:

```js
(function(){
  // all your code here
  var foo = function() {};
	window.onload = foo;
	 // ...
})();
// foo is unreachable here (it’s undefined)
```

In this example, the parentheses before `function` turn this block of code into a function expression. The final `();` calls the function immediately after it is created. This creates a block scope for `foo` because it is nested within the function expression and invoked immediately. The syntax is hard to understand and thus remember.</li>


## Creating Block Scopes with `let` and `const`

You can easily create block scopes with `let`. It is a new keyword in ES6 that makes it stylistically easier to create a block scope in some block of code (between `{...}`). The variable cannot be accessed in the global scope. Take this code for example:

```js

if (a) {
  b = a * 2;
  let a = 5;
}

console.log(b); // Reference Error! a is not defined.
```

The error here is because `console.log()` can’t access the `a` variable as `let` scopes it to the `if` block.

`let` also signals to another developer that the identifier you’re using will be mutated at some point along the way, at least according to <a href="https://medium.com/javascript-scene/javascript-es6-var-let-or-const-ba58b8dcde75#.by92tjm6o">Eric Elliott</a>. This is why he suggests using `const` for immutable identifiers.

 ### `const`

This creates block scope but allows for the data the identifier holds to be quasi immutable. The data can be mutated. `const` only is immutable in the sense that it binds the data to the identifier, and thus should be used when only when you want to treat a value as non-reassignable. In this instance, `const` is not like `CONST` in Java and other languages.

You can actually  **make** a `const` value immutable by adding `object.freeze()` to it.

## So `let` or `const`?

If you took a minute to read the article I linked to by Eric Elliott, you’ll see his strong opinion in favor of `const`. He also stated that `var` is the weakest link in ES6. But Kyle Simpson had something interesting to say about it


`let` improves scoping options in JS, not replaces. `var` is still a useful signal for variables that are used throughout the function. Having both, and using both, means scoping intent is clearer to understand and maintain and enforce. That’s a big win!

## Thoughts

I am still not sure which is the  **right** one to use and when. I am sticking with `let` for now, whenever I need block scopes. It is important to note you don’t  **have** to use block scopes all the time. A mixture of function or static scopes and block scopes are fine in the same document.

What do you think? Are you taking advantage of ES6’s `let` and `const`?

<ol id="footnotes">
	<li id="fn1">StackOverflow ftw <a href="#ffn1">&#8617;</a></li>
	<li id="fn2">An aside: In JavaScript, the interpreter will hoist variable declarations but not initializations.  <a href="#ffn2">&#8617;</a></li>
	<li id="fn3">Immediately Invoked Function Expression <a href="#ffn3">&#8617;</a></li>