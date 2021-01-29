import React from 'react'
import { Box, Grid, GridItem } from '@chakra-ui/react'
import Section from '../section'
import short from 'short-uuid'
import HighlightedBox from '../highlightedBox'

function ArticleWithImages(props) {
  const { background, column1, column2, title1, title2 } = props

  console.log('props', props)

  return (
    <Section background={background}>
      <Grid
        display={{ base: 'flex', md: 'grid' }}
        flexDirection="column-reverse"
        templateColumns="1fr 1fr"
        columnGap={9}
      >
        <GridItem rowStart="1" key={short.generate()}>
          <h3>{title1}</h3>
          {column1}
        </GridItem>
        <GridItem key={short.generate()} marginBottom={9}>
          {column2 && <HighlightedBox>{column2}</HighlightedBox>}
        </GridItem>
      </Grid>
    </Section>
  )
}

export default ArticleWithImages
