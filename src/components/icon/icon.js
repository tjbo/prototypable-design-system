import { lazy, Suspense } from 'react'

const icons = {
  ['crescent-lenders']: lazy(() => import('../../svgs/crescentLenders')),
  like: lazy(() => import('../../svgs/like')),
  money: lazy(() => import('../../svgs/money')),
  mortgage: lazy(() => import('../../svgs/mortgage')),
  mortgage2: lazy(() => import('../../svgs/mortgage2')),
  handshake: lazy(() => import('../../svgs/handshake')),
  percentage: lazy(() => import('../../svgs/percentage')),
  rocket: lazy(() => import('../../svgs/rocket')),
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
