import {
  BrandUI,
  DropdownUI,
  ContainerInnerUI,
  ContainerUI,
  HighlightUI,
  LinkUI,
  MenuUI,
} from './desktop.css'
import clickPhone from '../../../utils/clickPhone'

class Container extends React.Component {
  state = {
    isAnimated: true,
  }

  componentDidUpdate(nextProps) {
    if (
      nextProps.headerStyle !== this.props.headerStyle ||
      nextProps.isTransparent !== this.props.isTransparent
    ) {
      this.setState({ isAnimated: true })
    }
  }

  render() {
    const { children, isTransparent, headerStyle } = this.props
    const { isAnimated } = this.state

    return (
      <ContainerUI headerStyle={headerStyle} isTransparent={isTransparent}>
        <ContainerInnerUI>
          {React.Children.map(children, (child) => {
            return React.cloneElement(child, {
              ...child.props,
              isAnimated,
              headerStyle,
            })
          })}
        </ContainerInnerUI>
      </ContainerUI>
    )
  }
}

const Brand = function Brand({ children, isAnimated, headerStyle }) {
  return (
    <BrandUI>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          ...child.props,
          isAnimated,
          headerStyle,
        })
      })}
    </BrandUI>
  )
}

function SubMenu({ children, text }) {
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

function Link({ children, asHighlight, tel }) {
  if (asHighlight) {
    return (
      <LinkUI onClick={clickPhone.bind(null, tel)}>
        <HighlightUI>{children}</HighlightUI>
      </LinkUI>
    )
  }
  return <LinkUI>{children}</LinkUI>
}

function Menu({ children, isAnimated, headerStyle }) {
  return (
    <MenuUI isAnimated={isAnimated} headerStyle={headerStyle}>
      {children}
    </MenuUI>
  )
}

export default {
  Brand,
  Container,
  SubMenu,
  Link,
  Menu,
}
