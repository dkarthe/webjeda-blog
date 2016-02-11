---
title: Adding comments to Jekyll blog
desc: Jekyll themes are pretty neat with bare minimum options. But you can always extend it by adding whatever you need. WordPress blogs have comments by default. What if we want it in our Jekyll blog as well? We have a cleaner and better option in Jekyll...
keywords: add comments to Jekyll blog, add disqus to Jekyll, disqus Jekyll
author: sharathdt
tags: Jekyll SEO
---

<img alt="how to add comments to jekyll" title="jekyll comments" itemprop="thumbnailUrl" src="{{ site.url }}/images/how-to-add-comment-box-to-jekyll-blog.jpg">

## Why should we add comment section?
When you write an opinion in your blog, there can be mixed reactions from your readers. There are people who agree with you, There are some who don't agree with you and few have a different opinion all together. But how will you know what their reaction is if you don't give them an option to express!?

There comes our comment box to the rescue. But there are a lot of them. You have to choose the one that suits your website. Suppose if you are active only on facebook, you can choose facebook comment box. If you have Google users as your readers then it would be a wise option to put a Google comment box. 

It depends on your requirement. What kind of users you have and if you don't care about user reactions then there is no need to keep a comment box!

## WordPress has an upper hand

WordPress comes with a nice default comment box and you can get other ones through plugins if you don't like the default one. But if you want to place the comment box a little above than the position it is already in then you are in trouble!

Editing plugins is really hard unless you are an expert in ```php``` and know where to look for the changes. I have tried it and I can tell you that it is not a good experience.

WordPress comments otherwise works great, you have nothing to code and most of the bloggers use it. But if you have made a choice to move from WordPress to Jekyll (which I would really appreciate) then you can install one of these comment boxes in your blog.

I can guarantee you that they are easy to implement. And you will have the full control of how they look and behave (for the most parts). So let's dive right in.


There are many ways to add comment box to Jekyll. I will be discussing only the major ones.

**1. Disqus**

**2. Google**

**3. Facebook**


## 1. Disqus
Disqus has been my favorite so far. It is simple, minimal and robust. I haven't faced any problem with this one so far. I recommend Disqus than any other comment box for Jekyll.

![adding disqus comments to Jekyll blog]({{ site.url }}/images/how-to-add-comments-to-jekyll-blog.jpg)

The best part of Disqus is that it allows users to comment using facebook, twitter, Google plus or just using an email address! Moreover, if you have a bunch of blogs, you can have different comment boxes for them and manage it from a single account!

![adding disqus comments to Jekyll blog]({{ site.url }}/images/how-add-disqus-to-jekyll-blog.jpg)

Here are the steps to implement Disqus comment box in your Jekyll blog.

