import React from 'react';
import { graphql } from "gatsby";
import { ThemeContext } from "../layouts";
import Headline from "../components/Article/Headline";
import Seo from "../components/Seo";
import Article from "../components/Article";
import "./style.scss";
import { FaFlag, FaPlus } from "react-icons/fa";


const TimelinePage = props => {
  const {
    data: {
      site: {
        siteMetadata: { facebook }
      }
    }
  } = props;

  return (
    <React.Fragment>
      <ThemeContext.Consumer>
        {theme => (
          <Article theme={theme}>
            <header>
              <Headline title="Timeline of Professional Accomplishments" theme={theme} />
            </header>
            <p>
              Florin Pop has a timeline of his professional accomplishments on his blog. I decided
              I wanted to do the same. It's a way for me to see my progress and a way to keep my
              accountable and chugging along.
            </p>
          </Article>
        )}
      </ThemeContext.Consumer>
      <div class="timeline is-centered">
        <header class="timeline-header">
          <span class="tag is-medium is-primary">Start</span>
        </header>
        <div class="timeline-item is-primary">
          <div class="timeline-marker is-primary" />
          <div class="timeline-content">
            <p class="heading">January 2016</p>
            <p>Timeline content - Can include any HTML element</p>
          </div>
        </div>
        <div class="timeline-item is-warning">
          <div class="timeline-marker is-warning is-image is-32x32">
            <img src="https://bulma.io/images/placeholders/32x32.png" />
          </div>
          <div class="timeline-content">
            <p class="heading">February 2016</p>
            <p>Timeline content - Can include any HTML element</p>
          </div>
        </div>
        <header class="timeline-header">
          <span class="tag is-primary">2017</span>
        </header>
        <div class="timeline-item is-danger">
          <div class="timeline-marker is-danger is-icon">
            <FaFlag style={{ color: "white", fontSize: "16px" }} />
          </div>
          <div class="timeline-content">
            <p class="heading">March 2017</p>
            <p>Timeline content - Can include any HTML element</p>
          </div>
        </div>
        <header class="timeline-header">
          <span class="tag is-medium is-primary">End</span>
        </header>
      </div>
      <Seo facebook={facebook} />
    </React.Fragment>
  );
};



export default TimelinePage;

export const query = graphql`
  query TimelineQuery {
    site {
      siteMetadata {
        facebook {
          appId
        }
      }
    }
  }
`;
