var Prismic = require('prismic-javascript')

export default function getPage(api, id, fetchLinks) {
  return api
    .query(Prismic.Predicates.at('document.id', id))
    .then((response) => {
      const { data } = response.results[0]

      const contentWithLinks = data.body1.filter((slice) => {
        return (
          slice.slice_type === 'linked_component_section' ||
          slice.slice_type === 'article_w_linked' ||
          slice.slice_type === 'cards'
        )
      })

      const ids = contentWithLinks.reduce((accumulator, slice) => {
        if (slice.slice_type === 'linked_component_section') {
          return [...accumulator, slice.primary.body2.id]
        } else if (slice.slice_type === 'cards') {
          const _ids = slice.items.map((item) => {
            return item.cards.id
          })
          return accumulator.concat(_ids)
        } else if (slice.slice_type === 'article_w_linked') {
          return [...accumulator, slice.primary.linked_sidebar_section.id]
        }
        return accumulator
      }, new Array())

      return api.getByIDs(ids, { fetchLinks }).then((response) => {
        const sections = response.results
        return {
          ...data,
          linkedContent: sections,
        }
      })
    })
}
