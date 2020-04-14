import config from '../../config'

export const BodyUI = styled('div')`
  margin-top: ${config.layout.desktop.headerHeight};
  min-height: 100vh;

  @media (max-width: ${config.breakPoints.desktop}) {
    margin-top: ${config.layout.tablet.headerHeight};
  }

  @media (max-width: ${config.breakPoints.mobile}) {
    margin-top: ${config.layout.mobile.headerHeight};
  }
`
