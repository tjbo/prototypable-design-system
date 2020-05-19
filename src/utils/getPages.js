var Prismic = require('prismic-javascript')
import getPage from './getPage'

<<<<<<< Updated upstream
export default function getPages(apiUrl, apiToken) {
=======
const apiToken =
  'MC5Yc1FqdGhFQUFDVUE5ekJI.Je-_vXXvv73vv70b77-9eS0Vb--_ve-_ve-_vV4777-977-977-977-9Ye-_vRzvv71uJEYa77-977-977-9Sg'

export default function getPages(apiUrl) {
>>>>>>> Stashed changes
  return new Promise((resolve) => {
    return Prismic.getApi(apiUrl, { accessToken: apiToken }).then(function (
      api,
    ) {
<<<<<<< Updated upstream
=======
      console.log('api', api)
>>>>>>> Stashed changes
      return api
        .query(Prismic.Predicates.at('document.type', 'page'))
        .then((response) => {
          const promises = response.results.map((result) => {
            return getPage(apiUrl, result, apiToken)
          })
          return Promise.all(promises).then((pages) => {
            const _pages = pages.map(({ content, meta, page }) => {
              console.log(meta.slug, content)

              return {
                path: meta.slug,
                getData() {
                  return {
                    content,
                    meta,
                  }
                },
                template: meta.template
                  ? `src/pages/${meta.template}`
                  : 'src/pages/page',
              }
            })
            resolve(_pages)
          })
        })
    })
  })
}
