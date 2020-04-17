import React from 'react'
import {
  BrandUI,
  HeaderContainer,
  HeaderUI,
  NavLinkUI,
  NavMenuUI,
  NavMenuTriggerUI,
} from './header.css'

import TriggerIconUI from './triggerIcon'

import { onShowModal, onHideModal } from '../body'

class Header extends React.Component {
  state = {
    isOpen: false,
  }

  componentDidMount() {
    window && window.addEventListener('resize', () => this.onResize())
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
        return child.type.displayName === 'styled.nav'
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
          {React.Children.map(children, (child) => React.cloneElement(child))}
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

Header.NavMenu = NavMenuUI
Header.NavLink = NavLinkUI

export default Header
