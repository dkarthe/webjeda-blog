---
title: How to create a subscribe form for Jekyll?
desc: Subscribe form for Jekyll was not available because all forms tend to work with php code to send emails. But with this method we can add a subscribe form for Jekyll websites which works out of the box.
keywords: 
author: sharathdt
tags: Jekyll
image: jekyll-subscribe-form.jpg
layout: post
---

<img alt="jekyll subscribe form" title="subscribe form Jekyll" itemprop="thumbnailUrl" class="left half noborder" src="/thumbs/jekyll-subscribe-form.jpg">

<i class="fa fa-quote-left fa-3x fa-pull-left fa-border"></i>Subscribe form for Jekyll was not available because all forms tend to work with php code to send emails. But with this method we can add a subscribe form for Jekyll websites which works out of the box.
{: .intro}

## Why use a subscribe form?
{: .clear}
Subscribe form is used basically to collect visitors' emails to provide them an update of new articles every time you post a new one. Also, a good way to get some initial traffic to a new post. 

Many bloggers use the mailing list for affiliate marketing. I don't think it is a bad thing. If a user is interested in the stuff blogger is selling then it is a win-win. 

WordPress has too many plugins that can do the job without breaking a sweat. But, after moving all my blogs from WordPress to Jekyll I had to find an alternative for subscribe forms.

What I'm showing here is an email collector. So it just collects users' emails. I think that is what a basic subscriber form does. You can also setup an auto-reply option.

But before collecting emails you should have an email id. It is better if you have a domain email. If you don't have one, then get a [free domain email using zoho](/free-domain-email-zoho/){:target="_blank"}.


## How to make a subscribe form on Jekyll blog?

We are using a free service called [**SimpleForm**](https://getsimpleform.com/){:rel='nofollow'}{:target="_blank"} to create our form. SimpleForm is a service similar to Formspree which I discussed in [How to make a contact form in Jekyll](/how-to-add-form-option-to-jekyll-websites/){:target="_blank"}

I'm not using Formspree because it doesn't work on all pages. Formspree is URL specific. If you want your subscribe form to be on all the pages(which is usually the case), SimpleForm has to be the logical choice.

### Step 1: Get an API Token from SimpleForm
![Jekyll subscribe form](/images/jekyll-subscribe-form-simpleform.jpg){: .full}

Enter the email address you want to use in the input field and click on **Send me a token**

You should receive an email with the token similar to this one
{% highlight css %}
Your form api token is c7b404f97b2e45f982ffed4995bf42af
{% endhighlight %}

{% include adsense-inside-post.html %}

### Step 2: Create a form
![Jekyll subscribe form](/images/jekyll-subscribe-form.jpg)
{: .right}

Now create a form in Jekyll with only email input in it and change the action according to SimpleForm documentations. You can create it in a separate page so that users will go to that page and subscribe or you can create it in the default layout so that the form is available on all pages.

{% highlight html %}
<form action="https://getsimpleform.com/messages?form_api_token=c7b404f97b2e45f982ffed4995bf42af" method="post">
    <li class="contact-li">
        <input type="email" placeholder="Your email" id="email"/>
        <input type="submit" value="Subscribe" id="submit"/>
    </li>
</form>
{% endhighlight %}


### Step 3: Create a success page
Once the user enters his email in the form and hits subscribe, he should be shown a message that he has successfully subscribed to the updates. Create a thank you page in Jekyll and redirect users to that page after successful submission.

**Form with redirection**
{% highlight html %}
<form action="https://getsimpleform.com/messages?form_api_token=c7b404f97b2e45f982ffed4995bf42af" method="post">
  <!-- the redirect_to is optional, the form will redirect to the referrer on submission -->
    <li class="contact-li">
        <input type="email" placeholder="Your email" id="email"/>
        <input type="submit" value="Subscribe" id="submit"/>
    </li>
         
   <!-- the redirect_to is optional, the form will redirect to the referrer on submission -->
    <input type="hidden" name='redirect_to' value="/path/to/thank-you.html"/> 
         
</form>
{% endhighlight %}


**Typical thank you page**
{% highlight html %}
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>Thank you</title>
    </head>
    <body>
        <h1>Thank you. Your entry has reached us!</h1>
    </body>
</html>
{% endhighlight %}


### Step 4: Success!
That's it. Now collect emails and make a list. I use mail-chimp and I send an update to the list using campaign every time I make a new post.

Here is a working example: <a href="http://redgadget.github.io/form-jekyll/" target="_blank" rel="nofollow">Sample Subscribe Form</a>

I hope that helped. I'm using feed-burner for subscriptions. I will make a post on how to do that as well. Don't forget to subscribe to my updates!

Thanks for reading!

