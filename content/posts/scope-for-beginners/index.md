---
title: "Scope for Beginners"
layout: post
date: "2015-11-02"
---
In JavaScript, lexical scope deals with where your variables are defined, and how they will be accessible — or not accessible — to the rest of your code.

There are two terms to think about when talking about scope: local and global. These two terms are important to understand, because one can be more dangerous than the other when declaring variables and executing your code.

## Global Scope


A variable is globally scoped if you declare it outside of all of your functions. For example: 

	```js
  //global variable, i.e. global scope
  var a = "foo";

  function myFunction() {
  	var b = "bar";
  	console.log(a+b);
  }

  myFunction();
```
When a variable is in the global scope, it can be accessed by all the code in the same JavaScript file. In this example, I’m accessing the variable a in my console.log statement, inside the *myFunction* function.


## Local Scope

Local variables only exist inside functions. They are scoped to that individual function.
You can think of local variables as as any variables that fall between an opening and closing curly brace.
These local variables can’t be accessed by code outside of the function to which they belong.

Take a look at this code:

```js
//global variable, i.e. global scope
var a = "foo";

function myFunction() {
   //local variable, or local scope
    var b = "bar";
    console.log(a+b);
 }

function yourFunction() {
  var c = "JavaScript is fun!";
   return c;
   console.log(c);
 }

myFunction();
yourFunction();
```
Notice how the variables are each declared inside separate functions. They are both local variables, in local scope, and can’t be accessed by one other.

For instance, I can’t return *b* in *yourFunction*, because *b* belongs to *myFunction*. *b* can’t be accessed by *yourFunction*, and vice versa.

If I were to try to return the value of *b* when calling *yourFunction*, I’d get *“error: b is not defined.”* Why? Because *b* doesn’t belong to *yourFunction*. *b* is outside of *yourFunction*’s scope.

When adding nested conditionals, scope gets even more hairy. But I’ll leave that for another time.

But for now, remember the difference between global scope and local scope. And the next time you get a *“is not defined”* error, check the variable’s scope.

