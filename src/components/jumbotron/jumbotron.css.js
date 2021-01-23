import styled from 'styled-components'
import theme from '../theme'

export const ContainerUI = styled('div')`
  align-items: ${({ alignItems }) => alignItems};
  display: flex;
  justify-content: ${({ justifyContent }) => justifyContent};
  margin-top: ${({ hasNavShift }) =>
    hasNavShift === true ? `-${theme.space[28]}` : 0};

  @media (max-width: ${theme.breakpoints[1]}) {
    margin-top: ${({ hasNavShift }) =>
      hasNavShift === true ? `-${theme.space[28]}` : 0};
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
    hasVerticalOffset ? theme.space[9] : 0};

  margin-left: ${({ justifyContent }) =>
    justifyContent === 'flex-start' ? `${theme.space[4]}` : '0'};

  @media (max-width: ${theme.breakpoints[1]}) {
    margin-top: 0;
    margin-left: ${theme.space[2]};
    margin-right: ${theme.space[2]};
  }
`

export const MainContentUI = styled('div')`
  display: block;
  position: relative;

  h1,
  h2,
  h3,
  p,
  li {
    color: #fff;
    margin-bottom: 0;
  }

  p {
    font-size: ${theme.fontSizes['3xl']};
  }

  li {
    margin: 0;
  }
`

export const ImageUI = styled('div')`
  top: 0;
  min-width: 100%;
  width: 100%;
  height: 100%;
  display: block;
  position: absolute;
  z-index: -1;
`
