import { BodyUI } from './body.css'
import ReactBreakpoints from 'react-breakpoints'
import theme from '../../theme'

export default function ({ children }) {
  return (
    <ReactBreakpoints breakpoints={theme.breakPoints}>
      <BodyUI>{children}</BodyUI>
    </ReactBreakpoints>
  )
}
