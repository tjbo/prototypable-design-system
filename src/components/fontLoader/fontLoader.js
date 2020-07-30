export default class FontLoader extends React.Component {
  state = {
    isReady: false,
  }

  componentWillMount() {
    if (typeof window !== 'undefined' && 'fonts' in document) {
      var font1 = new FontFace(
        'Roboto',
        "url(/fonts/roboto-v20-latin-700.woff2) format('woff2'), url(/fonts/roboto-v20-latin-700.woff) format('woff')",
        { fontWeight: 700 },
      )

      var font2 = new FontFace(
        'Roboto',
        "url(/fonts/roboto-v20-latin-500.woff2) format('woff2'), url(/fonts/roboto-v20-latin-500.woff) format('woff')",
        { fontWeight: 400 },
      )

      Promise.all([font1.load(), font2.load()]).then((loadedFonts) => {
        // Render them at the same time
        loadedFonts.forEach((font) => {
          document.fonts.add(font)
          this.setState({ isReady: true })
        })
      })
    } else {
      this.setState({ isReady: true })
    }
  }

  render() {
    const { children } = this.props
    const { isReady } = this.state

    return !isReady ? null : children
  }
}
