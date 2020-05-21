import { ContentUI, SidebarUI } from './article.css'
import Grid from '../grid/'
import Quote from './quote/'
import Box from './box/'

function Article({ children, collapse }) {
  return <Grid collapse={collapse}>{children}</Grid>
}

Article.Content = function ({ children, width = '64%' }) {
  return (
    <Grid.Col width={width}>
      <ContentUI>{children}</ContentUI>
    </Grid.Col>
  )
}

Article.Sidebar = function ({ children, width = '32%', styling = '' }) {
  let _children = children

  if (styling === 'quote') {
    _children = <Quote>{children}</Quote>
  }

  return <Grid.Col width={width}>{_children}</Grid.Col>
}

Article.Box = function ({ children }) {
  return <Box>{children}</Box>
}

export default Article
