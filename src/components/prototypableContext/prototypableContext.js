import React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import Body from '../body'
import theme from '../theme'

export const Context = React.createContext()

export class PrototypableProvider extends React.Component {
  render() {
    const { children } = this.props
    return (
      <Context.Provider>
        <ChakraProvider resetCSS={false} theme={theme}>
          <Body>{children}</Body>
        </ChakraProvider>
      </Context.Provider>
    )
  }
}

const PrototypableConsumer = Context.Consumer
export { PrototypableConsumer }
export default PrototypableProvider
