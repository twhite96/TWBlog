const postQuery = `{
  posts: allMarkdownRemark {
    edges {
      node {
        fields {
          slug
        }
        objectID: id
        frontmatter {
          title
          date(formatString: "MMM DD, YYYY")
          spoiler
        }
        excerpt(pruneLength: 500)
      }
    }
  }
}`

const flatten = arr =>
  arr.map(({ node: { frontmatter, ...rest } }) => ({
    ...frontmatter,
    ...rest,
  }))
const settings = { attributesToSnippet: [`excerpt:20`] }

const queries = [
  {
    query: postQuery,
    transformer: ({ data }) => flatten(data.posts.edges),
    indexName: `articles`,
    settings,
  },
]

module.exports = queries
