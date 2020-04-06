import React from 'react'
import Faq from './faq'

export default {
  title: 'Faq',
  component: Faq,
}

export const Default = () => (
  <Faq
    data={{
      title: 'What kind of design library is this?',
      content: 'One I like to work on.',
    }}
  />
)
