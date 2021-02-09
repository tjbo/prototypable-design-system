const gql = require('graphql-tag')
const fs = require('fs')

function buildPostsList({ client, PATH }) {
  return client
    .query({
      query: gql`
        query {
          allPosts(sortBy: meta_firstPublicationDate_DESC) {
            edges {
              node {
                _meta {
                  id
                  firstPublicationDate
                  type
                }
                image
                category
                title
                path
              }
            }
          }
        }
      `,
    })
    .then((response) => {
      const _posts = response.data.allPosts.edges
      const posts = _posts.map((post) => {
        post.node.path = `/blog/${post.node.path}`
        return post
      })

      return new Promise(function (resolve, reject) {
        fs.writeFile(PATH, JSON.stringify(posts), function (err) {
          if (err) {
            reject(err)
          } else {
            resolve()
          }
        })
      })
    })
    .catch((error) => {
      console.error(error)
    })
}

module.exports = buildPostsList
