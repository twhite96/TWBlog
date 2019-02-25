require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: 'Tiffany R. White Blog',
    author: 'Tiffany White',
    description: 'Technical Blog by Tiffany White',
    siteUrl: 'https://tiffanywhite.tech',
    social: {
      twitter: '@tiffanywhitedev'
    }
  },
  pathPrefix: '/',
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages'
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590
            }
          },
          {
            resolve: `@raae/gatsby-remark-oembed`,
            options: {
              providers: {
                include: ["Twitter", "Spotify", "CodeSandbox", "CodePen", "Buttondown", "Twitch", "Instagram"],
                exclude: ["Reddit"]
              }
            }
          },
          {
            resolve: "gatsby-remark-embed-spotify",
            options: {
              height: 600
            }
          },
          {
            resolve: "gatsby-remark-embed-video",
            options: {
              width: 800,
              ratio: 1.77,
              height: 400,
              related: false,
              noIframeBorder: true
            }
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`
            }
          },
          {
            resolve: "gatsby-remark-embed-gist",
            options: {
              username: 'twhite96',

              // a flag indicating whether the github default gist css should be included or not
              // default: true
              includeDefaultCss: true
            }
          },
          {
            resolve: `gatsby-remark-autolink-headers`,
            options: {
              offsetY: `100`,
              icon: `<svg aria-hidden="true" height="20" version="1.1" viewBox="0 0 16 16" width="20"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>`,
              className: `custom-class`,
              maintainCase: true,
            },
          },
          {
            resolve: 'gatsby-remark-prismjs',
            options: {
              inlineCodeMarker: '÷'
            }
          },
          'gatsby-plugin-emotion',
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-smartypants'
        ]
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-61294063-1`
      }
    },
    `gatsby-plugin-twitter`,
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Tiffany R. White Blog`,
        short_name: `TRW Blog`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#06D7D9`,
        display: `minimal-ui`,
        icon: `src/assets/icon.png`
      }
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        custom: {
          families: ['Fira Code'],
          urls: ['./src/assets/fonts/fira_code.css']
        }
      }
    },
    {
      resolve: `gatsby-plugin-algolia`,
      options: {
        appId: process.env.ALGOLIA_APP_ID,
        apiKey: process.env.ALGOLIA_API_KEY,
        indexName: process.env.ALGOLIA_INDEX_NAME, // for all queries
        queries: [
          {
            query: `
            {
              allMarkdownRemark(
                filter: { frontmatter: { hidden: { ne: true } } }
              ) {
                edges {
                  node {
                    rawBody
                    frontmatter {
                      slug
                      title
                      description
                    }
                  }
                }
              }
            }
          `,
            transformer: ({ data }) =>
              data.allMarkdownRemark.edges.reduce((records, { node }) => {
                const { title, spoiler } = node.frontmatter
                const { slug } = node.fields

                const base = { slug, title, spoiler }
                const chunks = node.rawBody.split('\n\n')

                return [
                  ...records,
                  ...chunks.map((text, index) => ({
                    ...base,
                    objectID: `${slug}-${index}`,
                    text,
                  })),
                ]
              }, []),
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `limelight`,
          `source sans pro\:300,400,400i,700`,
          `pt serif\:300,400,400i,700`,
          `montserrat\:300,400,400i,700`
        ]
      }
    },
    `gatsby-plugin-offline`,
    // `gatsby-plugin-remove-serviceworker`,
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography'
      }
    }
  ]
}
