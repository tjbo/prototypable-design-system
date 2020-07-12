import { ContainerUI } from './blockQuote.css'
import PropTypes from 'prop-types'
import theme from '../../theme'

function BlockQuote({
  background = 'light1',
  spaceBefore = 'default',
  children,
}) {
  return (
    <ContainerUI background={background} spaceBefore={spaceBefore}>
      {children}
    </ContainerUI>
  )
}

BlockQuote.propTypes = {
  background: PropTypes.oneOf(Object.keys(theme.colors)),
}

export default BlockQuote
