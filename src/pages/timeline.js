import React from 'react';
import { graphql } from "gatsby";
import { ThemeContext } from "../layouts";
import Headline from "../components/Article/Headline";
import Seo from "../components/Seo";
import Article from "../components/Article";
import { Timeline, TimelineItem } from "vertical-timeline-component-for-react";


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
      <Timeline lineColor={"#ddd"}>
        <TimelineItem
          key="001"
          dateText="01/2019-present"
          style={{ color: "#ddd" }}
          dateInnerStyle={{ background: "rgba(237, 237, 237, .7)", color: "#000" }}
          bodyContainerStyle={{
            background: "rgba(113, 113, 113, 1.00)",
            padding: "20px",
            borderRadius: "8px",
            color: "#fff",
            boxShadow: "0 4px 15px -6px rgba(0, 0, 0, 0.7)"
          }}
        >
          <h3>Got Offered a Spot to Teach on Egghead.io</h3>
          <p>
            Joel Hooks, co-founder of Egghead had been asking me to join up for some time. I
            finally agreed. Currently cooking up my first lesson.
          </p>
        </TimelineItem>
        <TimelineItem
          key="002"
          dateText="01/2019-present"
          style={{ color: "#ddd" }}
          dateInnerStyle={{ background: "rgba(245, 214, 89, .7)", color: "#fff" }}
          bodyContainerStyle={{
            background: "rgba(70, 36, 102, .7)",
            padding: "20px",
            borderRadius: "8px",
            color: "#fff",
            boxShadow: "0 4px 15px -6px rgba(0, 0, 0, 0.7)"
          }}
        >
          <h3>Became a Guest Speaker in a Gatsby.js Webinar</h3>
          <p>
            After submitting my portfolio, Jason Lengstorf of the Gatsby team asked me to
            participate in their{" "}
            <em>
              {" "}
              <a
                style={{ textDecoration: "underline", color: "#fff" }}
                href="https://www.gatsbyjs.com/build-portfolio-site-webinar-video/"
              >
                Building Your Portfolio Site with Gatsby.
              </a>
            </em>{" "}
            It was really fun and I hope to do more of this kind of thing.
          </p>
        </TimelineItem>
        <TimelineItem
          key="003"
          dateText="11/2017-02/2018"
          style={{ color: "#ddd" }}
          dateInnerStyle={{ background: "rgba(237, 237, 237, .7)", color: "#000" }}
          bodyContainerStyle={{
            background: "rgba(0, 0, 0, 0.7)",
            padding: "20px",
            borderRadius: "8px",
            color: "#fff",
            boxShadow: "0 4px 15px -6px rgba(0, 0, 0, 0.7)"
          }}
        >
          <h3>Got Offered a Software Engineering Apprenticeship at DEV</h3>
          <p>
            I worked with the team to learn the ropes of the Rails backend to build small features and make small bugfixes. I worked remotely and it was a very trying, but ultimately worth it, learning experience.
          </p>
        </TimelineItem>
        <TimelineItem
          key="004"
          dateText="11/2017-02/2018"
          style={{ color: "#ddd" }}
          dateInnerStyle={{ background: "rgba(7, 42, 94, .7)", color: "#fff" }}
          bodyContainerStyle={{
            background: "rgba(239, 66, 55, .8)",
            padding: "20px",
            borderRadius: "8px",
            color: "#fff",
            boxShadow: "0 4px 15px -6px rgba(0, 0, 0, 0.7)"
          }}
        >
          <h3>Appeared on the Developer on Fire Podcast</h3>
          <p>
            This was my first major appearance on a developer focused podcast. Dave came on my
            show and then offered to{" "}
            <a
              style={{ textDecoration: "underline", color: "#fff" }}
              href="https://developeronfire.com/podcast/episode-296-tiffany-white-shared-learning"
            >
              offered to have me on his.
            </a>
          </p>
        </TimelineItem>
        <TimelineItem
          key="005"
          dateText="07/2017-10/2017"
          style={{ color: "#ddd" }}
          dateInnerStyle={{ background: "rgba(210, 146, 248, .7)", color: "#fff" }}
          bodyContainerStyle={{
            background: "rgba(255, 98, 140, .8)",
            padding: "20px",
            borderRadius: "8px",
            color: "#fff",
            boxShadow: "0 4px 15px -6px rgba(0, 0, 0, 0.7)"
          }}
        >
          <h3>Completed The Web Developer Bootcamp </h3>
          <p>
            This was the first online bootcamp course I ever completed. It took 3 months of
            constant work to get the certificate.
          </p>
        </TimelineItem>
        <TimelineItem
          key="006"
          dateText="10/2016"
          dateInnerStyle={{ background: "rgba(237, 237, 237, .7)", color: "#000" }}
          bodyContainerStyle={{
            background: "rgba(0, 0, 0, 0.7)",
            padding: "20px",
            borderRadius: "8px",
            color: "#fff",
            boxShadow: "0 4px 15px -6px rgba(0, 0, 0, 0.7)"
          }}
        >
          <h3 style={{ color: "#fff" }}>Wrote first post at DEV</h3>
          <p>
            I was one of the first people to sign up and use the DEV platform. Since that first
            post, I've gained over 7000 followers, 68,000 views, and 1,435 total post reactions.
          </p>
        </TimelineItem>
        <TimelineItem
          key="007"
          bodyContainerStyle={{
            background: "rgba(0, 53, 148, .8)",
            padding: "20px",
            borderRadius: "8px",
            color: "#fff",
            boxShadow: "0 4px 15px -6px rgba(0, 0, 0, 0.7)"
          }}
          dateText="04/2015-05/2017"
          dateInnerStyle={{ background: "rgba(255, 184, 28, .6)", color: "#fff" }}
        >
          <h3>Got accepted to, and attended, the University of Pittsburgh</h3>
          <p>Built a foundational knowledge of OOP during my time at Pitt.</p>
        </TimelineItem>
        <TimelineItem
          key="008"
          bodyContainerStyle={{
            background: "rgba(6, 215, 217, .8)",
            padding: "20px",
            borderRadius: "8px",
            color: "#fff",
            boxShadow: "0 4px 15px -6px rgba(0, 0, 0, 0.7)"
          }}
          dateText="01/2015"
          dateInnerStyle={{ background: "rgba(255, 143, 250, .8)" }}
        >
          <h3>Started Code Newbie in Pittsburgh</h3>
          <p>
            Started my first ever developer blog, Code Newbie in Pittsburgh. The first post was on{" "}
            <a
              style={{ textDecoration: "underline", color: "#fff" }}
              href="https://tiffanywhite.dev/alice/"
            >
              Alice
            </a>
            , a program used by my junior college to teach the fundamentals of programming. Since
            then, I have over 200 posts on this very blog.
          </p>
        </TimelineItem>
      </Timeline>
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
