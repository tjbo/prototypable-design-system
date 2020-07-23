import { css, keyframes } from 'styled-components'
import theme from '../../../theme'

const pulseColor = (isTransparent) => {
  return keyframes`
    to {
        background-color: ${
          isTransparent === false ? '#f7f7f7 ' : 'transparent'
        };
    }
    from {
        background-color:  ${
          isTransparent === false ? 'transparent' : '#f7f7f7'
        };
    }
    `
}

export const BrandContainerUI = styled('div')`
  max-width: 170px;
`

export const ContainerUI = styled('div')`
  box-sizing: border-box;
  position: sticky;
  z-index: 1;
  top: 0;
  display: block;
  height: ${theme.layout.mobile.headerHeight};
  width: 100%;

  background-color: ${({ isTransparent, style }) =>
    isTransparent ? 'transparent' : '#f7f7f7'};

  border-bottom: ${({ isTransparent }) =>
    isTransparent ? '1px solid transparent' : '1px solid #d3d3d3'};

  animation: ${({ animate, isTransparent }) =>
    animate
      ? css`
          ${pulseColor(isTransparent)} 500ms linear 1
        `
      : 'none'};
`

export const ContainerInnerUI = styled('div')`
  align-items: center;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  height: ${theme.layout.mobile.headerHeight};
  justify-content: space-between;
  padding: ${`0 ${theme.unit(0.75)} 0 ${theme.unit(0.25)}`};
  width: 100%;
  z-index: 1;
`

export const HighlightUI = styled('div')`
  margin: 0;
  padding: ${theme.unit(0.25)};
`

export const LinkUI = styled('div')`
  color: ${theme.colors.light1};
  cursor: pointer;
  box-sizing: border-box;
  font-family: ${theme.typography.fonts.font1};
  font-size: ${theme.unit(0.75)};
  margin: 0;
  padding: ${theme.unit(0.25)};
  position: relative;
  text-align: center;
  width: auto;
  text-transform: uppercase;
  :hover {
    background-color: ${theme.colors.dark5};
    padding: ${theme.unit(0.25)};
  }
  a:active,
  a:visited,
  a:hover,
  a:link {
    color: #fff;
    min-width: 100%;
    text-decoration: none;
  }
  background-color: ${({ isOpen }) => isOpen && `${theme.colors.dark5}`};
`

export const MenuUI = styled('nav')`
  box-sizing: border-box;
  background-color: ${theme.colors.dark3};
  display: block;
  left: 0;
  min-height: 100vh;
  padding-top: ${theme.layout.mobile.headerHeight};
  position: absolute;
  top: 0;
  height: 100%;
  width: 100%;
  min-height: 100vh;
  overflow: auto;
`
