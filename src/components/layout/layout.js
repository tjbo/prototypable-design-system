import {
  CenterUI,
  CenterInnerUI,
  ContainerUI,
  LeftUI,
  RightUI,
} from './layout.css'

function Layout({ children }) {
  return <ContainerUI>{children}</ContainerUI>
}

Layout.Center = function ({ children }) {
  return (
    <CenterUI>
      <CenterInnerUI>{children}</CenterInnerUI>
    </CenterUI>
  )
}

Layout.Left = function ({ children }) {
  return <LeftUI>{children}</LeftUI>
}

Layout.Right = function ({ children }) {
  return <RightUI>{children}</RightUI>
}

export default Layout
