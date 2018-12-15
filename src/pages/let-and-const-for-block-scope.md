---
title: Let and Const for Block Scope
author: Tiffany White
date: "2016-10-28"
---

Up until ES6, you couldn't achieve true block scoping in JavaScript. With the `var` keyword, the scope in a code block could be accessed in the global scope, as variable declarations are hoisted to the top of scope and the assignments are kept where they are.

For instance, take this code:

```javascript
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
The function `foo` sits in the global scope. Inside the `foo` function, we have the function `bar` as well as some variable assignments with `var b = 2 ` and `var c - 3` sitting in `foo`. Each of these identifiers and functions have access to the scopes outside of them, clouding the global namespace. We call these *function scopes* and typically, they aren't a good idea.

## Examples of Hoisting

One of the reasons it isn't great to use `var` when declaring variable assignments is because of hoisting which I mentioned above. An example:

```javascript
   function bar() {
	  if (!foo) {
		var foo = 10;
	  }
	   alert(foo);
	}
	bar(); // alerts 10 instead of reference error  
```
Instead of getting a reference error here, when `bar()` is executed, the `alert(foo)` function has access to `var foo = 10;` in the conditional block. So when the JavaScript compiler goes looking for `foo` it finds it because `foo` is not scoped solely to the conditional block.

## `let`

With ES6 [^1], you can create a block scope, or a scope that is contained within its own code block, by using `let` instead of `var`. For instance:

```javascript
    if (a) {
	  b = a * 2;
	  let a = 5;
	}
	console.log(b); // Reference Error! a is not defined.
```	
Here, the `console.log(b);` method call is looking for `a` but `console.log` can't access `a` as it is scoped to the `if` block. This is a very simplistic example of block scoping with `let`.

## `const`

`const` also creates block scoping. It allows for the value the indentifier holds to be quasi immutable. The data *can* be mutated as `const` is only really immutable because it binds the value of the indentifier and should only be used when you want the value you're using to be non-reassignable.

You can make a `const` value immutable by adding `object.freeze()` method to it.

## What Should You Use?

I'll leave you with a quote by [Kyle Simpson](https://twitter.com/getify):

> let improves scoping options in JS, not replaces. var is still a useful signal for variables that are used throughout the function. Having both, and using both, means scoping intent is clearer to understand and maintain and enforce. That’s a big win!

[^1]: ES2015. Sorry.