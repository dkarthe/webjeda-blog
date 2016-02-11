---
title: Adding Custom Domain to Github Pages Website
desc: Using github custom domain change the ugly looking username.github.io URL into a yourdomain.com URL. Learn how to add custom domain to github pages. You can also add a new domain to your Jekyll blog using this method.
keywords: github custom domain, custom domain github, custom URL github website
author: sharathdt
tags: Github-Pages SEO
---

<img alt="Configure custom domain to github website screenshot" title="Configure custom domain to github website screenshot" itemprop="thumbnailUrl" src="{{ site.url }}/images/custom-domain-to-github-2.jpg">

## Why should we use a custom domain?
Having a third-party domain like ```username.github.io``` is fine. But a domain name adds credibility to your product or service. Having a domain name is also important for SEO. Search engines like a domain name rather a free subdomain obtained from a third-party. So buy a domain name, it doesn't cost much and it can help you build a brand.

Adding a custom domain is fairly easy compared to adding a subdomain to github hosted website. I will explain adding a domain name to Github here in simple steps.

You may have a website hosted on Github Pages which has a URL that looks similar to [http://sharu725.github.io/index.html](http://sharu725.github.io). But what you want is something like [http://webjeda.com](http://webjeda.com){:rel='dofollow'}. So how to change it to a custom domain like webjeda.com?

If you do not have a website yet, then refer to my post on [How to create a website and host it on github pages](http://blog.webjeda.com/how-to-create-and-host-a-website-on-github-pages/)

First thing is that you should own a domain name. Like I own truejewels.in. You can buy it from any registrars like godaddy, namescheap or somewhere. Domain extensions like **.io**, **.com** are costly whereas **.in**, **co** are cheap. I believe **.tk** is still free. But I prefer **.com** over any other extension. 

If you already own a domain name and you want to use it, then continue to Step 1.


## Step 1: Adding CNAME file to the gh-pages branch.


Go to the repository where you have hosted your website and click on **New File**
![Adding a CNAME file to github screenshot]({{ site.url }}/images/adding-CNAME-file-to-github-repository.JPG "Adding a CNAME file to github screenshot")

Name the file as **CNAME** without any extension. Now, inside the CNAME file write your domain name(that you own). I have written ``` truejewls.in ```

![Adding domain name in CNAME file - github screenshot]({{ site.url }}/images/adding-domain-name-in-CNAME-file-github.JPG "Adding domain name in CNAME file - github screenshot")

Now commit your file to the repository. Make sure you are still in the gh-pages branch while hitting commit.
{% include adsense-inside-post.html %}

## Step 2: Adding A record in the DNS Zone Records


Login to the website where you purchased your domain name (Domain Name Registrar). Mine is godaddy, but I think the procedure is similar in any other registrar. Go to your domain and click on something similar to **Manage Domain**

![Adding A record to DNS Zone Records - github screenshot]({{ site.url }}/images/Adding-A-record-to-DNS-github.JPG "Adding A record to DNS Zone Records - github screenshot")

Now go to **DNS Zone File** option. This is where all your records reside. 

![Adding A record to DNS Zone Records - github screenshot]({{ site.url }}/images/Adding-A-record-to-DNS-github-2.JPG "Adding A record to DNS Zone Records - github screenshot")

Now click on **Add Record** and add an **A** record with following configuration

**Host:** @


**Points to:** 192.30.252.153 or 192.30.252.154

These IPs belong to Github using which your website will be served on your domain name. They will not change anytime soon (at least that's what I believe). If that is the case then many websites hosted using Github Pages will go down all of a sudden.
You can find these Ips [here](https://help.github.com/articles/tips-for-configuring-an-a-record-with-your-dns-provider/){:rel='nofollow'}. You can use any one of them or both. I guess they have two for redundancy. So for 100% availability, use both. In order to use both IPs, you have to add another **A** record with the second IP address.

![Adding A record to DNS Zone Records - github screenshot]({{ site.url }}/images/Adding-A-record-to-DNS-github-3.JPG "Adding A record to DNS Zone Records - github screenshot")

Click on **Finish** and **Save**.

## Step 3: Waiting!

And that's about it. Do not rush though. It will take a while to propagate. So grab a cup of coffee. Once you are done, hit your URL :) 

Propagation can take a long time and it can be in different speeds in different geo-locations. So try using a [proxy site](https://www.proxysite.com/){:rel='nofollow'} to see if it has propagated in different countries. Try servers from different countries.


Here is a video demonstration
<iframe itemscope="" itemprop="video" width="100%" height="360" src="https://www.youtube.com/embed/hUChaN-VRIc?rel=0" frameborder="0" allowfullscreen></iframe>

Let me know if you were successful in using a custom domain name. Put your link in the comment section.

Thanks for reading!