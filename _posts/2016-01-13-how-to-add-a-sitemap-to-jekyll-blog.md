---
title: How to add a sitemap to Jekyll blog
desc: Submitting sitemap to major search engines is important to rank better on SEO. Jekyll blogs will not have sitemap by default but we can create one using this method.
kewords: sitemap in jekyll blog, jekyll sitemap, sitemap for jekyll
---

![How to add sitemap to Jekyll blog](/images/add-sitemap-to-Jekyll-github-pages.jpg)


A sitemap is a list of links of all your web pages. Sitemap will be in ```.xml``` format. A sitemap helps search engine bots to crawl through your website. Sitemap will also have metadata such as date of a post, pages, last modified date and how often it was updated etc.,

A sample website links map
![Sitemap of a website](/images/how-to-add-sitemap-to-jekyll.jpg)

Here is [my blog's Sitemap](http://blog.webjeda.com/sitemap.xml)

##Why is Sitemap used?

If your website doesn't have any posts or pages, you may not need one. But for a blog with several posts, Sitemap is necessary (if you want to rank better in search engines). You can submit your sitemap to major search engines like Google, Bing, Yahoo etc., so that their respective bots crawl through your site and index them. Only after indexing, your link appears in search results.

[Submit your sitemap to Google](https://www.google.com/webmasters/tools/home?hl=en) if you already have one.

I use [SEO-checkup](https://toolbox.seositecheckup.com/apps/seo-checkup) to see whether my website complies with common SEO parameters. I found out that I did not have a sitemap by using this app.

##How to create a sitemap for Jekyll blog

Jekyll blogs will not have sitemap by default. You can always generate them using a small snippet of code. Add below code to your **_config.yml** file. This will create a sitemap for you with the link ```/sitemap.xml```.

{% highlight html linenos %}
gems:
  - jekyll-sitemap
{% endhighlight %}


Here is my [_config.yml](https://raw.githubusercontent.com/sharu725/emerald/gh-pages/_config.yml) file for reference. I hope that helped. If you are having problem with generating a sitemap please leave a comment. I will try to fix it. 

Thanks for reading!