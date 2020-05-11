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

Article.Sidebar = function ({ children, width = '33%', styling = '' }) {
  let _children = children

  if (styling === 'quote') {
    _children = <Quote>{children}</Quote>
  } else if (styling === 'box') {
    _children = <Box>{children}</Box>
  }

  return <Grid.Col width={width}>{_children}</Grid.Col>
}

export default Article
