import getPost from '../getPost'

export default function getPosts(apiUrl, apiToken, { fetchLinks }) {
  return Prismic.getApi(apiUrl, { accessToken: apiToken }).then(function (api) {
    return api
      .query(Prismic.Predicates.at('document.type', 'post'))
      .then((response) => {
        const promises = response.results.map((result) => {
          return getPost(api, result.id, fetchLinks)
        })

        return Promise.all(promises).then((posts) => {
          return posts
        })
      })
  })
}
