import { ContainerUI, ChevronLeftUI, ChevronRightUI } from './icon.css'
import CrescentLenders from '../../svgs/crescentLenders'
import BusinessInsider from '../../svgs/business-insider'
import BrowserHome from '../../svgs/browser-home'
import Chevron from '../../svgs/chevron'
import Email from '../../svgs/email'
import Loader from '../../svgs/loader'
import MarketWatch from '../../svgs/market-watch'
import Money from '../../svgs/money'
import Mortgage from '../../svgs/mortgage'
import Mortgage2 from '../../svgs/mortgage2'
import Handshake from '../../svgs/handshake'
import Percentage from '../../svgs/percentage'
import Rocket from '../../svgs/rocket'
import Sms from '../../svgs/sms'
import YahooFinance from '../../svgs/yahoo-finance'

export const icons = {
  ['business-insider']: BusinessInsider,
  ['browser-home']: BrowserHome,
  ['crescent-lenders']: CrescentLenders,
  email: Email,
  loader: Loader,
  ['market-watch']: MarketWatch,
  money: Money,
  mortgage: Mortgage,
  mortgage2: Mortgage2,
  handshake: Handshake,
  percentage: Percentage,
  rocket: Rocket,
  sms: Sms,
  ['yahoo-finance']: YahooFinance,
}

export default function Icon({ name, size = '100%', rotate = 0, ...rest }) {
  if (typeof window === 'undefined') {
    return null
  }

  const Component = icons[name]

  if (name === 'chevron-right') {
    return (
      <ChevronRightUI {...{ ...rest }}>
        <Chevron />
      </ChevronRightUI>
    )
  } else if (name === 'chevron-left') {
    return (
      <ChevronLeftUI {...{ ...rest }}>
        <Chevron />
      </ChevronLeftUI>
    )
  }

  if (Component) {
    return (
      <ContainerUI size={size} rotate={rotate}>
        <Component {...{ ...rest }} />
      </ContainerUI>
    )
  }
  return null
}
