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
import Footer from '../desktop'

export default function Mobile({ children }) {
  return (
    <Section background="dark">
      <ContainerUI>{children}</ContainerUI>
    </Section>
  )
}

Mobile.Link = function ({ children }) {
  return <LinkUI>{children}</LinkUI>
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

  toggleOpen = () => {
    this.setState({ isOpen: !this.state.isOpen })
  }
  render() {
    const { children, title } = this.props
    const { isOpen } = this.state
    return (
      <div>
        <LinkTitleUI onClick={this.toggleOpen}>
          {title}
          <Icon name="chevron-right" />
        </LinkTitleUI>

        {isOpen && <SubMenuUI>{children}</SubMenuUI>}
      </div>
    )
  }
}

Mobile.Col = Col
Mobile.Menu = Menu
