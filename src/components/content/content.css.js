import theme from '../../theme'

export const ContainerUI = styled('div')`
  flex: 1 0 auto;
  min-height: 100%;

  @media (max-width: ${theme.breakPointsAsPixel.bigTablet}) {
    margin-top: ${theme.layout.tablet.headerHeight};
  }
`
