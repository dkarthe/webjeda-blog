---
title: How to add a sitemap to Jekyll blog
desc: Submitting sitemap to major search engines is important to rank better on SEO. Jekyll blogs will not have sitemap by default but we can create one using this method.
keywords: sitemap in jekyll blog, jekyll sitemap, sitemap for jekyll
author: sharathdt
---

<img alt="How to add sitemap to Jekyll blog" title="How to add sitemap to Jekyll blog" itemprop="thumbnailUrl" src="/images/add-sitemap-to-Jekyll-github-pages.jpg">
In one of my previous posts I wrote on [How to create a Jekyll Blog](http://blog.webjeda.com/how-I-created-webjeda-blog). If you have created a blog for yourself or if you already have a Jekyll blog then go through this tutorial.

A sitemap is a list of links of all your web pages. Sitemap will be in ```.xml``` format. A sitemap helps search engine bots to crawl through your website. Sitemap will also have metadata such as date of a post, pages, last modified date and how often it was updated etc., It looks like your **feed.xml** file. 

A sample website links map
![Sitemap of a website](/images/how-to-add-sitemap-to-jekyll.jpg)

Here is [my blog's Sitemap](http://blog.webjeda.com/sitemap.xml){:rel='dofollow'}

##Why is Sitemap used?

If your website doesn't have any posts or pages, you may not need a sitemap. But for a blog with several posts, sitemap is necessary (if you want to rank better in search engines). You can submit your sitemap to major search engines like Google, Bing, Yahoo etc., so that their respective bots crawl through your site and index them. Only after indexing, your link appears in search results.

Leaving a link to your sitemap inside your website is also a good idea. Let's say someone refers to a post of yours in their well ranked blog. There are chances that a bot will crawl that link and land on your post. You shouldn't miss a chance of giving the link of your sitemap when the bot is crawling your post! If you are looking for where the hell I have included my sitemap link, then please look inside my navigation toggle :)

[Submit your sitemap to Google](https://www.google.com/webmasters/tools/home?hl=en){:rel='nofollow'} if you already have one. I usually submit my sitemap to Webmaster tools of Google, Bing and Yahoo. 

I use [SEO-checkup](https://toolbox.seositecheckup.com/apps/seo-checkup){:rel='nofollow'} to see whether my websites complies with common SEO parameters. I found out that I did not have a sitemap by using this app. I will write an elaborated post on some useful online tools to optimize your website to make it fast and search engine friendly.

##How to create a sitemap for Jekyll blog

In wordpress, creating a sitemap using a plugin is really easy. What if I tell you that creating sitemap in Jekyll is much easier! Jekyll blogs will not have sitemap by default. You can always generate them using a small snippet of code. Add the below code to your **_config.yml** file. This will create a sitemap for you with the link ```/sitemap.xml```.

{% highlight css linenos %}
gems:
  - jekyll-sitemap
{% endhighlight %}


Here is my [_config.yml](https://raw.githubusercontent.com/sharu725/emerald/gh-pages/_config.yml){:rel='nofollow'} file for reference. You will not be able to see the XML file created for sitemap inside your directory.

Now commit the changes and hit the URL yourwebsite.com/sitemap.xml. You should see all your links listed there.

Here is a video demonstration

<iframe width="100%" height="360" src="https://www.youtube.com/embed/kiBtQClK-XQ?rel=0" frameborder="0" allowfullscreen></iframe>

##The hard way to insert sitemap in Jekyll blog!
You can also list all the links by yourself. Don't worry, we will be using ```ul``` so that it arranges the links  one by one. 

Create a file in the root of the repository and name it **whatever.xml**

Copy this code inside it

{% highlight html linenos %}

---
---
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    (% for post in site.posts %)
    <url>
        <loc>{% raw %}{{site.url}}{% endraw %}{% raw %}{{ post.url | remove: 'index.html' }}{% endraw %}</loc>
    </url>
    (% endfor %)

    (% for page in site.pages %)
    (% if page.layout != nil %)
    (% if page.layout != 'feed' %)
    <url>
        <loc>{% raw %}{{site.url}}{% endraw %}{% raw %}{{ page.url | remove: 'index.html' }}{% endraw %}</loc>
    </url>
    (% endif %)
    (% endif %)
    (% endfor %)
</urlset>
{% endhighlight %}


Here you will have the full control of your sitemap. You can exclude whatever you think is not important and include links that you want it to be in the sitemap.

I hope that helped. If you are having problems with generating a sitemap please leave a comment. I will try to fix it. 

Thanks for reading!