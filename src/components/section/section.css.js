import theme from '../../theme'

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

const getInnerWidth = ({ innerWidth }) => {
  if (innerWidth === 'medium') {
    return '750px'
  } else if (innerWidth === 'small') {
    return theme.unit(20)
  } else {
    return theme.unit(33)
  }
}

export const SectionWrapperUI = styled('section')`
  box-sizing: border-box;
  display: flex;
  width: 100%;
  background-color: ${getBgColor};
  justify-content: center;
  align-items: center;
  padding: ${theme.unit(0.5)} ${theme.unit(0.25)};
`

export const SectionUI = styled('div')`
  box-sizing: border-box;
  max-width: ${getInnerWidth};
  width: ${getInnerWidth};
  position: relative;
  margin: 0 auto;
  text-align: ${({ textAlign }) => textAlign};
`
