import React from 'react'

// Import typefaces
// import 'typeface-pt-sans'
// import 'typeface-open-sans'
import 'typeface-montserrat'

import profilePic from './tiffany-white-front-end-engineer.png'
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
          Blog of <a href="https://mobile.twitter.com/tiffanywhitedev">Tiffany White</a>.
          {' '}
          Thoughts on React & web development.
        </p>
      </div>
    )
  }
}

export default Bio
