---
title: How to Add Related or Previous-Next Post Link in Jelyll?
desc: Related posts is a way to keep your users hooked to checkout more content from your website. If they like your current article, then there is a good chance that they would like to browse more of your site. Add a related post or add next previous link to Jekyll articles using this method. 
keywords: add related post jekyll, jekyll related post, next previous post jekyll
author: sharathdt
tags: Jekyll
---

<img alt="How to Add Related or Previous-Next Post Link in Jelyll" title="next pervious post jekyll" itemprop="thumbnailUrl" src="/images/adding-related-previous-next-link-to-jekyll.jpg">

<i class="fa fa-quote-left fa-3x fa-pull-left fa-border"></i>A long time ago I was writing 4 parts on WordPress installation tutorial. At the end of every article I had to leave the next or previous article link. I used to do it manually in this way "To read my next article on useful WordPress plugins read [part 2](#)" 

Manually linking articles was hectic when I have more articles. May be there is a plugin in WordPress that can do the job, but I was fed up with too many plugins! But in Jekyll we have nice little variables ```page.previous```and ```page.next``` which does the job without breaking a sweat.

## Why use Related Prev-Next Navigation in Jekyll?

Finding content on your blog should be easy for visitors. Let's say a new visitor is checking out an article on your website about **how to begin with Angular JS**. You have made a lot of research to write this article leaving no stone unturned. And your article is the best resource the visitor can get anywhere on the internet. 

Let's also assume that you put the same efforts to write all your posts (I know you don't) and your articles are really helpful to learn Angular JS step by step. There is a **83%**(yes this is from How I Met Your Mother) chance that the user is going to check more of your content. You should give him/her an easy access to other content of yours right after the current article!

Adding next-previous post link or related post link is a good way to engage your audience with more useful content and if the articles are good then they may turn into subscribers.

## How to add Related Posts link in Jekyll?

Jekyll has a variable to show the related posts (up to 10). But the problem is that they are just a list of your latest posts that's all. I have no idea why they chose to call it **related posts**. It must be called **recent posts**.

But anyway it is a great way to let users know about your latest articles. It can be improved with some complex process of category wise matching. But I will write a detailed post in the update. For now refer to this [thread](http://stackoverflow.com/questions/10906574/filter-site-related-posts-in-jekyll){:rel='nofollow'}{:target="_blank"}.

Here is the code I have used on my [chess blog](http://kidschessworld.com){:target="_blank"}.

{% highlight html %}
<div class="related">
          <h2>Related Posts</h2>
          <ul>
            {% raw %}{% for post in site.related_posts limit:3 %}{% endraw %}
              <a href="{% raw %}{{ post.url }}{% endraw %}">
                  <li>
                  <h3>{% raw %}{{ post.title }}{% endraw %}&nbsp;&nbsp;{% raw %}{{ post.date | date_to_string }}{% endraw %}</h3>
                  </li>
              </a>
            {% raw %}{% endfor %}{% endraw %}
          </ul>
</div>
{% endhighlight %}

The out put should look like the screenshot below

![Related posts jekyll](/images/related-posts-jekyll.jpg)


## How to add Prev-Next Post links in Jekyll?

I think it is a better thing to insert **Previous-Next Post link** after an article than **related post link**. If you are writing articles around only one topic then this is ideal since you always write related articles. 

If there is a big article which has many parts in it and you are writing those parts in consecutive articles even then next and previous post links is the best choice.

Here is the code how I have implemented previous next links in my Jekyll blog.

{% highlight html %}
<div class="Previous-next">
  {% raw %}{% if page.previous.url %}{% endraw %}
    <a class="previous" href="{% raw %}{{page.previous.url}}{% endraw %}">&laquo; {% raw %}{{page.previous.title}}{% endraw %}</a>
  {% raw %}{% endif %}{% endraw %}
  {% raw %}{% if page.next.url %}{% endraw %}
    <a class="next" href="{% raw %}{{page.next.url}}{% endraw %}">{% raw %}{{page.next.title}}{% endraw %} &raquo;</a>
  {% raw %}{% endif %}{% endraw %}
</div>
{% endhighlight %}
That should look somewhat like this

![Related Previous-Next Navigation in Jekyll](/images/how-to-add-related-next-previous-post-to-jekyll.jpg)

May be you have to style the links so that they appear in two directions or at least a little apart.

{% highlight css %}
    .next {
        float: right;
    }
{% endhighlight %}

Change your code accordingly to make it responsive. 
<div class="tips">
<h3>Tips</h3>
<p>You can also use the code as a template that can be called anywhere on your blog. Read <strong>Step 4</strong> of <a href="http://blog.webjeda.com/how-to-add-comments-to-jekyll/#step4" target="_blank"><strong>How to add Comments on Jekyll</strong></a> to implement related post as a template.</p>
</div>

I hope this article has helped you to make a navigation link of your own in your Jekyll blog. Let me know if you have any doubts. Subscribe for updates on upcoming articles.

Thanks for reading!