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
    return theme.unit(21)
  } else if (innerWidth === 'small') {
    return theme.unit(18)
  } else if (innerWidth === 'medium-plus') {
    return theme.unit(30)
  } else if (innerWidth === 'huge') {
    return theme.unit(37)
  } else {
    return theme.unit(34)
  }
}

export const SectionWrapperUI = styled('section')`
  box-sizing: border-box;
  display: flex;
  width: 100%;
  background-color: ${getBgColor};
  justify-content: center;
  align-items: center;
`

export const SectionUI = styled('div')`
  box-sizing: border-box;
  max-width: ${getInnerWidth};
  width: ${getInnerWidth};
  position: relative;
  margin: 0 auto;
  padding: ${theme.unit(1.5)} ${theme.unit(0.75)};
  width: 100%;
  text-align: ${({ textAlign }) => textAlign};
`

export const SectionInnerUI = styled('div')`
  width: 100%;
`
