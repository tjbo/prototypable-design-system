import { lazy, Suspense } from 'react'

const icons = {
  money: lazy(() => import('../../svgs/money')),
  mortgage: lazy(() => import('../../svgs/mortgage')),
  mortgage2: lazy(() => import('../../svgs/mortgage2')),
  handshake: lazy(() => import('../../svgs/handshake')),
  percentage: lazy(() => import('../../svgs/percentage')),
}

export default function Icon({ name }) {
  console.log('name', name)
  const Component = icons[name]

  if (Component) {
    return (
      <Suspense fallback={null}>
        <Component />
      </Suspense>
    )
  }
  return null
}
