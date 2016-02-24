---
title: How to Create a Beautiful Jekyll Blog?
desc: I created this beautiful looking Jekyll blog by forking a repository. You can also fork it to make it yours. Jekyll is a simple blog generator. The community is growing and number of plugins is also growing. I have moved all my blogs to Jekyll!
keywords: cerate Jekyll blog, blogging on Jekyll, github blogging
author: sharathdt
tags: Jekyll Web-Design
---

<img alt="How to create a website using Github blog" title="How to create a website using Github pages" itemprop="thumbnailUrl" src="{{ site.url }}/images/how-to-create-a-blog-on-github-pages.jpg">

<i class="fa fa-quote-left fa-3x fa-pull-left fa-border"></i>When I had this idea to create a web designing blog, I thought of making it in WordPress. For some reason I didn't like the same look of WordPress themes. Many of them are distracting. I was looking for something totally content oriented.

A minimalistic WordPress theme would have done the job, but I wanted something that can load faster. Jekyll - a static site generator - is a lot faster and very secure. But Jekyll themes are very limited. You cannot actually get the exact design you want like you get in WordPress.

Then I came across this Jekyll theme called [Emerald](http://www.jacoporabolini.com/emerald/).	It felt perfect for my blog. I will show you how I implemented this theme. Once you successfully implement this Jekyll theme, please consider donating something to the creator.

## Find a theme that suits your requirement

A theme is important for a good looking blog. Otherwise you can go with the [basic Jekyll theme](http://www.jekyllnow.com/){:rel='nofollow'} form minimal design. But if you are looking for certain layout then you should checkout [Jekyll Themes](http://jekyllthemes.org/){:rel='nofollow'}. You see a lot of themes here but what I suggest is to go with these Jekyll themes

1. [Hyde](http://hyde.getpoole.com/){:rel='nofollow'}


2. [Poole](http://demo.getpoole.com/){:rel='nofollow'}


3. [Lanyon](http://lanyon.getpoole.com/){:rel='nofollow'}

These are some pretty well built themes I recommend. You can change the look and scheme though. Let's take a look at how to implement [Emerald theme](http://www.jacoporabolini.com/emerald/){:rel='nofollow'}.

All the themes you see are inside a certain repository. You just have to copy these files and change it accordingly to make it yours (but keep the license file as it is). So if you see Emerald theme, it has a link in it's navigation which says **Project on Github**. That link will lead you to the theme repository.

![Jekyll theme respository]({{ site.url }}/images/fork-jekyll-theme-screenshot-2.jpg)

Once you are inside the repository move to next step.
{% include adsense-inside-post.html %}
## Fork - A new way of copy pasting!


First thing is logging in to Github and forking the whole [theme repository](https://github.com/KingFelix/emerald){:rel='nofollow'}

![Fork a repository]({{ site.url }}/images/fork-jekyll-theme-screenshot.JPG)

What **fork** does is that it copies the whole repository as a new repository inside your Github account.

## Check for redirection

Once you hit the fork button, all the files in the remote repository will be copied as a new repository.

Now once it is in that repository, check whether it has any CNAME file inside it.

![CNAME in repository]({{ site.url }}/images/CNAME-in-repository.JPG)

If there is one, then delete the URL inside it and commit. If there isn't one, then no problem.

Check the URL  ``` https://username.github.io/emerald ```
change the **username** to your Github user name.

Your blog should be up and running by now. But give it sometime. A maximum of 10 minutes. Jekyll builds a static blog in the meanwhile. If the blog is not up, then take the next step.

## Check for baseurl

If your blog is showing a 404 error, then you may have to check the baseurl in configuration file.
Jekyll blog configuration is found inside **_config.yml** file.

![_config.yml in repository]({{ site.url }}/images/config.yml-in-repository.jpg)

Open the file to see what is the **baseurl** configured. Usually it is **/emerald/** for emerald theme.

![inside _config.yml in repository]({{ site.url }}/images/inside-config.yml-jekyll-blog.JPG)

If (only if) you have renamed the repository name to something like **blog** or **something**, change the baseurl as shown below.

{% highlight html %}
baseurl:	/blog/
{% endhighlight %}


{% highlight html %}
baseurl:	/something/
{% endhighlight %}


Your blog will show up in the particular website

``` https://github.username/blog/ ```

or

``` https://github.username/something/ ```


So that's all there is to set up a new Jekyll blog. Some things like **CNAME** and **baseurl** may vary from theme to theme. But once you have a good knowledge of why they are used, you can configure them as you like.

If you have any doubts or if you couldn't set up your Jekyll blog then please leave your question in the description. I will try to sort it out for you.

Here is a video demonstration

<iframe itemscope="" itemprop="video" width="100%" height="310" src="https://www.youtube.com/embed/U0idtvxVo9I?rel=0" frameborder="0" allowfullscreen></iframe>


And don't forget to leave the link of your newly created github blog, in the comment section.

Thanks for reading!