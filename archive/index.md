---
layout: page
title: Archive
permalink: /archive/
---
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css">
<section id="archive">
  <h2><i class="fa fa-leanpub fa-2x"></i> Articles from this year</h2>
{% for post in site.posts %}
  {% unless post.next %}
  <ul class="this">
  {% else %}
  {% capture year %}{{ post.date | date: '%Y' }}{% endcapture %}
  {% capture nyear %}{{ post.next.date | date: '%Y' }}{% endcapture %}
  {% if year != nyear %}
  </ul>
  <h2>{{ post.date | date: '%Y' }}</h2>
  <ul class="past">
  {% endif %}
  {% endunless %}
    <li><time>{{ post.date | date:"%d %b" }}</time>&nbsp;<a href="{{ post.url }}">{{ post.title }}</a></li>
{% endfor %}
  </ul>
</section>