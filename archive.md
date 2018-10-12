---
title: Archive
layout: archive
permalink: /archive/
sidebar_link: true
---

<header>
  <h1 class="page-title">{{ page.title }}</h1>
</header>

<section class="archive-post-list">

  {% for post in site.posts %}
      {% assign currentDate = post.date | date: "%Y" %}
      {% if currentDate != myDate %}
          {% unless forloop.first %}</ul>{% endunless %}
          <h1>{{ currentDate }}</h1>
          <ul>
          {% assign myDate = currentDate %}
      {% endif %}
      <li><a href="{{ post.url }}"><span>{{ post.date | date: "%B %-d, %Y" }}</span> - {{ post.title }}</a></li>
      {% if forloop.last %}</ul>{% endif %}
  {% endfor %}

</section>
