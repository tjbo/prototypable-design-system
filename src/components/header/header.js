import React from 'react'
import DesktopHeader from './desktop/'
import MobileHeader from './mobile/'
import { Media } from 'react-breakpoints'

class Container extends React.Component {
  state = {
    isOpen: false,
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

    return (
      <Media>
        {({ breakpoints, currentBreakpoint }) => {
          if (breakpoints[currentBreakpoint] > breakpoints['tablet']) {
            return <DesktopHeader.Container>{children}</DesktopHeader.Container>
          } else {
            return <MobileHeader.Container>{children}</MobileHeader.Container>
          }
        }}
      </Media>
    )
  }
}

function Brand({ children }) {
  return (
    <Media>
      {({ breakpoints, currentBreakpoint }) => {
        if (breakpoints[currentBreakpoint] > breakpoints['tablet']) {
          return <DesktopHeader.Brand>{children}</DesktopHeader.Brand>
        } else {
          return <MobileHeader.Brand>{children}</MobileHeader.Brand>
        }
      }}
    </Media>
  )
}

function Menu(props) {
  return (
    <Media>
      {({ breakpoints, currentBreakpoint }) => {
        if (breakpoints[currentBreakpoint] > breakpoints['tablet']) {
          const { children } = props
          const content = React.Children.map(children, (child) =>
            React.cloneElement(child, {
              ...child.props,
            }),
          )
          return <DesktopHeader.Menu>{content}</DesktopHeader.Menu>
        } else {
          const { children, closeParentMenu, isParentMenuOpen } = props
          const content = React.Children.map(children, (child) =>
            React.cloneElement(child, {
              ...child.props,
              closeParentMenu,
              isParentMenuOpen,
            }),
          )
          return (
            <MobileHeader.Menu {...{ ...props }}>{content}</MobileHeader.Menu>
          )
        }
      }}
    </Media>
  )
}

function Link({ children }) {
  return (
    <Media>
      {({ breakpoints, currentBreakpoint }) => {
        if (breakpoints[currentBreakpoint] > breakpoints['tablet']) {
          return <DesktopHeader.Link>{children}</DesktopHeader.Link>
        } else {
          return <MobileHeader.Link>{children}</MobileHeader.Link>
        }
      }}
    </Media>
  )
}

function Dropdown(props) {
  const { children, text } = props

  return (
    <Media>
      {({ breakpoints, currentBreakpoint }) => {
        if (breakpoints[currentBreakpoint] > breakpoints['tablet']) {
          return (
            <DesktopHeader.Dropdown text={text}>
              {children}
            </DesktopHeader.Dropdown>
          )
        } else {
          return (
            <MobileHeader.Dropdown {...{ ...props }}>
              {children}
            </MobileHeader.Dropdown>
          )
        }
      }}
    </Media>
  )
}

function Divider() {
  return <hr />
}

export default {
  Brand,
  Container,
  Divider,
  Dropdown,
  Link,
  Menu,
}
