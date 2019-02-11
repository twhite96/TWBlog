import React from 'react'

import { rhythm } from '../utils/typography'

class Footer extends React.Component {
  render() {
    return (
      <footer
        style={{
          marginTop: rhythm(2.5),
          paddingTop: rhythm(1),
        }}
      >
        <div style={{ float: 'right' }}>
          <a
            href="/rss.xml"
            target="_blank"
            rel="noopener noreferrer"
          >rss</a>
        </div>
        <a
          href="https://mobile.twitter.com/tiffanywhitedev"
          target="_blank"
          rel="noopener noreferrer"
        >
          twitter
        </a> &bull;{' '}
        <a
          href="https://github.com/twhite96"
          target="_blank"
          rel="noopener noreferrer"
        >
          github
        </a> &bull;{' '}
        <a
          href="https://stackoverflow.com/users/story/3800146"
          target="_blank"
          rel="noopener noreferrer">
          stackoverflow
        </a> &bull;{' '}
        <span> &copy; 2015 - {(new Date().getFullYear())} TRW Blog</span>
      </footer>
    )
  }
}

export default Footer
