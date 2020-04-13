import React from 'react'
import {
  BrandUI,
  HeaderContainer,
  HeaderPushUI,
  HeaderUI,
  TriggerIconUI,
  NavLinkUI,
  NavMenuUI,
  NavMenuTriggerUI,
} from './header.css'

import { onShowModal, onHideModal } from '../head/modal'

class Header extends React.Component {
  state = {
    isOpen: false,
  }

  componentDidMount() {
    window.addEventListener('resize', () => this.onResize())
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
  render() {
    const { children } = this.props
    const { isOpen } = this.state

    return (
      <HeaderContainer>
        <HeaderPushUI />
        <HeaderUI className={this.state.isOpen ? 'is-open' : 'is-closed'}>
          {React.Children.map(children, (child) => React.cloneElement(child))}
          <NavMenuTriggerUI onClick={this.toggleMenu}>
            <TriggerIconUI isOpen={isOpen}>
              <div className="line line-1"></div>
              <div className="line line-2"></div>
              <div className="line line-3"></div>
            </TriggerIconUI>
          </NavMenuTriggerUI>
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
