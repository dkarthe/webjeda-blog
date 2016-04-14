---
title: Make a Contact Form in Jekyll Website
desc: Normal forms will not work on Jekyll blog or Github pages website. You have to use something that works for a static website. I have given a simple solution for such problems.
keywords: form in Jekyll, form in Jekyll blog, form in a static website, formspree
author: sharathdt
tags: Jekyll Web-Design
image: how-to-add-form-option-for-jekyll-websites.jpg
layout: post
permalink: /jekyll-contact-form/
---

<img alt="How to make a form in Jekyll website" title="How to make a form in Jekyll website" itemprop="thumbnailUrl" class="left half noborder" src="{{ site.url }}/images/how-to-add-form-option-for-jekyll-websites.jpg">

<i class="fa fa-quote-left fa-3x fa-pull-left fa-border"></i>Normal forms will not work on Jekyll blog or Github pages website. You have to use something that works for a static website. I have given a simple solution for such problems.
{: .intro}

When I moved one of my blogs from WordPress to Jekyll, I faced a big problem. How to add a form to Jekyll website which is static?! The backbone of forms is the ```php``` code which takes the data and sends it to the respective email address.
{: .clear}

<div id="toc" class="clear"></div>

But Jekyll blogs and websites hosted on github being static, cannot execute ```php``` files. Wait.! Then how do I make a working form in Jekyll blog?

## why use a form?
Every contact page gives an entry form to user using which they can enter the details. Forms can be a contact form, subscription form, survey form etc., where the user enters some data and that reaches the site owner to make further decisions based on the entry.

## Form on Jekyll
There are few solutions to create a form in Jekyll blog.

