import { addDecorator } from '@storybook/react'
import Head from '../src/components/head/head'

addDecorator((s) => (
  <>
    <Head />
    {s()}
  </>
))
