import React from 'react'
import {
  BrandUI,
  ContainerInnerUI,
  ContainerUI,
  LinkUI,
  MenuUI,
} from './mobile.css'
import Trigger from './triggerIcon'
import Dropdown from './dropdown'
import { onShowModal, onHideModal } from '../../body'

class Container extends React.Component {
  state = {
    isOpen: false,
  }

  componentDidMount() {
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', () => this.onResize())
    }
  }

  onResize = () => {
    if (this.state.isOpen) {
      this.setState({ isOpen: false })
      onHideModal()
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
    const { children } = this.props
    const { isOpen } = this.state

    return (
      <ContainerUI>
        <ContainerInnerUI>
          <Trigger isOpen={isOpen} onClick={this.toggleMenu} />
          {React.Children.map(children, (child) => {
            return React.cloneElement(child, {
              ...child.props,
              closeParentMenu: this.toggleMenu,
              isParentMenuOpen: isOpen,
            })
          })}
        </ContainerInnerUI>
      </ContainerUI>
    )
  }
}

const Brand = function Brand({ children }) {
  return (
    <BrandUI>
      <a href="/">{children}</a>
    </BrandUI>
  )
}

function Link(props) {
  console.log('link', props)
  const { children, text } = props

  return <LinkUI>{children}</LinkUI>
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
    console.log('Menu in Mobile', content)
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
