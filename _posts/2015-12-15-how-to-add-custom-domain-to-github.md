---
title: How to add custom URL to a website hosted on Github?

---
![Configure custom domain to github website screenshot](/images/custom-domain-to-github.JPEG "ok")
Adding a custom domain is fairly easy compared to adding a subdomain to github hosted website. I will explain adding a domain to Github here.

You may have a website with a URL which looks similar to [sharu725.github.io](http://sharu725.github.io). But what you want is something like [webjeda.com](http://webjeda.com). So how to change it to a custom domain like webjeda.com?

First thing is that you should own a domain name. You can buy it from godaddy, namescheap or somewhere. If you already own one, then continue to Step 1.


##Step 1: Adding CNAME file to the gh-pages branch of your repository.

Go to the repository where you have hosted your website and click on 'New File'
![Adding a CNAME file to github screenshot](/images/adding-CNAME-file-to-github-repository.jpg)

Name the file as CNAME without any extension. Now, inside the CNAME file write your domain name you would like to host it as. I have written <pre>truejewls.in</pre>
![Adding domain name in CNAME file - github screenshot](/images/adding-domain-name-in-CNAME-file-github.jpeg)

Now commit your file to the repository. Make sure you are still in the gh-pages branch.


##Step 2: Adding A record in the DNS Zone Records
Login to the website where you purchased your website. Go to your domain and click on something similar to 'Manage Domain'
![Adding A record to DNS Zone Records - github screenshot](/images/Adding-A-record-to-DNS-github.jpeg)

Now go to **DNS Zone File** option
![Adding A record to DNS Zone Records - github screenshot](/images/Adding-A-record-to-DNS-github-2.jpeg)

Now click on **Add Record** and add an **A** record with following configuration

Host: @
Points to: 192.30.252.153 or 192.30.252.154

![Adding A record to DNS Zone Records - github screenshot](/images/Adding-A-record-to-DNS-github-3.jpeg)

Click on Finish and Save.

And that's about it. Do not rush though. It will take a while to propagate. So grab a cup of coffee. Once you are done, hit your URL :)



Here is a video demonstration
<iframe width="854" height="480" src="https://www.youtube.com/embed/hUChaN-VRIc?rel=0" frameborder="0" allowfullscreen></iframe>