import theme from '../../theme'

function getCollaspe({ collapse = 'never' }) {
  if (collapse === 'never') {
    return ''
  }

  return ` @media (min-width: ${
    theme.breakPointsAsPixel.mobile
  }) and (max-width: ${theme.breakPointsAsPixel.tablet}) {
    & > ${ColUI} {
    width: ${({ collapse }) =>
      collapse === 'tablet' ? `calc(100% + ${theme.unit(0.25)})` : `calc(50%)`};
  }
}

@media (max-width: ${theme.breakPointsAsPixel.mobile}) {
  & > ${ColUI} {
    display: block;
    width: 100%;
  }
}`
}

export const ColUI = styled('div')`
  align-self: ${({ alignSelf }) => alignSelf};
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  padding: ${({ horizontalPadding, verticalPadding }) =>
    `${theme.unit(verticalPadding)} ${theme.unit(horizontalPadding)}`};
  width: ${({ _width }) => _width};
  max-width: ${({ maxWidth }) => maxWidth};
  text-align: ${({ textAlign }) => textAlign};

  ${({ isSticky }) => {
    return (
      isSticky &&
      `
      position: sticky;
      top: 0px;
      align-self: flex-start;
  `
    )
  }}
`

export const ColInnerUI = styled('div')`
  height: 100%;
  width: 100%;
`

export const GridUI = styled('div')`
  box-sizing: border-box;
  display: flex;
  flex-direction: ${({ direction = 'column' }) => direction};
  flex-wrap: wrap;
  width: calc(100% + ${theme.unit(0.5)});
  align-items: ${({ alignItems = 'flex-start' }) => alignItems};
  align-content: flex-start;
  justify-content: center;
  margin-left: -${theme.unit(0.25)};
  ${getCollaspe}
`
