import config from '../../config'

export const LoadingScreenContainerUI = styled('div')`
  align-items: center;
  display: flex;
  justify-content: center;
  min-height: calc(100vh - ${config.layout.desktop.headerHeight});

  @media (min-width: ${config.breakPoints.desktop}) {
    min-height: calc(100vh - ${config.layout.tablet.headerHeight});
  }

  @media (max-width: ${config.breakPoints.tablet}) {
    min-height: calc(100vh - ${config.layout.mobile.headerHeight});
  }
`
