---
title: How to optimize Jekyll blog SEO?
desc: Jekyll Search Engine Optimization is left to the users. Initially SEO optimizing Jekyll was hard but gradually it has been easier since we have so many people contributing to the community. Learn how to do Jekyll SEO. 
keywords: 
author: sharathdt
Tags: SEO, Jekyll
---

<img alt="jekyll seo" title="Jekyll SEO" itemprop="thumbnailUrl" src="/">

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

1. Title

2. Meta Description

3. URL Structure

4. Sitemap

5. Image Alt Tags

6. Connecting with Social Media

7. Open graph and Twitter casrds in Jekyll

8. Favicon

9. Canonical URL

10.Responsiveness (mobile friendly layout)


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











