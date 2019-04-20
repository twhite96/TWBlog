---
ID: 1909
title: Check Yo Self Update & Eliminating Dev Dependencies
author: Tiffany White
date: "2017-05-16"
spoiler: I worked like a fiend over the weekend on Check Yo Self, reading documentation, implementing features, and taking sone away. Going over the write-good issues on GitHub to see how if it could parse extra characters.
layout: post
link: >
  https://tiffanywhite.tech/check-yo-self-update-eliminating-dev-dependencies/
published: true
tags:
  - coding
  - daily progress
  - programming
categories:
  - App Updates
---


I worked like a fiend over the weekend on Check Yo Self, reading documentation, implementing features, and taking some away.

Going over the `write-good` issues on GitHub to see how if it could parse extra characters [^1].

I saw an issue where a guy implemented using his GitHub Project Page to host a React implementation of a `write-good` app.

Went to the app, put in some markdown, and it gave me suggestions. *Nice*.

## No Need for Natural

I was going to use the `natural` natural language tokenizers to parse out the markdown but I don’t need it. One less dev dependency is a good thing.

## Also, No Need for Heroku or Postgres

I researched `localStorage` web API. Each browser has a set limit of how much data can be stored in the browser. I found [this little utility](https://arty.name/localstorage.html) to check how many MBs of storage I had to work with. 5 MBs in Chrome [^2]. From what I understand, Firefox has a limit of 10 MB but I could be wrong.

After this, I filled a markdown document with 2000 words, just to see the size of the document. It was 9 kbs. I decided to limit the amount of words per document to 2000 and the amount of documents that could be stored to 200.

## Working With and Testing Local Storage

I found some gold in the MDN docs and their GitHub repo for MDN. You can test the localStorage on a client with the following code:

```javascript
function storageAvailable(type) {
  'use strict'
    try {
	var storage = window[type], x = &quot;__storage_test__&quot;;
	storage.setItem(x, x);
	storage.removeItem(x);
	return true;
	} catch (e) {
	  return (
	  e instanceof DOMException && // everything except Firefox
	  (e.code === 22 || // Firefox
	  e.code === 1014 || // test name field too, because code might not be present // everything except Firefox
	  e.name === 'QuotaExceededError' || // Firefox
		e.name === 'NS_ERROR_DOM_QUOTA_REACHED') && // acknowledge QuotaExceededError only if there&#039;s something already stored
	  storage.length !== 0
	);
    }
}

console.log(storageAvailable());
```

I am not certain of everything that is happening here but it tests for storage on the client’s browser. If not you can log an exception.

I am probably going to alert the user somehow if they have exceeded the `localStorage` limit [^3].

## Logic So Far

So far I’ve got some broken spaghetti code I am looking to fix.

I need a refresher on jQuery so I’ve visited Treehouse. I also know *some* of what I need to do.

What I have so far:

```javascript
/* App Starts Here */
$('#texts').val('New Text');
$('#texts').trigger('autoresize');
var writeGood = require('write-good');
var suggestions = writeGood(userInput, {weasel: false});

suggestions: [{

}];
```
## Material Design Lite Woes

The Material Design Lite docs are good but I was having some trouble understanding everything, as components are really verbose and seem to overlap some.

I was deep into the html when I found I couldn’t grok something and went looking for a solution.

Enter: [Materalize.css](http://materializecss.com/).

The guys are from Pittsburgh [^4] and attend one of the premier Computer Science schools in the world, Carnegie Mellon. They came up with a way to add Material Design Lite to your site, stripping away the verbosity, and leaving you with customizable components that resemble a bit of a mix of Bootstrap and MDL.

Currently I have this bit of Materialize.css in my markup:

```html
<% include partials/header %>
  <body>
    <div class="page-flexbox-wrapper">
      <% include partials/nav %>
        <main class="mdl-layout__content">
          <div class="divider" id="overview"></div>
          <div class="section z-depth-2">
            <h4>Texts</h4>
            <p class="flow-text">This is where you add your markdown. Go ahead! Add as much as you like.</p>
            <div class="row">
              <div class="col s12">
                <div class="row">
                  <div class="input-field col s12">
                    <i class="material-icons prefix grey-text">mode_edit</i>
                    <textarea id="texts" class="materialize-textarea grey-text">
                  </textarea>
                    <label for="texts" class="grey-text flow-text">Add your markdown here...</label>
                  </div>
                </div>
              </div>
              <div class="fixed-action-btn vertical">
                <a class="btn-floating btn-large waves-effect waves-light pink" id="submit">
                <i class="material-icons">add</i>
              </a>
                <ul>
                  <li class="btn-floating btn-large waves-effect waves-light red"><a href="#!"><i class="material-icons">delete</i></a></li>
                  <li class="btn-floating btn-large waves-effect waves-light orange"><a href="#!"><i class="material-icons">undo</i></a></li>
                  <li class="btn-floating btn-large waves-effect waves-light green"><a href="#!"><i class="material-icons">redo</i></a></li>
                </ul>
              </div>

              <!--TODO: add the following div to show.ejs -->

              <div class="textList"></div>
            </div>
        </main>
<% include partials/footer %>
```

Some MDL proper mixed in but I will take it out soon enough.

## Vertical Fabs and Getting Them to Work

I am trying to understand how to get input from a click on a fab. As you can see from my logic, I am using a click event to try to trigger an input but it isn’t working. I am looking for a fix.

Here is a nifty video of my getting the vertical fabs working.

[^1]: Those lovely markdown characters. I ❤️ markdown.
[^2]: This utility crashed someone’s browser so be careful.
[^3]: There are some users who really don’t pay attention or care.
[^4]: Steel City? Not much anymore. More like, up-and-coming tech hub.
