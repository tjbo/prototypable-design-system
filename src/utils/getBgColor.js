const getBgColor = ({ background }) => {
  if (background === 'transparent') {
    return 'transparent'
  } else if (background === 'light') {
    return theme.colors.light1
  } else if (background === 'dark') {
    return theme.colors.dark3
  } else {
    return '#fff'
  }
}
