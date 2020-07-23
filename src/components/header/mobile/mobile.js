import React from 'react'
import {
  BrandContainerUI,
  ContainerInnerUI,
  ContainerUI,
  HighlightUI,
  LinkUI,
  MenuUI,
} from './mobile.css'
import Trigger from './triggerIcon'
import Dropdown from './dropdown'
import { onShowModal, onHideModal } from '../../body'
import Button from '../../button'
import theme from '../../../theme'

class Container extends React.Component {
  state = {
    isOpen: false,
    isScrollTopLimit: false,
  }

  UNSAFE_componentWillUpdate(nextProps, nextState) {
    if (
      nextProps.style !== this.props.style ||
      nextState.isScrollTopLimit !== this.state.isScrollTopLimit
    ) {
      this.animate = true
    }
  }

  componentDidMount() {
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', () => this.onResize())
      window.addEventListener('scroll', () => this.onScroll())
    }
  }

  onResize = () => {
    if (this.state.isOpen) {
      this.setState({ isOpen: false })
      onHideModal()
    }
  }

  onScroll = () => {
    const scrollTop =
      document.body.scrollTop || document.documentElement.scrollTop
    if (scrollTop >= theme.layoutAsNumber.mobile.headerHeight) {
      this.setState({ isScrollTopLimit: true })
    } else {
      this.setState({ isScrollTopLimit: false })
    }
  }

  componentWillUnmount() {
    this.toggleMenu(false)
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

  render() {
    const { children, isTransparent, style } = this.props
    const { isOpen, isScrollTopLimit } = this.state
    const _style = isScrollTopLimit ? 'dark' : style
    const _isTransparent = isScrollTopLimit ? false : isTransparent

    return (
      <ContainerUI animate={this.animate} isTransparent={_isTransparent}>
        <ContainerInnerUI>
          <Trigger
            isAnimated={this.animate}
            isOpen={isOpen}
            onClick={this.toggleMenu}
            style={_style}
          />
          {React.Children.map(children, (child) => {
            return React.cloneElement(child, {
              ...child.props,
              closeParentMenu: this.toggleMenu,
              isAnimated: this.animate,
              isParentMenuOpen: isOpen,
              style: _style,
            })
          })}
        </ContainerInnerUI>
      </ContainerUI>
    )
  }
}

const Brand = function Brand({ children, isAnimated, style }) {
  return (
    <BrandContainerUI>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          ...child.props,
          isAnimated,
          style,
        })
      })}
    </BrandContainerUI>
  )
}

function Link(props) {
  const { asHighlight, children, closeParentMenu, isParentMenuOpen } = props

  const beforeText = asHighlight ? 'Call Us -' : ''

  if (asHighlight) {
    return (
      <HighlightUI>
        <Button
          onClick={(event) => {
            event.nativeEvent.stopPropagation()
            window.location.href = 'tel://' + children
          }}
        >
          {beforeText}
          {children}
        </Button>
      </HighlightUI>
    )
  }

  return (
    <LinkUI
      onClick={(event) => {
        isParentMenuOpen && closeParentMenu()
        event.nativeEvent.stopPropagation()
      }}
    >
      {children}
    </LinkUI>
  )
}

function Menu(props) {
  const { children, closeParentMenu, isParentMenuOpen } = props
  if (isParentMenuOpen) {
    const content = React.Children.map(children, (child) => {
      return React.cloneElement(child, {
        ...child.props,
        closeParentMenu,
        isParentMenuOpen,
      })
    })
    return <MenuUI {...{ ...props }}>{content}</MenuUI>
  }
  return null
}

export default {
  Brand,
  Container,
  Dropdown,
  Link,
  Menu,
}
