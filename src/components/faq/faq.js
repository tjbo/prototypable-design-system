import { DetailsUI, SummaryUI } from './faq.css'

function Faq({ children }) {
  return children
}

Faq.Details = class extends React.Component {
  state = {
    isOpen: false,
  }

  toggle = (event) => {
    event.preventDefault()
    this.setState({ isOpen: !this.state.isOpen })
  }

  render() {
    const { children } = this.props
    return (
      <DetailsUI onClick={this.toggle} open={this.state.isOpen}>
        {children}
      </DetailsUI>
    )
  }
}

Faq.Summary = function ({ children }) {
  return <SummaryUI>{children}</SummaryUI>
}

export default Faq
