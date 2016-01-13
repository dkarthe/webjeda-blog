---
title: How to sync files and folders with Github Pages
desc: Creating files inside Github repository is easy but what if you have lot of files and folders to upload to Github! Here is a guide to do just that.
kewords: upload folders to github, sync files and folders with github
---

![How to sync folders with Github](/images/sync-local-folders-with-github.jpg)

In my initial days of using Github I used to see repositories filled with folders, files and what not. I used to wonder how the hell these people are uploading folders to Github! 

It is only after some tutorials I realized that it is indeed very easy. The day I found out how to upload folders was one of the happiest days because I knew one thing for sure, uploading files = uploading a complete website :)

That is exactly what I'm going to do here. This one is going to be a lengthy post, so grab a cup of coffee!

I'm going to create this website (or at least host it) - [Hyperspace](http://redgadget.github.io/MyFirstWebsite/)


Download these things before we start

1. **Link 1:** [Github Desktop](https://desktop.github.com/)


2. **Link 2:** [HTML5 sample website - Hyperspace](http://html5up.net/hyperspace/download)


##Step 1: Create a repository and make a gh-pages branch

Login to your Github account and create a repository. Name it anything you feel like. I'm calling it **MyFirstWebsite**. Commit once you are done naming it. Now create a **gh-pages** branch in your repository.

Refer to [How to create and host a website](http://blog.webjeda.com/how-to-create-and-host-a-website-on-github-pages/) if you are not sure how to create a branch.

Remember - project files can only be hosted using gh-pages branch.


##Step 2: Install Github Desktop

I guess you are smart enought to install a software. Once you are done installing, open the app. You should see something like this.

![Github Desktop screenshot](/images/sync-folders-with-github-desktop-tutorial-screenshot.jpg)

##Step 3: Set up Github account in Github Desktop

Click on the gear icon on the top-right corner and hit **Options...**

![Github Desktop Options](/images/github-desktop-settings.jpg)

Now you should see an option with name **Accounts**. Click on **Add account**.

![Github Desktop Account setup](/images/github-desktop-account-setup.jpg)

Enter your Github credentials and hit Login (choose Github Enterprise if you have an Enterprise account).


##Step 3: Clone the repository you just created

Click on the **+** icon on the left-top corner of Github Desktop. You should see these options.

![Github Desktop clone screenshot](/images/clone-repository-to-local-folder-github-desktop.jpg)

Click on clone. Github should list all your repository available for cloning. Select the repository you just created. In my case - *MyFirstWebsite**. Then hit the checkmark below which says **Clone MyFirstWebsite**    

![Github Desktop clone screenshot](/images/clone-repository-to-local-folder-github-desktop-2.jpg)

You may have to choose a local folder where you want the repository to be downloaded. I usually choose **Documents** folder. Select a folder, click on Ok and wait for the app to sync your repository.

Now change the branch to **gh-pages** as shown in the screenshot.

![Change branch in Github Desktop](/images/change-branch-in-github-desktop.jpg)

Now right click on the repository listed on the left side and choose **Open in Explorer**

It will open an Explorer window with just a ```.git``` folder inside it. 


Remember: Whatever changes you do inside this folder will be reflected in the app.

![Cloned repository in local folder](/images/cloned-repository-inside-local-folder.jpg)

##Step 4: Copy complete website in local repository

If you have downloaded the file from **Link 1** then open it and extract the contents to a folder. Copy all these files and folders into our locally synced repository.

![Copy complete website to github repository](/images/copy-complete-website-to-repository.jpg)

##Step 5: Sync!

Come back to the Github Desktop app and click on **Changes** tab. You should see all the changes you just did, all the files and folders you added etc., Once you are satisfied looking at it, hit commit and wait for the app to sync it with remote (but your) Github repository.

![Commit changes to Github Desktop](/images/commit-changes-to-github-desktop.jpg)


##Step 6: Your website must be hosted by now.

Now login to your Github account to see whether your website has been hosted. Navigate to your repository that you just synced. Change the branch to gh-pages and see if the files you synced are present in that branch.

![Successfully synced files and folders with Github](/images/successfully-synced-folders-in-github.jpg)

Now click on settings and look for **Github Pages** section where you will see a green check mark with a ugly looking URL next to it. Hit that URL. You should see your website hosted!

![Hosting a complete website on Github Pages](/images/hosting-a-complete-website-on-github-pages.jpg)

Here is the final URL: [http://redgadget.github.io/MyFirstWebsite/](http://redgadget.github.io/MyFirstWebsite/)

Success!!

###Want to change the URL to something not ugly?

Read: [How to add custom domain to websites hosted on Github Pages](https://blog.webjeda.com/how-to-add-custom-domain-to-github)

If you are stuck in any of these steps, please leave a comment. I'll try to help.

Thanks for reading! For more elaborated tutorials like this one, [subscribe!](http://eepurl.com/bMx0pz)