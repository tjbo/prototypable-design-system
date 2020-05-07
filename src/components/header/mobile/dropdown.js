import { DropdownUI, LinkArrowUI } from './dropdown.css'
import { LinkUI } from './mobile.css'

export default class Dropdown extends React.Component {
  state = {
    isOpen: true,
  }

  toggleMenu = (bool) => {
    this.setState({
      isOpen: bool,
    })
  }

  componentDidMount() {
    // this allows react static to do a "first render"
    this.setState({ isOpen: false })
  }

  render() {
    const { children, isParentMenuOpen, text } = this.props
    const { isOpen } = this.state
    return (
      <DropdownUI>
        <LinkUI
          isOpen={isOpen}
          onClick={() => {
            this.toggleMenu(!isOpen)
          }}
        >
          {text}
          <LinkArrowUI isOpen={isOpen} />
        </LinkUI>
        {
          <ul>
            {isOpen &&
              React.Children.map(children, (child) => {
                return (
                  <li>
                    {React.cloneElement(child, {
                      onClick: (event) => {
                        isParentMenuOpen && this.props.closeParentMenu()
                        event.nativeEvent.stopPropagation()
                      },
                    })}
                  </li>
                )
              })}
          </ul>
        }
      </DropdownUI>
    )
  }
}
