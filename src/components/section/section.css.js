import theme from '../../theme'

const getBgColor = ({ background }) => {
  if (background === 'light') {
    return theme.colors['light-1']
  } else if (background === 'dark') {
    return theme.colors['dark-3']
  } else {
    return '#fff'
  }
}

const getInnerWidth = ({ innerWidth }) => {
  if (innerWidth === 'medium') {
    return '750px'
  } else if (innerWidth === 'small') {
    return theme.unit(19)
  } else {
    return theme.unit(33)
  }
}

export const SectionWrapperUI = styled('section')`
  width: 100%;
  background-color: ${getBgColor};
`

export const SectionUI = styled('div')`
  box-sizing: border-box;
  max-width: ${getInnerWidth};
  margin: 0 auto;
  padding: ${`${theme.unit(1)} 0`};
  text-align: ${({ textAlign }) => textAlign};

  @media (max-width: ${theme.breakPointsAsPixel.tablet}) {
    padding: ${theme.unit(0.5)};
  }
`
