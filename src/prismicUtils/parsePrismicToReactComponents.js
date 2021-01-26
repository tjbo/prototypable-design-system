import {
  Box,
  Table,
  Tbody,
  Tr,
  Td,
  List,
  ListItem,
  UnorderedList,
  Stack,
  Text,
} from '@chakra-ui/react'
import JsxParser from 'react-jsx-parser'
import Article from '../components/article'
import ResponsiveImage from '../components/responsiveImage'
import Grid from '../components/grid'
import Icon from '../components/icon'
import HighlightedBox from '../components/highlightedBox'
import short from 'short-uuid'
import getLink from './getLink'
import Button from '../components/button'
import QuickPoint from '../components/quickPoint'
import { Link } from '@reach/router'

function linkResolver(paths, doc) {
  return getLink(doc, paths)
}

const components = {
  a: (props) => {
    console.log(props)
    const { href, children } = props
    if (href[0] === '/') {
      return <Link to={href}>{children}</Link>
    }
    return <a {...props} />
  },
  Article,
  Box,
  Button,
  Grid,
  HighlightedBox,
  Icon,
  ResponsiveImage,
  Table,
  Td,
  Tr,
  Tbody,
  List,
  ListItem,
  UnorderedList,
  Stack,
  Text,
  QuickPoint,
}

// takes prismic data, then parses the components to react components and adds a wrapper
function parsePrismicToReactComponents(text, paths) {
  if (text.type === 'preformatted') {
    return (
      <JsxParser
        components={components}
        jsx={text.text}
        key={short.generate()}
      ></JsxParser>
    )
  }

  // if type isn't preformatted we just use global styles
  const parsePrismic = PrismicReactJs.RichText.render(
    text,
    linkResolver.bind(null, paths),
  )
  return parsePrismic
}

export default parsePrismicToReactComponents
