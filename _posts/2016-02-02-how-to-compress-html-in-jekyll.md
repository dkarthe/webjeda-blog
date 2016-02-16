---
title: Minify Jekyll Blog HTML
desc: Jekyll - being static - is already fast. But to achieve faster loading speed we can minify the html. Minifying CSS and JS is already in practice and there are many ways to do it. But Jekyll posts and pages are in markdown and you may not be able to minify all of them using a tool. Use this code to minify html and observe the change is loading speed.
keywords: minify Jekyll html, Jekyll minify
author: sharathdt
tags: Jekyll SEO
---

<img alt="how to compress html jekyll" title="jekyll compress html" itemprop="thumbnailUrl" src="{{ site.url }}/images/how-to-minify-jekyll-html.jpg">

<i class="fa fa-quote-left fa-3x fa-pull-left fa-border"></i>There was not a single convenient way to minify the whole Jekyll blog markup until I found this cool ```html``` file which does the minifying like a champ. It  uses pure Liquid code. And it doesn't need any coding from your end. Something like a plug and play. Website loading speed is also one among 200 other parameters Google considers for SEO.

## Why do we have to minify HTML?

Speed is a factor to rank high in Google search page. Minifying HTML can lead to a increase in speeds around 5%. Lighter the website easier to load even on a slow connection. Usual html file consists of a lot of empty spaces. Sometimes you will have comments in between {% raw %}<!-- and -->{% endraw %}, new lines, blank spaces etc., It is good to keep what really matters and omit the rest.

Though minifying CSS and JS is largely practiced, minifying HTML is not given such an importance. May be because there is not much to minify compared to CSS and JS. But it does help loading your website at a better speed even on 2G connections. Moreover, [PageSpeed](https://developers.google.com/speed/pagespeed/insights/){:rel='nofollow'}{:target="_blank"} recommends minifying HTML.

I have seen huge benefits by minifying my Jekyll blog. What if I tell you that minifying reduces the file size to more than 20%! May be because I have a lot of blank spaces and new lines in the unminified version. And that's an improvement I shouldn't miss.

Here are the minifies and unminified files of my last post. They have the same content by the way. You can check the file size by downloading them.

[Unminified](/data/view-source_blog.webjeda.com_how-to-fetch-first-image-from-jekyll-post.html){:rel='nofollow'}{:target="_blank"} - 130kb

[Minified](/data/view-source_blog.webjeda.com_how-to-fetch-first-image-from-jekyll-post-minified.html){:rel='nofollow'}{:target="_blank"} - 100kb

{% include adsense-inside-post.html %}
## How to minify Jekyll html?

So far in my tutorials, I have never used command line interface. Not that I hate it but I think it's difficult for beginners to comprehend. Likewise you can minify html using ```Grunt``` or ```Gulp``` task runners but for a beginner they might seem alien technologies. And when we are designing an automatic minifier that takes care of everything then why do we need a task runner?! Also I prefer solutions that does not involve plugins.

Now to minify Jekyll blog, 

### Step 1: 
Go to [this link](http://jch.penibelst.de/){:rel='nofollow'}{:target="_blank"} and download the ```compress.html``` file. It should be under the **Installation** heading. 

### Step 2: 
Place this html file inside your ```_layout``` folder.

### Step 3: 
Open ```default.html``` in ```_layouts``` folder and copy the below front matter at the top of the page.
<pre>{% raw %}
---
layout: compress
---
{% endraw %}</pre>

The ```default.html``` should look something like this after copying the code

{% highlight html %}
{% raw %}
---
layout: compress
---
{% endraw %}
<!DOCTYPE html>
<html>
.
.
.

</html>
{% endhighlight %}



### Step 4: 
Save and commit the changes. By default the ```compress``` layout replaces contiguous whitespace with a single whitespace character. But if you want additional options then you can use this snippet inside your ```_config.yml``` file.

{% highlight yaml %}
compress_html:
    clippings: []
    comments: []
    endings: []
    ignore:
    envs: []
    blanklines: false
    profile: false
    startings: []
{% endhighlight %}


Read all about these settings in the [documentation](http://jch.penibelst.de/){:rel='nofollow'}{:target="_blank"}.

Now all your web-pages that directly or indirectly uses the layout ```default``` will be minified. You can exclusively mention for certain pages to minify by adding the front matter given above. 

So I hope this tutorial helped you minify your Jekyll blog. If there is a better way to do this, then please let me know in the comment section.

<div class="note">
<h3>Note:</h3>
<p>My disqus comment stopped loading after using this method. So for the time being I'm not using it. So if you are using disqus then do not use this method (for now).</p>
</div>

Thanks for reading!
