import {
  NavDropdownUI,
  NavLinkDropdownIconUI,
  NavDropdownDividerUI,
} from './navDropdown.css'

import { NavLinkUI } from './header.css'
import { addListener } from '../head/breakPoints'

class NavDropdown extends React.Component {
  state = {
    breakPoint: 'desktop',
    isOpen: true,
  }

  toggleMenu = (bool) => {
    this.setState({
      isOpen: bool,
    })
  }

  componentDidMount() {
    this.setState({ isOpen: false })
  }

  componentWillUpdate(props, state) {
    if (
      !props.isParentMenuOpen &&
      state.isOpen &&
      state.breakPoint !== 'desktop'
    ) {
      this.toggleMenu(false)
    }
  }

  componentDidMount = () => {
    const breakPoint = addListener(this.onBreakPointChange)
    this.setState({ breakPoint })
  }

  onBreakPointChange = (breakPoint) => {
    this.setState({ breakPoint })
  }

  isDesktop() {
    return this.state.breakPoint === 'desktop'
  }

  render() {
    const { children, text } = this.props
    return (
      <NavDropdownUI isOpen={this.state.isOpen}>
        <NavLinkUI
          onMouseOver={() => {
            this.isDesktop() && this.toggleMenu(true)
          }}
          onClick={() => {
            !this.isDesktop() && this.toggleMenu(!this.state.isOpen)
          }}
        >
          {text}
          <NavLinkDropdownIconUI />
        </NavLinkUI>
        {this.state.isOpen && (
          <ul>
            {React.Children.map(children, (child) => (
              <li>
                {React.cloneElement(child, {
                  onClick: (event) => {
                    if (this.isDesktop()) {
                      event.persist()
                      setTimeout(() => {
                        event.nativeEvent.stopPropagation()
                        this.toggleMenu(false)
                      }, 1)
                    } else {
                      this.props.closeParentMenu()
                    }
                  },
                })}
              </li>
            ))}
          </ul>
        )}
      </NavDropdownUI>
    )
  }
}

NavDropdown.Divider = NavDropdownDividerUI

export default NavDropdown
