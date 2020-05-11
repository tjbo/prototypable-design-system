import { BoxWrapper } from './box.css'

export default class Box extends React.Component {
  render() {
    return <BoxWrapper>{this.props.children}</BoxWrapper>
  }
}
