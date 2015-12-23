---
title: How I managed to integrate Polymer with my jekyll blog.

---

![How I managed to integrate Polymer with github pages jekyll](/images/github-pages-polymer.JPG)
If you have observed my blog index, I have a card style as shown in the screenshot. It took me a while to figure out how I can integrate Polymer(a promising project by Google) to my jekyll blog.

##Why Polymer?

Polymer cards are getting used in every single application Google is developing. It is in a way very convinient to use one custom element and call it as many times you want to.

If you observe the applications by Google, almost all of them are using paper-cards

![Applications that are using polymer](/images/applications-using-polymer-cards-screenshot.jpg)
Above screenshot shows few applications using card interface. Youtube (I know, it is a new channel), Playstore, Google Keep, Gmail and even Play music is using card interface.

I wanted something similar. I did it only using CDN. Usually you have to include Polymer elements in the project if you want to use those elements extensively. But I was using just three elements - paper-card, paper-ripple and paper-button.

Here is how I did it.

First thing is to import the Polymer elements. Paste these lines to your **head** tag.

{% highlight html linenos %}
<link rel="import" href="https://cdn.rawgit.com/download/polymer-cdn/1.1.4/lib/paper-card/paper-card.html" />
<link rel="import" href="https://cdn.rawgit.com/download/polymer-cdn/1.1.4/lib/paper-button/paper-button.html" />
{% endhighlight %}


And that's about it. If you want some other element, say **paper-toggle-button** 

then just replace the **paper-card** with **paper-toggle-button** which would 

be,

{% highlight html linenos %}
<link rel="import" href="https://cdn.rawgit.com/download/polymer-cdn/1.1.4/lib/paper-toggle-button/paper-toggle-button.html" />
{% endhighlight %}

