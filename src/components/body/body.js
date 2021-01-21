import { BodyUI } from './body.css'
import ReactBreakpoints from 'react-breakpoints'
import theme from '../theme'

export default function ({ children }) {
  return (
    <BodyUI>
      <ReactBreakpoints
        breakpoints={{
          mobile: theme.breakpoints[1],
          tablet: theme.breakpoints[4],
          bigTablet: theme.breakpoints[5],
          desktop: theme.breakpoints[6],
        }}
      >
        {children}
      </ReactBreakpoints>
    </BodyUI>
  )
}
