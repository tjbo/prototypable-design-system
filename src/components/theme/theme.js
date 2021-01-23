import { extendTheme, theme } from '@chakra-ui/react'

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

const { fontSizes: fs } = theme

const global = {
  body: {
    fontSize: [fs.lg],
  },
  a: {
    color: 'blue.800',
    hover: {
      textDecoration: 'underline',
    },
  },
  p: {
    marginBottom: theme.space[6],
  },
  ul: {
    marginLeft: theme.space[12],
    marginBottom: theme.space[6],
  },

  h1: {
    // you can also use responsive styles
    fontSize: [fs['3xl'], fs['4xl'], fs['5xl'], fs['6xl']],
    fontWeight: 'bold',
    lineHeight: '110%',
    letterSpacing: '-2%',
    marginBottom: theme.space[6],
  },
  h2: {
    fontSize: [fs['xl'], fs['3xl'], fs['4xl'], fs['5xl']],
    fontWeight: 'semibold',
    lineHeight: '110%',
    letterSpacing: '-1%',
    marginBottom: theme.space[6],
  },
  h3: {
    fontSize: [fs['xl'], fs['4xl']],
    fontWeight: 'semibold',
    lineHeight: '120%',
    letterSpacing: '-1%',
    marginBottom: theme.space[6],
  },
  h4: {
    fontSize: [fs['xl'], fs['xl1']],
  },
  h5: {
    fontSize: [fs['xl'], fs['xl1']],
  },
}

// Version 1: Using objects
export default extendTheme({
  config,
  colors,
  jumbotron,
  shadows,
  styles: {
    global,
  },
})

// export default extendTheme({ config, colors, jumbotron, shadows, textStyles })
