const fetch = require('node-fetch')
const fs = require('fs')

function buildSchema({ PATH, API_TOKEN, ref }) {
  return new Promise((resolve) => {
    if (fs.existsSync(PATH)) {
      console.log('Schema already exists, skipping...')
      return resolve()
    }

    return fetch(
      `https://cresentlenders.prismic.io/graphql?query=%7B%20__schema%20%7B%20types%20%7B%20kind%20name%20possibleTypes%20%7B%20name%20%7D%20%7D%20%7D%20%7D`,
      {
        headers: {
          'prismic-ref': ref,
          accessToken: API_TOKEN,
        },
      },
    )
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
  })
}

module.exports = buildSchema
