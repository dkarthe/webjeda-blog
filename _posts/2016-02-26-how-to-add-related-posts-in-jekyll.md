---
title: How to Add Related or Previous-Next Post Link in Jelyll?
desc: Related posts is a way to keep your users hooked to checkout more content from your website. If they like your current article, then there is a good chance that they would like to browse more of your site. Add a related post or add next previous link to Jekyll articles using this method. 
keywords: add related post jekyll, jekyll related post, next previous post jekyll
author: sharathdt
tags: Jekyll
---

<img alt="How to Add Related or Previous-Next Post Link in Jelyll" title="next pervious post jekyll" itemprop="thumbnailUrl" src="/images/adding-related-previous-next-link-to-jekyll.jpg">

<i class="fa fa-quote-left fa-3x fa-pull-left fa-border"></i>A long time ago I was writing 4 parts onWordPress installation tutorial. At the end of every article I had to leave the next and/or previous article link. I used to do it manually say "To read my next article on useful plugins read [part 2]()" 

This was hectic when I have more articles. May be there is a plugin in WordPress that can do the job, but I was fed up with too many plugins! But in Jekyll we have a nice little variables ```page.previous```and ```page.next``` which does the job without breaking a sweat.

## Why use Related Previous-Next Navigation in Jekyll?

Finding content on your blog should be a piece of cake for visitors. Let's say a new visitor is checking out an article on your website about how to begin with Angular JS. You have made a lot of research to write this article leaving no stone unturned. So your article is the best resource the visitor can get anywhere in the internet. Let's say you put the same efforts to write all your posts (I know you don't) and your articles are really helpful to learn the next steps in Angular.

There is a 83%(yes this is from How I Met Your Mother) chance that the user is going to check more of your content. You should give him/her an easy access to your content right after the article!

This is a good way to engage your audience with more useful content and who knows they may turn into a subscriber.

## How to add Related Posts link in Jekyll?
Jekyll has a variable to show the last few posts (up to 10). But the problem is that they are just a list of your latest posts that's all. I have no idea why they chose to call it **related posts**. It must be **recent posts**.

But it is a good way to let users know about your latest articles. It can be improved with some complex process of category wise matching. But I will leave write a detailed post in the update. For now refer to this [thread](http://stackoverflow.com/questions/10906574/filter-site-related-posts-in-jekyll){:rel='nofollow'}{:target="_blank"}.

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


## How to add Previous-Next Post links in Jekyll?

I think this is a better thing to insert after an article than related. If you are writing articles on one topic then this is ideal since you always write related articles and if there is a process which has many parts in it and you are writing those parts in consecutive articles then also next and previous post links is the best choice.

Here is the code how I implemented previous next links in my Jekyll blog.
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

![Related Previous-Next Navigation in Jekyll](/images/how-to-add-related-next-previous-post-to-jekyll.jpg)

May be you have to style the links so that they appear in two directions or at least a little apart.

{% highlight css %}
    .next {
        float: right;
    }
{% endhighlight %}

Change your code accordingly to make it responsive.

I hope this article has helped you to make a navigation link of your own in your Jekyll blog. Subscribe for updates on upcoming articles.

Thanks for reading!