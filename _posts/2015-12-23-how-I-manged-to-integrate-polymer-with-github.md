---
title: How I managed to integrate Polymer with my jekyll blog.

---

![How I managed to integrate Polymer with github pages jekyll](/images/github-pages-polymer.JPG)
If you have observed my blog index, I have a card style as shown in the screenshot. It took me a while to figure out how I can integrate Polymer(a promising project by Google) to my jekyll blog.

##Why Polymer?

Polymer cards are getting used in every single application Google is developing. It is in a way very convinient to use one custom element and call it as many times you want to.

If you observe the applications by Google, almost all of them are using paper-cards.

![Applications that are using polymer](/images/applications-using-polymer-cards-screenshot.jpg)
Above screenshot shows few applications using card interface. Youtube (I know, it is a new channel), Playstore, Google Keep, Gmail and even Play music is using card interface.

I wanted something similar. I did it only using CDN. Usually you have to include Polymer elements in the project if you want to use those elements extensively. But I was using just three elements - paper-card, paper-ripple and paper-button.

Here is how I did it.

First thing is to import the Polymer elements. Paste these lines to your **head** tag.

{% highlight html linenos %}
<link rel="import" 
href="https://cdn.rawgit.com/download/polymer-cdn/1.1.4/lib/paper-card/paper-card.html" />
<link rel="import" 
href="https://cdn.rawgit.com/download/polymer-cdn/1.1.4/lib/paper-button/paper-button.html" />
{% endhighlight %}


And that's about it. If you want some other element, say **paper-toggle-button** 

then just replace the **paper-card** with **paper-toggle-button** which would 

be,

{% highlight html linenos %}
<link rel="import" 
href="https://cdn.rawgit.com/download/polymer-cdn/1.1.4/lib/paper-toggle-button/paper-toggle-button.html" />
{% endhighlight %}

Now you can call the elements inside the body tag and they will be downloaded. 

{% highlight html linenos %}
<paper-button>Click Me</paper-button>
{% endhighlight %}

So what about my jekyll blog index page. How I included colored paper button?

{% highlight html linenos %}
 <paper-card heading="{{ post.title }}">
 <time datetime="{{ post.date | date_to_xmlschema }}" >{{ post.date | date_to_string }}</time>
 <div class="card-content">{{ post.content | strip_html | truncatewords:50 }}
 </div>
 <div class="card-actions">
 <a href="{% if site.baseurl == "/" %}{{ post.url }}{% else %}{{ post.url | prepend: site.baseurl }}{% endif %}">                           <paper-button class="colored" raised>Read</paper-button></a>
 </div>
 </paper-card>
{% endhighlight %}

Copy these lines to your **index.html** page without deleting the default code. If 

you like it then delete the default code and keep the polymer one.


Here is the css code for coloring the paper-button.

{% highlight css linenos %} 
 paper-button.colored {
     background-color:#26A65B;
     color: #fff;
     text-transform: none;
     font-weight: 100;     
     }
{% endhighlight %}

Let me know if you were successful in integrating Polymer in your website. 

Comment if you do something awesome.
Thanks for reading!
