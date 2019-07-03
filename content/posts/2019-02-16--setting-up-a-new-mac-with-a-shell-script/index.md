---
title: "Setting Up a New Mac with a Shell Script"
author: Tiffany White
spoiler: The concept of setting up a new Mac with a shell script in the programming community is not a new thing, and I found an article on automation by Kent C Dodds and it got me thinking about doing more of it.
date: "2019-02-16"
cover: 1.jpg
---

![](./1.jpg)
*Photo by Pankaj Patel on Unsplash*


The concept of setting up a new Mac with a shell script in the programming community is not a new thing, and I found an [article on automation by Kent C Dodds](https://blog.kentcdodds.com/an-argument-for-automation-fce8394c14e2) and it got me thinking about doing more of it.

Digging even further, I found that Kent has [a macos dotfile](https://github.com/kentcdodds/dotfiles/blob/master/.macos) to set up a new Mac.

This is one reason I love macOS, for stuff like this.

You can use `curl` to grab the dotfile from your repo without needed to stick it in Dropbox or head over to GitHub to download it with:

`curl https://raw.githubusercontent.com/<yourname>/dotfiles/master/.<your_script> | bash`

[Here is my implementation](https://github.com/twhite96/dot-files/blob/master/.macos).

---

### Sign Up for the Newsletter. No spam. I hate that, too.

<iframe scrolling="no" width="100% !important" height="220px !important" style="height: 220px !important; border:1px #ccc solid !important" class="lazyload" src="https://buttondown.email/tiffanywhite? as_embed=true"></iframe>

---
<a href="https://www.buymeacoffee.com/twhitedev" target="_blank"><img src="https://www.buymeacoffee.com/assets/img/custom_images/purple_img.png" alt="Buy Me A Coffee" style="height: auto !important;width: auto !important;" ></a>
