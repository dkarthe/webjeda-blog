---
title: How to add top bar to websites
desc: Top bars are beautiful looking lines at the top of a website. See how I have implemented it in my websites.
keyword: top bar, website top line
---

![How to add colored top bar to website](/images/top-bar-on-websites.jpg)

As you can see in the screenshot, in one of my websites [nallikayi](https://articles.nallikayi.com){:rel='dofollow'}, there is a top green bar for no reason. Though the website is minimal, a colored top bar would not do much harm. Instead, it increases the beauty of your website (if used correctly).

##Why top bar?

I started considering top bar only after I saw the designers from [Quora](https://www.quora.com) started using it. And my blog WebJeda had a minimal theme. So I thought why not try it. 

I remember YouTube using a red top bar to show how the progress of page loading. That was only for a while and for some reason they stopped it. It was actually a great idea to show the users how much page has been loaded. By the time of writing this blog <a rel="nofollow" href="https://www.freecharge.in" alt="Freecharge">Freecharge</a> is using the top bar as a progress indicator.

If you have seen Chrome browser on android, they still use this.

![Android chrome browser top loading bar](/images/android-chrome-browser-using-top-bar-screenshot.jpg)

So here it is giving some valuable information. But what I want is just a constant colored top bar to enhance the visual appearance. So this is very easy and can be done with a single line of code!

##what is the code for top bar!

Just copy these lines to your css file and you'll have a top bar! So far we have called this top bar but in reality it is the top border of your body. Normally it is invisible, we are just giving it a size and color. Pretty neat. Isn't it? There is not a single extra ```div``` used. So there is no load on your website!


{% highlight css linenos %}
body {
  border-top: 0.1em solid #37ba8a;
}
{% endhighlight %}


So that's all there is! Use ```px``` instead of ```em``` if you like. I use ```em``` as I have configured it to adjust to the screen-size.  Now change the color according to your theme and don't make it very contrasting, say a blue top bar on red background. That is not very pleasing to eyes. And also make sure the body has no margin. Otherwise you may not get the top bar where you wanted.

Though it is a simple thing, it gives a huge impact on the look and aesthetics.
Check the difference between these two websites I made for my mom.

No top bar: [No top bar](http://webjeda.com/No-top-bar/){:rel='nofollow'} 


Top bar: [Top bar](http://webjeda.com/top-bar/){:rel='nofollow'}


Ok, so do implement this on your website and let me know how it went.

And don't forget to leave the link of your website with newly created top bar, in the comment section.

Thanks for reading!