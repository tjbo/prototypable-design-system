export { default as Article } from './components/article'
export { default as Banner } from './components/banner/banner'
export { default as Body } from './components/body'
export { default as BlockQuote } from './components/blockQuote'
export { default as BreadCrumb } from './components/breadCrumb'
export { default as Button } from './components/button/button'
export { default as Card } from './components/card/'
export { default as Cards } from './components/cards/'
export { default as CardsSection } from './components/cardsSection'
export { default as Content } from './components/content'
export { default as Faq } from './components/faq/faq'
export { default as Form } from './components/form/form'
export { default as Footer } from './components/footer/footer'
export { default as FontLoader } from './components/fontLoader'
export { default as Grid } from './components/grid'
export { default as Header } from './components/header/header'
export { default as Icon } from './components/icon'
export { default as Image } from './components/image/'
export { default as Jumbotron } from './components/jumbotron'
export { default as LoadingScreen } from './components/loadingScreen'
export { default as Quote } from './components/quote'
export { default as Section } from './components/section'
export { default as ScrollToTop } from './components/scrollToTop'
export { default as Title } from './components/title'
export { default as Head } from './components/head/head'

import getComponentsFromSlices from './utils/getComponentsFromSlices'
import getContentByType from './utils/getContentByType'
import getPages from './utils/getPages'
import getPosts from './utils/getPosts'
import getMetaTags from './utils/getMetaTags'
import getSrcSets from './utils/getSrcSets'
import makePixelValue from './utils/makePixelValue'
import useScript from './utils/useScript'

// this needs to be exported like this, otherwise weird transpile errors from rollup
export const utils = {
  getComponentsFromSlices,
  getContentByType,
  getMetaTags,
  getPages,
  getPosts,
  getSrcSets,
  makePixelValue,
  useScript,
}
