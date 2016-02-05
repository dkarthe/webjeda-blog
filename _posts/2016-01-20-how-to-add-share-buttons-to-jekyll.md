---
title: Share Bar for Jekyll without using Javascript!
desc: Reducing the use of JavaScript results in a faster loading speed. Here is a guide on how to add a social share bar to Jekyll blogs. You can copy paste the code and it should work! Many Jekyll themes do not offer a good share bar. So I thought of making one for myself!
keywords: share bar without javascript, Jekyll share buttons, share buttons for Jekyll blog
author: sharathdt
tags: Jekyll SEO
---

<img alt="How to add a share bar to Jekyll blog" title="Jekyll blog share buttons" itemprop="thumbnailUrl" src="/images/share-bar-to-jekyll.jpg">

Many of the Jekyll themes will not include share buttons by default. It is upto you to find a suitable share bar for your website.

## Why share bar for Jekyll blog?

If you read a lot over the internet then you know how hard it is to share an article with your friend if it doesn't have any sharing button.
You have to copy the link from the address bar, go to your email account, type every single detail and send it to an email address. Same thing follows for sharing on social media websites.

It is a good idea to have share buttons at the end of an article. Users may not be willing to copy paste the link but hitting a button is easy! More share is equal to more eyeballs on your article. Shares will drive traffic to your website. So you shouldn't be missing out on a chance to provide users with a share bar.


## How to add a share bar?

Adding a sharebar is really easy using services like **ShareThis** or **AddtoAny**. They are good. They provide decent buttons with share count. This is what I recommend if you just want a sharebar and you don't care about your website loading speed. I have used ShareThis before and the problem was that it loads a lot of JavaScript files which will slow down the website.

I can always ```defer``` javascript loading but the files that are loaded by ShareThis are remote. So I don't even have an option to add ```defer``` or ```async```. So I thought of saving the remote ```Js``` files to my local directory and call it from there! That didn't work out very well as there were session variables used and they started to throw ```Js``` errors.

Now I had to make a decision whether to use it or make one for myself. I thought why not make one! I will have the complete design control. So I chose to design it myself.

## Making a share bar without JavaScript

When I decided to make a share bar for my blog WebJeda, I thought of making it ```Js``` free. As a developer - for a fast performing website - you should avoid ```Js``` and lower the number of http requests. With ShareThis, I used to have 5 to 6 ```Js``` files loaded from a remote server and 22 requests were made. This happens when you have many buttons and every button is downloaded remotely!

Once I installed my css only share bar, the request number dropped to 11! That was a huge improvement! But it comes at a cost. I cannot see number of shares anymore. I can always write a code to calculate number of shares based on click event but that will be in the future. For now I'm happy that I have a beautiful sharebar which is made only with html and css. You can see it in the screenshot at the top of the page.
{% include adsense-inside-post.html %}

## Basics before we dive in


