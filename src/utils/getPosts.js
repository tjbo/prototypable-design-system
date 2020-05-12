export default function getPosts(apiUrl) {
  return new Promise((resolve) => {
    return Prismic.getApi(apiUrl).then(function (api) {
      return api
        .query(Prismic.Predicates.at('document.type', 'post'))
        .then((response) => {
          const routeData = response.results.map((result) => {
            const { first_publication_date, data, id } = result

            data.body = data.body[0]
            data.type = 'blog_post'

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
              template: 'src/containers/_post',
            }
          })

          const list = response.results.map((post) => {
            const {
              data: { meta, title },
              id,
            } = post
            return { id, path: meta[0].slug, title }
          })

          routeData.push({
            getData() {
              return {
                posts: list,
              }
            },
            path: '/blog/',
            template: 'src/containers/blog',
          })

          resolve(routeData)
        })
    })
  })
}
