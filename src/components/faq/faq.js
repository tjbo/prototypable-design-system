import { DetailsUI, SummaryUI } from './faq.css'

class Faq extends React.Component {
  state = {
    isOpen: false,
  }

  toggle = (event) => {
    event.preventDefault()
    this.setState({ isOpen: !this.state.isOpen })
  }

  render() {
    const { children, title } = this.props
    const { isOpen } = this.state

    console.log('render')
    return (
      <DetailsUI open={this.state.isOpen}>
        <SummaryUI>
          <h4 onClick={this.toggle}>{title}</h4>
        </SummaryUI>
        {isOpen && children}
      </DetailsUI>
    )
  }
}

export default Faq
