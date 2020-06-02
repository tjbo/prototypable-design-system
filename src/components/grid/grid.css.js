import theme from '../../theme'

export const ColUI = styled('div')`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  padding: ${theme.unit(0.25)};
  width: ${({ width }) => width};
  max-width: ${({ maxWidth }) => maxWidth};
`

export const ColInnerUI = styled('div')`
  width: 100%;
`

export const GridUI = styled('div')`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: calc(100% + ${theme.unit(1)});
  align-items: ${({ alignItems }) => alignItems};
  align-content: flex-start;
  margin-left: -${theme.unit(0.25)};

  @media (min-width: ${theme.breakPointsAsPixel.mobile}) and (max-width: ${theme
      .breakPointsAsPixel.tablet}) {
    ${ColUI} {
      width: ${({ collapse }) =>
        collapse === 'tablet'
          ? `calc(100% + ${theme.unit(0.25)})`
          : `calc(50%)`};
    }
  }
  @media (max-width: ${theme.breakPointsAsPixel.mobile}) {
    ${ColUI} {
      display: block;
      width: 100%;
    }
  }
`
