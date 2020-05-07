import styled from 'styled-components'
import theme from '../../theme'

export const ContentUI = styled('div')`
  align-items: center;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: calc(100vh - ${theme.layout.desktop.headerHeight});
  position: absolute;
  top: ${theme.unit(2.25)};
  width: 100%;
  text-align: center;

  @media (min-width: ${theme.breakPointsAsPixel.desktop}) {
    min-height: calc(100vh - ${theme.layout.tablet.headerHeight});
  }

  @media (max-width: ${theme.breakPointsAsPixel.tablet}) {
    padding: 0 ${theme.unit(0.5)};
    min-height: calc(100vh - ${theme.layout.mobile.headerHeight});
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

  @media (min-width: ${theme.breakPointsAsPixel.desktop}) {
    min-height: calc(100vh - ${theme.layout.tablet.headerHeight});

    img {
      height: calc(100vh - ${theme.layout.tablet.headerHeight});
    }
  }

  @media (max-width: ${theme.breakPointsAsPixel.tablet}) {
    min-height: calc(100vh - ${theme.layout.mobile.headerHeight});

    img {
      height: calc(100vh - ${theme.layout.mobile.headerHeight});
    }
  }
`
