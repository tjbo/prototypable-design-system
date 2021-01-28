import React from 'react'
import { Box, Grid, GridItem } from '@chakra-ui/react'
import Section from '../section'
import short from 'short-uuid'

function ArticleWithImages(props) {
  const { background, column1, column2, reverse } = props

  const col1Start = reverse ? 2 : 1
  const col2Start = reverse ? 1 : 2

  return (
    <Section background={background}>
      <Grid
        display={{ base: 'flex', md: 'grid' }}
        flexDirection="column-reverse"
        templateColumns="1fr 1fr"
        columnGap={9}
      >
        <GridItem rowStart="1" colStart={col1Start} key={short.generate()}>
          {column1}
        </GridItem>
        <GridItem
          rowStart="1"
          colStart={col2Start}
          key={short.generate()}
          marginBottom={9}
        >
          {column2}
        </GridItem>
      </Grid>
    </Section>
  )
}

export default ArticleWithImages
