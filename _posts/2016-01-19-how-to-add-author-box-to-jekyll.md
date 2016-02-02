---
title: Author box to Jekyll blog
desc: Adding multiple authors like in WordPress to a Jekyll blog is hard. But not anymore. Learn how to add an author box to your Jekyll blog with these easy steps. You can also create author section for your Jekyll blog using this method.
keywords: author box jekyll, author tab jekyll, jekyll author box, jekyll author section
author: sharathdt
tags: Jekyll
---

<img alt="Author box jekyll" title="Author box for jekyll" itemprop="thumbnailUrl" src="/images/author-box-jekyll.jpg">

I run a blog called [Nallikayi Articles](https://articles.nallikayi.com){:target="_blank"} where I choose the best articles from authors and post it. But the real hurdle was to add different author section at the bottom of the article for every post. 

I can make a template, add it to every post manually and change author name, image and other details accordingly but it is not practical if you have many authors. I like how WordPress handles different authors.

There should be a provision where you just mention authors name in the post and that should be enough for the post to update itself with particular author details.

This tutorial explains how to add an author box to jekyll blog posts step by step.

**Templating**, **configuration file** and **site variables** are the saviours here.

## Step 1: Make an author box

Create a new ```html``` file inside **_includes** folder, name it **author.html** and copy paste the below code.


{% highlight html %}

<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css">

<div class="w3-card-2">
  <div id="author-content">
    <h3>Author</h3>
                         <hr>
     <div itemprop="author" id="name-author"><strong>{% raw %}{{ author.display_name }}{% endraw %}</strong><br /></div>
     <div id="im-ab">
     <img itemprop="image" id="image-author" src="{% raw %}{{ author.gravatar }}{% endraw %}">
        <div id="about-author">{% raw %}{{ author.about }}{% endraw %}</div>
        </div>
      <div id="social-author"> 
            <a href="{% raw %}{{ author.facebook }}{% endraw %}" ><i class="fa fa-facebook-square fa"></i></a>
            <a href="{% raw %}{{ author.twitter }}{% endraw %}" ><i class="fa fa-twitter-square fa"></i></a>
            <a href="{% raw %}{{ author.github }}{% endraw %}" ><i class="fa fa-github-square fa"></i></a>
            <a href="{% raw %}{{ author.email }}{% endraw %}" ><i class="fa fa-envelope-square fa"></i></a>
            </div>
       </div>
    </div>
    
{% endhighlight %}

## Step 2: Add authors in configuration file

Now copy below details into your ```_config.yml``` which is in the root of the repository. Change details accordingly. Here I ahve mentioned only for two authors - **sharathdt** and **sampaths**. You can use any number of authors. Add details of new authors to this file in this format.

{% highlight yaml %}
authors:
      sharathdt:
        display_name: Sharath Kumar
        about: Sharath is a full-time chess coach, part-time web designer and a hobby blogger. He posts his Web Development blogs in <a href="http://blog.webjeda.com" >Webjeda Blog</a></p>
        email: mailto:info@dxartist.com
        web: http://webjeda.com/
        facebook: https://www.facebook.com/sharu725
        twitter: https://twitter.com/sharathdt
        github: https://github.com/sharu725/
        gravatar: https://s.gravatar.com/avatar/73c67b9ce8685bfb9e906a5865c0aef8?s=80
        
        
        sampaths:
        display_name: Sampath Sirimane
        about: Sampath is a blogger, story and novel writer for a damous daily news paper.
        email: mailto: sirimane@gmail.com
        web: http://samapathsirimane.com
        facebook: https://www.facebook.com/sirimane.sampath
        twitter: https://twitter.com/sirimane
        github: https://github.com/sirimane/
        gravatar: https://raw.githubusercontent.com/sharu725/lanyon/gh-pages/public/img/samapths.jpg
        
{% endhighlight %}

## Step 3: Include author section in post layout

Now in your **post** template file, which is inside **_layout** folder add these lines at the end of the post layout as shown in the sample below.

 Sample **post layout**
 
{% highlight html %} 
---
layout: default
---


<article id="post-page" >
	    <h2>{% raw %}{{ page.title }}{% endraw %}</h2>		
	    <time datetime="{% raw %}{{ page.date | date_to_xmlschema }}{% endraw %}" class="by-line" >{% raw %}{{ page.date | date_to_string }}{% endraw %}</time>
	    <div class="content" >

		{% raw %}{{ content }}{% endraw %}
		
	    </div>
    
        {% raw %}{% assign author = site.authors[page.author] %}{% endraw %}
        {% raw %}{% include  author.html %}{% endraw %}
        
        
</article>
 
 {% endhighlight %}


{% include adsense-inside-post.html %}
## Step 4: Add author name in all posts
Now in all your posts which are inside **_post** folder you should add a new attribute called author

{% highlight html %} 


---
title: Some Title
author: sharathdt
---


{% endhighlight %}

Now your post recognizes the author as **sharathdt** and all the details like author name, author image, author about are updated accordingly. Here is how it looks like in my blog posts

![Author box for jekyll](/images/author-section-jekyll-sample.jpg)


Your author box may not be styled as mine but you can style it however you want it to be. I have used w3-css cards for card style.

Here is how I have styled it

{% highlight css %} 

<link rel="stylesheet" href="http://www.w3schools.com/lib/w3.css">

div#author-content {
    width:90%;
    margin:0 auto;
    padding-bottom: 35px;
}

img#image-author {
    margin-left: 0px;
    margin-top: 10px;
    float: left;
}

#social-author {
    float:right;    

}

#im-ab {
    padding-bottom: 2px;
}


{% endhighlight %}

So that is about adding multiple author section for Jekyll blog. Let me know if you were able to successfully implement this in your Jekyll blog or website. 

Also post the link of your blog in the comment section once you successfully implement this. 

Thanks for reading!
