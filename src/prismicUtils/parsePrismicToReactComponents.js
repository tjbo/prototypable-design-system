import {
  Box,
  Table,
  Tbody,
  Tr,
  Td,
  List,
  ListItem,
  UnorderedList,
  Text,
} from '@chakra-ui/react'
import JsxParser from 'react-jsx-parser'
import Article from '../components/article'
import ResponsiveImage from '../components/responsiveImage'
import Grid from '../components/grid'
import Icon from '../components/icon'
import HighlightedBox from '../components/highlightedBox'
import Line from '../components/line'
import short from 'short-uuid'
import getLink from './getLink'

function linkResolver(paths, doc) {
  return getLink(doc, paths)
}

const components = {
  Article,
  Box,
  Line,
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
  Text,
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
