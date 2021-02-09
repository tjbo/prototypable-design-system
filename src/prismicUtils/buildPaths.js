const fs = require('fs')

function buildPaths({ PATHS }) {
  const pages = require(PATHS.PAGES)
  const posts = require(PATHS.POSTS)

  const paths = [...pages, ...posts].map((page) => {
    return {
      [page.node._meta.id]: page.node.path,
    }
  })

  fs.writeFile(
    PATHS.PATHS,
    JSON.stringify(Object.assign({}, ...paths)),
    'utf8',
    () => {},
  )
}

module.exports = buildPaths
