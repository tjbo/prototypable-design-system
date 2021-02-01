const gql = require('graphql-tag')
const fs = require('fs')

function buildPages({ PATH, client }) {
  return client
    .query({
      query: gql`
        query {
          allDeals {
            edges {
              node {
                amount
                rate
                term
                loan_to_value
                property_type
                image
                title
                type
                _meta {
                  id
                }
              }
            }
          }
        }
      `,
    })
    .then((response) => {
      const _deals = response.data.allDeals.edges
      fs.writeFile(PATH, JSON.stringify(_deals), 'utf8', () => {})
    })
    .catch((error) => {
      console.error(error)
    })
}

module.exports = buildPages
