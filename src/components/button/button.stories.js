import React from 'react'
import { action } from '@storybook/addon-actions'
import Button from './button'
import Section from '../section'

export default {
  title: 'Button',
  component: Button,
}

export const Default = () => (
  <Section>
    <Button align="center" onClick={action('clicked')}>
      Click on This
    </Button>
  </Section>
)

export const RouterLink = () => (
  <Section>
    <Button to="/about/contact/">
      <a href="/">Send Us An SMS</a>
    </Button>
  </Section>
)
