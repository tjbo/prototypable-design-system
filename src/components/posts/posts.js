import React from 'react'
import { AspectRatio, Box, Image, Heading, SimpleGrid } from '@chakra-ui/react'
import getSrcSets from '../../prismicUtils/getSrcSets'
import Section from '../section'
import { Link, navigate } from '@reach/router'
import short from 'short-uuid'

function Post(props) {
  const { title, image, path } = props

  return (
    <SimpleGrid
      border="1px solid"
      borderRadius="lg"
      overflow="hidden"
      borderColor="gray.300"
      alignItems="start"
      columns={1}
    >
      <AspectRatio ratio={16 / 9} display={{ base: 'none', md: 'block' }}>
        <Image
          cursor="pointer"
          minHeight="150px"
          onClick={() => navigate(path)}
          src={image.url}
          srcSet={getSrcSets(
            ['414x414', '1280x400', '1200x630', '375x375'],
            image,
          )}
        />
      </AspectRatio>
      <Box padding={6} height="100%">
        <Heading as="h4" fontStyle="bold" fontSize={{ base: 'lg', md: 'xl' }}>
          <Link to={path}> {title[0].text || title}</Link>
        </Heading>
      </Box>
    </SimpleGrid>
  )
}

function Posts(props) {
  const { items, title = 'Recent Posts' } = props

  return (
    <Section background="light">
      <h3>{title}</h3>

      <SimpleGrid
        columns={{ base: 1, md: 2, lg: 3 }}
        minChildWidth="250px"
        spacingX={6}
        spacingY={6}
      >
        {items.map((item) => {
          return <Post {...item} key={short.generate()} />
        })}
      </SimpleGrid>
    </Section>
  )
}

export default Posts
