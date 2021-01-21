import getPost from '../getPost'
import getPath from '../getPath'

export default function getPosts(
  apiUrl,
  apiToken,
  { fetchLinks, templatePath },
) {
  return Prismic.getApi(apiUrl, { accessToken: apiToken }).then(function (api) {
    return api
      .query(Prismic.Predicates.at('document.type', 'post'))
      .then((response) => {
        const promises = response.results.map((result) => {
          return getPost(api, result.id, fetchLinks)
        })

        return Promise.all(promises).then((posts) => {
          return posts.map((post) => {
            const {
              data,
              linkedContent,
              first_publication_date,
              id,
              last_publication_date,
            } = post

            if (!data) {
              return
            }

            data.path = getPath(data)

            return {
              ...data,
              first_publication_date,
              linkedContent,
              id,
              last_publication_date,
              template: templatePath,
            }
          })
        })
      })
  })
}
