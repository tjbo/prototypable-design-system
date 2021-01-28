import { AspectRatio, Box, Image, Heading, SimpleGrid } from '@chakra-ui/react'
import Section from '../section'
import short from 'short-uuid'
import toProperCase from '../../utils/toProperCase/'
import getSrcSets from '../../prismicUtils/getSrcSets'

function formatTitle(title) {
  return toProperCase(title.replace(/_/g, ' '))
}

function getContent(title, content) {
  return (
    <Box p={6}>
      <Heading as="h5" fontSize={{ base: '1xl', md: '2xl' }} mb={1}>
        {title[0].text}
      </Heading>
      {Object.entries(content).map((_content) => {
        const [key, value] = _content

        if (!key || !value || key === '__typename') {
          return
        }

        return (
          <div key={short.generate()}>
            {formatTitle(key)} : {value}
          </div>
        )
      })}
    </Box>
  )
}

export default function (props) {
  const { background, items } = props

  return (
    <Section {...{ background }}>
      <SimpleGrid minChildWidth="250px" spacingX={6} spacingY={6}>
        {items.map((item) => {
          const { image, title, ...rest } = item

          return (
            <Box
              bg="white"
              border="1px solid"
              borderRadius="lg"
              overflow="hidden"
              borderColor="gray.300"
              key={short.generate()}
            >
              <AspectRatio ratio={16 / 9}>
                <Image
                  src={image.url}
                  srcSet={getSrcSets(['600x338', '960x540'], image)}
                />
              </AspectRatio>

              {getContent(title, rest)}
            </Box>
          )
        })}
      </SimpleGrid>
    </Section>
  )
}
