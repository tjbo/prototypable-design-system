import { css, keyframes } from 'styled-components'
import theme from '../../../theme'

const pulseColor = (isTransparent) => {
  return keyframes`
    to {
        background-color: ${
          isTransparent === false ? theme.colors.light3 : 'transparent'
        };
    }
    from {
        background-color:  ${
          isTransparent === false ? 'transparent' : theme.colors.light3
        };
    }
    `
}

const slideIn = (isParentMenuOpen) => {
  return keyframes`
  to {
    left: ${isParentMenuOpen ? '0%' : '-100%'}
  }

  from {
    left:  ${isParentMenuOpen ? '-100%' : '0%'}
  }
  `
}

export const BrandContainerUI = styled('div')`
  max-width: 170px;
`

export const ContainerUI = styled('div')`
  box-sizing: border-box;
  position: fixed;
  top: 0;
  z-index: 1;
  display: block;
  height: ${theme.layout.mobile.headerHeight};
  min-width: 100vw;

  background-color: ${({ isTransparent }) =>
    isTransparent ? 'transparent' : theme.colors.light3};

  border-bottom: ${({ isTransparent }) =>
    isTransparent ? '1px solid transparent' : '1px solid #d3d3d3'};

  animation: ${({ isAnimated, isTransparent }) =>
    isAnimated
      ? css`
          ${pulseColor(isTransparent)} ${theme.animation.speed
            .default} ease-in-out 1
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
  margin-top: ${theme.unit(0.5)};
`

export const LinkUI = styled('div')`
  color: ${theme.colors.dark3};
  display: flex;
  align-items: center;
  cursor: pointer;
  box-sizing: border-box;
  font-family: ${theme.typography.fonts.font1};
  font-size: ${theme.unit(0.75)};
  margin: 0;
  padding: ${theme.unit(0.25)};
  position: relative;
  padding-left: ${theme.unit(1.5)};
  text-align: left;
  width: auto;
  vertical-align: middle;
  :hover {
    background-color: ${theme.colors.light1};
  }
  a:active,
  a:visited,
  a:hover,
  a:link {
    color: ${theme.colors.dark3};
    display: inline-block;
    min-width: 100%;
    text-decoration: none;
  }
  border-bottom: ${theme.border};
  background-color: ${({ isOpen }) => isOpen && `${theme.colors.light1}`};
`

export const MenuUI = styled('nav')`
  box-sizing: border-box;
  background-color: ${theme.colors.light3};
  display: block;
  left: ${({ isParentMenuOpen }) => (isParentMenuOpen ? '0' : '-100%')};
  min-height: 100vh;
  overflow: hidden;
  position: absolute;
  height: 100%;
  width: 100%;
  min-height: 100vh;
  overflow: auto;
  animation: ${({ isAnimated, isParentMenuOpen }) =>
    isAnimated
      ? css`
          ${slideIn(isParentMenuOpen)} ${theme.animation.speed
            .quick} ease-in-out 1
        `
      : 'none'};

  top: ${({ isSubMenu }) =>
    isSubMenu ? '0' : theme.layout.mobile.headerHeight};
  z-index: 1;
  background-color: #fff;
`
