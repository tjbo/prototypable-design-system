#!/usr/bin/env node
const CWD = process.cwd()
const fs = require('fs')
const prismic = require('prismic-javascript')
const buildSchema = require('./buildSchema')
const buildPosts = require('./buildPosts')
const { PrismicLink } = require('apollo-link-prismic')
const {
  InMemoryCache,
  IntrospectionFragmentMatcher,
} = require('apollo-cache-inmemory')
const ApolloClient = require('apollo-client').default

const buildPages = require('./buildPages')
const buildPostsList = require('./buildPostsList')

if (!fs.existsSync(`${CWD}/prototypable.js`)) {
  console.error('You need a prototypable.js config file.')
  return
}

const {
  PRISMIC: { API_TOKEN, API_URL },
} = require(`${CWD}/prototypable.js`)

const DIR = `${CWD}/data`

const PATHS = {
  FRAGMENTS: `${DIR}/fragmentTypes.json`,
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
  buildSchema({ API_TOKEN, PATH: PATHS.FRAGMENTS, ref }).then(() => {
    console.log('body')
    const fragmentTypes = require(PATHS.FRAGMENTS)

    const fragmentMatcher = new IntrospectionFragmentMatcher({
      introspectionQueryResultData: fragmentTypes,
    })

    const client = new ApolloClient({
      link: PrismicLink({
        uri: 'https://cresentlenders.prismic.io/graphql',
        accessToken: API_TOKEN,
      }),
      cache: new InMemoryCache({ fragmentMatcher }),
    })

    const pages = buildPages({ client, PATH: PATHS.PAGES })
    const posts = buildPosts({ client, PATH: PATHS.POSTS })
    const postsList = buildPostsList({ client, PATH: PATHS.POSTS_LIST })

    Promise.all([pages, posts]).then(() => {
      console.log('stuff built')
    })
  })
})
