import React from 'react'

// Import typefaces
import 'typeface-pt-sans'
import 'typeface-open-sans'

import profilePic from './profile3.png'
import { rhythm } from '../utils/typography'

class Bio extends React.Component {
  render() {
    return (
      <div
        style={{
          display: 'flex',
          marginBottom: rhythm(2.5),
        }}
      >
        <img
          src={profilePic}
          alt={`Tiffany White`}
          style={{
            marginRight: rhythm(1 / 2),
            marginBottom: 0,
            width: rhythm(2),
            height: rhythm(2),
          }}
        />
        <p style={{ maxWidth: 310 }}>
          Technical Blog by <a href="https://mobile.twitter.com/TiffanyW_412">Tiffany White</a>.
          {' '}
          I write about code to understand how to code.
        </p>
      </div>
    )
  }
}

export default Bio
