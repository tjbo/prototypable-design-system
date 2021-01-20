import { extendTheme } from '@chakra-ui/react'

const config = {
  initialColorMode: 'light',
  useSystemColorMode: false,
}

const colors = {
  transparent: 'transparent',
  black: '#000',
  white: '#fff',
}

const shadows = {
  outline: `0 0 0 1px #000`,
}

export default extendTheme({ config, colors, shadows })
