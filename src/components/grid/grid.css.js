import theme from '../../theme'

export const ColUI = styled('div')`
  display: flex;
  flex-direction: column;
  margin: 5px;
  width: ${({ width }) => `calc(${width} - 10px)`};
  align-self: stretch;
`

export const GridUI = styled('div')`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  align-items: flex-start;
  align-content: flex-start;

  @media (min-width: ${theme.breakPointsAsPixel.mobile}) and (max-width: ${theme
      .breakPointsAsPixel.tablet}) {
    ${ColUI} {
      width: ${({ collapse }) =>
        collapse === 'tablet' ? '100%' : `calc(50% - 10px)`};
    }
  }
  @media (max-width: ${theme.breakPointsAsPixel.mobile}) {
    ${ColUI} {
      display: block;
      width: 100%;
    }
  }
`
