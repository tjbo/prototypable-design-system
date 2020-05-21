import theme from '../../theme'

export const BodyUI = styled('div')`
  height: 100%;
  margin-top: ${theme.layout.desktop.headerHeight};
  @media (max-width: ${theme.breakPointsAsPixel.desktop}) {
    margin-top: ${theme.layout.mobile.headerHeight};
  }

  @media (max-width: ${theme.breakPointsAsPixel.mobile}) {
    margin-top: ${theme.layout.mobile.headerHeight};
  }
`
