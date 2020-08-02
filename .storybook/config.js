import { addDecorator } from '@storybook/react'
import Head from '../src/components/head/head'
import { Body } from '../src/'
import FontLoader from '../src/components/fontLoader'

addDecorator((s) => (
  <>
    <Head />
    <FontLoader>
      <Body>{s()}</Body>
    </FontLoader>
  </>
))
