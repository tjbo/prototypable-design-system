export default function getPost(api, id, fetchLinks) {
  return api
    .query(Prismic.Predicates.at('document.id', id))
    .then((response) => {
      const { data } = response.results[0]

      const contentWithLinks = data.body1.filter((slice) => {
        return slice.slice_type === 'linked_section'
      })

      const ids = contentWithLinks.reduce((accumulator, slice) => {
        if (slice.slice_type === 'linked_section') {
          return [...accumulator, slice.primary.body2.id]
        }
        return accumulator
      }, new Array())

      return api.getByIDs(ids, { fetchLinks }).then((response) => {
        const sections = response.results
        console.log('stuff', sections)
        return {
          data,
          id,
          linkedContent: sections,
        }
      })
    })
}
