---
layout: post
title: "The Execution Stack and Scope"
date: "2015-11-07"
---

What is the *Execution Stack*? Before I answer that question, we'll first have to take a look at the *Global Execution Context*

The *Global Execution Context*, in general terms, is the environment in which the function gets invoked, or the variable's scope. *The Global Execution Context*, creates global object, a window object, and a *this* variable in its creation phase as well as storing any variables you've made stored in memory. 

The first function gets created on the *global execution context* called an, as you probably guessed, *execution context* and has its own space for variables and functions. The global execution context reads line by line until it comes to the next function. Every function creates a new execution context. Once there are no more functions to execute the top function on the execution context gets popped off. Whatever is at the top is currently running.

The *Global Execution Context*, then, is the outer portion of the *Execution Stack* or *Call Stack*. The functions that are invoked in the Execution Stack are lexically sitting on top of one another and being called from top to bottom. JavaScript is a synchronous language, which means the code you write gets executed line by line, from top to bottom.

## Talking About the Scope Chain


So how do the execution stack and the scope chain come together? It depends on where the function sits lexically. Take a look at this code:

```js
function myFunction() {
  console.log(myVar);
}

function yourFunction() {
  var myVar = 68;
  yourFunction();
}

var myVar = 37;
myFunction();
```

The execution stack has to search for the variables you defined and where you defined them, making references to the outer lexical environment. This is called the *scope chain*.

When this code is executed, since the scope chain can't find *myVar* in *function yourFunction()* because it isn't lexically in the local scope (remember your scopes) and the outer reference is in the global execution context, the *console.log* will display 37.

If we were to change where *function yourFunction()* sits lexically in the execution stack, for instance:

```js
function myFunction() {
  function yourFunction() {
	console.log(myVar);
   }
		
var myVar = 68;
  yourFunction();
}
	
var myVar = 37;
myFunction();
```
	
Everything is created along the same lines. The global execution context is created, *myFunction()* sits on top of the global execution context, *yourFunction()* sits on top of it. But when the scope chain looks for its outer reference lexical environment this time, *yourFunction()*'s outer reference lexical environment is *myFunction()* because *yourFunction()* sits lexically inside of it.

This is how, under the hood, local and global scope function. For further information see: [ECMAScript Docs](http://dmitrysoshnikov.com/ecmascript/chapter-1-execution-contexts/)





 

