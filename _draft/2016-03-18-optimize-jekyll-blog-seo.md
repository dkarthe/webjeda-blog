---
title: How to optimize Jekyll blog SEO?
desc: Jekyll Search Engine Optimization is left to the users. Initially SEO optimizing Jekyll was hard but gradually it has been easier since we have so many people contributing to the community. Learn how to do Jekyll SEO. 
keywords: 
author: sharathdt
Tags: SEO, Jekyll
---

<img alt="jekyll seo" title="Jekyll SEO" itemprop="thumbnailUrl" class="left half noborder" src="/">
Jekyll Search Engine Optimization is left to the users. Initially SEO optimizing Jekyll was hard but gradually it has been easier since we have so many people contributing to the community. Learn how to do Jekyll SEO.
{: .intro}

## Why SEO for Jekyll?

I used WordPress for a long time. If you ask me which one among WordPress and Jekyll is good for SEO, I would shout out WordPress without a pause. 

It is true that WordPress is optimized for SEO by default. And with plugins like Jetpack, Yoast and Schema Creator, WordPress is almost unbeatable by Jekyll. Ok  wait, but Why I'm praising WordPress so much? 

At the moment we have Jekyll 3.0 and a small [list of plugins](https://jekyllrb.com/docs/plugins/){:rel='nofollow'}{:target="_blank"}. We can depend on some of these plugins for SEO and most of the search engine optimization can be done using variables.

I will be discussing only the steps that involve making changes in your Jekyll functions not in your content. That means I will not be discussing anything about Keyword Research, Link Building, Marketing etc.,
 
## What is required in a Jekyll website for SEO?

There are many search engines that consider many different factors for indexing and ranking. I will mostly be concentrating on Google as 80% of all the searches are done on Google.

Google takes around 200 parameters into account in ranking a webpage. But before we rank in Google we sould focus on how to properly get indexed on google database. 

**Remember:** Only indexed pages can be ranked!


## Let's dive into Jekyll SEO

We have to take care of some basic things that help you index your website on google. How do you know whether your website is linked already? Google <pre>site:yourwebsite.com</pre>. If you see your website then you are already indexed. Check if the links you see in search result are working. 

I have given the important parameters (among around 200 of them) your Jekyll blog should have to index and rank better in google.

1. Title & Description

2. URL Structure

3. Sitemap

4. Image alt Tags

5. Connecting with Social Media

6. Open graph and Twitter casrds in Jekyll

7. Favicon

8. Canonical URL

9.Responsiveness (mobile friendly layout)


The list is big, so is the article! But follow these and I can assure you that your blog will be 60% optimized for SEO already. The rest depends on your efforts on content creation, link building , marketing etc.,

Let's implement one by one in Jekyll.

## 1. Title and Desciption

Every blog post should have a unique title and description. Many bloggers do not bother about having a unique description. And Google will consider that first paragraph as your description and show it in the search result snippet.

![Jekyll seo meta description](/images/jekyll-seo-meta-description.jpg)

That does not make sense. Does it? So take a little while to give a proper description to all your posts. A user should be compelled to click on it when he reads your description. So try to write a catchy but also related description. One should know what he is getting into.

Search Engine bots try to fetch your Title and Description from the head tag first. So make sure you keep it there for them to crawl.

### Title

Having your post title as the title makes sense. So ```page.title``` variable takes care of that. If it is your homepage then there is no ```page.title``` variable available. We have to add an alternative which is your site title that you may have mentioned in **_config.yml** file.

{% highlight html %}
<title>{% raw %}{%if page.title %}{% endraw %}{% raw %}{{ page.title }}{% endraw %}{% raw %}{% else %}{% endraw %}{% raw %}{{ site.title }}{% endraw %}{% raw %}{% endif %}{% endraw %}</title>
{% endhighlight %}


### Description

Using page excerpt as a description is not a good idea because you may have something totally different in the first paragraph before you discuss on the main topic. If it is your homepage then make sure you have a site description mentioned in your **_config.yml** file.

Also it is adviced to restrict your description to 160 characters or less. Anything more can be considered spammy or keyword stufing by search engines. And also description is not considered for ranking but only to show snippets in the search results.


{% highlight html %}
<title>{% raw %}{%if page.title %}{% endraw %}{% raw %}{{ page.title }}{% endraw %}{% raw %}{% else %}{% endraw %}{% raw %}{{ site.title }}{% endraw %}{% raw %}{% endif %}{% endraw %}</title>
{% endhighlight %}

{% highlight html %}
{% if page.description %}
<meta itemprop="description" name="description" content="{% raw %}{{ page.description | truncate: 160 }}{% endraw %}" />
{% else %}
<meta itemprop="description" name="description" content="{% raw %}{{ site.description | truncate: 160  }}{% endraw %}" />
{% endif %}
{% endhighlight %}

So that takes care of Title and description. But remember, you have to explicitly add Title and Description to all your posts as shown in the example below.

{% highlight css %}
---
title: How to Create a Beautiful Jekyll Blog?
description: I created this beautiful looking Jekyll blog by forking a repository. You can also fork it to make it yours. Jekyll is a simple blog generator. The community is growing and number of plugins is also growing. I have moved all my blogs to Jekyll!
---
{% endhighlight %}


<div class="warning">
    <h3>Warning</h3>
    <p>
       You must be thinking where the hell is <strong>meta keywords</strong>. Due to keyword stuffing - after 2009 - <a href="https://webmasters.googleblog.com/2009/09/google-does-not-use-keywords-meta-tag.html" target="_blank" rel="nofollow">search engines are not considering meta keywords</a> for ranking.  
    </p>
</div>




## 2. URL structure
A URL conveys a lot of information about the content. Users expect it to be familiar to the topic. 

### Make it readable
 
![URL structure jekyll seo](/images/url-structure-jekyll-seo.jpg)

A clean URL structure gives a better click through rate. Now a days search engines are smart enought to detect whether the URl has any relation with the content.

I have seen many blogs whose URL contains page ids in it. This will not convey any good information to either a human reader or a search engine bot. It is only used for the convenience of differentiating all the pages within a blog. Do not use ids in URL.

Including date is a choice. You can do it if you think that helps users in some way. Search engines may extract this data. It is useful if dates really matter to your content.

Imagine you are a comic book reviewer. You review every single Iron Man comic every month then it would be a great idea to have URLs like this
```http://webjeda.com/2016/01/21/iron-man-comic-review```

```http://webjeda.com/2016/02/21/iron-man-comic-review```

```http://webjeda.com/2016/03/21/iron-man-comic-review```

Users will know just by looking at the URL that which comic you are referring to.


### Use canonical URL
You should not be serving the same content in different URLs though they may not look very different, a search engine bot considers them as different.

```http://blog.webjeda.com/free-domain-email-zoho/```

```http://blog.webjeda.com/free-domain-email-zoho/index.html```

The above URLs may redirect to the same content. This will look like duplicate content to bots and one of them may be punished. But ultimately both are your own blog's URLs!

So use canonical tag inside your head tag like this

{% highlight html %}
<link rel="canonical" href="{% raw %}{{ page.url | prepend: site.url }}{% endraw %}">
{% endhighlight %}

This is a way of telling the Search Engine bots that your content is only available here.


### Stop using stop-words
Using **and, or, but, of, the, a, etc** inside a URL is not necessary. It will only increase the length of your URL. In this post I have left out **how-to** because the URL still makes sense without those stop words. Take some time to leave stop words before you decide to publish a post. 

In Jekyll URL can be changed by renaming the file in ```_posts``` folder.

```2016-03-09-optimize-jekyll-blog-seo.md``` is a better name than

```2016-03-09-how-to-optimize-jekyll-blog-for-seo.md``` whose respective URLs would be

```http://blog.webjeda.com/optimize-jekyll-blog-seo/```

```http://blog.webjeda.com/how-to-optimize-jekyll-blog-for-seo/```


## 3. Sitemap
Having a sitemap is a necessity these days. It helps bots to crawl through your website easily. Also submit sitemaps to search engines so that they don't have to look for it in the first place. 
Read [How to create a sitemap for Jekyll blog](http://blog.webjeda.com/how-to-add-a-sitemap-to-jekyll-blog/){:target="_blank"}.

## 4. Image alt Tags

Alt-tags are nothing but text shown in case if the image does not load. This tag is read by bots. So make use of this opprtunity and include alt-tags in all of your images.
{% highlight html %}
<img alt="jekyll seo" title="Jekyll SEO" src="/images/jekyll-seo.jpg">
{% endhighlight %}

Also be sure to use related alt tag. This helps search engines to know what's in the image sice they are not smart enough to make sense out of an image.


## 5. Connecting with Social Media

Connecting to social media can be achieved by having a share option at the bottom of your posts. Read [How to add a share box to Jekyll](http://blog.webjeda.com/how-to-add-share-buttons-to-jekyll/){:target="_blank"}.


## 6. Open graph and Twitter casrds in Jekyll
A better way to optimize your social sharing is by adding Open Graph and Twitter Cards tag to your ```head``` section.

Open Graph tags for Jekyll
{% highlight html %}{% raw %}
<meta property="og:locale" content="en_US">
<meta property="og:type" content="article">
{% if page.title %}	
<meta property="og:title" content="{{ page.title }}">
{% else %}
<meta property="og:title" content="{{ site.title }}">
{% endif %}
<meta property="og:url" content="{{ site.url }}{{ page.url }}">
<meta property="og:image" content="{{ site.url }}/thumbs/{{ page.image }}" />
<meta property="og:site_name" content="WebJeda Blog">
<meta property="article:publisher" content="http://www.facebook.com/webjeda" />
<meta property="article:author" content="https://www.facebook.com/sharu725" />
<meta property="article:published_time" content="{{ page.date }}" />
{% if page.desc %}
<meta property="og:description" content="{{ page.desc }}">
{% else %}
<meta property="og:description" content="{{ site.description }}">
{% endif %}
{% endraw %}{% endhighlight %}




Twitter Card tags for Jekyll
{% highlight html %}
 {% if page.title %}	 
<meta name="twitter:card" content="summary_large_image"/>
<meta name="twitter:title" content="{{ page.title }}">
{% else %}
<meta name="twitter:title" content="{{ site.title }}">
{% endif %}
{% if page.desc %}
<meta name="twitter:description" content="{{ page.desc }}">
{% else %}
<meta name="twitter:description" content="{{ site.description }}">
{% endif %}
<meta name="twitter:site" content="@webjeda" />
<meta name="twitter:creator" content="@sharathdt">
<meta name="twitter:card" content="summary">
{% endhighlight %}





















