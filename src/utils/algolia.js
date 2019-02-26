const postQuery = `{
  posts: allMarkdownRemark(
    filter: { fileAbsolutePath: { regex: "/src/pages/" } }
  ){
    edges {
      node {
        fields {
          slug
        }
        tableOfContents
        objectID: id,
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
    ...rest
  }))

const settings = { attributesToSnippet: [`excerpt:20`] }

const queries = [
  {
    query: postQuery,
    transformer: ({ data }) =>
      flatten(data.posts.edges.reduce((records, { node }) => {
        const { title, spoiler } = node.frontmatter
        const { slug } = node.fields
        const base = { slug, title, spoiler }
        const chunks = node.tableOfContents.split('\n\n')
        return [
          ...records,
          ...chunks.map((text, index) => ({
            ...base,
            objectID: `${slug}-${index}`,
            text,
          })),
        ]
      }, []),
    indexName: `articles`,
    settings,
  },
]

module.exports = queries
