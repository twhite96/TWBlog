---
ID: 741
post_title: >
  Iterating Over an Array in Java and
  JavaScript
post_name: >
  iterating-over-an-array-in-java-and-javascript-3
author: Tiffany White
post_date: 2015-11-18 01:39:36
layout: post
link: >
  https://tiffanywhite.tech/iterating-over-an-array-in-java-and-javascript-3/
published: true
tags:
  - arrays
  - Java
  - javascript
  - programming
categories:
  - Daily Progress
  - General Updates
  - Programming
  - "Tiffany's Posts"
---
<img class="aligncenter" src="http://helloburgh.me/wp-content/uploads/2015/11/wpid-FSPLFPQBCZ_1.jpg" alt="mac" />

I have learned that while Java and JavaScript are different, they share similarities. Someone in the <a href="https://codenewbie.typeform.com/to/uwsWlZ">Code Newbie Slack</a> informed me of the history of JavaScript and how the creators had borrowed <em>some</em> functionality from Java. That’s for another post on another blog.

But while I was reading my textbook chapter on arrays, I noticed that you can iterate through an array in Java much like you can in JavaScript.

Arrays in Java are initialized completely differently as you must specify a data type and the slots you allocate in the array cannot be changed, as such, it is immutable. Here is an example of an array in Java:

<<<<<<< Updated upstream
<pre class="lang:java decode:1 " >int[] myArray;
myArray = new int[10];
=======
<pre class="lang:java decode:1 " >int[] myArray;
myArray = new int[10];
>>>>>>> Stashed changes
</pre>

This declares the array then initializes it with 10 int spots.

An array in JavaScript looks like this:

<pre class="lang:javascript decode:1 " >var myArray = [&quot;Jerri&quot;, 69, &quot;Tiffany&quot;, 37, &quot;John&quot;, 39];</pre> <a id="fnref-1" class="footnote" title="see footnote" href="#fn-1">[1]</a>

<h3>How Interating Through Arrays in Java and JavaScript Are Similar</h3>

<img src="http://helloburgh.me/wp-content/uploads/2015/11/wpid-11068139233_3a67bc9431_k.jpg" alt="they_all_look_the_same" />

So, I first got a taste of iterating through an array in JavaScript while working the Bonfires at Free Code Camp, which use algorithms to help you better understand the ins and outs of the language. One of the ways you can iterate through an array in JavaScript is by a for loop and a .length method depending on what you need. Here is the syntax of an algorithm I wrote in order to find out if a word was a palindrome or not:

<<<<<<< Updated upstream
<pre class="lang:javascript decode:1 " >function palindrome(str) {
 str = str.toLowerCase().replace(/[\W_]/g, &quot;&quot;);
 for(var i = 0, len = str.length - 1; i &amp;lt; len/2; i++) {
 if(str[i] !== str[len-i]) {
 return false;
 }
 }
 return true;
}




=======
<pre class="lang:javascript decode:1 " >function palindrome(str) {
 str = str.toLowerCase().replace(/[\W_]/g, &quot;&quot;);
 for(var i = 0, len = str.length - 1; i &amp;lt; len/2; i++) {
 if(str[i] !== str[len-i]) {
 return false;
 }
 }
 return true;
}




>>>>>>> Stashed changes
palindrome(&quot;eye&quot;);</pre>

<h3>Breaking It Down</h3>

The first part of this algorithm is turning all the letters in the string to lowercase and then using regex to get rid of capital letters, spaces, and punctuation<a id="fnref-2" class="footnote" title="see footnote" href="#fn-2">[2]</a>.

The next part checks each index of the array to see if it is the same later, going inwards until it reached half the length of the array. If they are the same letter, then it’s a palindrome and will return true.

<h3>Same with Java…in a Way</h3>

The for loop in a Java array iteration looks the same when you just break it down into the method body. For instance:

<<<<<<< Updated upstream
<pre class="lang:java decode:1 " >public static void showArray(int|) array)
{
 for (int i = 0; i &lt; array.length; i++)
 System.out.print(array(i] + &quot; &quot;);
=======
<pre class="lang:java decode:1 " >public static void showArray(int|) array)
{
 for (int i = 0; i &lt; array.length; i++)
 System.out.print(array(i] + &quot; &quot;);
>>>>>>> Stashed changes
}</pre>

Here, when the showValue method is called, an element of the array is passed to the method. It will loop through and print out each value of the elements of the array. Here we are printing it out. In the JavaScript example, we were cycling through the array to test for similarities.

The parallel? You can cycle through, and get elements/indeces of arrays with a for loop.

<div class="footnotes">

<hr />

<ol>
    <li id="fn-1">You need to have the same data type in a Java array. If you look at the JavaScript array, I have number data types and strings. In the Java example I have 10 ints, which are numbers up to 2<sup>31</sup>–1. Can’t mix data types in Java arrays. <a class="reversefootnote" title="return to article" href="#fnref-1"> ↩</a></li>
    <li id="fn-2">I used regex because there was a test that had to be run that included numbers and odd punctuation that had to return false. <a class="reversefootnote" title="return to article" href="#fnref-2"> ↩</a></li>
</ol>
</div>