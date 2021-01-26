import CrescentLenders from './svgs/crescentLenders'
import BusinessInsider from './svgs/business-insider'
import BrowserHome from './svgs/browser-home'
// import Chevron from './svgs/chevron'
import Email from './svgs/email'
import Loader from './svgs/loader'
import MarketWatch from './svgs/market-watch'
import Money from './svgs/money'
import Mortgage from './svgs/mortgage'
import Mortgage2 from './svgs/mortgage2'
import Handshake from './svgs/handshake'
import Percentage from './svgs/percentage'
import Rocket from './svgs/rocket'
import Sms from './svgs/sms'
import YahooFinance from './svgs/yahoo-finance'
import { ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons'

export const icons = {
  ['business-insider']: BusinessInsider,
  ['browser-home']: BrowserHome,
  ['chevron-down-icon']: ChevronDownIcon,
  ['chevron-up-icon']: ChevronUpIcon,
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

export default function ({ name, boxSize = [24], ...rest }) {
  if (typeof window === 'undefined') {
    return null
  }

  const Component = icons[name]

  if (Component) {
    return <Component {...{ boxSize, ...rest }} />
  }
  return null
}
