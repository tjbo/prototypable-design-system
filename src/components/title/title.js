import { AnchorUI, TitleUI } from './title.css'
import PropTypes from 'prop-types'
import theme from '../../theme'

export default function Title({
  as = 'h3',
  children,
  color = 'dark1',
  id = '',
  fontStyle = 'normal',
  shadow = 'none',
  spaceAfter = 'default',
  styling,
}) {
  const content = (
    <TitleUI
      as={as}
      id={id}
      color={color}
      fontStyle={fontStyle}
      shadow={shadow}
      spaceAfter={spaceAfter}
      styling={styling}
    >
      {children}
    </TitleUI>
  )

  if (id) {
    return (
      <div>
        <AnchorUI id={id} />
        {content}
      </div>
    )
  }

  return content
}

Title.propTypes = {
  as: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
  color: PropTypes.oneOf(Object.keys(theme.colors)),
  fontStyle: PropTypes.oneOf(['normal', 'italic', 'oblique']),
  styling: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
  shadow: PropTypes.oneOf(['none', 'dark']),
  spaceAfter: PropTypes.oneOf(['none', 'small', 'medium', 'default']),
}
