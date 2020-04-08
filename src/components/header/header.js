import React from 'react'
import {
  BrandUI,
  HeaderPushUI,
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
      <div>
        <HeaderPushUI />
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
      </div>
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
