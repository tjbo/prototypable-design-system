import theme from '../../theme'

export const ColUI = styled('div')`
  display: flex;
  margin-bottom: 2%;
  width: ${({ width }) => width};
`

export const GridUI = styled('div')`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
  align-items: flex-start;
  align-content: flex-start;

  @media (min-width: ${theme.breakPointsAsPixel.mobile}) and (max-width: ${theme
      .breakPointsAsPixel.tablet}) {
    ${ColUI} {
      width: ${({ collapse }) => (collapse === 'tablet' ? '100%' : '49%')};
    }
  }
  @media (max-width: ${theme.breakPointsAsPixel.mobile}) {
    ${ColUI} {
      display: block;
      width: 100%;
    }
  }
`
