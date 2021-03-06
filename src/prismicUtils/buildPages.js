const gql = require('graphql-tag')
const getPathFromParent = require('./getPathFromParent')
const fs = require('fs')
const chalk = require('chalk')
const util = require('util')
const fs_writeFile = util.promisify(fs.writeFile)

function buildPages({ PATH, client }) {
  return client
    .query({
      query: gql`
        query {
          allPages {
            edges {
              node {
                og_type
                og_title
                og_image
                og_description
                meta_title
                meta_noindex
                meta_description
                path
                template
                _meta {
                  id
                }
                child_of {
                  ... on Page {
                    _meta {
                      id
                    }
                    path
                  }
                }
                body1 {
                  ... on PageBody1Jumobotron {
                    type
                    primary {
                      body
                      call_to_action
                      image
                      overlay
                      text_color
                    }
                  }
                  ... on PageBody1Article1 {
                    primary {
                      background
                      sub_title
                      title1
                      body3
                    }
                  }
                  ... on PageBody1Article {
                    primary {
                      body3
                      background
                      sidebar
                      sidebar_title
                      title1
                    }
                  }
                  ... on PageBody1Article___images {
                    fields {
                      image
                    }
                    primary {
                      background
                      reverse_order
                      body
                    }
                  }
                  ... on PageBody1Cards {
                    primary {
                      background
                      title1
                    }

                    fields {
                      cards {
                        __typename
                        ... on Deal {
                          title
                          amount
                          type
                          loan_to_value
                          rate
                          property_type
                          term
                          image
                        }
                      }
                    }
                  }
                  ... on PageBody1Faq {
                    primary {
                      background
                      title1
                    }
                    fields {
                      answer
                      question
                    }
                  }
                  ... on PageBody1Related_blog_posts {
                    type
                    fields {
                      related_blog_post {
                        __typename
                        ... on Post {
                          title
                          image
                          path
                        }
                      }
                    }
                  }
                  ... on PageBody1Linked_component_section {
                    primary {
                      background
                      ... on PageBody1Linked_component_sectionPrimary {
                        body2 {
                          __typename
                          ... on Component_slice {
                            body {
                              __typename
                              ... on Component_sliceBodyFaq {
                                primary {
                                  title1
                                }
                                fields {
                                  answer
                                  question
                                }
                              }
                              ... on Component_sliceBodyReact_section {
                                primary {
                                  title
                                  background
                                  inner_width
                                  body1
                                }
                              }
                            }
                          }
                        }
                      }
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
      const _pages = response.data.allPages.edges

      const pages = _pages
        .map((page) => {
          page.node._path = getPathFromParent(page, _pages, [])

          const templates = {
            default: './src/pages/page',
            blog: './src/pages/blog/',
            contact: './src/pages/contact',
            deals: './src/pages/deals',
            home: './src/pages/home',
          }

          page.node.template = templates[page.node.template]

          return page
        })
        .map((page) => {
          page.node.path = page.node._path
          console.log(chalk.blue(`Built ${page.node.path}`))
          return page
        })

      return new Promise(function (resolve, reject) {
        fs.writeFile(PATH, JSON.stringify(pages), function (err) {
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

module.exports = buildPages
