import React from 'react'
import {
  BrandUI,
  HeaderUI,
  TriggerIconUI,
  NavLinkUI,
  NavMenuUI,
  NavMenuTriggerUI,
} from './header.css'

class Header extends React.Component {
  state = {
    isOpen: false,
  }

  toggleMenu = () => {
    this.setState({ isOpen: !this.state.isOpen })
  }
  render() {
    const { children } = this.props
    const { isOpen } = this.state

    return (
      <HeaderUI>
        {React.Children.map(children, (child) =>
          React.cloneElement(child, { isOpen }),
        )}
        <NavMenuTriggerUI onClick={this.toggleMenu}>
          <TriggerIconUI isOpen={isOpen}>
            <div className="line line-1"></div>
            <div className="line line-2"></div>
            <div className="line line-3"></div>
          </TriggerIconUI>
        </NavMenuTriggerUI>
      </HeaderUI>
    )
  }
}

Header.Brand = BrandUI
Header.NavMenu = NavMenuUI
Header.NavLink = NavLinkUI

export default Header
