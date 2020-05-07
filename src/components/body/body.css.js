import theme from '../../theme'

export const BodyUI = styled('div')`
  margin-top: ${theme.layout.desktop.headerHeight};
  min-height: 100vh;

  @media (max-width: ${theme.breakPointsAsPixel.desktop}) {
    margin-top: ${theme.layout.mobile.headerHeight};
  }

  @media (max-width: ${theme.breakPointsAsPixel.mobile}) {
    margin-top: ${theme.layout.mobile.headerHeight};
  }
`
