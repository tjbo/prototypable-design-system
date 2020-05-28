export default function getPosts(apiUrl, apiToken, type) {
  return new Promise((resolve) => {
    return Prismic.getApi(apiUrl, { accessToken: apiToken }).then(function (
      api,
    ) {
      return api
        .query(Prismic.Predicates.at('document.type', type))
        .then((response) => {
          resolve(response.results)
        })
    })
  })
}
