---
title: Adding Custom Domain to Github Pages Website
desc: Using a custom domain, change the ugly looking username.github.io URL into a yourdomain.com URL. Learn how to add a custom domain to github pages. You can also add a new domain to your Jekyll blog using this method.
keywords: github custom domain, custom domain github, custom URL github website
author: sharathdt
tags: Github-Pages SEO
image: custom-domain-to-github-9.jpg
layout: post
permalink: /custom-domain-github/
---

<img alt="{{page.title}}" title="{{page.title}}" itemprop="thumbnailUrl" class="left half noborder" src="{{site.url}}/thumbs/{{page.image}}">

<i class="fa fa-quote-left fa-3x fa-pull-left fa-border"></i>{{page.desc}}
{: .intro}

## Why should we use a custom domain?
{: .clear }

Having a third-party domain like ```username.github.io``` is fine. But a domain name adds credibility to your product or service. Having a domain name is also important for SEO. Search engines like a domain name rather a free subdomain obtained from a third-party. So buy a domain name, it doesn't cost much and it can help you build a brand.
{: .clear}

<div class="clear"></div>   


* Do not remove this line (it will not be displayed) 
{:toc}

I own 12 domains by the time of writing this article. If you have a good domain name in hand, you can always sell it if somebody wants it. May be you can recover everything you spent on it.

Adding a custom domain is fairly easy compared to adding a subdomain to GitHub hosted website. I will explain adding a domain name to Github here in simple steps.

You may have a website hosted on Github Pages which has a URL that looks similar to [http://sharu725.github.io/index.html](http://sharu725.github.io). But what you want is something like [http://webjeda.com](http://webjeda.com){:rel='dofollow'}. So how to change it to a custom domain like webjeda.com?

If you do not have a website yet, then refer to my post on [How to create a website and host it on github pages](http://blog.webjeda.com/how-to-create-and-host-a-website-on-github-pages/). I have a website for which I want to configure custom domain using GitHub.

My website looks like this

{% highlight html %}
<html>
  <title>
    First website
  </title>
  
  <body>
    <h1>This is my first github page</h1>
  </body>
  
  <style>
    body {
      background-color:green;
      color:#fff;
      text-align:center;
    }
  </style>
  
</html>
{% endhighlight %}

This is a test website that has nothing but a heading and background color. The reason is that I thought of making this tutorial as simple as possible.


First thing is that you should own a domain name like I own **truejewels.in**. You can buy it from any registrars like godaddy, namescheap or whichever is cheaper. Domain extensions like **.io**, **.com** are costly whereas **.in**, **co** are cheap. I believe **.tk** is still free. But I prefer **.com** over any other extension. 

You can access the above website usign this link: [**truejewels.com**](http://truejewels.com){:rel='nofollow'}{:target="_blank"}

If you already own a domain name and you want to use it for a GitHub website, then continue to Step 1.


## Step 1: Adding CNAME file to the gh-pages branch.

![Adding a CNAME file to github screenshot]({{ site.url }}/images/adding-CNAME-file-to-github-repository.JPG "Adding a CNAME file to github screenshot")
{: .right .small}

Go to the repository where you have hosted your website and click on **New File**. You will see a blank space where you can type in anything. Name the file as **CNAME** without any extension.

Here is my repository for reference: [sample Repository](https://github.com/Redgadget/test){:rel='nofollow'}{:target="_blank"}

<p class="clear"></p>

![Adding domain name in CNAME file - github screenshot]({{ site.url }}/images/adding-domain-name-in-CNAME-file-github.JPG "Adding domain name in CNAME file - github screenshot")
{: .left .small}

Now, inside the CNAME file write your domain name you want to use(that you already own). I have written ``` truejewls.in ``` because that is what I will be using. Now commit your file to the repository. Make sure you are still in the gh-pages branch while hitting commit.

{% include adsense-inside-post.html %}


## Step 2: Adding A record in the DNS Zone Records
{: .clear}

Login to the website where you purchased your domain name (Domain Name Registrar). Mine is GoDaddy, but I think the procedure is similar in any other registrar. Go to your domain and click on something similar to **Manage Domain**

![Adding A record to DNS Zone Records - github screenshot]({{ site.url }}/images/Adding-A-record-to-DNS-github.JPG "Adding A record to DNS Zone Records - github screenshot")



![Adding A record to DNS Zone Records - github screenshot]({{ site.url }}/images/Adding-A-record-to-DNS-github-2.JPG "Adding A record to DNS Zone Records - github screenshot")
{: .right .half}

Now go to **DNS Zone File** option. This is where all your records reside. Click on **Add Record** and add an **A** record with the following configuration

**Host:** @


**Points to:** 192.30.252.153 or 192.30.252.154

These IPs belong to Github using which your website will be served on your domain name. They will not change anytime soon (at least that's what I believe). If that is the case then many websites hosted using Github Pages will go down all of a sudden.
You can find these IPs [here](https://help.github.com/articles/tips-for-configuring-an-a-record-with-your-dns-provider/){:rel='nofollow'}. You can use any or both of them . I guess there are two IPs for redundancy. So for 100% availability, use both. In order to use both IPs, you have to add another **A** record with the second IP address.
{: .clear}

![Adding A record to DNS Zone Records - github screenshot]({{ site.url }}/images/Adding-A-record-to-DNS-github-3.JPG "Adding A record to DNS Zone Records - github screenshot")
{: .left .half}

Click on **Finish** and **Save**.

## Step 3: Waiting!
{: .clear}
And that's about it. But do not rush. It will take a while to propagate. So grab a cup of coffee. Once you are done, hit your URL :)

Propagation can take a long time and it can be at different speeds in different geo-locations. So try using a [proxy site](https://www.proxysite.com/){:rel='nofollow'} to see if it has propagated in different countries. Try servers from different countries.

<div class="warning">
<h3>Warning</h3>
<p>If your website has external <strong>css</strong> and <strong>js</strong> files, then watch out for the links you have used in the head tag. Make sure it links to proper files.</p>
</div>

<iframe itemscope="" class="right half" itemprop="video" width="100%" height="360" src="https://www.youtube.com/embed/hUChaN-VRIc?rel=0" frameborder="0" allowfullscreen></iframe>

Here is a video demonstration


Let me know if you were successful in using a custom domain name. Put your link in the comment section.

Thanks for reading!
{: .clear}