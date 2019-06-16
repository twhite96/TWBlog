---
title: Contacts App Update
author: Tiffany White
date: "2016-05-20"
category: "Daily Updates"
cover: 1.jpg
---


I haven’t written an article in a week or so. I have lost time or something because I don’t remember what I did while I was away. I did work some Free Code Camp, ran some errands, had a doctor’s appointment and went out with a friend from back home.

So these past two days I have been working on the contacts app I have been working on for forever. I did some of the logic a week or so ago but in the meantime, I wanted to go from pill navigation to navbar navigation. The problem I had was responsive/collapsable navbar. I am trying to follow the Bootstrap docs but I am not having much success.
<h2>Navbar Code</h2>
My navbar code is as follows:

```html

<!-- Navbar content collapse  -->;

 <nav class="navbar navbar-dark bg-primary navbar-fixed-top">
  <div class="container-fluid"></div>
    <div class="navbar-header">
      <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
	<span class="icon-bar"></span>
	<span class="icon-bar"></span>
	<span class="icon-bar"></span>
      </button>
   <a class="navbar-brand" href="#">Contacts App</a>
</div>
<!-- Navbar content -->
<ul class="nav navbar-nav">
 	<li class=""><a class="nav-link" href="index.html">My Contacts <span class="sr-only">(current)</span></a></li>
 	<li class="nav-item"><a class="nav-link" href="addContacts.html">Add Contacts</a></li>
 	<li class="nav-iten"><a class="nav-link" href="Phone.html">Phone</a></li>
 	<li class="nav-item"><a class="nav-link" href="Email.html">Email</a></li>
</ul>
<!-- Search bar content -->

<form class="form-inline pull-xs-right"><input class="form-control" type="text" placeholder="Search" />
<button class="btn btn-success-outline" type="submit">Search</button></form></div>
</nav>
```

Not sure what is happening but it looks like this:

<a href="https://helloburgh.me/wp-content/uploads/2016/05/Screenshot2016-05-20_12-57-54_AM.png"><img class="alignleft size-large wp-image-1111" src="https://helloburgh.me/wp-content/uploads/2016/05/Screenshot2016-05-20_12-57-54_AM-1024x620.png" alt="contacts_app" width="700" height="424" /></a>
<h2>The Logic</h2>
My js is pretty basic right now. I want to have a better framework for the logic and I have a TaskPaper list to sort of flesh this stuff out.

Here is the logic I have currently:

```js

// Empty arrays to push contacts onto.

var names = {

   [];

};

var emails = {

   [];

};

var telenums = {

   [];

};

// Need to write a function to gather first names and last names through input

function getInput() {

  var userName = document.getElementById('inputName');

  var userEmail = document.getElementById('inputEmail');

  var userTeleNum = document.getElementById('inputPhoneNumber');

}

$('#form').on('submit', function () {

   //your awesome code here

   alert('Got it!');

})

// Need to write a function gather phone numbers through input

// Need to write a function to gather emails through input.

```

Now this isn’t passing Travis CI tests, obviously. I don’t think it will pass until I figure it out better and the basic logic here is sound.


<h2>Updated Docs</h2>
You can find my updated docs <a href="https://twhite96.github.io/contacts-app/index.html" target="_blank">here</a>
