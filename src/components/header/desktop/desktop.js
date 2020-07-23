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
  static isAnimated = false

  UNSAFE_componentWillUpdate(nextProps, nextState) {
    if (nextProps.style !== this.props.style) {
      this.isAnimated = true
    }
  }

  render() {
    const { children, isTransparent, style } = this.props

    return (
      <ContainerUI style={style} isTransparent={isTransparent}>
        <ContainerInnerUI>
          {React.Children.map(children, (child) => {
            return React.cloneElement(child, {
              ...child.props,
              isAnimated: this.isAnimated,
              style: style,
            })
          })}
        </ContainerInnerUI>
      </ContainerUI>
    )
  }
}

const Brand = function Brand({ children, isAnimated, style }) {
  return (
    <BrandUI style={style}>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          ...child.props,
          isAnimated,
          style,
        })
      })}
    </BrandUI>
  )
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
        <LinkUI
          onClick={(event) => {
            event.nativeEvent.stopPropagation()
            window.location.href = 'tel://' + children
          }}
        >
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
