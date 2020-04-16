import { ArticleWrapperUI, Col1, Col2 } from './article.css'

export default function Article({ body, sidebar }) {
  if (sidebar) {
    return (
      <ArticleWrapperUI>
        <Col1 dangerouslySetInnerHTML={{ __html: body.text }} />
        <Col2 dangerouslySetInnerHTML={{ __html: sidebar.text }} />
      </ArticleWrapperUI>
    )
  } else {
    return <div dangerouslySetInnerHTML={{ __html: body.text }} />
  }
}
