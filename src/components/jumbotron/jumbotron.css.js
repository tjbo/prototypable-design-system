import styled from 'styled-components'
import theme from '../../theme'
import { TitleUI } from '../title/title.css'
import { GridUI } from '../grid/grid.css'

export const ContainerUI = styled('div')`
  align-items: ${({ alignItems }) => alignItems};
  display: flex;
  justify-content: ${({ justifyContent }) => justifyContent};
  margin-top: ${({ hasNavShift }) =>
    hasNavShift === true
      ? `-${theme.layout.desktop.headerHeight}`
      : 0}; /* offset the nav bar so image is full height */
  max-height: ${({ size }) => (size === 'half' ? `50vh` : `100vh`)};
  min-height: ${({ size }) => (size === 'half' ? `50vh` : `100vh`)};
  overflow: hidden;
  position: relative;
  padding: 0;
  text-align: ${({ textAlign }) => textAlign};
  width: 100%;
`

export const OverlayUI = styled('div')`
  display: block;
  height: 100%;
  width: 100%;
`

export const ContentUI = styled(GridUI)`
  box-sizing: border-box;
  background: transparent;
  display: flex;
  flex-direction: column;
  max-width: 1024px;
  position: absolute;
  text-align: inherit;
  padding: 0;
  padding-top: ${({ hasNavShift }) =>
    hasNavShift ? theme.layout.desktop.headerHeight : 0};
  padding-left: ${theme.unit(1.5)};
  padding-right: ${theme.unit(1.5)};
`

export const MainContentUI = styled('div')`
  ${TitleUI} {
    color: #fff;
    margin-bottom: 0;
  }

  p,
  ul {
    color: #fff;
    font-size: ${theme.unit(0.75)};
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
`
