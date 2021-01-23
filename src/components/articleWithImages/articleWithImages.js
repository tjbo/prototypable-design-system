import React from 'react'
import { Box, Flex } from '@chakra-ui/react'
import Section from '../section'
import short from 'short-uuid'

function ArticleWithImages(props) {
  const { background, content, reverse } = props

  if (reverse) {
    content = content.reverse()
  }

  console.log('content', content)

  return (
    <Section background={background}>
      <Flex>
        <Box key={short.generate()} width="50%">
          {content[0]}
        </Box>
        <Box key={short.generate()} width="50%">
          {content[1]}
        </Box>
      </Flex>
    </Section>
  )
}

export default ArticleWithImages
