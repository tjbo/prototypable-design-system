import { AddressUI, FinePrintUI, FooterUI, FooterUIInner } from './footer.css'
import config from '../../config'

function Footer({ children }) {
  return (
    <FooterUI>
      <FooterUIInner>
        <AddressUI></AddressUI>
      </FooterUIInner>
    </FooterUI>
  )
}

Footer.AddressUI = AddressUI

export default Footer
