import DesktopFooter from './desktop'
import MobileFooter from './mobile'
import { Media } from 'react-breakpoints'

function Footer(props) {
  return (
    <Media>
      {({ breakpoints, currentBreakpoint }) => {
        if (breakpoints[currentBreakpoint] > breakpoints['tablet']) {
          return <DesktopFooter {...{ ...props }} />
        } else {
          return <MobileFooter {...{ ...props }} />
        }
      }}
    </Media>
  )
}

Footer.Grid = DesktopFooter.Grid

Footer.FinePrint = DesktopFooter.FinePrint

Footer.Address = function (props) {
  return (
    <Media>
      {({ breakpoints, currentBreakpoint }) => {
        if (breakpoints[currentBreakpoint] > breakpoints['tablet']) {
          return <DesktopFooter.Address {...{ ...props }} />
        } else {
          return <MobileFooter.Address {...{ ...props }} />
        }
      }}
    </Media>
  )
}

Footer.Col = function (props) {
  return (
    <Media>
      {({ breakpoints, currentBreakpoint }) => {
        if (breakpoints[currentBreakpoint] > breakpoints['tablet']) {
          return <DesktopFooter.Col {...{ ...props }} />
        } else {
          return <MobileFooter.Col {...{ ...props }} />
        }
      }}
    </Media>
  )
}

Footer.Link = function (props) {
  return (
    <Media>
      {({ breakpoints, currentBreakpoint }) => {
        if (breakpoints[currentBreakpoint] > breakpoints['tablet']) {
          return <DesktopFooter.Link {...{ ...props }} />
        } else {
          return <MobileFooter.Link {...{ ...props }} />
        }
      }}
    </Media>
  )
}

Footer.Menu = function (props) {
  return (
    <Media>
      {({ breakpoints, currentBreakpoint }) => {
        if (breakpoints[currentBreakpoint] > breakpoints['tablet']) {
          return props.children
        } else {
          return <MobileFooter.Menu {...{ ...props }} />
        }
      }}
    </Media>
  )
}

export default Footer
