import {
  AddressUI,
  FinePrintUI,
  ContainerUI,
  LinkItemUI,
  LinkUI,
  LinksUI,
  InnerUI,
} from './footer.css'

function Footer({ children }) {
  return (
    <ContainerUI>
      <InnerUI>{children}</InnerUI>
    </ContainerUI>
  )
}

Footer.Address = AddressUI
Footer.FinePrint = FinePrintUI
Footer.Links = LinksUI
Footer.Link = function ({ children, href }) {
  return (
    <LinkItemUI>
      <LinkUI href={href}>{children}</LinkUI>
    </LinkItemUI>
  )
}

export default Footer
