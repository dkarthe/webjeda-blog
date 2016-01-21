---
layout: page
---


<script>
emailE=('info@' + 'dxartist.com')
document.write('<A href="mailto:' + emailE + '">' + emailE + '</a>')

</script>


<a href="http://blog.webjeda.com/how-to-add-share-buttons-to-jekyll#disqus_thread">Link</a>    

<div class="arrow_right">Github Pages</div>
<hr>
<div class="arrow">Github Pages</div>




{% raw %}
{% include header.html %}
{% endraw %}

{% raw %}
{% include footer.html %}
{% endraw %}

{% highlight %}

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

<style>
    
    
    .arrow_right {
    font: 14px/1.5 'PT Sans',serif;
    background: #2BB1F3;
    border-radius: 3px 0 0 3px;
    color: #FFFFFF;
    display: inline-block;
    height: 26px;
    line-height: 26px;
    padding: 0 20px 0 23px;
    position: relative;
    margin: 0 10px 10px 0;
    text-decoration: none!important;
    -webkit-transition: color .2s;
}

.arrow-right:before {
    background: #fff;
    border-radius: 10px;
    box-shadow: inset 0 1px rgba(0,0,0,.25);
    content: '';
    height: 6px;
    left: 10px;
    position: absolute;
    width: 6px;
    top: 10px;
}

.arrow-right:after {
    background: #fff;
    border-bottom: 13px solid transparent;
    border-left: 10px solid #2BB1F3;
    border-top: 13px solid transparent;
    content: '';
    position: absolute;
    right: 0;
    top: 0;
}

    
    .arrow {
    font: 14px/1.5 'PT Sans',serif;
    background: #2BB1F3;
    border-radius: 3px 0 0 3px;
    color: #FFFFFF;
    display: inline-block;
    height: 26px;
    line-height: 26px;
    padding: 0 20px 0 23px;
    position: relative;
    margin: 0 10px 10px 0;
    text-decoration: none!important;
    -webkit-transition: color .2s;
}

.arrow:before {
    background: #fff;
    border-radius: 10px;
    box-shadow: inset 0 1px rgba(0,0,0,.25);
    content: '';
    height: 6px;
    left: 10px;
    position: absolute;
    width: 6px;
    top: 10px;
}

.arrow:after {
    background: #fff;
    border-bottom: 13px solid transparent;
    border-left: 10px solid #2BB1F3;
    border-top: 13px solid transparent;
    content: '';
    position: absolute;
    right: 0;
    top: 0;
}

</style>