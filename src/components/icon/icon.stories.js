import Icon, { icons } from './icon'
import Section from '../section'
import { Box, SimpleGrid } from '@chakra-ui/react'

export default {
  title: 'Icon',
  component: Icon,
}

export function Default() {
  const content = []

  for (let _icon in icons) {
    const icon = (
      <Box>
        <Icon name={_icon} boxSize={24} />
      </Box>
    )

    content.push(icon)
  }
  return (
    <Section inner_width="medium">
      <SimpleGrid>{content}</SimpleGrid>
    </Section>
  )
}
