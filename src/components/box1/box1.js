import { BoxWrapper } from './box1.css'

export default class Box1 extends React.Component {
  render() {
    return (
      <BoxWrapper
        dangerouslySetInnerHTML={{ __html: this.props.sidebar.text }}
      />
    )
  }
}
