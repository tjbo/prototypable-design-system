export default function getPosts(apiUrl) {
  return new Promise((resolve) => {
    return Prismic.getApi(apiUrl).then(function (api) {
      return api
        .query(Prismic.Predicates.at('document.type', 'post'))
        .then((response) => {
          const routeData = response.results.map((result) => {
            const { first_publication_date, data, id } = result

            return {
              getData() {
                return {
                  ...data,
                  id,
                  first_publication_date,
                  layout_style: 'post',
                }
              },
              path: data.meta[0].slug,
              template: 'src/containers/post',
            }
          })

          const list = routeData.map((post) => {
            const { title, id, path } = post
            return { id, path, title }
          })

          routeData.push({
            getData() {
              return {
                posts: list,
              }
            },
            path: '/blog/',
            template: 'src/pages/blog',
          })

          resolve(routeData)
        })
    })
  })
}
