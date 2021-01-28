import React from 'react'
import { AspectRatio, Box, Image, Heading, SimpleGrid } from '@chakra-ui/react'
import getSrcSets from '../../prismicUtils/getSrcSets'
import Section from '../section'
import { Link, navigate } from '@reach/router'
import short from 'short-uuid'

function Post(props) {
  const { title, image, _path } = props

  return (
    <Box
      border="1px solid"
      borderRadius="lg"
      overflow="hidden"
      borderColor="gray.300"
    >
      <AspectRatio ratio={16 / 9}>
        <Image
          cursor="pointer"
          minHeight="150px"
          onClick={() => navigate(_path)}
          src={image.url}
          srcSet={getSrcSets(
            ['414x414', '1280x400', '1200x630', '375x375'],
            image,
          )}
        />
      </AspectRatio>
      <Box padding={6}>
        <Heading as="h4" size="md">
          <Link to={_path}> {title[0].text}</Link>
        </Heading>
      </Box>
    </Box>
  )
}

function Posts(props) {
  const { items } = props

  return (
    <Section>
      <SimpleGrid minChildWidth="250px" spacingX={6} spacingY={6}>
        {items.map((item) => {
          return <Post {...item} key={short.generate()} />
        })}
      </SimpleGrid>
    </Section>
  )
}

export default Posts
