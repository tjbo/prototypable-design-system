import {
  AddressUI,
  FinePrintUI,
  ContainerUI,
  LinkItemUI,
  LinkUI,
  ColUI,
} from './desktop.css'
import Grid from '../../grid'
import Section from '../../section'
import clickPhone from '../../../utils/clickPhone'
import clickEmail from '../../../utils/clickEmail'

function Footer({ children }) {
  return (
    <Section background="dark">
      <ContainerUI>{children}</ContainerUI>
    </Section>
  )
}

Footer.Grid = Grid
Footer.Address = AddressUI
Footer.FinePrint = FinePrintUI
Footer.Col = function ({ children, width }) {
  return (
    <Grid.Col width={width}>
      <ColUI>{children}</ColUI>
    </Grid.Col>
  )
}
Footer.Link = function ({ children, tel, mailto }) {
  if (tel) {
    return <LinkUI onClick={clickPhone.bind(null, tel)}>{children}</LinkUI>
  } else if (mailto) {
    return <LinkUI onClick={clickEmail.bind(null, mailto)}>{children}</LinkUI>
  }

  return <LinkItemUI>{children}</LinkItemUI>
}

export default Footer
