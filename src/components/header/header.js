import React from 'react'
import {
  BrandUI,
  HeaderContainer,
  HeaderUI,
  NavLinkUI,
  NavMobileMenuUI,
  NavMenuTriggerUI,
} from './header.css'
import NavDropdown from './navDropdown'
import TriggerIconUI from './triggerIcon'
import { onShowModal, onHideModal } from '../body'

class Header extends React.Component {
  state = {
    isOpen: true,
  }

  componentDidMount() {
    this.setState({ isOpen: false })
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', () => this.onResize())
    }
  }

  onLinkClick = () => {
    this.setState({ isOpen: false })
    onHideModal()
  }

  onResize = () => {
    if (this.state.isOpen) {
      this.setState({ isOpen: false })
      onHideModal()
    }
  }

  toggleMenu = () => {
    this.setState({ isOpen: !this.state.isOpen }, () => {
      if (this.state.isOpen) {
        onShowModal()
      } else {
        onHideModal()
      }
    })
  }

  isWithNav() {
    return (
      this.props.children.length > 1 &&
      this.props.children.some((child) => {
        return child.props.children.length > 1
      })
    )
  }

  render() {
    const { children } = this.props
    const { isOpen } = this.state
    const isWithNav = this.isWithNav()

    return (
      <HeaderContainer>
        <HeaderUI className={isOpen ? 'is-open' : 'is-closed'}>
          {React.Children.map(children, (child) =>
            React.cloneElement(child, {
              closeParentMenu: this.toggleMenu,
              isParentMenuOpen: isOpen,
            }),
          )}
          {isWithNav ? (
            <NavMenuTriggerUI onClick={this.toggleMenu}>
              <TriggerIconUI isOpen={isOpen} />
            </NavMenuTriggerUI>
          ) : null}
        </HeaderUI>
      </HeaderContainer>
    )
  }
}

Header.Brand = function Brand({ children }) {
  return (
    <BrandUI>
      <a href="/">{children}</a>
    </BrandUI>
  )
}

Header.NavMenu = function ({ children, isParentMenuOpen, closeParentMenu }) {
  return (
    <NavMobileMenuUI>
      {React.Children.map(children, (child) =>
        React.cloneElement(child, {
          closeParentMenu,
          isParentMenuOpen,
        }),
      )}
    </NavMobileMenuUI>
  )
}

Header.NavLink = function ({ children, closeParentMenu, isParentMenuOpen }) {
  return (
    <NavLinkUI
      onClick={(event) => {
        isParentMenuOpen && closeParentMenu()
        event.nativeEvent.stopPropagation()
      }}
    >
      {children}
    </NavLinkUI>
  )
}
Header.NavDropdown = NavDropdown

export default Header
