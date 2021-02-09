import {
  Box,
  Divider,
  Flex,
  Table,
  Tbody,
  Tr,
  Td,
  List,
  ListItem,
  UnorderedList,
  SimpleGrid,
  Stack,
  Text,
} from '@chakra-ui/react'
import JsxParser from 'react-jsx-parser'
import Icon from '../components/icon'
import HighlightedBox from '../components/highlightedBox'
import short from 'short-uuid'
import Button from '../components/button'
import QuickPoint from '../components/quickPoint'
import { Link } from '@reach/router'
import { RichText } from 'prismic-reactjs'

const components = {
  a: (props) => {
    const { href, children } = props
    if (href[0] === '/') {
      return <Link to={href}>{children}</Link>
    }
    return <a {...props} />
  },
  Box,
  Button,
  Divider,
  Flex,
  HighlightedBox,
  Icon,
  Table,
  Td,
  Tr,
  Tbody,
  List,
  ListItem,
  UnorderedList,
  SimpleGrid,
  Stack,
  Text,
  QuickPoint,
}

function customLink(type, element, content, paths) {
  const { link_type, target, id, url } = element.data
  if (link_type === 'Web') {
    return (
      <a href={url} target={target}>
        {content}
      </a>
    )
  } else {
    const to = element.data.url || paths[element.data.id]
    return <Link to={to}>{content}</Link>
  }
}

// takes prismic data, then parses the components to react components and adds a wrapper
function parsePrismicToReactComponents(text, paths) {
  if (!text) {
    return null
  }

  if (text.type === 'preformatted') {
    return (
      <JsxParser
        components={components}
        jsx={text.text}
        key={short.generate()}
      ></JsxParser>
    )
  }

  // if text isn't preformatted
  return (
    <RichText
      render={text}
      serializeHyperlink={(type, element, content) =>
        customLink(type, element, content, paths)
      }
    />
  )
}

export default parsePrismicToReactComponents
