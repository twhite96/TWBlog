import React from 'react';
import { graphql } from "gatsby";
import { ThemeContext } from "../layouts";
import Headline from "../components/Article/Headline";
import Seo from "../components/Seo";
import Article from "../components/Article";
import {
  FaDev,
  FaGithub,
  FaCompass,
  FaRss,
  FaUserGraduate,
  FaCode,
  FaMediumM,
  FaEgg,
  FaTv,
  FaMicrophoneAlt,
  FaBriefcase
} from "react-icons/fa";
import './timeline.css';
// import coding from '../images/timeline-images/coding.png'
// import pitt from '../images/timeline-images/pitt.png';
// import dev from '../images/timeline-images/dev.jpg';
// import compass from '../images/timeline-images/compass.png';
// import fire from '../images/timeline-images/fire.png';
// import gatsby from '../images/timeline-images/gatsby.png';
// import egghead from '../images/timeline-images/egghead.jpg';
// import github from '../images/timeline-images/github.png';
// import codesandbox from '../images/timeline-images/codesandbox.jpg';
import {
  VerticalTimeline,
  VerticalTimelineElement
} from 'react-vertical-timeline-component';

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
              Florin Pop has a timeline of his professional accomplishments on his blog. I decided I
              wanted to do the same. It's a way for me to see my progress and a way to keep my
              accountable and chugging along. (Switching up timelines so this one is under
              construction)
            </p>
          </Article>
        )}
      </ThemeContext.Consumer>
      <VerticalTimeline layout="1-column">
        <VerticalTimelineElement
          className="vertical-timeline-element--work icf"
          date="07/2019-present"
          iconStyle={{ background: "rgb(243, 97, 183)", color: "#fff" }}
          icon={<FaBriefcase />}
        >
          <h3 className="vertical-timeline-element-title">
            Got offered a entry level front-end developer position at ICF
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Frontend Dev</h4>
          <p>First ever full-time salaried dev job at ICF consulting firm.</p>{" "}
          <p>
            <a
              style={{ textDecoration: "underline", color: "rgb(113, 113, 113)" }}
              href="https://tiffany-resume.netlify.com/"
            >
              View Resume
            </a>
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work dev"
          date="01/2019-present"
          iconStyle={{ background: "rgb(0,0,0)", color: "#fff" }}
          icon={<FaEgg />}
        >
          <h3 className="vertical-timeline-element-title">
            Got Offered a Spot to Teach on Egghead.io
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Instructor</h4>
          <p>
            Joel Hooks, co-founder of Egghead had been asking me to join up for some time. I finally
            agreed. Currently cooking up my first lesson.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work gatsby"
          date="February 27 2019"
          iconStyle={{ background: "rgb(102, 51, 153)", color: "#fff" }}
          icon={<FaTv />}
        >
          <h3 className="vertical-timeline-element-title">
            Became a Guest Speaker in a Gatsby.js Webinar
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Speaker</h4>
          <p>
            After submitting my portfolio, Jason Lengstorf of the Gatsby team asked me to
            participate in their <em>Building Your Portfolio Site with Gatsby.</em>
          </p>{" "}
          <p>
            <a
              style={{ textDecoration: "underline", color: "rgb(113, 113, 113)" }}
              href="https://www.gatsbyjs.com/build-portfolio-site-webinar-video/"
            >
              Watch the webinar
            </a>
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work dev-on-fire"
          date="December 18 2017"
          iconStyle={{ background: "rgb(239, 66, 55)", color: "#fff" }}
          icon={<FaMicrophoneAlt />}
        >
          <h3 className="vertical-timeline-element-title">
            Appeared on the Developer on Fire Podcast
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Podcast Guest</h4>
          <p>
            This was my first major appearance on a developer focused podcast. Dave came on my show
            and then offered to offered to have me on his.
          </p>{" "}
          <p>
            <a
              style={{ textDecoration: "underline", color: "rgb(113, 113, 113)" }}
              href="https://developeronfire.com/podcast/episode-296-tiffany-white-shared-learning"
            >
              Listen to the episode
            </a>
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work dev"
          date="11/2017-02/2018"
          iconStyle={{ background: "rgb(18, 19, 20)", color: "#fff" }}
          icon={<FaDev />}
        >
          <h3 className="vertical-timeline-element-title">
            Got offered a software engineering apprenticeship at DEV
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Software Engineering Intern</h4>
          <p>First ever dev job, an internship at DEV.</p>{" "}
          <p>
            <a
              style={{ textDecoration: "underline", color: "rgb(113, 113, 113)" }}
              href="https://tiffanywhite.dev/i-am-doing-this-thing/"
            >
              Read More
            </a>
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work udemy"
          date="October 20 2017"
          iconStyle={{ background: "rgb(234, 82, 82)", color: "#fff" }}
          icon={<FaCode />}
        >
          <h3 className="vertical-timeline-element-title">Completed The Web Developer Bootcamp</h3>
          <h4 className="vertical-timeline-element-subtitle">Developer</h4>
          <p>Completed the course from July 2017-October 2017</p>{" "}
          <p>
            <a
              style={{ textDecoration: "underline", color: "rgb(113, 113, 113)" }}
              href="https://www.dropbox.com/s/zpho140pno9n3rl/UC-1XXHLESN.pdf?dl=0"
            >
              View Certificate
            </a>
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work dev"
          date="October 14 2016"
          iconStyle={{ background: "rgb(18, 19, 20)", color: "#fff" }}
          icon={<FaDev />}
        >
          <h3 className="vertical-timeline-element-title">Wrote my first post at DEV</h3>
          <h4 className="vertical-timeline-element-subtitle">Writer</h4>
          <p>Became one of the first writers on DEV</p>{" "}
          <p>
            <a
              style={{ textDecoration: "underline", color: "rgb(113, 113, 113)" }}
              href="https://dev.to/tiffany/hi-im-tiffany-white"
            >
              Read More
            </a>
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education medium"
          date="November 25 2015"
          iconStyle={{ background: "rgb(1, 143, 105)", color: "#fff" }}
          icon={<FaMediumM />}
        >
          <h3 className="vertical-timeline-element-title">
            Wrote my first blog post ever on freeCodeCamp Medium Publication
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Writer</h4>
          <p>
            My first and also my second most popular post on freeCodeCamp's former Medium
            publication
          </p>{" "}
          <p>
            <a
              style={{ textDecoration: "underline", color: "rgb(113, 113, 113)" }}
              href="https://medium.freecodecamp.org/bonfire-tears-free-code-camp-edition-d79bbfd3d945"
            >
              Read More
            </a>
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education pitt"
          date="August 28 2015"
          iconStyle={{ background: "rgb(0, 53, 148)", color: "#fff" }}
          icon={<FaUserGraduate />}
        >
          <h3 className="vertical-timeline-element-title">Started the University of Pittsburgh</h3>
          <h4 className="vertical-timeline-element-subtitle">Courses</h4>
          <p>
            Got accepted to and started CS classes at the University of Pittsburgh. Started as a
            non-traditional student.
          </p>{" "}
          <p>
            <a
              style={{ textDecoration: "underline", color: "rgb(113, 113, 113)" }}
              href="https://tiffanywhite.dev/first-week-of-pitt/"
            >
              Read More
            </a>
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education blog"
          date="January 12, 2015"
          iconStyle={{ background: "rgb(6, 215, 217)", color: "#fff" }}
          icon={<FaRss />}
        >
          <h3 className="vertical-timeline-element-title">
            Wrote my first ever blog post on Code Newbie in Pittsburgh
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Dev & Writer</h4>
          <p>
            Wrote a post on Alice. {""}
            <p>
              <a
                style={{ textDecoration: "underline", color: "rgb(113, 113, 113)" }}
                href="https://tiffanywhite.dev/alice/"
              >
                Read More
              </a>
            </p>
          </p>
        </VerticalTimelineElement>
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
