export default function getPosts(apiUrl, apiToken) {
  return new Promise((resolve) => {
    return Prismic.getApi(apiUrl, { accessToken: apiToken }).then(function (
      api,
    ) {
      return api
        .query(Prismic.Predicates.at('document.type', 'post'))
        .then((response) => {
          const routeData = response.results.map((result) => {
            const { data, id, first_publication_date } = result
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
              path: data.slug,
              template: 'src/containers/_post',
            }
          })

          const list = response.results.map(({ data, id }) => {
            const { image, title, slug } = data
            return {
              id,
              image,
              path: slug,
              title,
            }
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
