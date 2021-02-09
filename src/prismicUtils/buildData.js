#!/usr/bin/env node
const CWD = process.cwd()
const fs = require('fs')
const prismic = require('prismic-javascript')
const { PrismicLink } = require('apollo-link-prismic')
const {
  InMemoryCache,
  IntrospectionFragmentMatcher,
} = require('apollo-cache-inmemory')
const ApolloClient = require('apollo-client').default
const args = require('args-parser')(process.argv)

const buildDeals = require('./buildDeals')
const buildPages = require('./buildPages')
const buildPaths = require('./buildPaths')
const buildPosts = require('./buildPosts')
const buildPostsList = require('./buildPostsList')
const buildSchema = require('./buildSchema')

if (!fs.existsSync(`${CWD}/prototypable.js`)) {
  console.error('You need a prototypable.js config file.')
  return
}

const {
  PRISMIC: { API_TOKEN, API_URL, GRAPHQL_URL, GRAPHQL_TYPES_URL },
} = require(`${CWD}/prototypable.js`)

const DIR = `${CWD}/data`

const PATHS = {
  DEALS: `${DIR}/deals.json`,
  FRAGMENTS: `${DIR}/fragmentTypes.json`,
  PATHS: `${DIR}/paths.json`,
  PAGES: `${DIR}/pages.json`,
  POSTS: `${DIR}/posts.json`,
  POSTS_LIST: `${DIR}/postsList.json`,
}

if (!fs.existsSync(DIR)) {
  fs.mkdirSync(DIR)
}

function getPrismicRef() {
  return prismic
    .getApi(API_URL, {
      accessToken: API_TOKEN,
    })
    .then((response) => {
      const ref = response.data.refs.find((r) => r.id === 'master')
      if (!ref) {
        return
      }
      return ref.ref
    })
}

getPrismicRef().then((ref) => {
  buildSchema({
    API_TOKEN,
    PATH: PATHS.FRAGMENTS,
    GRAPHQL_TYPES_URL,
    ref,
  }).then(() => {
    const fragmentTypes = require(PATHS.FRAGMENTS)

    const fragmentMatcher = new IntrospectionFragmentMatcher({
      introspectionQueryResultData: fragmentTypes,
    })

    const client = new ApolloClient({
      link: PrismicLink({
        uri: GRAPHQL_URL,
        accessToken: API_TOKEN,
      }),
      cache: new InMemoryCache({ fragmentMatcher }),
    })

    const isArgs = !!Object.values(args).length

    let requests = []

    if (!isArgs || args.posts) {
      requests.push(buildPosts({ client, PATH: PATHS.POSTS }))
    }

    if (!isArgs || args.pages) {
      requests.push(buildPages({ client, PATH: PATHS.PAGES }))
    }

    if (!isArgs || args.postsList) {
      requests.push(buildPostsList({ client, PATH: PATHS.POSTS_LIST }))
    }

    if (!isArgs || args.deals) {
      requests.push(buildDeals({ client, PATH: PATHS.DEALS }))
    }

    Promise.all(requests).then(() => {
      buildPaths({ PATHS })
      console.log('Data finished building.')
    })
  })
})
