import { ContentUI, SidebarUI } from './article.css'
import Grid from '../grid/'
import Quote from './quote/'
import Box from './box/'
import Facts from './facts'
import Title from '../title'
import Sticky from './sticky'

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

Article.Facts = function ({ children, title }) {
  return <Facts title={title}>{children}</Facts>
}

Article.StickySidebar = function ({ children }) {
  return <Sticky>{children}</Sticky>
}

Article.Quote = function ({ children }) {
  return (
    <Quote>
      <Title as="h3" fontStyle="italic">
        {children}
      </Title>
    </Quote>
  )
}

export default Article
