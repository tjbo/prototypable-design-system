const getBgColor = ({ background, theme }) => {
  if (background === 'light') {
    return theme.colors.light1
  } else if (background === 'dark') {
    return theme.colors.dark3
  } else {
    return '#fff'
  }
}

const getInnerWidth = ({ innerWidth, theme }) => {
  if (innerWidth === 'medium') {
    return '720px'
  } else if (innerWidth === 'small') {
    return theme.unit(20)
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
  padding: ${({ theme }) => `${theme.unit(1)} 0`};
  text-align: ${({ textAlign }) => textAlign};

  @media (max-width: ${({ theme }) => theme.breakPoints.tablet}) {
    padding: ${({ theme }) => `${theme.unit(0.5)}`};
  }
`

export const Col1 = styled('div')`
  flex: 2;
`

export const Col2 = styled('div')`
  flex: 1;
  margin-left: ${({ theme }) => theme.unit(0.5)};
`

export const ColWrapper = styled('div')`
  display: flex;
  flex-direction: row;

  @media (max-width: ${({ theme }) => theme.breakPoints.tablet}) {
    flex-direction: column;

    ${Col1} {
      min-width: 100%;
    }

    ${Col2} {
      margin-left: 0;
      margin-top: ${({ theme }) => theme.unit(0.5)};
    }
  }
`
