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
    return '550px'
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

export const Col1 = styled('div')`
  flex: 2;
`

export const Col2 = styled('div')`
  flex: ${({ sidebar_width }) => sidebar_width};
  margin-left: ${theme.unit(0.5)};
`

export const ColWrapper = styled('div')`
  display: flex;
  flex-direction: row;

  @media (max-width: ${theme.breakPointsAsPixel.tablet}) {
    flex-direction: column;

    ${Col1} {
      min-width: 100%;
    }

    ${Col2} {
      margin-left: 0;
    }
  }
`