### Step 1: Sign up
This step is pretty common for all the comment boxes. You can [sign up for Disqus](https://disqus.com/profile/signup/){:rel='nofollow'}{:target="_blank"} with your email, facebook, twitter or Google plus. After signing up, you may have to verify your email address if you have signed up with an email.

### Step 2: Set up Disqus
Once you login, you should see a gear icon on the top-right corder. Click on it and you'll get a drop-down with one of the options saying **Add Disqus to Site**.
![adding disqus comments to Jekyll blog]({{ site.url }}/images/how-add-disqus-comments-to-jekyll-blog-2.jpg)

If it shows you a page with the heading "Engage" then click on 'start using engage'. Now you should see a screen as shown below.

![adding disqus comments to Jekyll blog]({{ site.url }}/images/how-add-disqus-comments-to-jekyll-blog-3.jpg)

This is where you can choose a **shortname** for your comment box which we will be using in the next step. I'm giving my shortname as **webjeda-sample**


### Step 3: Get the Disqus code
Now select the platform as [**Universal code**](https://webjeda-sample.disqus.com/admin/settings/universalcode/){:rel='nofollow'}{:target="_blank"} and you should be redirected to the page having the actual code.

![adding disqus comments to jekyll blog]({{ site.url }}/images/how-add-disqus-comments-to-jekyll-blog-4.jpg)

Here is a sample Universal code (script) that can be inserted into any html page.

{% highlight html %}
<div id="disqus_thread"></div>
<script defer>
/**
* RECOMMENDED CONFIGURATION VARIABLES: EDIT AND UNCOMMENT THE SECTION BELOW TO INSERT DYNAMIC VALUES FROM YOUR PLATFORM OR CMS.
* LEARN WHY DEFINING THESE VARIABLES IS IMPORTANT: https://disqus.com/admin/universalcode/#configuration-variables
*/
/*
var disqus_config = function () {
this.page.url = PAGE_URL; // Replace PAGE_URL with your page's canonical URL variable
this.page.identifier = PAGE_IDENTIFIER; // Replace PAGE_IDENTIFIER with your page's unique identifier variable
};
*/
(function() { // DON'T EDIT BELOW THIS LINE
var d = document, s = d.createElement('script');

s.src = '//webjeda-sample.disqus.com/embed.js';

s.setAttribute('data-timestamp', +new Date());
(d.head || d.body).appendChild(s);
})();
</script>
<noscript>Please enable JavaScript to view the <a href="https://disqus.com/?ref_noscript" rel="nofollow">comments powered by Disqus.</a></noscript>
{% endhighlight %}

Insert this code wherever you want the comment box to appear.

If you want to show the number of comments anywhere on the website then you can use this code.

{% highlight html %}
<script defer id="dsq-count-scr" src="//webjeda-sample.disqus.com/count.js" async></script>
{% endhighlight %}
<div id="step4"></div>


## Step 4: Making use of Jekyll templates

It is not feasible to copy this code to every other blog post. That is the reason why we are creating a template. Create a new ```html``` file with the name **disqus.html** inside **_includes** folder, paste the above code inside it and save. Now you can call this file anywhere in your Jekyll website with the following code

<pre>{% raw %}{% include disqus.html %}{% endraw %}</pre>

I want comment box to appear at the bottom of all my posts. So you should add the above include line to post layout which will be inside **_layouts** folder.

A sample post layout with disqus would look like this

{% highlight html %}
---
layout: default
---
<article id="post-page" >
    <a href=""><h2>{% raw %}{{ page.title }}{% endraw %}</h2></a>
	<time>{% raw %}{{ page.date | date_to_string }}{% endraw %}</time>
	<div class="content" >
			{% raw %}{{ content }}{% endraw %}
	</div>	

	{% raw %}{% include  disqus.html %}{% endraw %}

</article>
{% endhighlight %}

And now you should have a comment box below every single blog post. But what if you don't want comments on certain blog posts?!

Front matter and liquid tags can help us solve this problem.

Add this front matter to the blog posts on which you do not want comments.
{% highlight css %}
---
layout: post
title: some title
comments: 0
---
{% endhighlight %}
Now in the **post** layout, add the following code
{% highlight html %}
<article id="post-page" >
    <a href=""><h2>{% raw %}{{ page.title }}{% endraw %}</h2></a>
	<time>{% raw %}{{ page.date | date_to_string }}{% endraw %}</time>
	<div class="content" >
			{% raw %}{{ content }}{% endraw %}
	</div>	

 {% raw %}{% if post.comments != 0 %}{% endraw %}
	{% raw %}{% include  disqus.html %}{% endraw %}
 {% raw %}{% endif %}{% endraw %}
 
</article>
{% endhighlight %}

Add the below front-matter to all the posts where you do not want to display the comment box. You can use this for other comment boxes as well.
{% highlight css %} comments: 0 {% endhighlight %} 

## 2. Google Plus
Google has a very minimal and elegant comment box. I have no doubt that it looks better than Disqus but it is just for Google users. One must have Google plus account to comment.

![how to add Google comment box to Jekyll blog]({{ site.url }}/images/how-to-add-google-comment-box-to-jekyll.jpg)

Here is the code to implement Google comments on Jekyll posts. Follow the same procedure we followed in step 4 od adding Disqus to Jekyll blog.

{% highlight html %}
<script src="https://apis.google.com/js/plusone.js">
</script>
<div class="g-comments"
  data-href="{% raw %}{{ site.url }}{% endraw %}{% raw %}{{ page.url }}{% endraw %}"
  data-width="600"
  data-first_party_property="BLOGGER"
  data-view_type="FILTERED_POSTMOD">
</div>
{% endhighlight %}

Here variables should be in this format

<pre>{% raw %}{{ site. url }}{% endraw %} = http://blog.webjeda.com</pre>

<pre>{% raw %}{{ page.url }}{% endraw %} = /how-to-add-comments-to-jekyll/</pre>


## 3. Facebook Comments
Before adding facebook comments, you may have to create an app in facebook. I have explained the steps in [How to add facebook like button to Jekyll](http://blog.webjeda.com/how-to-add-facebook-like-button-to-jekyll/){:rel='dofollow'}{:target="_blank"}. 

After creating an app log on to [comments plugin page](https://developers.facebook.com/docs/plugins/comments){:rel='nofollow'}{:target="_blank"}. 

![How to add facebook comments to Jekyll blog]({{ site.url }}/images/how-add-facebook-comments-to-jekyll-blog.jpg)

Here you can specify your requirements like width, number of posts to appear, color-scheme etc., and hit get code.

You should get a code similar to the below one. 

{% highlight html %}
<div id="fb-root"></div>
<script>(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.5&appId=YOUR-APP-ID";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));</script>
{% endhighlight %}

The above code is just the script which doesn't display anything. The below code is responsible for the comment box to display. You have to change the ```data-href``` to the following because it has to change for every single post.

{% highlight html %}
<div class="fb-comments" data-href="{% raw %}{{ site.url }}{% endraw %}{% raw %}{{ page.url }}{% endraw %}" data-numposts="5"></div>
{% endhighlight %}

Use the same method I discussed in [**step 4**](#step4) of disqus comments.

Finally, adding a comment box to Jekyll is easy and it can be useful for a good SEO signal if you are using a social-network comment box like facebook or Google plus. 

Let me know if you were able to set up the comment box successfully. Comment if you have any suggestions.

Thanks for reading!

