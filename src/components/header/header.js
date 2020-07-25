import React from 'react'
import DesktopHeader from './desktop/'
import MobileHeader from './mobile/'
import { Media } from 'react-breakpoints'
import { DividerUI } from './header.css'

class Container extends React.Component {
  render() {
    return (
      <Media>
        {({ breakpoints, currentBreakpoint }) => {
          if (breakpoints[currentBreakpoint] > breakpoints['tablet']) {
            return <DesktopHeader.Container {...{ ...this.props }} />
          } else {
            return <MobileHeader.Container {...{ ...this.props }} />
          }
        }}
      </Media>
    )
  }
}

function Brand(props) {
  return (
    <Media>
      {({ breakpoints, currentBreakpoint }) => {
        if (breakpoints[currentBreakpoint] > breakpoints['tablet']) {
          return <DesktopHeader.Brand {...{ ...props }} />
        } else {
          return <MobileHeader.Brand {...{ ...props }} />
        }
      }}
    </Media>
  )
}

function Menu(props) {
  return (
    <Media>
      {({ breakpoints, currentBreakpoint }) => {
        const { children, closeParentMenu, isParentMenuOpen } = props
        const content = React.Children.map(children, (child) =>
          React.cloneElement(child, {
            ...child.props,
            closeParentMenu,
            isParentMenuOpen,
          }),
        )
        if (breakpoints[currentBreakpoint] > breakpoints['tablet']) {
          return (
            <DesktopHeader.Menu {...{ ...props }}>{content}</DesktopHeader.Menu>
          )
        } else {
          return (
            <MobileHeader.Menu {...{ ...props }}>{content}</MobileHeader.Menu>
          )
        }
      }}
    </Media>
  )
}

function Link(props) {
  return (
    <Media>
      {({ breakpoints, currentBreakpoint }) => {
        if (breakpoints[currentBreakpoint] > breakpoints['tablet']) {
          return <DesktopHeader.Link {...{ ...props }} />
        } else {
          return <MobileHeader.Link {...{ ...props }} />
        }
      }}
    </Media>
  )
}

function SubMenu(props) {
  return (
    <Media>
      {({ breakpoints, currentBreakpoint }) => {
        if (breakpoints[currentBreakpoint] > breakpoints['tablet']) {
          return <DesktopHeader.SubMenu {...{ ...props }} />
        } else {
          return <MobileHeader.SubMenu {...{ ...props }} />
        }
      }}
    </Media>
  )
}

function Divider() {
  return <DividerUI />
}

function Contact(props) {
  return (
    <Media>
      {({ breakpoints, currentBreakpoint }) => {
        if (breakpoints[currentBreakpoint] > breakpoints['tablet']) {
          return <DesktopHeader.Contact {...{ ...props }} />
        } else {
          return null
        }
      }}
    </Media>
  )
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
