import React from 'react'
import MobileHeader from './mobile/'
import { DividerUI } from './header.css'

class Container extends React.Component {
  render() {
    return <MobileHeader.Container {...{ ...this.props }} />
  }
}

function Brand(props) {
  return <MobileHeader.Brand {...{ ...props }} />
}

function Menu(props) {
  const { children, closeParentMenu, isParentMenuOpen } = props
  const content = React.Children.map(children, (child) =>
    React.cloneElement(child, {
      ...child.props,
      closeParentMenu,
      isParentMenuOpen,
    }),
  )

  return <MobileHeader.Menu {...{ ...props }}>{content}</MobileHeader.Menu>
}

function Link(props) {
  return <MobileHeader.Link {...{ ...props }} />
}

function SubMenu(props) {
  return <MobileHeader.SubMenu {...{ ...props }} />
}

function Divider() {
  return <DividerUI />
}

function Contact(props) {
  return null
}

export default {
  Brand,
  Container,
  Divider,
  SubMenu,
  Link,
  Menu,
  Contact,
}
