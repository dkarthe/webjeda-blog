---
title: How to make a form in Jekyll website
desc: Normal forms will not work on Jekyll blog or Github pages website. You have to use something that works for a static website. I have given a simple solution for such problems.
kewords: form in jekyll, form in jekyll blog, form in a static website, formspree
author: sharathdt
---

<img alt="How to make a form in Jekyll website" title="How to make a form in Jekyll website" itemprop="thumbnailUrl" src="/images/how-to-add-form-option-for-jekyll-websites.jpg">

When I moved one of my blogs from WordPress to Jekyll, I faced a big problem. How to add a form to jekyll website which is static?! The backbone of a forms is the ```php``` code which takes in the data and sends it to respective email address.

But Jekyll blogs and websites hosted on github being static, cannot execute ```php``` files. Wait.! Then how do I make a working form in Jekyll blog?



##Solution
There are few solutions.

1. [Formspree](http://formspree.io)

2. [SimpleForm](https://getsimpleform.com/)

I'm going to explain the simplest one among the two - Formspree. 

Formspree has a restriction 1000 entries/month. That was more than enough for a starter like myself. You can choose Gold membership for more options and have access to database.



##Step 1: Create a form

Let's create a simple form and make it work. I will have only two options for user input - Name and Email. Copy and paste the below form code inside the body tag (or wherever you want the form to be).

{% highlight html linenos %}

<form action="" method="">
<p>Name: </p><input type="text" name="name"><br />
<p>Email: </p><input type="email" name="email"><br />
<input type="submit" value="Send">
</form>
{% endhighlight %}



So the output should look something like this.

![Sample Jekyll form](/images/form-sample-screenshot.JPG)

##Step2: Make it work

If you see the code for the form, **action** and **method** are empty. Formspree suggests you to add an action and method in this format.
{% highlight html linenos %}

<form action="//formspree.io/your@email.com" method="POST">
<p>Name: </p><input type="text" name="name"><br />
<p>Email: </p><input type="email" name="email"><br />
<input type="submit" value="Send">
</form>

{% endhighlight %}



Whenever a user submits his name and email, the data will be sent to formspree.io website and then formspree sends it back to your email with the details. 

Try to enter something and see if you recieve the mail. For the first time you have to verify your email address. Then on you can recieve mails without any hassle.

This is the brief process of making a form in github pages website. What if you want to redirect users to a custom web page once they are done submitting the form on Jekyll blog or github pages website?

##Step 3: Custom thank-you page 
After the submission, users are redirected to a formspree thank you page by default. But if you want it to be your own custom thank you page then you can do so adding this code.

{% highlight html linenos %}
<input type="hidden" name="_next" value="//path/thanks.html" />
{% endhighlight %}

I have a working example here - [nallikayi contact](https://articles.nallikayi.com/contact-us.html)

Make sure you create a **thank you** page in Github-pages with the name ```thanks.html```. 



##Things to keep in mind

Be careful not to include your personal email in form action as it is easily visible when website source is viewed. You can include an alternative email which forwards mails to your personal email. 

Also I don't recommend using formspree if you are asking your users any sensitive data bacause a copy of it is saved in formspree database. But for for general non-sensitive data submission, formspree works like charm.

Here is a video demonstration
<iframe itemscope="" itemprop="video" width="100%" height="360" src="https://www.youtube.com/embed/IP6HsgwQkvs?rel=0" frameborder="0" allowfullscreen></iframe>



And don't forget to leave the link of your website with newly created form, in the comment section.

Thanks for reading!