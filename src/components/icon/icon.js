import { lazy, Suspense } from 'react'

const icons = {
  ['business-insider']: lazy(() => import('../../svgs/business-insider')),
  ['crescent-lenders']: lazy(() => import('../../svgs/crescentLenders')),
  email: lazy(() => import('../../svgs/email')),
  facebook: lazy(() => import('../../svgs/facebook')),
  like: lazy(() => import('../../svgs/like')),
  ['linked-in']: lazy(() => import('../../svgs/linkedin')),
  loader: lazy(() => import('../../svgs/loader')),
  ['market-watch']: lazy(() => import('../../svgs/market-watch')),
  money: lazy(() => import('../../svgs/money')),
  mortgage: lazy(() => import('../../svgs/mortgage')),
  mortgage2: lazy(() => import('../../svgs/mortgage2')),
  handshake: lazy(() => import('../../svgs/handshake')),
  percentage: lazy(() => import('../../svgs/percentage')),
  rocket: lazy(() => import('../../svgs/rocket')),
  sms: lazy(() => import('../../svgs/sms')),
  ['yahoo-finance']: lazy(() => import('../../svgs/yahoo-finance')),
}

export default function Icon({ name, ...rest }) {
  const Component = icons[name]
  if (Component) {
    return (
      <Suspense fallback={null}>
        <Component {...{ ...rest }} />
      </Suspense>
    )
  }
  return null
}
