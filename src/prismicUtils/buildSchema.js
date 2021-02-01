const fetch = require('node-fetch')
const fs = require('fs')

function buildSchema({ PATH, API_TOKEN, GRAPHQL_TYPES_URL, ref }) {
  if (fs.existsSync(PATH)) {
    console.log('Schema already exists, skipping...')
    return Promise.resolve()
  }

  return fetch(GRAPHQL_TYPES_URL, {
    headers: {
      'prismic-ref': ref,
      accessToken: API_TOKEN,
    },
  })
    .then((response) => {
      return response.json()
    })
    .then((result) => {
      const filteredResults = result

      const filteredData = result.data.__schema.types.filter(
        (type) => type.possibleTypes !== null,
      )

      filteredResults.data.__schema.types = filteredData

      fs.writeFileSync(PATH, JSON.stringify(filteredResults.data), (err) => {
        if (err) {
          console.error('Error writing fragmentTypes file', err)
        } else {
          console.log('Fragment types successfully extracted!')
        }
      })
    })
}

module.exports = buildSchema
