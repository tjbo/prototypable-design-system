import { extendTheme } from '@chakra-ui/react'

const config = {
  initialColorMode: 'light',
  useSystemColorMode: false,
}

const colors = {
  transparent: 'transparent',
  black: '#000',
  white: '#fff',
  blue: {
    800: '#000080',
  },
  red: {
    600: '#D40000',
  },
}

const jumbotron = {
  ad: ['580x327', '870x490', '1160x652'],
  half: ['375x375', '414x414', '1280x400', '1366x384', '1440x450', '1920x540'],
  full: ['375×667', '414×816', '360×780', '1366×768', '1440×900', '1920×1080'],
}

const shadows = {
  outline: `0 0 0 1px #000`,
}

export default extendTheme({ config, colors, jumbotron, shadows })
