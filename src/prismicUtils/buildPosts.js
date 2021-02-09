const gql = require('graphql-tag')
const fs = require('fs')
const chalk = require('chalk')
const shuffle = require('lodash.shuffle')
const util = require('util')

function buildPosts({ client, PATH }) {
  return client
    .query({
      query: gql`
        query {
          allPosts {
            edges {
              node {
                og_type
                og_title
                og_image
                og_description
                meta_title
                meta_noindex
                meta_description
                _meta {
                  id
                  tags
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

      function findRelatedPosts(tags, id) {
        let relatedPosts = []

        tags.forEach((tag) => {
          relatedPosts = _posts.filter((post) => {
            return (
              post.node._meta.tags.includes(tag) &&
              !relatedPosts.includes(post) &&
              post.node._meta.id !== id
            )
          })
        })

        relatedPosts = shuffle(relatedPosts)

        function addAdditionalItems() {
          if (relatedPosts.length < 3) {
            const post = _posts.filter((post) => {
              return !relatedPosts.includes(post) && post.node._meta.id !== id
            })[0]
            relatedPosts.push(post)
            return addAdditionalItems()
          }
          relatedPosts = relatedPosts.slice(0, 3)
        }

        addAdditionalItems()

        return relatedPosts.map((post) => {
          const { image, path, title } = post.node
          return {
            image,
            path,
            title,
            __typename: 'PostBodyRelatedPost',
          }
        })
      }

      const posts = _posts
        .map((post) => {
          post.node.relatedPosts = findRelatedPosts(
            post.node._meta.tags,
            post.node._meta.id,
          )
          return post
        })
        .map((post) => {
          post.node.path = `/blog/${post.node.path}/`
          console.log(chalk.blue(`Built ${post.node.path}`))
          post.node.template = `./src/containers/post`

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

module.exports = buildPosts
