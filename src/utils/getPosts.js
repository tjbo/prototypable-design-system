import getPage from './getPage'

export default function getPages(apiUrl) {
  return Prismic.getApi(apiUrl).then(function (api) {
    return api
      .query(Prismic.Predicates.at('document.type', 'post'))
      .then((response) => {
        const promises = response.results.map((result) => {
          return getPage(apiUrl, result)
        })
        return Promise.all(promises).then((pages) => {
          return pages.map(({ content, meta }) => {
            return {
              path: meta.slug,
              getData() {
                return {
                  content,
                  meta,
                }
              },
              template: 'src/containers/post',
            }
          })
        })
      })
  })
}
