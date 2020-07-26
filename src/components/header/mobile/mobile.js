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
import SubMenu from './submenu'
import { onShowModal, onHideModal } from '../../body'
import Button from '../../button'
import theme from '../../../theme'
import throttle from 'lodash.throttle'

class Container extends React.Component {
  state = {
    isOpen: false,
    isScrollTopLimit: false,
    subMenu: '',
  }

  componentDidUpdate(nextProps, nextState) {
    if (nextProps.headerStyle !== this.props.headerStyle) {
      this.setState({ isContainerAnimated: true })
    }

    if (nextState.isOpen !== this.state.isOpen) {
      this.setState({ isMenuAnimated: true })
    }
  }

  componentDidMount() {
    if (typeof window !== 'undefined') {
      window.addEventListener(
        'scroll',
        throttle(() => this.onScroll(), 300),
      )
    }
  }
  componentWillUnmount() {
    if (typeof window !== 'undefined') {
      window.removeEventListener('resize', () => this.onResize())
      window.removeEventListener('scroll', () => this.onScroll())
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (
      nextState.isOpen === this.state.isOpen &&
      nextState.subMenu === this.state.subMenu &&
      nextState.isScrollTopLimit === this.state.isScrollTopLimit &&
      nextProps.path === this.props.path
    ) {
      return false
    }

    return true
  }

  onScroll = () => {
    if (typeof window !== 'undefined') {
      const scrollTop =
        document.body.scrollTop || document.documentElement.scrollTop
      if (scrollTop >= theme.layoutAsNumber.mobile.headerHeight) {
        this.setState({ isScrollTopLimit: true })
      } else {
        this.setState({ isScrollTopLimit: false })
      }
    }
  }

  componentWillUnmount() {
    this.toggleMenu(false)
  }

  toggleMenu = () => {
    console.log('toggle menu from:', this.state.isOpen)
    this.setState({ isOpen: !this.state.isOpen }, () => {
      if (this.state.isOpen) {
        onShowModal()
      } else {
        onHideModal()
      }
    })
  }

  toggleSubMenu = (name) => {
    console.log('toggle sub menu')
    this.setState({ subMenu: name })
  }

  render() {
    const { children, isTransparent, headerStyle } = this.props
    const {
      isOpen,
      isContainerAnimated,
      isMenuAnimated,
      isScrollTopLimit,
      subMenu,
    } = this.state

    const _style = isScrollTopLimit || isOpen ? 'dark' : headerStyle
    const _isTransparent = isScrollTopLimit || isOpen ? false : isTransparent

    return (
      <ContainerUI
        isAnimated={isContainerAnimated}
        isTransparent={_isTransparent}
      >
        <ContainerInnerUI>
          <Trigger
            isAnimated={isContainerAnimated}
            isOpen={isOpen}
            onClick={this.toggleMenu}
            isTransparent={_isTransparent}
            headerStyle={_style}
          />
          {React.Children.map(children, (child) => {
            return React.cloneElement(child, {
              ...child.props,
              closeParentMenu: this.toggleMenu,
              isAnimated: isMenuAnimated,
              isContainerAnimated: isContainerAnimated,
              isParentMenuOpen: isOpen,
              headerStyle: _style,
              toggleSubMenu: this.toggleSubMenu,
              subMenu,
            })
          })}
        </ContainerInnerUI>
      </ContainerUI>
    )
  }
}

const Brand = function Brand({ children, isContainerAnimated, headerStyle }) {
  return (
    <BrandContainerUI>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          ...child.props,
          isAnimated: isContainerAnimated,
          headerStyle,
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
  const {
    children,
    closeParentMenu,
    isAnimated,
    isParentMenuOpen,
    subMenu,
    toggleSubMenu,
  } = props
  const content = React.Children.map(children, (child) => {
    return React.cloneElement(child, {
      ...child.props,
      closeParentMenu,
      isParentMenuOpen,
      subMenu,
      toggleSubMenu,
    })
  })
  return <MenuUI {...{ isAnimated, isParentMenuOpen }}>{content}</MenuUI>
}

export default {
  Brand,
  Container,
  SubMenu,
  Link,
  Menu,
}
