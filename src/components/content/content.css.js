import theme from '../../theme'

export const ContainerUI = styled('div')`
  flex: 1 0 auto;
  min-height: 100vh;
  margin-top: ${theme.layout.desktop.headerHeight};
  @media (max-width: ${theme.breakPointsAsPixel.bigTablet}) {
    margin-top: ${theme.layout.tablet.headerHeight};
  }
`
