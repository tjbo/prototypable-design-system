export default function getPosts(apiUrl, apiToken) {
  return Prismic.getApi(apiUrl, { accessToken: apiToken }).then(function (api) {
    return api
      .query(Prismic.Predicates.at('document.type', 'post'))
      .then((response) => {
        return response.results.map((post) => {
          return post
        })
      })
  })
}
