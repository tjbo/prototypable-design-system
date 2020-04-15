import React from 'react'
import Text from './'
import Section from '../section'
import config from '../../config'

export default {
  title: 'Text',
  component: Text,
}

function makeComponent(font, size, italic = false) {
  return (
    <div>
      <Text font={font} selector="div" size={size} italic={italic}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi mollis
        rhoncus vulputate. Duis quis ante quis erat ultricies condimentum id
        egestas urna.
      </Text>
    </div>
  )
}

function makeSection(title, font, italic) {
  const components = []

  for (const size in config.typography.sizes.desktop) {
    components.push(makeComponent(font, size, italic))
  }

  return <Section title={{ text: title }}>{components}</Section>
}

export const Font1 = () => {
  return (
    <div>
      {makeSection('Normal', 0, false)}
      {makeSection('Italic', 0, true)}
    </div>
  )
}

export const Font2 = () => {
  return (
    <div>
      {makeSection('Normal', 1, false)}
      {makeSection('Italic', 1, true)}
    </div>
  )
}

export const Font3 = () => {
  return (
    <div>
      {makeSection('Normal', 2, false)}
      {makeSection('Italic', 2, true)}
    </div>
  )
}
