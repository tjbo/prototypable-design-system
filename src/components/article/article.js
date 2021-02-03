import React from 'react'
import { Box } from '@chakra-ui/react'
import Section from '../section'

function Article(props) {
  const { background, subTitle, title1, body } = props

  return (
    <Section background={background} inner_width="medium-plus">
      <h3>{title1}</h3>
      {subTitle && <h4>{subTitle}</h4>}
      <Box>{body}</Box>
    </Section>
  )
}

export default Article
