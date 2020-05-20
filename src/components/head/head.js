import GlobalStyles from './styles.css'

const config = {
  google: {
    families: ['Roboto:500,700', 'PT Serif:400,700'],
  },
}

function withFontLoader(component) {
  if (typeof window !== 'undefined') {
    const WebfontLoader = require('@dr-kobros/react-webfont-loader')
    return <WebfontLoader config={config}>{component}</WebfontLoader>
  }
  return component
}

export default function () {
  return <React.Fragment>{withFontLoader(<GlobalStyles />)}</React.Fragment>
}
