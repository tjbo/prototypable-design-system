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

const custom = {
  images: {
    sizes: {
      jumbotron: [
        '375x375',
        '414x414',
        '1280x400',
        '1366x384',
        '1440x450',
        '1920x540',
      ],
    },
  },
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
    marginTop: theme.space[6],
    marginBottom: theme.space[6],
  },
  li: {
    marginTop: theme.space[4],
    marginBottom: theme.space[4],
  },
  ul: {
    marginLeft: theme.space[12],
    marginBottom: theme.space[6],
  },

  ol: {
    marginLeft: theme.space[12],
    marginBottom: theme.space[6],
  },
  h1: {
    // you can also use responsive styles
    fontSize: [fs['2xl'], fs['3xl'], fs['4xl'], fs['5xl']],
    fontWeight: 'bold',
    lineHeight: '110%',
    letterSpacing: '-2%',
    marginBottom: theme.space[6],
  },
  h2: {
    fontSize: [fs['xl'], fs['3xl']],
    fontWeight: 'semibold',
    lineHeight: '110%',
    letterSpacing: '-1%',
    marginBottom: theme.space[6],
  },
  h3: {
    fontSize: [fs['xl'], fs['2xl']],
    fontWeight: 'semibold',
    lineHeight: '120%',
    letterSpacing: '-1%',
    marginBottom: theme.space[6],
  },
  h4: {
    fontSize: [fs['xl'], fs['xl2']],
    lineHeight: '110%',
  },
  h5: {
    fontSize: [fs['xl'], fs['xl1']],
  },
  '.highlighted-text-green': {
    color: theme.colors.green['800'],
    fontStyle: 'italic',
    fontWeight: 600,
  },
  '.highlighted-text-blue': {
    color: theme.colors.blue['800'],
    fontStyle: 'italic',
    fontWeight: 600,
  },
  '.highlighted-text-red': {
    color: theme.colors.red['800'],
    fontStyle: 'italic',
    fontWeight: 600,
  },
}

// Version 1: Using objects
export default extendTheme({
  config,
  colors,
  custom,
  shadows,
  styles: {
    global,
  },
})
