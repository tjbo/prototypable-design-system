var Prismic = require('prismic-javascript')
import getPage from './getPage'

export default function getPages(apiEndpoint, apiToken, fetchLinks) {
  return Prismic.getApi(apiEndpoint, { accessToken: apiToken }).then((api) => {
    return api
      .query(Prismic.Predicates.at('document.type', 'page'))
      .then((response) => {
        const promises = response.results.map((result) => {
          return getPage(api, result.id, fetchLinks)
        })
        return Promise.all(promises).then((pages) => {
          return pages.map((pageData) => {
            return {
              path: pageData.slug,
              getData() {
                return pageData
              },
              template:
                pageData.template && pageData.template !== 'default'
                  ? `src/pages/${pageData.template}`
                  : 'src/pages/page',
            }
          })
        })
      })
  })
}
