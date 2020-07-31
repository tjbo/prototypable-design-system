export default function getColor(color) {
  if (color === 'transparent') {
    return 'transparent'
  } else if (color === 'light') {
    return theme.colors.light1
  } else if (color === 'dark') {
    return theme.colors.dark3
  } else {
    return '#fff'
  }
}
