import theme from '../../theme'
export const GridWrapperUI = styled('div')`
  * {
    box-sizing: border-box;
  }

  display: flex;
  justify-content: space-between;
  width: 100%;
  flex-wrap: wrap;

  .col {
    min-width: 32.5%;
    max-width: 32.5%;
    margin-bottom: 1.25%;
    flex: 1;

    @media (max-width: ${theme.breakPointsAsPixel.tablet}) {
      margin-bottom: ${theme.unit(0.5)};
    }
  }

  @media (min-width: ${({ theme }) =>
      theme.breakPoints.mobile}) and (max-width: ${({ theme }) =>
      theme.breakPoints.tablet}) {
    .col {
      min-width: 49%;
      max-width: 49%;
    }
  }

  @media (max-width: ${theme.breakPointsAsPixel.mobile}) {
    .col {
      display: block;
      min-width: 100%;
      max-width: 100%;
    }
  }
`