1. [Formspree](http://formspree.io)

2. [SimpleForm](https://getsimpleform.com/)

I'm going to explain the simplest among the two - Formspree. 

Formspree has a restriction 1000 entries/month. It is more than enough for a starter like myself. You can choose Gold membership for more entries and gain access to Formspree database.



## Step 1: Create a form

Let's create a simple form and make it work. I will have only two options for user input - Name and Email. Copy and paste the below form code inside the body tag (or wherever you want the form to be).

{% highlight html  %}
<form action="" method="">
    <p>Name: </p><input type="text" name="name"><br />
    <p>Email: </p><input type="email" name="email"><br />
    <input type="submit" value="Send">
</form>
{% endhighlight %}


![Sample Jekyll form]({{ site.url }}/images/form-sample-screenshot.JPG)
{: .right .half}

So the output should look something like this.

<div class="clear"></div>

{% include adsense-inside-post.html %}

## Step2: Make it work

If you see the code for the form, **action** and **method** are empty. Formspree suggests you to add an action and method in this format.
{% highlight html %}

<form action="//formspree.io/your@email.com" method="POST">
    <p>Name: </p><input type="text" name="name"><br />
    <p>Email: </p><input type="email" name="email"><br />
    <input type="submit" value="Send">
</form>

{% endhighlight %}



Whenever a user submits his name and email, the data will be sent to formspree.io website and then formspree sends it back to your email with the details. 

Try to enter something and see if you receive the mail. For the first time, you have to verify your email address. Then on you can receive mails without any hassle.

This is the brief process of making a form in GitHub pages website. What if you want to redirect users to a custom web page once they are done submitting the form on Jekyll blog or GitHub pages website?

## Step 3: Custom thank-you page 
After the submission, users are redirected to a formspree thank you page by default. But if you want it to be your own custom thank you page then you can do so adding this code.

{% highlight html %}
<input type="hidden" name="_next" value="//path/thanks.html" />
{% endhighlight %}

I have a working example here - [nallikayi contact](https://articles.nallikayi.com/contact-us.html)

Make sure you create a **thank you** page in Github-pages with the name ```thanks.html```. 

##Step 4: Security from bots

If your form is not secure, it may result in receiving spam mails generated from software agents - BOTS. To fool the bots Formspree has provided an option called ```_gotcha```. This is an input field only visible to bots but not to users. If an entry is made in this invisible field, that means that someone can see through your invisible element! Must be a bot!!
{% highlight html %}
<input type="text" name="_gotcha" style="display:none" />
{% endhighlight %}

## Step 5: Secure your email
When you mention your email in clear text inside your form, email harvesting bots can easily capture it. Which may result in receiving a lot of spam emails. So you can use this code to and insert your separated email. The code will join it later and makes it a meaningful email address. But bots will not recognize this as an email. 
{% highlight html %}
<form id="formaction" method="POST">
    <p>Name: </p><input type="text" name="name"><br />
    <p>Email: </p><input type="email" name="email"><br />
    <input type="submit" value="Send">
</form>
<script>
    var contactform =  document.getElementById('formaction');
    contactform.setAttribute('action', '//formspree.io/' + 'your' + '@' + 'email' + '.' + 'com');
</script>
{% endhighlight %}

## Step 6: Ultra security 
In step 5, your email cannot be read by a bot but a human can obviously connect the dots to make it a meaningful email address. If you are paranoid about giving out your email in any way then use this method.

### Encode the whole form!
Log on to [Enkoder](http://hivelogic.com/enkoder/){:rel='nofollow'}{:target="_blank"} and copy paste your entire Formspree form and hit submit. This tool will encode your data to something like this.

{% highlight html %}
<script type="text/javascript">
//<![CDATA[
<!--
var x="function f(x){var i,o=\"\",ol=x.length,l=ol;while(x.charCodeAt(l/13)!" +
"=92){try{x+=x;l+=l;}catch(e){}}for(i=l-1;i>=0;i--){o+=x.charAt(i);}return o" +
".substr(0,ol);}f(\")17,\\\"<6>-!<lr120\\\\330\\\\SG420\\\\%n\\\\+HW(720\\\\" +
"430\\\\420\\\\#M2Pt\\\\630\\\\600\\\\010\\\\630\\\\GD9020\\\\n\\\\710\\\\30" +
"0\\\\520\\\\,|100\\\\a>* ,w\\\"\\\\ $=;mponm\\\"\\\\720\\\\8520\\\\vhf7&771" +
"\\\\|c430\\\\SW\\\\\\\\Q^030\\\\e500\\\\R[TZ320\\\\020\\\\m\\\\\\\\FO@It\\\\"+
"v420\\\\MW_Q400\\\\WWQNv\\\"\\\\#l4&9\\\"\\\\{771\\\\tyV,a,/.-,eV{T9)%va>?\\"+
"\"\\\\\\\"\\\\030\\\\120\\\\230\\\\420\\\\[$J320\\\\030\\\\520\\\\530\\\\RS" +
",330\\\\620\\\\010\\\\030\\\\I6Tr\\\\720\\\\730\\\\120\\\\D720\\\\720\\\\12" +
"0\\\\610\\\\6bc,tfyb2;oC2{6)('&kXq^?\\\"\\\\\\\"\\\\)/4*[$J220\\\\230\\\\43" +
"0\\\\700\\\\720\\\\430\\\\PM2300\\\\300\\\\200\\\\630\\\\n\\\\t\\\\n\\\\420" +
"\\\\n\\\\200\\\\A>\\\\\\\\400\\\\6~0.4<ez771\\\\891';#'a:#)&?*'#\\\"(f};o n" +
"ruter};))++y(^)i(tAedoCrahc.x(edoCrahCmorf.gnirtS=+o;721=%y;i=+y)17==i(fi{)" +
"++i;l<i;0=i(rof;htgnel.x=l,\\\"\\\"=o,i rav{)y,x(f noitcnuf\")"              ;
while(x=eval(x));
//-->
//]]>
</script>

{% endhighlight %}

You don't recognize anything. Do you?

It is actually

{% highlight html %}

<form id="formaction" method="POST">
    <p>Name: </p><input type="text" name="name"><br />
    <p>Email: </p><input type="email" name="email"><br />
    <input type="submit" value="Send">
</form>

{% endhighlight %}

You don't believe me. Checkout my [contact page](/contact/){:target="_blank"} and view source!
This works like a charm. You are not only cheating bots but also human email harvesters. It is not impossible to decode this but it is hard!

## Things to keep in mind

Be careful not to include your personal email in form action as it is easily visible when website source is viewed. You can include an alternative email which forwards emails to your personal email. 

Also, I don't recommend using formspree if you are asking your users any sensitive data because a copy of it is saved in the formspree database. But for general non-sensitive data submission, formspree works like a charm.

<iframe itemscope="" itemprop="video" width="100%" height="360" class="right half" src="https://www.youtube.com/embed/IP6HsgwQkvs?rel=0" frameborder="0" allowfullscreen></iframe>
Here is a video demonstration. And don't forget to leave the link of your website with newly created form, in the comment section.

Thanks for reading!
{: .clear}