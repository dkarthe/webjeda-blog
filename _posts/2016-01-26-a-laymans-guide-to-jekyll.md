---
title: A layman's guide to Jekyll
desc: Jekyll is really simple once you know how it works. You can make your blog do wonders once you know how to play with templates, layouts, loops and curly braces. Here is a layman's Jekyll guide!
keywords: jekyll tutorial, how jekyll blog works, jekyll blog setup, jekyll working, jekyll guide
author: sharathdt
---

<img alt="Jekyll Tutorial" title="Jekyll guide" itemprop="thumbnailUrl" src="/images/jekyll-tutorial-screenshot.jpg">

Jekyll was easy in the beginning. Because I was just adding posts or editing the current ones. But when I had to change the font or color I had to go through the CSS and make changes accordingly. Even this wasn't hard. But if I wanted a new page, a new functionality like adding tags, related posts, share buttons, author box etc., I had no idea how to do it. 

##Why learn Jekyll the right way

When I had to make some changes in Jekyll, I used to write dirty codes in the respective templates and somehow make it work for a while but if I wanted to make any changes to then I have to search for the code, see how it used to work, edit or add some more dirty code and make it work. This was what I used to do years ago. Half knowledge is worse than no knowledge is true in the case of Jekyll blogs.

These dirty codes would break my site sometimes leading to undesirable results. Sometimes I wouldn't know what exactly went wrong. I never used to add comments while commiting the changes (big mistake). I can revert back though but I would lose all the changes and posts :(

{% include adsense-inside-post.html %}
##Doing it the right way
Read the [documentation provided by Jekyll](http://jekyllrb.com/docs/home/){:rel='nofollow'}{:target="_blank"}. This will set you on the right path. It has a lot of information and lot of pages as well. So I thought I would summarise it in this post so that anyone could make use of it.

## What Jekyll does better?
![Jekyll transforms text to html](/images/jekyll-transforms-text-to-hypertext.jpg)
As depicted in the image, Jekyll does magic on text files converting them into html files. This is not the only thing it does but it is the job - text transformation. This is the reason Jekyll posts can be written in easily readable markups like markdown, textile etc.,

##Understand the structure of Jekyll

Jekyll is simple if you understand what feature is for what purpose. Let us look at the folder structure of Jekyll and what is used for what. The below tree is taken directly from Jekyll documentation.

{% highlight yaml %}

.
├── _config.yml
├── _drafts
|   ├── begin-with-the-crazy-ideas.textile
|   └── on-simplicity-in-technology.markdown
├── _includes
|   ├── footer.html
|   └── header.html
├── _layouts
|   ├── default.html
|   └── post.html
├── _posts
|   ├── 2007-10-29-why-every-programmer-should-play-nethack.textile
|   └── 2009-04-26-barcamp-boston-4-roundup.textile
├── _data
|   └── members.yml
├── _site
├── .jekyll-metadata
└── index.html

{% endhighlight %}

Keep this [sample Jekyll repository](https://github.com/KingFelix/emerald){:rel='nofollow'}{:target="_blank"} tab open while reading the below ponits. You should be able to see the following files and folders.

![Jekyll folder structure](/images/jekyll-folder-structure.jpg)

## Files

1. **_config.yml:** Master configuration file. You can define your site configurations inside this file. From simple things such as title, url, author etc., to complex things such as ssl certificates,increments etc., can be difined inside this file. 
Here is a [sample _config.yml file](https://raw.githubusercontent.com/Redgadget/emerald/gh-pages/_config.yml){:rel='nofollow'}{:target="_blank"} for Emerald Jekyll theme. [Read More](http://jekyllrb.com/docs/configuration/){:rel='nofollow'}{:target="_blank"}. You can use all the parameters in this file using ```site``` variable. For instance, using {% raw %}{{ site.url }}{% endraw %} anywhere on the page, post, template fetches the url variable defined in ```_config.yml```.

2. **index.html:** This is your homepage in most cases. It can also be in the format ```index.md```. It usually has a for loop to load all the posts. You can make changes to this  file and design your index of posts like how I have done the card layout for my blog. Index file may also call ```default``` layout which will be inside ```_layout``` folder.

3. **some.xml:** This file can be your post feed or a sitemap. If you do not have one, you can always [create a sitemap](http://blog.webjeda.com/how-to-add-a-sitemap-to-jekyll-blog){:target="_blank"} or feed file.

4. **readme.md:** This is a file where you can describe your project. This will be rendered as html and displayed by default when someone visits your repository on Github. In the sample link I have provided above, see the page displayed at the bottom of repository which has a description of the theme with screenshot. This file is not mandatory.


## Folders

1. **_includes:** This folder is kind of like ```#include``` in C-programming. You can include files which are inside this folder into any post or page just by adding this line of code - {% raw %}{% include filename.html %}{% endraw %} replace the ```filename``` to a file inside your ```_includes``` folder.

2. **_layouts:** As the name says this folder contains your blog layouts. It will have ```default```, ```page``` and ```post``` layout by default. You can also create other layouts such as two column, single column etc., There can also be a layout for redirecting pages. I will talk about it in a different post.

3. **_posts:** All your blog posts reside here. 

4. **_sass:** Jekyll supports [Sass preprocessor](http://sass-lang.com/documentation/file.SASS_REFERENCE.html){:rel='nofollow'}{:target="_blank"}. Sass files are included in this folder can be imported to main stylesheet.

5. **_site:** This is the file created by Jekyll to host your website. This folder will have files only compatible for a browser - HTML, CSS, JS, XML etc., This conversion happens by default. You don't have to create this or edit anything inside this foder.

6. **css, images, js:** You can create folders and name then as per your needs. These are some of the common folders used to keep stylesheets, images and JavaScript files.

7. **Other folders:** There can be other folders as well. You can name it, say ```project``` and keep html ot markdown files inside it. These files will get a URL ```http://yourdomain/project/filename.html```.

I hope that gives you an insight. This is just an introduction to Jekyll. It looked strange for me in the begnning but once I understood the logic used behind, it all made sense. And since a Jekyll site is made up of lot of different parts, debugging is very easy. When something starts acting up, you'll know exactly where the things have gone wrong. In this blog, I have written about a [lot of things](http://blog.webjeda.com/archive/) I did using Jekyll. Make use of it.

If you get frustrated about something not working then just ask the community. Google things with the suffix 'jekyll'. You will find an answer. You can always ask me here, in the comment section. I will try my best to help you.

Thanks for reading!

