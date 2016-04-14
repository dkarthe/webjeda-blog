---
title: How to Create a Beautiful Jekyll Blog?
desc: I created this beautiful looking Jekyll blog by forking a repository. You can also fork it to make it yours. Jekyll is a simple blog generator. The community is growing and the number of plugins is also growing. I have moved all my blogs to Jekyll!
keywords: create Jekyll blog, blogging on Jekyll, github blogging
author: sharathdt
tags: Jekyll Web-Design
image: how-to-create-a-blog-on-github-pages.jpg
layout: post
permalink: /create-jekyll-blog/
---

<img alt="How to create a website using Github blog" title="How to create a website using Github pages" itemprop="thumbnailUrl" class="left half noborder" src="{{ site.url }}/images/how-to-create-a-blog-on-github-pages.jpg">

<i class="fa fa-quote-left fa-3x fa-pull-left fa-border"></i>I created this beautiful looking Jekyll blog by forking a repository(now I have designed my own). You can also fork it to make it yours. Jekyll is a simple blog generator. The community is growing and the number of plugins is also growing. After realizing its capability I have moved all my blogs to Jekyll!
{: .intro}

When I had this idea to create a web designing blog, I thought of making it in WordPress. For some reason, I didn't like the same look of WordPress themes. Many of them are distracting. I was looking for something totally content oriented.
{: .clear}

<div id="toc" class="clear"></div>

A minimalistic WordPress theme would have done the job, but I wanted something that can load faster. Jekyll - a static site generator - is a lot faster and very secure. But Jekyll themes are very limited. You cannot actually get the exact design you want like you get in WordPress.

Then I came across this Jekyll theme called [Emerald](http://www.jacoporabolini.com/emerald/).    It felt perfect for my blog. I will show you how I implemented this theme. Once you successfully implement this Jekyll theme, please consider donating something to the creator.

## Find a theme that suits your requirement

A theme is important for a good looking blog. Otherwise you can go with the [basic Jekyll theme](http://www.jekyllnow.com/){:rel='nofollow'} for minimal design. But if you are looking for certain layout then you should check out [Jekyll Themes](http://jekyllthemes.org/){:rel='nofollow'}. You see a lot of themes here but what I suggest is to go with these Jekyll themes

1. [Hyde](http://hyde.getpoole.com/){:rel='nofollow'}


2. [Poole](http://demo.getpoole.com/){:rel='nofollow'}


3. [Lanyon](http://lanyon.getpoole.com/){:rel='nofollow'}

These are some pretty well-built themes I recommend. You can change the look and scheme, though. Let's take a look at how to implement [Emerald theme](http://www.jacoporabolini.com/emerald/){:rel='nofollow'}.

All the themes you see are inside a certain repository. You just have to copy these files and change it accordingly to make it yours (but keep the license file as it is). So if you see Emerald theme, it has a link in its navigation which says **Project on Github**. That link will lead you to the theme repository.

![Jekyll theme respository]({{ site.url }}/images/fork-jekyll-theme-screenshot-2.jpg){: .full}

Once you are inside the repository move to next step.
{% include adsense-inside-post.html %}
## Fork - A new way of copy pasting!


First thing is logging into Github and forking the whole [theme repository](https://github.com/KingFelix/emerald){:rel='nofollow'}

![Fork a repository]({{ site.url }}/images/fork-jekyll-theme-screenshot.JPG){: .full}

What **fork** does is that it copies the whole repository as a new repository inside your Github account.

## Check for redirection

Once you hit the fork button, all the files in the remote repository will be copied as a new repository.

![CNAME in repository]({{ site.url }}/images/CNAME-in-repository.JPG){: .left .half}
Now once it is in that repository, check whether it has any CNAME file inside it.



If there is one, then delete the URL inside it and commit. If there isn't one, then no problem.


Check the URL  ``` https://username.github.io/emerald ``` change the **username** to your Github user name.
{: .clear}

Your blog should be up and running by now. But give it some time. A maximum of 10 minutes. Jekyll builds a static blog in the meanwhile. If the blog is not up, then take the next step.

## Check for baseurl
![_config.yml in repository]({{ site.url }}/images/config.yml-in-repository.jpg){: .right .half}
If your blog is showing a 404 error, then you may have to check the baseurl in configuration file.
Jekyll blog configuration is found inside **_config.yml** file.


<div class="clear"></div>
![inside _config.yml in repository]({{ site.url }}/images/inside-config.yml-jekyll-blog.JPG)
{: .left .large}
Open the file to see what is the **baseurl** configured. Usually it is **/emerald/** for emerald theme.


If (only if) you have renamed the repository name to something like **blog** or **app**, change the baseurl as shown below.
{: .clear}

```baseurl:    /blog/```

```baseurl:    /app/```

Your blog will show up in the particular website

``` https://github.username/blog/ ```  or  ``` https://github.username/something/ ```


So that's all there is to set up a new Jekyll blog. Some things like **CNAME** and **baseurl** may vary from theme to theme. But once you have a good knowledge of why they are used, you can configure them as you like.

If you want to start to write posts then read [How to edit Jekyll post](/an-easy-way-to-edit-posts-in-jekyll/)

If you have any doubts or if you couldn't set up your Jekyll blog then please leave your question in the comments. I will try to sort it out for you.
<iframe itemscope="" itemprop="video" width="100%" height="310" class="right half" src="https://www.youtube.com/embed/U0idtvxVo9I?rel=0" frameborder="0" allowfullscreen></iframe>
Here is a video demonstration. And don't forget to leave the link to your newly created GitHub blog, in the comment section.

Thanks for reading!
{: .clear}