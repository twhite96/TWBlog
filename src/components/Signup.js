import React from 'react'

import './Signup.css'

class Signup extends React.Component {
  render() {
    return (
      <form
        action="https://buttondown.email/api/emails/embed-subscribe/tiffanywhite"
        method="post"
        target="popupwindow"
        onsubmit="window.open('https://buttondown.email/tiffanywhite', 'popupwindow')"
        class="embeddable-buttondown-form"
      >
        <label for="bd-email">Enter your email</label>
        <input type="email" name="email" id="bd-email" />
        <input type="hidden" value="1" name="embed"/>
        <input type="submit" value="Subscribe" />
        <p>
          <a href="https://buttondown.email" target="_blank">Powered by Buttondown.</a>
        </p>
      </form>
    )
  }
}

export default Signup
