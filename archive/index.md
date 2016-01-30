---
layout: page
title: Archive
permalink: /archive/
---
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css">
<section id="archive">
  <h2><i class="fa fa-leanpub fa-2x"></i> Articles from this year</h2>
{% for post in site.posts %}
 {% if post.visible != 0 %}
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
    <li id="arch-list">
    {% assign foundImage = 0 %}
      {% assign images = post.content | split:"<img " %}
      {% for image in images %}
        {% if image contains 'src' %}

            {% if foundImage == 0 %}
                {% assign html = image | split:"/>" | first %}
    <time class="arch-time">{{ post.date | date:"%d %b" }}<hr class="arch-line" /></time>&nbsp;<a class="arch-a" href="{{ post.url }}">{{ post.title }}<img class="post-image" width="200" {{ html }} />{{ post.desc }}</a>
     {% assign foundImage = 1 %}
            {% endif %}
        {% endif %}
      {% endfor %}
    
    </li>
 {% endif %}  
{% endfor %}
  </ul>
</section>