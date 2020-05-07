import theme from '../../theme'

export const LoadingScreenContainerUI = styled('div')`
  align-items: center;
  display: flex;
  justify-content: center;
  min-height: calc(100vh - ${theme.layout.desktop.headerHeight});

  @media (min-width: ${theme.breakPointsAsPixel.desktop}) {
    min-height: calc(100vh - ${theme.layout.tablet.headerHeight});
  }

  @media (max-width: ${theme.breakPointsAsPixel.tablet}) {
    min-height: calc(100vh - ${theme.layout.mobile.headerHeight});
  }
`
