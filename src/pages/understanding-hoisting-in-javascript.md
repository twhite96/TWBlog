---
ID: 1302
title: Understanding Hoisting in JavaScript
author: Tiffany White
date: "2016-09-07"
layout: post
link: >
  https://tiffanywhite.tech/understanding-hoisting-in-javascript/
published: true
tags: uncategorized
categories:
  - General Updates
  - JavaScript
  - Learning
  - Programming
  - "Tiffany's Posts"
---



&nbsp;

With all this talk about ES6 and <a href="https://davidwalsh.name/for-and-against-let" target="_blank">block scoping with  `let ` and  `const `</a>, I thought it would be a good idea to talk about <em>hoisting</em> in JavaScript.

This won’t be a thorough exposition. You can find a great deal of information on <a href="https://github.com/getify/You-Dont-Know-JS/blob/master/scope%20%26%20closures/ch4.md" target="_blank">GitHub</a>. What I want to do is give the basics.
<h2>The JavaScript Interpreter</h2>
There are parts to the JavaScript compiler you’d need to understand to get a grip on what happens when a variable is <em>hoisted</em> or <em>lifted</em> to the top of a scope.

There are three parts to the compiler:
<ul>
 	<li>The Engine</li>
 	<li>Compiler</li>
 	<li>Scope</li>
</ul>
Looking at this statement:  `var b = 10 `, you’re probably assuming this is one statement, and that the JavaScript interpreter sees it the same way. It doesn’t.

The interpreter takes this statement and breaks it up into what are called tokens. To the interpreter, this statement and its tokens are  `var `,  `b `,  `= `, and  `10 `.

The engine part of the interpreter will compile these tokens into an array and subsequent tree of nested elements to execute. The code is compiled right before it is executed.
<h2>What is Meant by <em>Hoisting</em>?</h2>
I am assuming here that you know what scope is, as <a href="https://helloburgh.me/2016/08/25/block-level-scoping-let-const/" target="_blank">I have talked about block scoping before</a> with the same assumption. If you don’t, I’ll cover it in more detail another time. For now, I am just going to focus on hoisting.

Dictionary.com <a href="http://www.dictionary.com/browse/hoist?s=t" target="_blank">definition of hoist</a>:
<blockquote>
<blockquote>verb <em>(used with object)</em></blockquote>
1.

to raise or lift, especially by some mechanical appliance:

<em>to hoist a flag;</em> to hoist the mainsail.</blockquote>
You can think of <em>hoisting</em> a variable as lifting it to the top of whatever scope it is in.

The difference here is that JavaScript hoists <em>declarations</em> and leaves the <em>initializations</em> at the bottom of the scope.

Example:

```js

console.log(foo);

var foo = 3;

```

Take this statement:

 `var foo = 3; `

JavaScript looks at this and sees:

 `var foo; ` and  `foo = 3; `

The first part of the statement is compiled, the second part is executed. It is then compiled as:

```js

var foo;

console.log(foo);

foo = 3;

```

As you can see, the declaration in this scope is the only thing that was “raised” to the top of the scope. The initialization remains at the bottom.
<h2>Just the Basics</h2>

I encourage you to check out the link I linked to above. <a href="https://twitter.com/getify" target="_blank">Kyle Simpson</a> is an amazing teacher and I’ve learned so much from the <a href="http://shop.oreilly.com/category/get/kyle-simpson-kit.do" target="_blank">YDKJS series</a>. You can find the <a href="https://github.com/getify/You-Dont-Know-JS" target="_blank">free version on GitHub</a>.