When I was preparing this share bar, I was facing troubles for sharing the page I'm currently in. Let's say you are in [How to add a sitemap to Jekyll](http://blog.webjeda.com/how-to-add-a-sitemap-to-jekyll-blog/){:target="_blank"} article, the facebook share link should look like ```https://www.facebook.com/sharer/sharer.php?u=http://blog.webjeda.com/how-to-add-a-sitemap-to-jekyll-blog/```. 

And if you are in [How to add an author box](http://blog.webjeda.com/how-to-add-author-box-to-jekyll) article then it should change to ```https://www.facebook.com/sharer/sharer.php?u=http://blog.webjeda.com/how-to-add-author-box-to-jekyll```.

But how to do this 'change of URL' for every page. One way was to use ```window.location()``` but that is again JavaScript which I'm trying to avoid. Then I realized that I can use **Site Variables**! the {% raw %}{{ stuff }}{% endraw %}inside!.

Here is an image explaining site variables for the link [How to create a Jekyll blog](http://blog.webjeda.com/how-I-created-webjeda-blog/){:target="_blank"}. You can check the site description by viewing the source. These variables are mentioned inside ```_config.yml``` file.

![How to use site variables in Jekyll](/images/jekyll-site-variables-and-how-to-use-them.jpg)

See all the [variables here](http://jekyllrb.com/docs/variables/){:rel='nofollow'}{:target="_blank"}

Then I changed the facebook share link to the following which works for all pages!

```https://www.facebook.com/``````sharer/sharer.php?u={% raw %}{{ site.url }}{% endraw %}{% raw %}{{ page.url }}{% endraw %}```

How cool is that!

I can do the same thing for twitter share link

```https://twitter.com/home?``````status={% raw %}{{ site.url }}{% endraw %}{% raw %}{{ page.url }}{% endraw %}```

This works pretty much on all the social media websites. For LinkedIn I also added title and description of the page.

```https://www.linkedin.com/``````shareArticle?mini=true&url={% raw %}{{ site.url }}{% endraw %}{% raw %}{{ page.url }}{% endraw %}``````&title={% raw %}{{ page.title }}{% endraw %}&summary={% raw %}{{ page.desc }}{% endraw %}&source=webjeda```


This is the key to my WebJeda Sharebar.

## How to implement WebJeda sharebar?

Create a new ```html``` file inside _includes folder and call it share.html. Copy paste this code.

{% highlight html %}
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css">

<h3>Share this:</h3>

<div id=""> 

<a href="https://www.facebook.com/sharer/sharer.php?u={% raw %}{{ site.url }}{% endraw %}{% raw %}{{ page.url }}{% endraw %}" onclick="window.open(this.href, 'mywin',
'left=20,top=20,width=500,height=500,toolbar=1,resizable=0'); return false;" >
    <i class="fa fa-facebook-square fa share-button"> facebook</i>
</a>

<a href="https://twitter.com/home?status={% raw %}{{ site.url }}{% endraw %}{% raw %}{{ page.url }}{% endraw %}" onclick="window.open(this.href, 'mywin',
'left=20,top=20,width=500,height=500,toolbar=1,resizable=0'); return false;">
    <i class="fa fa-twitter-square fa share-button"> twitter</i>
</a>

<a href="https://plus.google.com/share?url={% raw %}{{ site.url }}{% endraw %}{% raw %}{{ page.url }}{% endraw %}" onclick="window.open(this.href, 'mywin',
'left=20,top=20,width=500,height=500,toolbar=1,resizable=0'); return false;" >
    <i class="fa fa-google-plus-square fa share-button"> google</i>
</a>
 
<a href="http://www.reddit.com/submit?url={% raw %}{{ site.url }}{% endraw %}{% raw %}{{ page.url }}{% endraw %}" onclick="window.open(this.href, 'mywin',
'left=20,top=20,width=900,height=500,toolbar=1,resizable=0'); return false;" >
    <i class="fa fa-reddit-square fa share-button"> reddit</i>
</a>

<a href="https://www.linkedin.com/shareArticle?mini=true&url={% raw %}{{ site.url }}{% endraw %}{% raw %}{{ page.url }}{% endraw %}&title={% raw %}{{ page.title }}{% endraw %}&summary={% raw %}{{ page.desc }}{% endraw %}&source=webjeda" onclick="window.open(this.href, 'mywin',
'left=20,top=20,width=500,height=500,toolbar=1,resizable=0'); return false;" >
    <i class="fa fa-linkedin-square fa share-button"> linkedin</i>
</a>

<a href="mailto:?subject={% raw %}{{ page.title }}{% endraw %}&amp;body=Check out this site {% raw %}{{ site.url }}{% endraw %}{% raw %}{{ page.url }}{% endraw %}">
    <i class="fa fa-envelope-square fa share-button"> email</i>
</a>   
                               
</div>

{% endhighlight %}

I have used icons from **font awesome** which is better than loading icons from local files.

Now copy this line inside your post layout file which will be inside **_layouts** folder. You have to place this line wherever you want the sharebar to appear on your posts.

{% highlight html %}
{% raw %}{% include  share.html %}{% endraw %}
{% endhighlight %}

## Add style to your share bar

I have styled my buttons with the following css. You can change it for your needs.

{% highlight css %}
.share-button {
    margin: 0px;
    border: 1px solid #D3D6D2;
    color: rgba(43, 177, 243, 0.77);
    border-radius: 12px 0px 0px 0px;
    padding: 2px 5px 2px 5px;
}
{% endhighlight %}

Currently I'm using this share bar for my blog. At the end of this article you see a sharebar which uses the same code.
![webjeda share bar for jekyll](/images/how-to-add-share-bar-to-jekyll-blog.jpg)

So this is how you can implement only css, javaScript free WebJeda sharebar. If you were able to implement this in your blog then please leave a link in the comment.

Thanks for reading!