import { addDecorator } from '@storybook/react'
import Head from '../src/components/head/head'
import { Body } from '../src/'

addDecorator((s) => (
  <>
    <Head />
    <Body>{s()}</Body>
  </>
))
