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
    <figcaption style="text-align: center;">
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
    <figcaption style="text-align: center;">
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
    <figcaption style="text-align: center;">
       Wes kinda trolling me lol.
       <a class="align-center" href="https://res.cloudinary.com/twhiteblog/image/upload/c_scale,h_425/v1592438001/lol_hoygea.png">
          <svg width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#06d7d9">
            <path d="M19.0536842,0 L11.7951267,0 C11.2940351,0 10.8877973,0.40703125 10.8877973,0.909101562 C10.8877973,1.41117187 11.2940351,1.81820312 11.7951267,1.81820312 L16.8632359,1.81820312 L7.52432749,11.1753906 C7.16998051,11.5304297 7.16998051,12.1059766 7.52432749,12.4610156 C7.7014425,12.6385156 7.93364522,12.7272656 8.16584795,12.7272656 C8.39805068,12.7272656 8.6302924,12.6385547 8.80744639,12.4609766 L18.1463938,3.10382812 L18.1463938,8.18183594 C18.1463938,8.68390625 18.5526316,9.0909375 19.0537232,9.0909375 C19.5548148,9.0909375 19.9610526,8.68390625 19.9610526,8.18183594 L19.9610526,0.909101562 C19.9610136,0.40703125 19.5547758,0 19.0536842,0 Z" id="Shape"></path>
            <path d="M15.4244055,9.09089844 C14.9233138,9.09089844 14.517076,9.49792969 14.517076,10 L14.517076,18.1818359 L1.81461988,18.1818359 L1.81461988,5.45453125 L9.98050682,5.45453125 C10.4815984,5.45453125 10.8878363,5.0475 10.8878363,4.54542969 C10.8878363,4.04335938 10.4815984,3.63636719 9.98050682,3.63636719 L0.907329435,3.63636719 C0.406237817,3.63636719 0,4.04339844 0,4.54546875 L0,19.0909375 C0,19.5929688 0.406237817,20 0.907329435,20 L15.4244444,20 C15.9255361,20 16.3317739,19.5929688 16.3317739,19.0908984 L16.3317739,10 C16.3317349,9.49792969 15.9254971,9.09089844 15.4244055,9.09089844 Z" id="Shape"></path>
        </svg>
       </a>
    </figcaption>
</figure>


<figure>
    <img class="align-center" src="https://res.cloudinary.com/twhiteblog/image/upload/v1592438354/ugh_yrklef.png" />
    <figcaption style="text-align: center;">
       <a href="https://res.cloudinary.com/twhiteblog/image/upload/v1592438354/ugh_yrklef.png">
          <svg width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#06d7d9">
            <path d="M19.0536842,0 L11.7951267,0 C11.2940351,0 10.8877973,0.40703125 10.8877973,0.909101562 C10.8877973,1.41117187 11.2940351,1.81820312 11.7951267,1.81820312 L16.8632359,1.81820312 L7.52432749,11.1753906 C7.16998051,11.5304297 7.16998051,12.1059766 7.52432749,12.4610156 C7.7014425,12.6385156 7.93364522,12.7272656 8.16584795,12.7272656 C8.39805068,12.7272656 8.6302924,12.6385547 8.80744639,12.4609766 L18.1463938,3.10382812 L18.1463938,8.18183594 C18.1463938,8.68390625 18.5526316,9.0909375 19.0537232,9.0909375 C19.5548148,9.0909375 19.9610526,8.68390625 19.9610526,8.18183594 L19.9610526,0.909101562 C19.9610136,0.40703125 19.5547758,0 19.0536842,0 Z" id="Shape"></path>
            <path d="M15.4244055,9.09089844 C14.9233138,9.09089844 14.517076,9.49792969 14.517076,10 L14.517076,18.1818359 L1.81461988,18.1818359 L1.81461988,5.45453125 L9.98050682,5.45453125 C10.4815984,5.45453125 10.8878363,5.0475 10.8878363,4.54542969 C10.8878363,4.04335938 10.4815984,3.63636719 9.98050682,3.63636719 L0.907329435,3.63636719 C0.406237817,3.63636719 0,4.04339844 0,4.54546875 L0,19.0909375 C0,19.5929688 0.406237817,20 0.907329435,20 L15.4244444,20 C15.9255361,20 16.3317739,19.5929688 16.3317739,19.0908984 L16.3317739,10 C16.3317349,9.49792969 15.9254971,9.09089844 15.4244055,9.09089844 Z" id="Shape"></path>
        </svg>
       </a>
    </figcaption>
</figure>