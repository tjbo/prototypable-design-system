export default function getPosts(apiUrl, apiToken) {
  return new Promise((resolve) => {
    return Prismic.getApi(apiUrl, { accessToken: apiToken }).then(function (
      api,
    ) {
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
              data: { image, meta, title },
              id,
            } = post
            return { id, image, path: meta[0].slug, title }
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
