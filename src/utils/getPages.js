import getPage from './getPage'

export default function getPages(apiUrl) {
  return new Promise((resolve) => {
    return Prismic.getApi(apiUrl).then(function (api) {
      return api
        .query(Prismic.Predicates.at('document.type', 'page'))
        .then((response) => {
          const promises = response.results.map((result) => {
            return getPage(apiUrl, result)
          })
          return Promise.all(promises).then((pages) => {
            const _pages = pages.map(({ content, meta, page }) => {
              return {
                path: meta.slug,
                getData() {
                  return {
                    content,
                    meta,
                    forms: {
                      has_form: page.data.has_form,
                    },
                  }
                },
                template: 'src/containers/page',
              }
            })
            resolve(_pages)
          })
        })
    })
  })
}
