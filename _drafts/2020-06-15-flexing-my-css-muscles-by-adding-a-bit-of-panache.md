---
title: "Flexing My CSS Muscles by Adding A Bit of Panache"
layout: post
tags: []
featured_image:
---

A case study on a trial by fire primer on CSS.


{% notice warning %}
 Well, this was a ride. But I came out on the other end. The following is a case study of my journey adding low highlights to headings and links to this blog.
{% endnotice %}

To add a bit more color and *style* to this blog by adding a *low highlight* to headers and links, much like you can find on the [Rust landing page](https://www.rust-lang.org/) and [Wes Bos' website](https://wesbos.com/).

<figure>
    <img style="align-center" src="https://res.cloudinary.com/twhiteblog/image/upload/v1592438002/rust_nqwlto.png" />
    <figcaption class="caption-text">
       Rust's landing page highlights
       <a href="https://res.cloudinary.com/twhiteblog/image/upload/v1592438002/rust_nqwlto.png">
          <svg width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#06d7d9">
            <path d="M19.0536842,0 L11.7951267,0 C11.2940351,0 10.8877973,0.40703125 10.8877973,0.909101562 C10.8877973,1.41117187 11.2940351,1.81820312 11.7951267,1.81820312 L16.8632359,1.81820312 L7.52432749,11.1753906 C7.16998051,11.5304297 7.16998051,12.1059766 7.52432749,12.4610156 C7.7014425,12.6385156 7.93364522,12.7272656 8.16584795,12.7272656 C8.39805068,12.7272656 8.6302924,12.6385547 8.80744639,12.4609766 L18.1463938,3.10382812 L18.1463938,8.18183594 C18.1463938,8.68390625 18.5526316,9.0909375 19.0537232,9.0909375 C19.5548148,9.0909375 19.9610526,8.68390625 19.9610526,8.18183594 L19.9610526,0.909101562 C19.9610136,0.40703125 19.5547758,0 19.0536842,0 Z" id="Shape"></path>
            <path d="M15.4244055,9.09089844 C14.9233138,9.09089844 14.517076,9.49792969 14.517076,10 L14.517076,18.1818359 L1.81461988,18.1818359 L1.81461988,5.45453125 L9.98050682,5.45453125 C10.4815984,5.45453125 10.8878363,5.0475 10.8878363,4.54542969 C10.8878363,4.04335938 10.4815984,3.63636719 9.98050682,3.63636719 L0.907329435,3.63636719 C0.406237817,3.63636719 0,4.04339844 0,4.54546875 L0,19.0909375 C0,19.5929688 0.406237817,20 0.907329435,20 L15.4244444,20 C15.9255361,20 16.3317739,19.5929688 16.3317739,19.0908984 L16.3317739,10 C16.3317349,9.49792969 15.9254971,9.09089844 15.4244055,9.09089844 Z" id="Shape"></path>
        </svg>
       </a>
    </figcaption>
</figure>

<figure>
    <img class="align-center" src="https://res.cloudinary.com/twhiteblog/image/upload/v1592438001/wes_ve1f3l.png" />
    <figcaption class="caption-text">
       Wes' sense of design is always top notch. Always a bit of whimsy with his stuff.
       <a href="https://res.cloudinary.com/twhiteblog/image/upload/v1592438001/wes_ve1f3l.png">
          <svg width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#06d7d9">
            <path d="M19.0536842,0 L11.7951267,0 C11.2940351,0 10.8877973,0.40703125 10.8877973,0.909101562 C10.8877973,1.41117187 11.2940351,1.81820312 11.7951267,1.81820312 L16.8632359,1.81820312 L7.52432749,11.1753906 C7.16998051,11.5304297 7.16998051,12.1059766 7.52432749,12.4610156 C7.7014425,12.6385156 7.93364522,12.7272656 8.16584795,12.7272656 C8.39805068,12.7272656 8.6302924,12.6385547 8.80744639,12.4609766 L18.1463938,3.10382812 L18.1463938,8.18183594 C18.1463938,8.68390625 18.5526316,9.0909375 19.0537232,9.0909375 C19.5548148,9.0909375 19.9610526,8.68390625 19.9610526,8.18183594 L19.9610526,0.909101562 C19.9610136,0.40703125 19.5547758,0 19.0536842,0 Z" id="Shape"></path>
            <path d="M15.4244055,9.09089844 C14.9233138,9.09089844 14.517076,9.49792969 14.517076,10 L14.517076,18.1818359 L1.81461988,18.1818359 L1.81461988,5.45453125 L9.98050682,5.45453125 C10.4815984,5.45453125 10.8878363,5.0475 10.8878363,4.54542969 C10.8878363,4.04335938 10.4815984,3.63636719 9.98050682,3.63636719 L0.907329435,3.63636719 C0.406237817,3.63636719 0,4.04339844 0,4.54546875 L0,19.0909375 C0,19.5929688 0.406237817,20 0.907329435,20 L15.4244444,20 C15.9255361,20 16.3317739,19.5929688 16.3317739,19.0908984 L16.3317739,10 C16.3317349,9.49792969 15.9254971,9.09089844 15.4244055,9.09089844 Z" id="Shape"></path>
        </svg>
       </a>
    </figcaption>
</figure>

<figure>
    <img style="margin: 10px auto 20px; display: block;" src="https://res.cloudinary.com/twhiteblog/image/upload/c_scale,h_425/v1592438001/lol_hoygea.png" />
    <figcaption class="caption-text">
       Wes kinda trolling me lol.
       <a class="align-center" href="https://res.cloudinary.com/twhiteblog/image/upload/c_scale,h_425/v1592438001/lol_hoygea.png">
          <svg width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#06d7d9">
            <path d="M19.0536842,0 L11.7951267,0 C11.2940351,0 10.8877973,0.40703125 10.8877973,0.909101562 C10.8877973,1.41117187 11.2940351,1.81820312 11.7951267,1.81820312 L16.8632359,1.81820312 L7.52432749,11.1753906 C7.16998051,11.5304297 7.16998051,12.1059766 7.52432749,12.4610156 C7.7014425,12.6385156 7.93364522,12.7272656 8.16584795,12.7272656 C8.39805068,12.7272656 8.6302924,12.6385547 8.80744639,12.4609766 L18.1463938,3.10382812 L18.1463938,8.18183594 C18.1463938,8.68390625 18.5526316,9.0909375 19.0537232,9.0909375 C19.5548148,9.0909375 19.9610526,8.68390625 19.9610526,8.18183594 L19.9610526,0.909101562 C19.9610136,0.40703125 19.5547758,0 19.0536842,0 Z" id="Shape"></path>
            <path d="M15.4244055,9.09089844 C14.9233138,9.09089844 14.517076,9.49792969 14.517076,10 L14.517076,18.1818359 L1.81461988,18.1818359 L1.81461988,5.45453125 L9.98050682,5.45453125 C10.4815984,5.45453125 10.8878363,5.0475 10.8878363,4.54542969 C10.8878363,4.04335938 10.4815984,3.63636719 9.98050682,3.63636719 L0.907329435,3.63636719 C0.406237817,3.63636719 0,4.04339844 0,4.54546875 L0,19.0909375 C0,19.5929688 0.406237817,20 0.907329435,20 L15.4244444,20 C15.9255361,20 16.3317739,19.5929688 16.3317739,19.0908984 L16.3317739,10 C16.3317349,9.49792969 15.9254971,9.09089844 15.4244055,9.09089844 Z" id="Shape"></path>
        </svg>
       </a>
    </figcaption>
</figure>

## Motivation

I wanted my blog to look cool and modern, fancy, like the big kids in this space. I also wanted to flex my CSS muscles, as that is one of my weaker areas[^1]. 

## Process
At first, I went into DevTools and copied the CSS from Rust's webpage. It didn't quite work. None of my highlights were showing and I didn't debug because I felt like something deeper was at play[^2]. I decided to skip this idea and go a different route.

I did a bit of Google-fu on how to get this effect and came across  [How to create a low highlight behind your text](https://thirtyeightvisuals.com/blog/low-highlight-heading-links-squarespace) by Thirty Eight Visuals. It's a tutorial on how to do this on Squarespace but you can apply it to any website.

I copied this snippet of code:

```css
 background: linear-gradient(180deg, rgba(255, 255, 255, 0) 65%, #ffc1d2 65%);
  display: inline;
```

created a class and added that to the `h1` element in my `page.html` file. The resulting code looks something like this:

```css
h1.highlight {
  background: linear-gradient(180deg, rgba(255, 255, 255, 0) 65%, #ffc1d2 65%);
  display: inline;
}
```





  

<figure>
    <img class="align-center" src="https://res.cloudinary.com/twhiteblog/image/upload/v1592438354/ugh_yrklef.png" />
    <figcaption class="caption-text">
       <a href="https://res.cloudinary.com/twhiteblog/image/upload/v1592438354/ugh_yrklef.png">
          <svg width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#06d7d9">
            <path d="M19.0536842,0 L11.7951267,0 C11.2940351,0 10.8877973,0.40703125 10.8877973,0.909101562 C10.8877973,1.41117187 11.2940351,1.81820312 11.7951267,1.81820312 L16.8632359,1.81820312 L7.52432749,11.1753906 C7.16998051,11.5304297 7.16998051,12.1059766 7.52432749,12.4610156 C7.7014425,12.6385156 7.93364522,12.7272656 8.16584795,12.7272656 C8.39805068,12.7272656 8.6302924,12.6385547 8.80744639,12.4609766 L18.1463938,3.10382812 L18.1463938,8.18183594 C18.1463938,8.68390625 18.5526316,9.0909375 19.0537232,9.0909375 C19.5548148,9.0909375 19.9610526,8.68390625 19.9610526,8.18183594 L19.9610526,0.909101562 C19.9610136,0.40703125 19.5547758,0 19.0536842,0 Z" id="Shape"></path>
            <path d="M15.4244055,9.09089844 C14.9233138,9.09089844 14.517076,9.49792969 14.517076,10 L14.517076,18.1818359 L1.81461988,18.1818359 L1.81461988,5.45453125 L9.98050682,5.45453125 C10.4815984,5.45453125 10.8878363,5.0475 10.8878363,4.54542969 C10.8878363,4.04335938 10.4815984,3.63636719 9.98050682,3.63636719 L0.907329435,3.63636719 C0.406237817,3.63636719 0,4.04339844 0,4.54546875 L0,19.0909375 C0,19.5929688 0.406237817,20 0.907329435,20 L15.4244444,20 C15.9255361,20 16.3317739,19.5929688 16.3317739,19.0908984 L16.3317739,10 C16.3317349,9.49792969 15.9254971,9.09089844 15.4244055,9.09089844 Z" id="Shape"></path>
        </svg>
       </a>
    </figcaption>
</figure>


## ...and a scrollbar

```css
body::-webkit-scrollbar {
  width: 1em;
}

body::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
}

body::-webkit-scrollbar-thumb {
  background: rgb(6, 215, 217);
  background: linear-gradient(45deg, rgba(6, 215, 217, 1) 0%, rgba(255, 193, 210, 1.00) 35%, rgba(6, 215, 217, 1) 100%);
  border-radius: 3em;
}
```

[scrollbar CSS-Tricks](https://css-tricks.com/almanac/properties/s/scrollbar/)

<p class="codepen" data-height="448" data-theme-id="22729" data-default-tab="html,result" data-user="tiffanywhitedev" data-slug-hash="BajppPj" data-preview="true" style="height: 448px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Scrollbar Idea (CSS-Tricks)">
  <span>See the Pen <a href="https://codepen.io/tiffanywhitedev/pen/BajppPj">
  Scrollbar Idea (CSS-Tricks)</a> by Tiffany White (<a href="https://codepen.io/tiffanywhitedev">@tiffanywhitedev</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

[^1]: Also, admittedly, my least favorite.
[^2]: Maybe something custom that I was missing. I just didn't feel like digging any deeper for such a minor enhancement.