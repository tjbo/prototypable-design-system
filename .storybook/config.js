import { addDecorator } from '@storybook/react'
import Head from '../src/components/head/head'
import { Body } from '../src/'
import FontLoader from '../src/components/fontLoader'
import { PrototypableProvider } from '../src/components/prototypableContext'

addDecorator((s) => (
  <>
    <Head />
    <FontLoader>
      <PrototypableProvider>
        <Body>{s()}</Body>
      </PrototypableProvider>
    </FontLoader>
  </>
))
