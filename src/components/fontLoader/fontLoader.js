export default class FontLoader extends React.Component {
  state = {
    isReady: false,
  }

  componentWillMount() {
    if (typeof window !== 'undefined') {
      var FontFaceObserver = require('fontfaceobserver')
      const font = new FontFaceObserver('Roboto')
      font.load().then(() => {
        this.setState({ isReady: true })
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