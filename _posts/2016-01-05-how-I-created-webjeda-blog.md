---
title: How I created WebJeda blog
desc: I created this beautiful looking blog by forking a repository. You can also fork it to make it yours. Here is a easy way.
keyword: cerate jekyll blog, blogging on jekyll, github blogging
---

![How to create a website using Github pages](/images/how-to-create-a-blog-on-github-pages.jpg)
When I had this idea to create a web designing blog, I thought of making it in WordPress. For some reason I didn't like the same look of WordPress themes. Many of them are distracting. I was looking for something totally content oriented.

A minimalistic WordPress theme would have done the job, but I wanted something that can load faster. Jekyll static websites are lot faster and very secure. But Jekyll themes are very limited. You cannot actually get the exact design you want like you get in WordPress.

Then I came across this theme called [Emerald](http://www.jacoporabolini.com/emerald/).	It felt perfect for my blog. I will show you how I implemented the theme. Once you successfully implement this theme, please consider donating something to the creator of this theme.


##Fork - A new way of copy pasting!


First thing is logging in to Github and forking the whole [theme repository](https://github.com/KingFelix/emerald)

![Fork a repository](/images/fork-jekyll-theme-screenshot.JPG)

What **fork** does is that it copies the whole repository as a new repository inside your Github account.

##Check for redirection

Once you hit the fork button, all the files in the remote repository will be copied as a new repository.

Now once it is in that repository, check whether it has any CNAME file inside it.

![CNAME in repository](/images/CNAME-in-repository.JPG)

If there is one, then delete the URL inside it and commit. If there isn't one, then no problem.

Check the URL  ``` https://username.github.io/emerald ```
change the **username** to your Github user name.

Your blog should be up and running by now. But give it sometime. A maximum of 10 minutes. Jekyll builds a static blog in the meanwhile. If the blog is not up, then take the next step.

##Check for baseurl

If your blog is showing a 404 error, then you may have to check the baseurl in configuration file.
Jekyll blog configuration is found inside **_config.yml** file.

![_config.yml in repository](/images/config.yml-in-repository.jpg)

Open the file to see what is the **baseurl** configured. Usually it is **/emerald/** for emerald theme.

![inside _config.yml in repository](/images/inside-config.yml-jekyll-blog.JPG)

If (only if) you have renamed the repository name to something like **blog** or **something**, change the baseurl as shown below.

{% highlight html linenos %}
baseurl:	/blog/
{% endhighlight %}


{% highlight html linenos %}
baseurl:	/something/
{% endhighlight %}


Your blog will show up in the particular website

``` https://github.username/blog/ ```

or

``` https://github.username/something/ ```


So that's all there is to set up a new Jekyll blog. Some things like **CNAME** and **baseurl** may vary from theme to theme. But once you have a good knowledge of why they are used, you can configure them as you like.

If you have any doubts or if you couldn't set up your Jekyll blog then please leave your question in the description. I will try to sort it out for you.

Here is a video demonstration

<iframe width="100%" height="310" src="https://www.youtube.com/embed/U0idtvxVo9I?rel=0" frameborder="0" allowfullscreen></iframe>


And don't forget to leave the link of your newly created blog, in the comment section.

Thanks for reading!