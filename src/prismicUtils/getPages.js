var Prismic = require('prismic-javascript')
import getPage from './getPage'
import getPathFromParent from './getPathFromParent'
import chalk from 'chalk'
const log = console.log

export default function getPages(apiEndpoint, apiToken, options) {
  return Prismic.getApi(apiEndpoint, { accessToken: apiToken }).then((api) => {
    return api
      .query(Prismic.Predicates.at('document.type', 'page'))
      .then((response) => {
        const promises = response.results.map((result) => {
          return getPage(api, result.id, options.fetchLinks)
        })
        return Promise.all(promises).then((pages) => {
          log(chalk.green('Building prismic pages'))
          log(chalk.green('-----------------------------------'))

          const _pages = pages
            .map((pageData) => {
              pageData.dynamicData = options.insertData.find((data) => {
                if (data.path === pageData.path) {
                  return data.data
                }
              })
              if (pageData.template && pageData.template !== 'default') {
                pageData.template = `src/pages/${pageData.template}`
              } else {
                pageData.template = 'src/pages/page'
              }
              return pageData
            })
            .map((page) => {
              let path = '/'

              if (page && page.path !== '/') {
                const _path = getPathFromParent(page, pages)
                path = _path
              }
              if (page) {
                page.slug = path
                return page
              }
            })
            .map((page) => {
              if (page) {
                page.path = page.slug
                log(chalk.blue(`Build page:`) + chalk.red(`${page.path}`))

                return page
              }
            })
          log(chalk.green('-----------------------------------'))
          log(chalk.green(`Built ${pages.length} pages \n`))
          return _pages
        })
      })
  })
}
