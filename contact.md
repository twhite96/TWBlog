---
title: Contact
layout: page
permalink: /contact/
sidebar_link: true
---

<section class="get-in-touch">
   <h1 class="title">Get in touch</h1>
   <form class="contact-form row" name="contact" method="POST" netlify-honeypot="bot-field" netlify>
      <p class="hidden">
        <label>Don’t fill this out if you're human: <input name="bot-field" /></label>
      </p>
      <div class="form-field col x-50">
         <input id="name" class="input-text js-input" type="text" required>
         <label class="label" for="name">Name</label>
      </div>
      <div class="form-field col x-50">
         <input id="email" class="input-text js-input" type="email" required>
         <label class="label" for="email">E-mail</label>
      </div>
      <div class="form-field col x-100">
         <input id="message" class="input-text js-input" type="text" required>
         <label class="label" for="message">Message</label>
      </div>
      <div class="form-field col x-100 align-center">
         <input class="submit-btn" type="submit" value="Submit">
      </div>
   </form>
</section>
