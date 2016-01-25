---
title: Adsense on subdomain and adsense on Jekyll
desc: Adsense ads on this subdomain happened only after a deep research about adsense policies. It is indeed possible to have ads on subdomain but you should know what you are doing. Just placing adsense ads on subdomain will not work.
Keywords: adsense on subdomain, adsense on Jekyll
author: sharathdt
tags: jekyll Adsense
---

<img alt="adsense on subdomain" title="adsense on Jekyll" itemprop="thumbnailUrl" src="/images/adsense-on-subdomain-adsense-on-Jekyll.jpg">
<a rel="nofollow" target="_blank" href="http://www.freepik.com/free-vector/office-banners_800177.htm">Design by Freepik</a>

Though I had so many other blogs, none of them got approval for some or the other reason. Actually it is hard to figure out what exactly went wrong. Adsense policies check many parameters for approval. Though Google sends you the reason, they are vague and I almost gave up on Adsense.

I had no hopes on this blog either. But I tried my best to deliver the content that somehow helps someone. Many of my posts are actually the problems I faced in figuring out stuff. I think it worked.

## Adsense on subdomain
The first problem I faced was applying for adsense using subdomain. My subdomain ```blog.webjeda.com``` cannot be used for applying to Adsense. Google has this policy for a reason. May be you have good content on your subdomain but what if you have bad content in your domain which is non complaiant with Adsense policies. Say some adult content or content related to drugs?

So one thing was sure by the answers on Google Product Forum that **I cannot apply for adsense with a subdomain**. But you can always apply with the domain name though your domain doesn't have much content. For instance my domain [webjeda.com](http://webjeda.com){:target="_blank"} doesn't have much content. It is actually a single page website meant for my business.

So I applied with my domain ```webjeda.com``` and placed ads on my subdomain(only after placing ads, google will check your website for compliance). It did not get an approval for days. I thought it doesn't work. Then I read somewhere that I have to put at least one ad in the main domain to get approved.
{% include adsense-inside-post.html %}
I can easily place an ad on ```webjeda.com``` but I was afraid that Google will reject it for having no content. But that was my last hope anyway. There was actually another alternative. Moving the blog to a new domain. I was in no mood to move all my contents in the subdomain to a new domain. That's not just practical.

I decided to place an ad on my domain. And just after a day, while I was browsing my blog ```blog.webjeda.com``` I saw ads showing up. Because the ads I placed initially were still there. As it was showing blank spaces before approval, I forgot to take them off. But after seeing the ads I was really happy that finally something happened!

So follow the guidelines for approval on subdomain

1. ###It doesn't matter how much content is present in your domain but it should be complaint with Adsense policies.

2. ###Always apply with your domain name not subdomain(I don't think you can apply with a subdomain)

3. ### Place at least one ad on your domain along with subdomain.

4. ### Follow all other [Adsense Policies](https://support.google.com/adsense/answer/23921?hl=en){:rel='nofollow'}{:target="_blank"} without miss

Once you get the approval, read the below section on how to place adsense ads on Jekyll blog.

## Adsense on Jekyll blog

Though it is very easy to automatically place ads on all pages and places, I wasn't able automatically place the ads where I exactly wanted. 

I have placed ads on top and bottom of my blog posts and pages. And one more ad appears somewhere in the middle of all the posts. So how did I do this?

### 1. Get responsive adsense code
The advantage is that it adopts to all screen-size so that you don't have to add media queries and adjust the width.

### 2. Create html files of adsense code
Create 3 html files with different names inside ```_includes``` folder. Copy paste the adsense code(responsive) that you generated in Adsense. Here is a sample adsense code for the file. Keeping the script tags inside a ```div``` tag is optional.

{% highlight html %}
<div>
<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- text-resp-top -->
<ins class="adsbygoogle"
     style="display:block"
     data-ad-client="ca-pub-4186856386076933"
     data-ad-slot="5705299846"
     data-ad-format="auto"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script>
</div>
{% endhighlight %}

### 3. Call them wherever you need them
These files can be called anywhere inside the layouts, posts and pages using this line
<pre>{% raw %}{% include adsense-file-1.html %}{% endraw %}</pre>

Change ```adsense-file-1``` to whatever the name you have given to your adsense html.

I have a total of 3 adsense html files

1. Called inside ```default``` layout at the bottom portion (appears in almost all pages). 

2. Called at the top portion of ```post``` layout .

3. At the top portion of ```page``` layout. Here is how I have used it on ```page``` layout.

{% highlight css %}---
layout: default
---
<article id="page">
	{% raw %}{% include adsense-lb.html %}{% endraw %}
  {% raw %}{{ content }}{% endraw %}

</article>
{% endhighlight %}

So this is how you can include adsense ads on all your present and upcoming Jekyll blog posts and pages automatically. This is a neat approach than pasting codes on every single post and page.

### 4. The problem that I haven't solved yet

I want ads to be shown after second paragraph of every post. But so far I couldn't figure out how I can determine paragraph numbers. Eventually I will find it out. If you have a solution then please let me know.

Thanks for reading!