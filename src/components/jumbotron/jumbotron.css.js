import styled from 'styled-components'
import theme from '../../theme'

export const ContainerUI = styled('div')`
  height: ${({ size }) =>
    size === 'half'
      ? `calc(50vh - ${theme.layout.desktop.headerHeight})`
      : `calc(100vh - ${theme.layout.desktop.headerHeight})`};
  max-height: ${({ size }) =>
    size === 'half'
      ? `calc(50vh - ${theme.layout.desktop.headerHeight})`
      : `calc(100vh - ${theme.layout.desktop.headerHeight})`};
  min-height: ${({ size }) =>
    size === 'half'
      ? `calc(50vh - ${theme.layout.desktop.headerHeight})`
      : `calc(100vh - ${theme.layout.desktop.headerHeight})`};
  margin-top: ${theme.layout.desktop.headerHeight};
  position: relative;
  width: 100%;

  @media (max-width: ${theme.breakPointsAsPixel.desktop}) {
    height: ${({ size }) =>
      size === 'half'
        ? `calc(50vh - ${theme.layout.tablet.headerHeight})`
        : `calc(100vh - ${theme.layout.tablet.headerHeight})`};
    max-height: ${({ size }) =>
      size === 'half'
        ? `calc(50vh - ${theme.layout.tablet.headerHeight})`
        : `calc(100vh - ${theme.layout.tablet.headerHeight})`};
    min-height: ${({ size }) =>
      size === 'half'
        ? `calc(50vh - ${theme.layout.tablet.headerHeight})`
        : `calc(100vh - ${theme.layout.tablet.headerHeight})`};

    margin-top: ${theme.layout.tablet.headerHeight};
  }

  @media (max-width: ${theme.breakPointsAsPixel.tablet}) {
    height: ${({ size }) =>
      size === 'half'
        ? `calc(50vh - ${theme.layout.mobile.headerHeight})`
        : `calc(100vh - ${theme.layout.mobile.headerHeight})`};
    max-height: ${({ size }) =>
      size === 'half'
        ? `calc(50vh - ${theme.layout.mobile.headerHeight})`
        : `calc(100vh - ${theme.layout.mobile.headerHeight})`};
    min-height: ${({ size }) =>
      size === 'half'
        ? `calc(50vh - ${theme.layout.mobile.headerHeight})`
        : `calc(100vh - ${theme.layout.mobile.headerHeight})`};

    margin-top: ${theme.layout.mobile.headerHeight};
  }
`

export const ContentUI = styled('div')`
  align-items: center;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-height: inherit;
  position: absolute;
  width: 100%;
  height: 100%;
  text-align: center;
  top: 0;
`

export const ImageUI = styled('div')`
  max-width: 100%;
  max-height: inherit;
  height: inherit;
  img {
    display: block;
    width: 100%;
    height: inherit;
    max-height: inherit;
    object-fit: cover;
  }
  position: relative;
  z-index: -1;
`
