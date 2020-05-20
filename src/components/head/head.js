import GlobalStyles from './styles.css'
import WebfontLoader from '@dr-kobros/react-webfont-loader'

function WithFontLoader() {
  if (typeof window !== 'undefined') {
    const config = {
      google: {
        families: ['PT Serif:400,700', 'Roboto:500,700'],
      },
    }
    return (
      <WebfontLoader config={config}>
        <GlobalStyles />
      </WebfontLoader>
    )
  }

  return <GlobalStyles />
}

export default function () {
  return (
    <React.Fragment>
      <WithFontLoader />
    </React.Fragment>
  )
}
