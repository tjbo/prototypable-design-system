import React from 'react'
import { Box, Text } from '@chakra-ui/react'
import Section from '../section'

function Article(props) {
  const { background, subTitle, title1, body } = props

  return (
    <Section background={background} inner_width="medium-plus">
      <Text as="h2" mb={1}>
        {title1}
      </Text>
      {subTitle && <Text as="h3">{subTitle}</Text>}
      <Box>{body}</Box>
    </Section>
  )
}

export default Article
