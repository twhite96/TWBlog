import React from 'react'

import { rhythm } from '../utils/typography'
import ScrollButton from './ScrollButton';

class Footer extends React.Component {
  render() {
    return (
      <footer
        style={{
          marginTop: rhythm(2.5),
          paddingTop: rhythm(1),
        }}
      >
        <div style={{ float: 'right', display:'inline', width: 49 }}>
          <a href="/rss.xml" target="_blank" rel="noopener noreferrer">
            rss
          </a>
        </div>
        <span style={{ float: 'right', display:'inline', width: 49 }}>
          <ScrollButton />
        </span>
        <a
          href="https://mobile.twitter.com/tiffanywhitedev"
          target="_blank"
          rel="noopener noreferrer"
        >
          twitter
        </a>{' '}
        &bull;{' '}
        <a
          href="https://github.com/twhite96"
          target="_blank"
          rel="noopener noreferrer"
        >
          github
        </a>{' '}
        &bull;{' '}
        <a
          href="https://thatmacnerd.netlify.com/uses/"
          target="_blank"
          rel="noopener noreferrer"
        >
          /uses
        </a>{' '}
        &bull;{' '}
        <span> &copy; 2015 - {new Date().getFullYear()} TRW Blog </span>
      </footer>
    );
  }
}

export default Footer
