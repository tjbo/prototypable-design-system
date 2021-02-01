const gql = require('graphql-tag')
const fs = require('fs')

function buildPosts({ client, PATH }) {
  client
    .query({
      query: gql`
        query {
          allPosts {
            edges {
              node {
                _meta {
                  id
                }
                category
                image
                title
                path
                body1 {
                  ... on PostBody1Text {
                    primary {
                      text
                    }
                  }
                  ... on PostBody1Responsive_image {
                    primary {
                      image1
                    }
                  }
                  ... on PostBody1Highlighted_box {
                    primary {
                      text
                    }
                  }
                }
              }
            }
          }
        }
      `,
    })
    .then((response) => {
      const _posts = response.data.allPosts.edges
      const posts = _posts.map((post) => {
        post.node.path = `/blog/${post.node.path}/`
        post.node.template = `./src/containers/post`
        return post
      })
      fs.writeFile(PATH, JSON.stringify(posts), 'utf8', () => {})
    })
    .catch((error) => {
      console.error(error)
    })
}

module.exports = buildPosts
