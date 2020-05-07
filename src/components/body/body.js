import { BodyUI } from './body.css'
import ReactBreakpoints from 'react-breakpoints'
import theme from '../../theme'

export default function ({ children }) {
  return (
    <BodyUI>
      <ReactBreakpoints breakpoints={theme.breakPoints}>
        {children}
      </ReactBreakpoints>
    </BodyUI>
  )
}
