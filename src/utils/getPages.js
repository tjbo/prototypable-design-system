import getPage from './getPage'

export default function getPages(apiUrl) {
  console.log('sdafdsafdsfadsfjkdsaklfjdskafdksjl')
  return Prismic.getApi(apiUrl).then(function (api) {
    return api
      .query(Prismic.Predicates.at('document.type', 'page'))
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
              template: 'src/containers/page',
            }
          })
        })
      })
  })
}
