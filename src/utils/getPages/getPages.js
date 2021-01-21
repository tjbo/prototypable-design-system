var Prismic = require('prismic-javascript')
import getPage from '../getPage'
import getPathFromParent from '../getPathFromParent'

export default function getPages(apiEndpoint, apiToken, options) {
  return Prismic.getApi(apiEndpoint, { accessToken: apiToken }).then((api) => {
    return api
      .query(Prismic.Predicates.at('document.type', 'page'))
      .then((response) => {
        const promises = response.results.map((result) => {
          return getPage(api, result.id, options.fetchLinks)
        })
        return Promise.all(promises).then((pages) => {
          return pages.map((pageData) => {
            pageData.dynamicData = options.insertData.find((data) => {
              if (data.path === pageData.path) {
                return data.data
              }
            })
            if (pageData.template && pageData.template !== 'default') {
              pageData.template = `src/pages/${pageData.template}`
            } else {
              pageData.template = 'src/pages/page'
            }

            return pageData
              .map((page) => {
                let path = '/'
                if (page.path !== '/') {
                  const _path = getPathFromParent(page, pages)
                  path = _path
                }
                page.slug = path
                return page
              })
              .map((page) => {
                page.path = page.slug
                return page
              })
          })
        })
      })
  })
}
