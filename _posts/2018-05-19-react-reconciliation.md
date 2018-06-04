---
ID: 3127
title: What Is React Reconciliation?
# react-reconciliation
author: Tiffany White
post_date: 2018-05-19 23:04:01
post_excerpt: >
  In order for React to be as fast as it
  is, it only needs to update the parts of
  the DOM that need it.
layout: post
published: true
tags:
  - DOM
  - react
  - reconciliation
categories:
  - Web Development
---

<img src="https://res.cloudinary.com/twhiteblog/image/upload/v1527285926/react_redux_trpz1i.jpg" alt="react_redux"/>

*Photo by Anthony DELANOIX on Unsplash*

In order for React to be as fast as it is, it only needs to update the parts of the DOM that need it. You really don't need to worry about doing this yourself, but understanding how `setState()` in React works could be beneficial.

## The `render()` Function

The `render()` function in React creates a tree of React elements. When you pass props down and those props update, the `render()` function returns a different tree of elements. React would need to figure out how to accomplish this, and, while doing so, make it efficient and fast.

## The Virtual DOM

This tree of elements is called the *virtual DOM* and when a component's state changes, React uses a diffing algorithm to compare both the DOM and virtual DOM. The virtual DOM will contain the new state of a component.

Take this code from CSS-Tricks:

```js
class App extends React.Component {
  
  state = {
    result: '',
    entry1: '',
    entry2: ''
  }

  handleEntry1 = (event) => {
    this.setState({entry1: event.target.value})
  }
  
  handleEntry2 = (event) => {
    this.setState({entry2: event.target.value})
  }

  handleAddition = (event) => {
    const firstInt = parseInt(this.state.entry1)
    const secondInt = parseInt(this.state.entry2)
    this.setState({result: firstInt + secondInt })
  }
  
  render() {
    const { entry1, entry2, result } = this.state
    return(
      <div>  
        <div>
          <p>Entry 1: { entry1 }</p>
          <p>Entry 2: { entry2 }</p>
          <p>Result: { result }</p>
        </div>
        <br />
        <div>
          Entry 1: 
          <input type='text' onChange={this.handleEntry1} />
        </div>
        <br />
        <div>
          Entry 2: 
          <input type='text' onChange={this.handleEntry2} />
        </div>
        <div>
          <button onClick={this.handleAddition} type='submit'>Add</button>
        </div>
      </div>
    )
  }
}
```

We set up the initial state to an object which will expect some input. This is the `App` component. When an input is captured in the entry field, React will create a new tree to which the *virtual DOM* and will contain the new state for `entry1`. React will look at both the virtual DOM and the browser DOM and with comparison determine what the differences are and update only the different element in the tree.

A new tree/virtual DOM is created each time state changes in the `App` component.

## Mounting/Unmounting on State Change

When state in a component changes, React will unmount the component and tear the whole tree down and then builds a new one from scratch. Every node in this tree will be destroyed.

To get an example of this, check out this pen I forked below:

<p data-height="467" data-theme-id="22729" data-slug-hash="WJPeME" data-default-tab="js,result" data-user="twhite96" data-embed-version="2" data-pen-title:="reconciliation-2 Pen" class="codepen">See the Pen <a href="https://codepen.io/twhite96/pen/WJPeME/">reconciliation-2 Pen</a> by Tiffany White (<a href="https://codepen.io/twhite96">@twhite96</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>


## Why This Matters

The way React handles state and state changes makes it really fast. You'll need to be careful to adhere to its heuristics and conventions or else performance will degrade. With that said, it is pretty easy to build a performant app in React.

## Wrapping Things Up

There are a few things I didn't go over in this article but I suggest you read the [React docs on reconciliation](https://reactjs.org/docs/reconciliation.html).

---

If you like the blog, you'll *love* the newsletter: little letters *to you*.

<iframe
scrolling="no"
style="width:100%!important;height:220px;border:1px #ccc solid !important"
src="https://buttondown.email/tiffanywhite?as_embed=true"
></iframe>
