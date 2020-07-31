import theme from '../../theme'

export default function getSpaceBefore({ spaceBefore }) {
  if (spaceBefore === 'small') {
    return theme.unit(0.25)
  } else if (spaceBefore === 'medium') {
    return theme.unit(0.5)
  } else {
    return 0
  }
}
