import React from 'react'
import DesktopHeader from './desktop/'
import MobileHeader from './mobile/'
import { Media } from 'react-breakpoints'

class Container extends React.Component {
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

function Dropdown(props) {
  return (
    <Media>
      {({ breakpoints, currentBreakpoint }) => {
        if (breakpoints[currentBreakpoint] > breakpoints['tablet']) {
          return <DesktopHeader.Dropdown {...{ ...props }} />
        } else {
          return <MobileHeader.Dropdown {...{ ...props }} />
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
