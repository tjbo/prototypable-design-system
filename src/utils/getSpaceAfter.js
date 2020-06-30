import theme from '../theme'

export default function getSpaceAfter({ spaceAfter }) {
  if (spaceAfter === 'none') {
    return 0
  } else if (spaceAfter === 'small') {
    return theme.unit(0.25)
  } else if (spaceAfter === 'medium') {
    return theme.unit(0.5)
  } else {
    return theme.unit(0.75)
  }
}
