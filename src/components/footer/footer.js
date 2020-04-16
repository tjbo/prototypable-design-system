import { AddressUI, FinePrintUI, FooterUI, FooterUIInner } from './footer.css'

function Footer({ children }) {
  return (
    <FooterUI>
      <FooterUIInner>{children}</FooterUIInner>
    </FooterUI>
  )
}

Footer.Address = AddressUI
Footer.FinePrint = FinePrintUI

export default Footer
