---
ID: 2459
title: Productivity for Devs
# productivity-devs
author: Tiffany White
post_date: 2017-09-30 19:30:06
post_excerpt: 'While perusing The Practical Dev for new posts, I came across a post that intrigued me: Instant +100% command line productivity boost. Productivity for devs is something I’ve been meaning to write about. Now I have the impetus to do so.'
layout: post
link: >
  https://tiffanywhite.tech/productivity-devs/
published: true
tags:
  - iterm
  - oh-my-zsh
  - vscode
categories:
  - Productivity for Devs
---


While perusing [The Practical Dev](https://dev.to) for new posts, I came across a post that intrigued me: [Instant +100% command line productivity boost](https://dev.to/sobolevn/instant-100-command-line-productivity-boost). Productivity for devs is something I’ve been meaning to write about. Now I have the impetus to do so.

I thought installing *oh-my-szh* and using *aliases* made me a badass. Unfortunately for me, that wasn’t the case.

This post is going to talk about productivity for developers, much like on the [Syntax.fm show on the topic](https://syntax.fm/show/011/our-favourite-productivity-hacks).

## Getting Sh*t Done

I find, first and foremost, that a great task manager is essential to remembering what you need to do. I use [OmniFocus](https://www.omnigroup.com/applications/omnifocus/) for my main task manager, on all my devices [^1]. OmniFocus may seem rigid in its attempt at GTD but it is pretty flexible: use what you want.

<a href="https://tiffanywhite.tech/wp-content/uploads/2017/09/Screenshot2017-09-30_04-18-13_PM.jpg"><img class="aligncenter wp-image-2454" src="https://tiffanywhite.tech/wp-content/uploads/2017/09/Screenshot2017-09-30_04-18-13_PM.jpg" alt="" width="1318" height="900" /></a>

### Trello for Project Management

I use Trello to manage my projects and it does a fantastic job at that. Needing a high level and visual overview of what I need to get done, I reach for the Trello Mac app every time.

## Dev Tools

For my shell I use [iTerm 2](https://iterm2.com/) which is in its 3rd iteration [^2] and `zsh` shell.

[Wes Bos](https://wesbos.com/) has a [great theme](https://github.com/wesbos/Cobalt2-iterm) for *all the things*, a fork of the Sublime Text Cobalt2 theme and it is what I am using on iTerm as well as [Visual Studio Code](https://code.visualstudio.com/) [^3] which is faster than Atom though it lacks multiple projects in one window.

<a href="https://tiffanywhite.tech/wp-content/uploads/2017/09/Screenshot2017-09-30_04-41-56_PM.jpg"><img class="aligncenter wp-image-2453" src="https://tiffanywhite.tech/wp-content/uploads/2017/09/Screenshot2017-09-30_04-41-56_PM.jpg" alt="" width="1260" height="808" /></a>

With the theme and the [powerline fonts](https://github.com/powerline/fonts) which show your git statuses and which directory you’re in, it makes for a great looking terminal.

<a href="https://tiffanywhite.tech/wp-content/uploads/2017/09/Screenshot2017-09-30_04-39-30_PM.jpg"><img class="aligncenter wp-image-2452" src="https://tiffanywhite.tech/wp-content/uploads/2017/09/Screenshot2017-09-30_04-39-30_PM.jpg" alt="" width="1010" height="658" /></a>

iTerm has the ability to have separate profiles for whatever you want. For instance, I have a Check Yo Self profile that I can switch to whenever I want to work on that particular app.

<a href="https://tiffanywhite.tech/wp-content/uploads/2017/09/Screenshot2017-09-30_04-37-52_PM.jpg"><img class="aligncenter wp-image-2455" src="https://tiffanywhite.tech/wp-content/uploads/2017/09/Screenshot2017-09-30_04-37-52_PM.jpg" alt="" width="958" height="590" /></a>

### Command Line Tools

#### Zsh Syntax Highlighting

Knowing if you have a typo in an alias or command is crucial to not screwing everything up. One of the ways to tell what you're typing is by using [zsh-syntax-highlighting](https://github.com/zsh-users/zsh-syntax-highlighting). You can customize the color of the highlights by looking at the [highlighter docs](https://github.com/zsh-users/zsh-syntax-highlighting/blob/master/docs/highlighters.md).

#### Z - Jump Around

[z](https://github.com/rupa/z/) is a utility that allows you to jump to different directories by typing `z` and then the directory. You’ll have to `cd` around in directories for a bit to “train” it but once you do, it’s pretty easy to skip around in directories. It is a “frecent” tool: frequent and recent directories.

#### Exa: ls replacement

Another cool command line utility is [exa](https://github.com/ogham/exa), which replaces `ls` with some nifty features like syntax highlighting and a ton of other commands. Just type `exa` and it will list the contents of your directory. You can get directory permissions, print each item on one line with the `-1` flag, and much more.

<a href="https://tiffanywhite.tech/wp-content/uploads/2017/09/Screenshot2017-09-30_06-28-20_PM.jpg"><img class="aligncenter wp-image-2456" src="https://tiffanywhite.tech/wp-content/uploads/2017/09/Screenshot2017-09-30_06-28-20_PM.jpg" alt="" width="1031" height="649" /></a>

## Miscellaneous Tools

### Alfred

I use [Alfred app](https://www.alfredapp.com/) for navigating pretty much everything. The workflows make it, where I can create gists out of files, search Stack Overflow, add Trello cards to different boards, and make OmniFocus tasks out of Chrome tabs, and much more.

[caption id="attachment_2457" align="aligncenter" width="1123"]<a href="https://tiffanywhite.tech/wp-content/uploads/2017/09/Product_hunt.jpeg"><img class="wp-image-2457" src="https://tiffanywhite.tech/wp-content/uploads/2017/09/Product_hunt.jpeg" alt="Getting things done or...wasting time?" width="1123" height="631" /></a> Getting things done or...wasting time?[/caption]

I also use Wes Bos’s [Cobalt2 Alfred theme](https://github.com/wesbos/Cobalt2-Alfred-Theme) for this.

### Go Fucking Work

[Go Fucking Work](https://www.gofuckingwork.com/) is a [Chrome extension](https://chrome.google.com/webstore/detail/go-fucking-work/hibmkkpfegfiinilnlabbfnjcopdiiig). It’s similar to Stay Focused but a lot harsher…as the name suggests.

<a href="https://tiffanywhite.tech/wp-content/uploads/2017/09/Screenshot2017-09-30_06-36-55_PM.jpg"><img class="aligncenter size-large wp-image-2461" src="https://tiffanywhite.tech/wp-content/uploads/2017/09/Screenshot2017-09-30_06-36-55_PM-1024x586.jpg" alt="" width="1024" height="586" /></a>

I swear like a sailor when I am around people I know and so I appreciate this extension for what it is and its customizability. There are alternatives of course, if sweary things aren’t your jam.

[^1]: Currently [Omnigroup only makes Apple apps](https://support.omnigroup.com/windows-or-android/) and don’t have a web interface for OmniFocus. A web interface may be coming soon. On Android, there is an app that interfaces with OmniFocus using the Omnigroup’s API called [Focus GTD](https://play.google.com/store/apps/details?id=com.burgstaller.android.focusgtd&amp;hl=en).
[^2]: Shouldn’t it be called *iTerm 3*?



While perusing [The Practical Dev](https://dev.to) for new posts, I came across a post that intrigued me: [Instant +100% command line productivity boost](https://dev.to/sobolevn/instant-100-command-line-productivity-boost). Productivity for devs is something I’ve been meaning to write about. Now I have the impetus to do so.

I thought installing *oh-my-szh* and using *aliases* made me a badass. Unfortunately for me, that wasn’t the case.

This post is going to talk about productivity for developers, much like on the [Syntax.fm show on the topic](https://syntax.fm/show/011/our-favourite-productivity-hacks).

## Getting Sh*t Done

I find, first and foremost, that a great task manager is essential to remembering what you need to do. I use [OmniFocus](https://www.omnigroup.com/applications/omnifocus/) for my main task manager, on all my devices [^1]. OmniFocus may seem rigid in its attempt at GTD but it is pretty flexible: use what you want.

<a href="https://tiffanywhite.tech/wp-content/uploads/2017/09/Screenshot2017-09-30_04-18-13_PM.jpg"><img class="aligncenter wp-image-2454" src="https://tiffanywhite.tech/wp-content/uploads/2017/09/Screenshot2017-09-30_04-18-13_PM.jpg" alt="" width="1318" height="900" /></a>

### Trello for Project Management

I use Trello to manage my projects and it does a fantastic job at that. Needing a high level and visual overview of what I need to get done, I reach for the Trello Mac app every time.

## Dev Tools

For my shell I use [iTerm 2](https://iterm2.com/) which is in its 3rd iteration [^2] and `zsh` shell.

[Wes Bos](https://wesbos.com/) has a [great theme](https://github.com/wesbos/Cobalt2-iterm) for *all the things*, a fork of the Sublime Text Cobalt2 theme and it is what I am using on iTerm as well as [Visual Studio Code](https://code.visualstudio.com/) [^3] which is faster than Atom though it lacks multiple projects in one window.

<a href="https://tiffanywhite.tech/wp-content/uploads/2017/09/Screenshot2017-09-30_04-41-56_PM.jpg"><img class="aligncenter wp-image-2453" src="https://tiffanywhite.tech/wp-content/uploads/2017/09/Screenshot2017-09-30_04-41-56_PM.jpg" alt="" width="1260" height="808" /></a>

With the theme and the [powerline fonts](https://github.com/powerline/fonts) which show your git statuses and which directory you’re in, it makes for a great looking terminal.

<a href="https://tiffanywhite.tech/wp-content/uploads/2017/09/Screenshot2017-09-30_04-39-30_PM.jpg"><img class="aligncenter wp-image-2452" src="https://tiffanywhite.tech/wp-content/uploads/2017/09/Screenshot2017-09-30_04-39-30_PM.jpg" alt="" width="1010" height="658" /></a>

iTerm has the ability to have separate profiles for whatever you want. For instance, I have a Check Yo Self profile that I can switch to whenever I want to work on that particular app.

<a href="https://tiffanywhite.tech/wp-content/uploads/2017/09/Screenshot2017-09-30_04-37-52_PM.jpg"><img class="aligncenter wp-image-2455" src="https://tiffanywhite.tech/wp-content/uploads/2017/09/Screenshot2017-09-30_04-37-52_PM.jpg" alt="" width="958" height="590" /></a>

### Command Line Tools

#### Zsh Syntax Highlighting

Knowing if you have a typo in an alias or command is crucial to not screwing everything up. One of the ways to tell what you're typing is by using [zsh-syntax-highlighting](https://github.com/zsh-users/zsh-syntax-highlighting). You can customize the color of the highlights by looking at the [highlighter docs](https://github.com/zsh-users/zsh-syntax-highlighting/blob/master/docs/highlighters.md).

#### Z - Jump Around

[z](https://github.com/rupa/z/) is a utility that allows you to jump to different directories by typing `z` and then the directory. You’ll have to `cd` around in directories for a bit to “train” it but once you do, it’s pretty easy to skip around in directories. It is a “frecent” tool: frequent and recent directories.

#### Exa: ls replacement

Another cool command line utility is [exa](https://github.com/ogham/exa), which replaces `ls` with some nifty features like syntax highlighting and a ton of other commands. Just type `exa` and it will list the contents of your directory. You can get directory permissions, print each item on one line with the `-1` flag, and much more.

<a href="https://tiffanywhite.tech/wp-content/uploads/2017/09/Screenshot2017-09-30_06-28-20_PM.jpg"><img class="aligncenter wp-image-2456" src="https://tiffanywhite.tech/wp-content/uploads/2017/09/Screenshot2017-09-30_06-28-20_PM.jpg" alt="" width="1031" height="649" /></a>

## Miscellaneous Tools

### Alfred

I use [Alfred app](https://www.alfredapp.com/) for navigating pretty much everything. The workflows make it, where I can create gists out of files, search Stack Overflow, add Trello cards to different boards, and make OmniFocus tasks out of Chrome tabs, and much more.

[caption id="attachment_2457" align="aligncenter" width="1123"]<a href="https://tiffanywhite.tech/wp-content/uploads/2017/09/Product_hunt.jpeg"><img class="wp-image-2457" src="https://tiffanywhite.tech/wp-content/uploads/2017/09/Product_hunt.jpeg" alt="Getting things done or...wasting time?" width="1123" height="631" /></a> Getting things done or...wasting time?[/caption]

I also use Wes Bos’s [Cobalt2 Alfred theme](https://github.com/wesbos/Cobalt2-Alfred-Theme) for this.

### Go Fucking Work

[Go Fucking Work](https://www.gofuckingwork.com/) is a [Chrome extension](https://chrome.google.com/webstore/detail/go-fucking-work/hibmkkpfegfiinilnlabbfnjcopdiiig). It’s similar to Stay Focused but a lot harsher…as the name suggests.

<a href="https://tiffanywhite.tech/wp-content/uploads/2017/09/Screenshot2017-09-30_06-36-55_PM.jpg"><img class="aligncenter size-large wp-image-2461" src="https://tiffanywhite.tech/wp-content/uploads/2017/09/Screenshot2017-09-30_06-36-55_PM-1024x586.jpg" alt="" width="1024" height="586" /></a>

I swear like a sailor when I am around people I know and so I appreciate this extension for what it is and its customizability. There are alternatives of course, if sweary things aren’t your jam.

[^1]: Currently [Omnigroup only makes Apple apps](https://support.omnigroup.com/windows-or-android/) and don’t have a web interface for OmniFocus. A web interface may be coming soon. On Android, there is an app that interfaces with OmniFocus using the Omnigroup’s API called [Focus GTD](https://play.google.com/store/apps/details?id=com.burgstaller.android.focusgtd&amp;hl=en).
[^2]: Shouldn’t it be called *iTerm 3*?




[^3]: This is the new hotness. I tried it when it first came out and used it exclusively but went back to Atom because of the plugins. Everyone seems to be talking about it now so I gave it another shot.