import {
  BrandUI,
  DropdownUI,
  ContainerInnerUI,
  ContainerUI,
  HighlightUI,
  LinkUI,
  MenuUI,
} from './desktop.css'

class Container extends React.Component {
  render() {
    const { children, isTransparent, style } = this.props

    return (
      <ContainerUI style={style} isTransparent={isTransparent}>
        <ContainerInnerUI>
          {React.Children.map(children, (child) => {
            return React.cloneElement(child, {
              ...child.props,
              style: style,
            })
          })}
        </ContainerInnerUI>
      </ContainerUI>
    )
  }
}

const Brand = function Brand({ children, _style }) {
  return <BrandUI style={_style}>{children}</BrandUI>
}

function Dropdown({ children, text }) {
  return (
    <DropdownUI>
      <LinkUI>{text}</LinkUI>
      <ul>
        {React.Children.map(children, (child) => (
          <li>{React.cloneElement(child, {})}</li>
        ))}
      </ul>
    </DropdownUI>
  )
}

class Link extends React.Component {
  render() {
    const { children, asHighlight } = this.props
    if (asHighlight) {
      return (
        <LinkUI>
          <HighlightUI>{children}</HighlightUI>
        </LinkUI>
      )
    }
    return <LinkUI>{children}</LinkUI>
  }
}

class Menu extends React.Component {
  static animate = false

  UNSAFE_componentWillUpdate(prevProps) {
    this.animate = !(this.props.style === prevProps.style)
  }

  render() {
    const { children, style } = this.props
    return (
      <MenuUI animate={this.animate} style={style}>
        {children}
      </MenuUI>
    )
  }
}

export default {
  Brand,
  Container,
  Dropdown,
  Link,
  Menu,
}
