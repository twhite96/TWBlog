const postQuery = `{
  posts: allMarkdownRemark(
    filter: { fileAbsolutePath: { regex: "/src/pages/" } }
  ){
    edges {
      node {
        fields {
          slug
        }
        objectID: `${slug}-${index}`,
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

const { slug } = node.fields

const flatten = arr =>
  arr.map(({ node: { frontmatter, ...rest } }) => ({
    ...frontmatter,
    ...rest
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