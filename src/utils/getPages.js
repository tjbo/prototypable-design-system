import getPage from './getPage'

export default function getPages(apiUrl, apiToken) {
  return new Promise((resolve) => {
    return Prismic.getApi(apiUrl, { accessToken: apiToken }).then(function (
      api,
    ) {
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
