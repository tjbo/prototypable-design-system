import getPost from './getPost'
import getPath from './getPath'
import chalk from 'chalk'
const log = console.log

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
          log(chalk.green('Building prismic posts'))
          log(chalk.green('-----------------------------------'))
          const _posts = posts.map((post) => {
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

            log(chalk.blue(`Build post:`) + chalk.red(`${data.path}`))

            return {
              ...data,
              first_publication_date,
              linkedContent,
              id,
              last_publication_date,
              template: templatePath,
            }
          })

          log(chalk.green('-----------------------------------'))
          log(chalk.green(`Built ${_posts.length} posts \n`))

          return _posts
        })
      })
  })
}
