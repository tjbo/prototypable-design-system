import {
  AddressUI,
  FinePrintUI,
  ContainerUI,
  LinkItemUI,
  ColUI,
} from './desktop.css'

import Grid from '../../grid'

import Section from '../../section'

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
Footer.Link = function ({ asTitle, children, href }) {
  return <LinkItemUI asTitle={asTitle}>{children}</LinkItemUI>
}

export default Footer
