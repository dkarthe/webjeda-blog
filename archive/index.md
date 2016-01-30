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
    <div class="arch-a w3-card-4">
    {% assign foundImage = 0 %}
      {% assign images = post.content | split:"<img " %}
      {% for image in images %}
        {% if image contains 'src' %}

            {% if foundImage == 0 %}
                {% assign html = image | split:"/>" | first %}
    <time class="">{{ post.date | date:"%d %b" }}</time><a href="{{ post.url }}">{{ post.title }}<hr class="" /><div class=""><img class="post-image" width="200" {{ html }} /></div><p class="">{{ post.desc }}</p></a>
     {% assign foundImage = 1 %}
            {% endif %}
        {% endif %}
      {% endfor %}
    </div>
    </li>
 {% endif %}  
{% endfor %}
  </ul>
</section>
