// import { ContentUI, SidebarUI } from './article.css'
import Quote from './quote/'
// import Box from './box/'
import Facts from './facts'
import Sticky from './sticky'
import { Flex, Box } from '@chakra-ui/react'

function Article({ children }) {
  return <Flex>{children}</Flex>
}

Article.Content = function ({ children, width = '66%' }) {
  return <Box marginRight={6}>{children}</Box>
}

Article.Sidebar = function ({ children, width = '34%' }) {
  return <Box>{children}</Box>
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
      <h3 className="italic">{children}</h3>
    </Quote>
  )
}

export default Article
