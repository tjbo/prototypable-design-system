import {
  ContainerUI,
  AddressUI,
  LinkUI,
  LinkTitleUI,
  SubMenuUI,
} from './mobile.css'
import Grid from '../../grid'
import Section from '../../section'
import Icon from '../../icon'
import clickPhone from '../../../utils/clickPhone'
import clickEmail from '../../../utils/clickEmail'

export default function Mobile({ children }) {
  return (
    <Section background="dark">
      <ContainerUI>{children}</ContainerUI>
    </Section>
  )
}

Mobile.Link = function ({ children, mailto, tel, ...rest }) {
  if (tel) {
    return (
      <LinkUI {...{ ...rest }} onClick={clickPhone.bind(null, tel)}>
        {children}
      </LinkUI>
    )
  } else if (mailto) {
    return (
      <LinkUI {...{ ...rest }} onClick={clickEmail.bind(null, mailto)}>
        {children}
      </LinkUI>
    )
  }

  return <LinkUI {...{ ...rest }}>{children}</LinkUI>
}

class Col extends React.Component {
  render() {
    const { children, mobileWidth, width } = this.props
    return <Grid.Col width={mobileWidth || width}>{children}</Grid.Col>
  }
}

Mobile.Address = function ({ children }) {
  return <AddressUI>{children}</AddressUI>
}

class Menu extends React.Component {
  state = {
    isOpen: false,
  }

  getSubMenu() {
    const { children } = this.props
    const { isOpen } = this.state

    if (!isOpen) {
      return
    }

    const content = React.Children.map(children, (child) => {
      return React.cloneElement(child, {
        ...child.props,
        onClick: (event) => {
          event.preventDefault()
          event.stopPropagation()
          this.setState({ isOpen: false })
        },
      })
    })

    return <SubMenuUI>{content}</SubMenuUI>
  }

  toggleOpen = () => {
    this.setState({ isOpen: !this.state.isOpen })
  }
  render() {
    const { title } = this.props
    const { isOpen } = this.state
    return (
      <div>
        <LinkTitleUI onClick={this.toggleOpen}>
          {title}
          {!isOpen ? (
            <Icon name="chevron-right" />
          ) : (
            <Icon name="chevron-top" />
          )}
        </LinkTitleUI>
        {this.getSubMenu()}
      </div>
    )
  }
}

Mobile.Col = Col
Mobile.Menu = Menu
