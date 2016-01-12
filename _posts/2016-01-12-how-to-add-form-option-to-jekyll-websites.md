---
title: How to make a form in Jekyll website

---

![How to make a form in Jekyll website](/images/how-to-add-form-option-for-jekyll-websites.jpg)

When I moved one of my blogs from WordPress to Jekyll, I faced a big problem. How to add a form to jekyll website which is static?! The backbone of a forms is the ```php``` code which takes in the data and sends it to respective email address.

But Jekyll websites and blogs being static, cannot execute 'php' files. Wait.! Then how do I make a working form in Jekyll?

##Solution
There are few solutions.

1. [Formspree](http://formspree.io)

2. [SimpleForm](https://getsimpleform.com/)

I'm going to explain the simplest one among the two - Formspree.

##Step 1: Create a form

Let's create a simple form and make it work. I will have only two options for user input - Name and Email. Copy and paste the below form code inside the body tag (or whereever you want the form to be).

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

##Step 3: Custom thank-you page 
After the submission, users are redirected to a formspree thank you page by default. But if you want it to be your own custom thank you page then you can do so adding this code.

{% highlight html linenos %}
<input type="hidden" name="_next" value="//path/thanks.html" />
{% endhighlight %}



I have a working example here - [nallikayi contact](https://articles.nallikayi.com/contact-us.html)

##Things to keep in mind

Be careful not to include your personal email in form action as it is easily visible when website source is viewed. You can include an alternative email which forwards mails to your personal email. 

Also I don't recommend using formspree if you are asking your users any sensitive data bacause a copy of it is saved in formspree database. But for for general non-sensitive data submission, formspree works like charm.

Here is a video demonstration
<iframe width="100%" height="360" src="https://www.youtube.com/embed/IP6HsgwQkvs?rel=0" frameborder="0" allowfullscreen></iframe>



And don't forget to leave the link of your website with newly created form, in the comment section.

Thanks for reading!