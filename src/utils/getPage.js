var Prismic = require('prismic-javascript')

export default function getPage(api, id, fetchLinks) {
  return api
    .query(Prismic.Predicates.at('document.id', id))
    .then((response) => {
      const { data } = response.results[0]
      const ids = data.body.map((section) => {
        return section.section.id
      })
      return api.getByIDs(ids, { fetchLinks }).then((response) => {
        const sections = response.results
        return {
          ...data,
          body: sections,
        }
      })
    })
}
