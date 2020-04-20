var Prismic = require('prismic-javascript')

export default function getPage(apiUrl, page) {
  return Prismic.getApi(apiUrl).then(function (api) {
    return api
      .query(Prismic.Predicates.at('document.id', page.id))
      .then((response) => {
        const { data } = response.results[0]

        const meta = {
          title: data.title[0].text,
          ...data.meta[0],
        }
        const ids = data.body.map((section) => {
          return section.section.id
        })
        return api.getByIDs(ids).then(function (_response) {
          const content = _response.results.map((result) => {
            const { data, id, type } = result

            data.body = data.body[0]

            if (data.layout_style !== 'banner') {
              data.title = data.title[0]
            }

            if (data.sidebar) {
              data.sidebar = data.sidebar[0]
            }

            return {
              data,
              id,
              type,
            }
          })
          return { content, meta, page }
        })
      })
  })
}
