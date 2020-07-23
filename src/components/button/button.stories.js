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

export const SMSIcon = () => (
  <Section>
    <Button align="center" icon="sms" onClick={action('clicked')}>
      Click on This
    </Button>
  </Section>
)

export const EmailIcon = () => (
  <Section>
    <Button align="center" icon="email" onClick={action('clicked')}>
      Click on This
    </Button>
  </Section>
)
