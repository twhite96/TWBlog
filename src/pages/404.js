import React from 'react'
import Layout from '../components/Layout'

class NotFoundPage extends React.Component {
  render() {
    return (
      <Layout location={this.props.location}>
        <h1>Not Found</h1>
        <p>I haven’t written this post yet. Will you help me write it?</p>
        <iframe
          width="100%"
          height="315"
          src="https://www.youtube.com/embed/E2tWC8k-UzI"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullscreen
        />
        <p>Here is some classic post-hardcore from At The Drive-in for you to enjoy. Or not. 🤷🏾‍♀️ </p>
      </Layout>
    )
  }
}

export default NotFoundPage
