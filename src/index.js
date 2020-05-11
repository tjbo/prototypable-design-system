export { default as Article } from './components/article'
export { default as Banner } from './components/banner/banner'
export { default as Body } from './components/body'
export { default as Button } from './components/button/button'
export { default as Card } from './components/card/'
export { default as Cards } from './components/cards/'
export { default as Faq } from './components/faq/faq'
export { default as Footer } from './components/footer/footer'
export { default as Grid } from './components/grid'
export { default as Header } from './components/header/header'
export { default as Jumbotron } from './components/jumbotron'
export { default as LoadingScreen } from './components/loadingScreen'
export { default as Quote } from './components/quote'
export { default as Section } from './components/section/'
export { default as ScrollToTop } from './components/scrollToTop/'
export { default as Head } from './components/head/head'

import getComponent from './utils/getComponent'
import getPages from './utils/getPages'
import getPosts from './utils/getPosts'
import makePixelValue from './utils/makePixelValue'

export const utils = {
  getComponent,
  getPages,
  getPosts,
  makePixelValue,
}
