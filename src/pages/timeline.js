import React from 'react';
import { graphql } from "gatsby";
import { ThemeContext } from "../layouts";
import Headline from "../components/Article/Headline";
import Seo from "../components/Seo";
import Article from "../components/Article";
import "./style.scss";
import { FaFlag, FaPlus } from "react-icons/fa";
import coding from '../images/timeline-images/coding.png'
import pitt from '../images/timeline-images/pitt.png';
import dev from '../images/timeline-images/dev.jpg';
import compass from '../images/timeline-images/compass.png';
import fire from '../images/timeline-images/fire.png';
import gatsby from '../images/timeline-images/gatsby.png';
import egghead from '../images/timeline-images/egghead.jpg';
import github from '../images/timeline-images/github.png';
import codesandbox from '../images/timeline-images/codesandbox.jpg';


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
              Florin Pop has a timeline of his professional accomplishments on his blog. I decided I
              wanted to do the same. It's a way for me to see my progress and a way to keep my
              accountable and chugging along.
            </p>
          </Article>
        )}
      </ThemeContext.Consumer>
      <div class="timeline is-centered">
        <header class="timeline-header">
          <span class="tag is-medium is-primary">Start</span>
        </header>
        <div class="timeline-item is-warning">
          <div class="timeline-marker is-warning is-image is-48x48">
            <img src={coding} alt="Code Newbie in Pittsburgh" />
          </div>
          <div class="timeline-content">
            <p class="heading">January 2015</p>
            <p>Started my first ever developer blog, Code Newbie in Pittsburgh.</p>
          </div>
        </div>
        <div class="timeline-item is-warning">
          <div class="timeline-marker is-warning is-image is-48x48">
            <img src={pitt} alt="Pitt" />
          </div>
          <div class="timeline-content">
            <p class="heading">August 2015</p>
            <p>Started the University of Pittsburgh</p>
          </div>
        </div>
        <header class="timeline-header">
          <span class="tag is-primary">2016</span>
        </header>
        <div class="timeline-item is-danger">
          <div class="timeline-marker is-warning is-image is-48x48">
            <img src={dev} alt="DEV" />
          </div>
          <div class="timeline-content">
            <p class="heading">October 2016</p>
            <p>Wrote first post at DEV</p>
          </div>
        </div>
        <header class="timeline-header">
          <span class="tag is-primary">2017</span>
        </header>
        <div class="timeline-item is-danger">
          <div class="timeline-marker is-warning is-image is-48x48">
            <img src={compass} alt="YelpCamp" />
          </div>
          <div class="timeline-content">
            <p class="heading">October 2017</p>
            <p>Completed The Web Developer Bootcamp</p>
          </div>
        </div>
        <div class="timeline-item is-danger">
          <div class="timeline-marker is-warning is-image is-48x48">
            <img src={dev} alt="DEV" />
          </div>
          <div class="timeline-content">
            <p class="heading">November 2017</p>
            <p>Started Internship at DEV</p>
          </div>
        </div>
        <div class="timeline-item is-danger">
          <div class="timeline-marker is-warning is-image is-48x48">
            <img src={fire} alt="Developer on Fire Podcast Logo" />
          </div>
          <div class="timeline-content">
            <p class="heading">December 2017</p>
            <p>Appeared on the Developer on Fire Podcast</p>
          </div>
        </div>
        <header class="timeline-header">
          <span class="tag is-primary">2019</span>
        </header>
        <div class="timeline-item is-danger">
          <div class="timeline-marker is-warning is-image is-48x48">
            <img src={gatsby} alt="Gatsby.js logo" />
          </div>
          <div class="timeline-content">
            <p class="heading">January 2019</p>
            <p>Became a Guest Speaker in a Gatsby.js Webinar</p>
          </div>
        </div>
        <div class="timeline-item is-danger">
          <div class="timeline-marker is-warning is-image is-48x48">
            <img src={egghead} alt="Egghead.io logo" />
          </div>
          <div class="timeline-content">
            <p class="heading">January 2019</p>
            <p>Got Offered a Spot to Teach on Egghead.io</p>
          </div>
        </div>
        <div class="timeline-item is-danger">
          <div class="timeline-marker is-warning is-image is-48x48">
            <img src={github} alt="GitHub logo" />
          </div>
          <div class="timeline-content">
            <p class="heading">March 2019</p>
            <p>Made GitHub Trending Developers and Repos</p>
          </div>
        </div>
        <div class="timeline-item is-danger">
          <div class="timeline-marker is-warning is-image is-48x48">
            <img src={github} alt="GitHub logo" />
          </div>
          <div class="timeline-content">
            <p class="heading">May 2019</p>
            <p>Crossed 3000 stars on The JavaScript Developer's Reading List on GitHub</p>
          </div>
        </div>
        <div class="timeline-item is-danger">
          <div class="timeline-marker is-warning is-image is-48x48">
            <img src={codesandbox} alt="Codesandbox logo" />
          </div>
          <div class="timeline-content">
            <p class="heading">May 2019</p>
            <p>First major PR Merged into Codesandbox</p>
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
