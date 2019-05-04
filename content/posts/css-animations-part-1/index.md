---
ID: 2007
title: CSS Animations, Part 1
author: Tiffany White
date: "2016-09-20"
layout: post
link: >
  https://tiffanywhite.tech/css-animations-part-1/
published: true
tags: uncategorized
categories:
  - css
  - css animations
---
<p>As you may know, you can animate pretty much anything with JavaScript and jQuery. jQuery makes it easier as it is a pretty neat and simple JavaScript library. No need to use</p>
<figure class="highlight"><pre><code class="language-ruby" data-lang="ruby"><table style="border-spacing: 0"><tbody><tr><td class="gutter gl" style="text-align: right"><pre class="lineno">1</pre></td><td class="code"><pre><span class="n">document</span><span class="p">.</span><span class="nf">getElementByID</span><span class="w">
</span></pre></td></tr></tbody></table></code></pre></figure>
<p>when you can use</p>
<figure class="highlight"><pre><code class="language-ruby" data-lang="ruby"><table style="border-spacing: 0"><tbody><tr><td class="gutter gl" style="text-align: right"><pre class="lineno">1</pre></td><td class="code"><pre><span class="err">$</span><span class="p">(</span><span class="c1">#myID).animate({left: '250px'});</span><span class="w">
</span></pre></td></tr></tbody></table></code></pre></figure>
<p>.</p>

<p>You can also animate things with CSS. There are debates on whether <a href="https://davidwalsh.name/css-js-animation">CSS animations are faster than JavaScript animations</a> and generally, if you are using vanilla JS and not a heavy library like jQuery, JavaScript animation perf is comparable to CSS.</p>

<h2 id="so-how-do-you-animate-with-css">So How Do You Animate with CSS?</h2>

<p>There are basically two ways to animate properties in CSS: <em>transition</em> and <em>transform</em>.</p>

<p>Not all CSS properties are animatable. See <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_animated_properties">this list</a> for animatable properties.</p>

<p>Animating a property with CSS is fairly straight-forward.</p>

<p>Take the animatable property: <code class="highlighter-rouge">opacity</code>. We can animate the <code class="highlighter-rouge">opacity</code> on an image overlay so that when we hover over it with the mouse, the opacity of the overlay will decrease on the image. You can do that with something like this:</p>

<figure class="highlight"><pre><code class="language-ruby" data-lang="ruby"><table style="border-spacing: 0"><tbody><tr><td class="gutter gl" style="text-align: right"><pre class="lineno">1
2
3
4
5
6
7
8
9</pre></td><td class="code"><pre><span class="p">.</span><span class="nf">overlay</span> <span class="p">{</span>
	<span class="ss">opacity: </span><span class="mi">0</span><span class="p">;</span>
	<span class="n">transition</span><span class="o">-</span><span class="ss">property: </span><span class="n">opacity</span><span class="p">;</span>
	<span class="n">transition</span><span class="o">-</span><span class="ss">duration: </span><span class="o">.</span><span class="mi">4</span><span class="n">s</span><span class="p">;</span>
<span class="p">}</span>

<span class="p">.</span><span class="nf">overlay</span><span class="ss">:hover</span> <span class="p">{</span>
	<span class="ss">opacity: </span><span class="mi">2</span><span class="p">;</span>
<span class="p">}</span><span class="w">
</span></pre></td></tr></tbody></table></code></pre></figure>

<p>Here, we are selecting the <code class="highlighter-rouge">overlay</code> class, and adding a base property to that class. Inside of the class selection, we set the <code class="highlighter-rouge">opacity</code> to <code class="highlighter-rouge">0</code> and add the transition with <code class="highlighter-rouge">transition-property</code> which selects the property you want to animate and <code class="highlighter-rouge">transition-duration</code> which tells the browser how long the animation lasts.</p>

<p>Once you hover over the image, the opacity will be set to <code class="highlighter-rouge">2,</code> and when you switch off of it, it will go back down to <code class="highlighter-rouge">0</code> since we told the browser by the first CSS declaration we needed to have the opacity return to <code class="highlighter-rouge">0</code> once the hover state was over.</p>

<h2 id="not-too-bad-right">Not Too Bad, Right?</h2>

<p>It is fairly simple, once you get the hang of it. I will be posting more about CSS transitions as I learn them. Meanwhile, here is <a href="http://leaverou.github.io/animatable/">nice little table</a> of animatable properties by <a href="http://lea.verou.me/">Lea Verou</a> that animate when you hover over them.</p>