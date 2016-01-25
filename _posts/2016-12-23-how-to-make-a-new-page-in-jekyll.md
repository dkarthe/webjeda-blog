---
title: How to make a new page in Jekyll?
desc: Adding a new page in jekyll is really easy. You can use HTML, Markdown or textile for markup. Learn how to create a page in jekyll and how to manipulate the URL. We will be creating a blank layout for plain html pages.
keywords: create web page in jekyll, pages in jekyll, new page in jekyll
author: sharathdt
tags: jekyll
---

<img alt="Creating pages in Jekyll" title="Make a new html page in Jekyll" itemprop="thumbnailUrl" src="/images/how-to-add-pages-in-jekyll.jpg">

I like Jekyll for its immense power in generating pages! Let's say you want a new html page inside Jekyll, you can create one. Say, you want it to have the same style as your posts, you can do it. Let's say you do not want any styles in it, you can do it. 

##Why should we create a new page on Jekyll?

Jekyll themes do not come with all the bells and rings. You have to add whatever you want and take out whatever you do not need. I wanted a [contact page](/contact/){:rel='dofollow'}{:target="_blank"} for my blog and Jekyll did not have one by default. So I had to create one. Same thing with my [about](/about/){:rel='dofollow'}{:target="_blank"} page.

Many times you may want a home page which do not show list of posts. You may want to show off your projects in the home page. In such cases, you can make your custom pages in Jekyll and use them.


##Let's create a html page in Jekyll

Before creating one, you have to decide how it should be. Because you already have layouts which you can use. Usually you will have a ```default``` layout, ```page``` layout and a ```post``` layout files inside ```_layouts``` folder.

They are all different from one another. But ```default``` is generally used in other layouts (recursive) since ```default``` has all the meta, header and footer tags.

###Step 1: create a html page 

You can do this in the root of the repository or inside a custom folder, but do not use the folders whose names start with an ```_underscore``` as they are treated special by Jekyll.

Let's make an about page for our Jekyll blog.

* Layout can be ```page```

* Markup can be html, markdown or textile.

I will be using markdown.

create a new file in the root of repository and call it **about.md**

###Step 2: Add YAML front matter
YAML(Yet Another Markup Language) lies at the top of the page inside three dashes.
<pre>
{% raw %}
---
YAML front matter
---
{% endraw %}
</pre>
Inside it you can define few properties for your page like which layout it should use, which permalink to use, which title to use etc.,
Here is my about page. You can copy the same code below but change the content as per your needs.

<pre>
{% raw %}
---
layout: page
title: About
permalink: /about/
---

## About

WebJeda is a web designing company 
.
.
.

**Disclaimer:** This website is under constant modification. 
If you find something isn't right then,
I might be doing some change in the backend.

{% endraw %}
</pre>

This ```about.md``` page will be rendered as ```about.html``` by the time it builds the site out of your repo. So the link would be
```http://blog.webjeda.com/about.html```.


I don't want my web pages to have any file extension in the URL. So to remove that, I have used ```permalink``` attribution in the front matter.

You can visit [my about page](/about/){:rel='dofollow'}{:target="_blank"} here.

You can also achieve this without permalinks. Just create a folder in the root with the name ```about``` and create a ```index.md``` file inside it with all the above content. Even now the link will show up as ```http://blog.webjeda.com/about```. This is just like how for my blog jekyll will not show the URL as ```http://blog.webjeda.com/index.html``` because it is umderstood that ```index.html``` is the default file to show when the URL ```http://blog.webjeda.com``` is hit.


### Step 3: Create a plain HTML page in Jekyll

A plain HTML inside Jekyll can have a front matter as shown below which defines not to use any layout or you can use no front matter at all.

<pre>
{% raw %}
---
layout: null
---
{% endraw %}
</pre>

If you have visited my [feed page](/atom.xml){:rel='dofollow'}{:target="_blank"}, you will see that it is different from all other pages. I just have plain HTML inside it. 

[Raw feed.xml file](https://raw.githubusercontent.com/sharu725/emerald/gh-pages/atom.xml){:rel='nofollow'}{:target="_blank"}


##Custom layouts

The fun part about layouts is that you can have your own layout and you can use it in any page you create. Even for plain HTML, you can create a template called ```blank```like this one below inside ```_layouts``` folder.

{% highlight html %}
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Some Title</title>
</head>
<body>
    
      {% raw %}{{ content }}{% endraw %}
    
</body>
</html>

{% endhighlight %}

So whenever you create a new plain HTML page, you don't have to include title, head and body. Just write the code and use

<pre>
{% raw %}
---
layout: blank
---
{% endraw %}
</pre> 

and Jekyll will keep the HTML code inside the ```blank``` template where {% raw %}{{ content }}{% endraw %} is defined!


These are the ways you can create a new page in Jekyll blog. There can be other ways as well. Let me know if you find a better way to do it. Subscribe for more cool stuff!

Thanks for reading!