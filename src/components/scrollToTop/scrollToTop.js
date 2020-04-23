import React from 'react'

export default function ScrollToTop({ children, location }) {
  if (typeof window !== 'undefined') {
    React.useEffect(() => window.scrollTo(0, 0), [location.pathname])
    return children
  } else {
    return children
  }
}
