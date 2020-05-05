import React from 'react'
import { addListener } from '../head/breakPoints'
import DesktopHeader from './desktop/'
import MobileHeader from './mobile/'

class Container extends React.Component {
  state = {
    isOpen: false,
    breakPoint: 'desktop',
  }

  onBreakPointChange = (breakPoint) => {
    this.setState({ breakPoint })
  }

  componentDidMount() {
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', () => this.onResize())
      const breakPoint = addListener(this.onBreakPointChange)
      this.setState({ breakPoint })
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

  isDesktop() {
    return this.state.breakPoint === 'desktop'
  }

  render() {
    const { children } = this.props
    const content = React.Children.map(children, (child) =>
      React.cloneElement(child, {
        isDesktop: this.isDesktop(),
      }),
    )

    if (this.isDesktop()) {
      return <DesktopHeader.Container>{content}</DesktopHeader.Container>
    } else {
      return <MobileHeader.Container>{content}</MobileHeader.Container>
    }
  }
}

function Brand({ children, isDesktop }) {
  if (isDesktop) {
    return <DesktopHeader.Brand>{children}</DesktopHeader.Brand>
  } else {
    return <MobileHeader.Brand>{children}</MobileHeader.Brand>
  }
}

function Menu(props) {
  const { isDesktop } = props
  if (isDesktop) {
    const { children } = props
    const content = React.Children.map(children, (child) =>
      React.cloneElement(child, {
        ...child.props,
        isDesktop,
      }),
    )
    return <DesktopHeader.Menu>{content}</DesktopHeader.Menu>
  } else {
    const { children, closeParentMenu, isParentMenuOpen } = props
    const content = React.Children.map(children, (child) =>
      React.cloneElement(child, {
        ...child.props,
        closeParentMenu,
        isDesktop,
        isParentMenuOpen,
      }),
    )
    return <MobileHeader.Menu {...{ ...props }}>{content}</MobileHeader.Menu>
  }
}

function Link({ children, isDesktop }) {
  if (isDesktop) {
    return <DesktopHeader.Link>{children}</DesktopHeader.Link>
  } else {
    return <MobileHeader.Link>{children}</MobileHeader.Link>
  }
}

function Dropdown(props) {
  const { children, isDesktop, text } = props

  if (isDesktop) {
    return (
      <DesktopHeader.Dropdown text={text}>{children}</DesktopHeader.Dropdown>
    )
  } else {
    return (
      <MobileHeader.Dropdown {...{ ...props }}>
        {children}
      </MobileHeader.Dropdown>
    )
  }
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
