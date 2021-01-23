import ArticleWithImages from './articleWithImages'
import { content } from './mock'

export default {
  title: 'Article With Images',
  component: ArticleWithImages,
}

export function Default() {
  return <ArticleWithImages {...{ content }} />
}

export function Reversed() {
  return <ArticleWithImages {...{ content, reverse: true }} />
}
