import { ContentUI, SidebarUI } from './article.css'
import Grid from '../grid/'
import Quote from './quote/'
import Box from './box/'

function Article({ children, collapse }) {
  return <Grid collapse={collapse}>{children}</Grid>
}

Article.Content = function ({ children, width = '66%' }) {
  return (
    <Grid.Col width={width}>
      <ContentUI>{children}</ContentUI>
    </Grid.Col>
  )
}

Article.Sidebar = function ({ children, width = '34%' }) {
  let _children = children
  return <Grid.Col width={width}>{_children}</Grid.Col>
}

Article.Box = function ({ children }) {
  return <Box>{children}</Box>
}

Article.Quote = function ({ children }) {
  return <Quote>{children}</Quote>
}

export default Article
