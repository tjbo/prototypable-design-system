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
    window.addEventListener('resize', () => this.onResize())
  }

  onLinkClick = () => {
    console.log('onCLikckkdsafdsafdsfdsfa')
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
  render() {
    const { children } = this.props
    const { isOpen } = this.state

    return (
      <HeaderContainer>
        <HeaderUI className={this.state.isOpen ? 'is-open' : 'is-closed'}>
          {React.Children.map(children, (child) => React.cloneElement(child))}
          <NavMenuTriggerUI onClick={this.toggleMenu}>
            <TriggerIconUI isOpen={this.state.isOpen} />
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
