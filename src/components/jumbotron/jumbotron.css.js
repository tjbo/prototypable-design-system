import styled from 'styled-components'
import config, { makePixelValue } from '../../config'

export const ContentUI = styled('div')`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: calc(100vh - ${config.layout.desktop.headerHeight});
  position: absolute;
  top: ${config.unit(2.25)};
  width: 100%;

  h1 {
    font-family: ${config.typography.fonts.font2};
    font-size: ${config.unit(2)};
    line-height: 1;
    margin-bottom: -${config.unit(1)};
    text-align: center;
  }

  h2 {
    font-family: ${config.typography.fonts.font2};
    font-size: ${config.unit(1.5)};
    font-weight: 700;
    line-height: 1.125;
    margin-bottom: ${config.unit(0.25)};
    margin-top: 0.25em;
    text-align: center;
  }

  @media (min-width: ${config.breakPoints.desktop}) {
    min-height: calc(100vh - ${config.layout.tablet.headerHeight});
  }

  @media (max-width: ${config.breakPoints.tablet}) {
    min-height: calc(100vh - ${config.layout.mobile.headerHeight});
  }
`

export const ImageUI = styled('div')`
  max-width: 100%;
  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (min-width: ${config.breakPoints.desktop}) {
    min-height: calc(100vh - ${config.layout.tablet.headerHeight});

    img {
      height: calc(100vh - ${config.layout.tablet.headerHeight});
    }
  }

  @media (max-width: ${config.breakPoints.tablet}) {
    min-height: calc(100vh - ${config.layout.mobile.headerHeight});

    img {
      height: calc(100vh - ${config.layout.mobile.headerHeight});
    }
  }
`
