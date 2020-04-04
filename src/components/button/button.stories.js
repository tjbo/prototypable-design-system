import React from 'react'
import { action } from '@storybook/addon-actions'
import Button from './button'

export default {
  title: 'Button',
  component: Button,
}

export const Default = () => <Button onClick={action('clicked')} />

export const Center = () => (
  <Button align="center" onClick={action('clicked')} />
)

export const Right = () => <Button align="right" onClick={action('clicked')} />

class MockLink extends React.Component {
  render() {
    return <a href=""></a>
  }
}

export const Link = () => (
  <Button link={MockLink} href="/thing" onClick={action('clicked')} />
)
