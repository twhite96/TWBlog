import React from 'react';
import ReactHelmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';


const Layout = ({ slug, children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            siteUrl
          }
        }
      }
    `}
    render={data => (
      <Helmet title={data.site.siteMetadata.title}>
        <meta charSet="utf-8" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:image"
          content={`${data.site.siteMetadata.siteUrl}${slug}twitter-card.jpg`}
        />
      />
      </Helmet>
    )}
  />
);