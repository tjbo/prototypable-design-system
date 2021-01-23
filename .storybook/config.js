import { addDecorator } from '@storybook/react'
import { PrototypableProvider } from '../src/components/prototypableContext'
import { Box } from '@chakra-ui/react'

addDecorator((s) => (
  <>
    <Box p={18}>
      <PrototypableProvider>{s()}</PrototypableProvider>
    </Box>
  </>
))
