import GlobalStyles from './styles.css'
import WebfontLoader from '@dr-kobros/react-webfont-loader'

const config = {
  google: {
    families: ['Roboto:500,700', 'PT Serif:400,700'],
  },
}
export default function () {
  return (
    <React.Fragment>
      <WebfontLoader config={config}>
        <GlobalStyles />
      </WebfontLoader>
    </React.Fragment>
  )
}
