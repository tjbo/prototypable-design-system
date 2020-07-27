import styled from 'styled-components'
import theme from '../../theme'

export const ContainerUI = styled('div')`
  align-items: ${({ alignItems }) => alignItems};
  display: flex;
  justify-content: ${({ justifyContent }) => justifyContent};
  margin-top: ${({ hasNavShift }) =>
    hasNavShift === true ? `-${theme.layout.desktop.headerHeight}` : 0};

  @media (max-width: ${theme.breakPointsAsPixel.mobile}) {
    margin-top: ${({ hasNavShift }) =>
      hasNavShift === true ? `-${theme.layout.mobile.headerHeight}` : 0};
  }

  min-height: ${({ size }) => (size === 'half' ? `50vh` : `100vh`)};
  position: relative;
  padding: 0;
  text-align: ${({ textAlign }) => textAlign};
  width: 100%;
`

export const OverlayUI = styled('div')`
  display: block;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  background: ${({ overlay }) =>
    `rgba(0, 0, 0, ${parseInt(overlay, 10) / 100})`};
  position: absolute;
  pointer-events: none;
  z-index: 1;
`

export const ContentUI = styled('div')`
  box-sizing: border-box;
  background: transparent;
  display: flex;
  flex-direction: column;
  position: absolute;
  text-align: inherit;
  max-width: 768px;
  padding: 0;
  margin-top: ${({ hasVerticalOffset }) =>
    hasVerticalOffset
      ? theme.layoutAsNumber.desktop.headerHeight / 3 + 'px'
      : 0};

  margin-left: ${({ justifyContent }) =>
    justifyContent === 'flex-start' ? `${theme.unit(1.5)}` : '0'};

  @media (max-width: ${theme.breakPointsAsPixel.mobile}) {
    margin-top: 0;
    margin-left: ${theme.unit(0.5)};
    margin-right: ${theme.unit(0.5)};
  }
`

export const MainContentUI = styled('div')`
  display: block;
  position: relative;

  h1,
  h2,
  h3 {
    color: #fff;
    margin-bottom: 0;
  }

  p,
  ul {
    color: #fff;
    font-size: ${theme.unit(0.75)};

    @media (max-width: ${theme.breakPointsAsPixel.mobile}) {
      font-size: ${theme.unit(0.65)};
    }
  }

  li {
    margin: 0;
  }
`

export const ImageUI = styled('div')`
  top: 0;
  width: 100%;
  height: 100%;
  display: block;
  position: absolute;
  z-index: -1;
`
