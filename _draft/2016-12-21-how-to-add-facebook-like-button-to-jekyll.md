---
title: How to add facebook like button to Jekyll blog.
desc: Adding facebook button on a Jekyll blog site is different compared to HTML sites. This is because Jekyll blogs have an advantage of including html files which are inside _includes folder. We are taking advantage of this option! 
keywords: facebook like button github pages, like button to jekyll blog
author: sharathdt
pulish: false
---

<img alt="" title="" itemprop="thumbnailUrl" src="/images/adding-facebook-like-button-to-jekyll.jpg">

Understanding Jekyll is really important to manipulate the options available to handle different things. One of those is templates. Usually all Jekyll themes will have a **header** and a **footer** inside ```_includes``` folder.

Most of the layouts make use of these templates. If you observe **default** layout inside  ```_layouts``` folder, you'll see that  at some point they have included header and footer with the following code.


{% raw %}
{% include header.html %}
{% endraw %}

{% raw %}
{% include footer.html %}
{% endraw %}


Jekyll site structure 

{% highlight html %}

.
├── _config.yml
├── _drafts
|   ├── begin-with-the-crazy-ideas.textile
|   └── on-simplicity-in-technology.markdown
├── _includes
|   ├── footer.html
|   └── header.html
├── _layouts
|   ├── default.html
|   └── post.html
├── _posts
|   ├── 2007-10-29-why-every-programmer-should-play-nethack.textile
|   └── 2009-04-26-barcamp-boston-4-roundup.textile
├── _data
|   └── members.yml
├── _site
├── .jekyll-metadata
└── index.html

{% endhighlight %}