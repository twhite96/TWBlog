import React from 'react';
import { graphql } from "gatsby";
import { ThemeContext } from "../layouts";
import Headline from "../components/Article/Headline";
import Seo from "../components/Seo";
import Article from "../components/Article";
import { FaDev, FaGithub, FaCompass } from "react-icons/fa";
import './timeline.css';
// import coding from '../images/timeline-images/coding.png'
// import pitt from '../images/timeline-images/pitt.png';
// import dev from '../images/timeline-images/dev.jpg';
// import compass from '../images/timeline-images/compass.png';
import fire from '../images/timeline-images/fire.png';
import gatsby from '../images/timeline-images/gatsby.png';
import egghead from '../images/timeline-images/egghead.jpg';
// import github from '../images/timeline-images/github.png';
// import codesandbox from '../images/timeline-images/codesandbox.jpg';
import {
  VerticalTimeline,
  VerticalTimelineElement
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

// const handleClick = (event) => {
//   event.preventDefault();
// }
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

               (Switching up timelines so this one is under construction)
              </p>
            </Article>
          )}
        </ThemeContext.Consumer>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2011 - present"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={<FaDev />}
          >
            <h3 className="vertical-timeline-element-title">Creative Director</h3>
            <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
            <p>
              Creative Direction, User Experience, Visual Design, Project Management, Team Leading
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2010 - 2011"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            // icon={<WorkIcon />}
          >
            <h3 className="vertical-timeline-element-title">Art Director</h3>
            <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
            <p>
              Creative Direction, User Experience, Visual Design, SEO, Online Marketing
              <a href="https://tiffanywhite.dev">Read Article</a>
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2008 - 2010"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={<FaDev />}
          >
            <h3 className="vertical-timeline-element-title">Web Designer</h3>
            <h4 className="vertical-timeline-element-subtitle">Los Angeles, CA</h4>
            <p>User Experience, Visual Design</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2006 - 2008"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={<FaDev />}
          >
            <h3 className="vertical-timeline-element-title">Web Designer</h3>
            <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
            <p>User Experience, Visual Design</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="April 2013"
            iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
            icon={<FaDev />}
          >
            <h3 className="vertical-timeline-element-title">
              Content Marketing for Web, Mobile and Social Media
            </h3>
            <h4 className="vertical-timeline-element-subtitle">Online Course</h4>
            <p>Strategy, Social Media</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="November 2012"
            iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
            icon={<FaDev />}
          >
            <h3 className="vertical-timeline-element-title">Agile Development Scrum Master</h3>
            <h4 className="vertical-timeline-element-subtitle">Certification</h4>
            <p>Creative Direction, User Experience, Visual Design</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="2002 - 2006"
            iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
            icon={<FaDev />}
          >
            <h3 className="vertical-timeline-element-title">
              Bachelor of Science in Interactive Digital Media Visual Imaging
            </h3>
            <h4 className="vertical-timeline-element-subtitle">Bachelor Degree</h4>
            <p>Creative Direction, Visual Design</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
            icon={<FaDev />}
          />
        </VerticalTimeline>
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
