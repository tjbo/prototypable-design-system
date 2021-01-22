import { css, keyframes } from 'styled-components'
import theme from '../../theme'

const pulseColor = (isTransparent) => {
  return keyframes`
    to {
        background-color: ${
          isTransparent === false ? theme.colors.grey['200'] : 'transparent'
        };
    }
    from {
        background-color:  ${
          isTransparent === false ? 'transparent' : theme.colors.grey['200']
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
  height: ${theme.space[28]};
  min-width: 100vw;

  background-color: ${({ isTransparent }) =>
    isTransparent ? 'transparent' : theme.colors.white};

  border-bottom: ${({ isTransparent }) =>
    isTransparent ? '1px solid transparent' : '1px solid #d3d3d3'};

  animation: ${({ isAnimated, isTransparent }) =>
    isAnimated
      ? css`
          ${pulseColor(isTransparent)} ${theme.transition.easing['ease-in-out']}
        `
      : 'none'};
`

export const ContainerInnerUI = styled('div')`
  align-items: center;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  height: ${theme.space[28]};
  justify-content: space-between;
  padding: ${`0 ${theme.space[4]} 0 ${theme.space[3]}`};
  width: 100%;
  z-index: 1;
`

export const HighlightUI = styled('div')`
  margin: 0;
  padding: ${theme.space[2]};
  margin-top: ${theme.space[2]};
`

export const LinkUI = styled('div')`
  color: ${theme.colors.red['800']};
  display: flex;
  align-items: center;
  cursor: pointer;
  box-sizing: border-box;
  font-size: ${theme.space[4]};
  margin: 0;
  padding: ${theme.space[2]};
  position: relative;
  padding-left: ${theme.space[7]};
  text-align: left;
  width: auto;
  vertical-align: middle;
  :hover {
    background-color: ${theme.colors.blue['200']};
  }
  a:active,
  a:visited,
  a:hover,
  a:link {
    color: ${theme.colors.red['800']};
    display: inline-block;
    min-width: 100%;
    text-decoration: none;
  }
  border-bottom: ${theme.border};
  background-color: ${({ isOpen }) => isOpen && `${theme.colors.gray['200']}`};
`

export const MenuUI = styled('nav')`
  box-sizing: border-box;
  background-color: ${theme.colors.gray['200']};
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
          ${slideIn(isParentMenuOpen)} ${theme.transition.easing['ease-in-out']}
        `
      : 'none'};

  top: ${({ isSubMenu }) => (isSubMenu ? '0' : theme.space[28])};
  z-index: 1;
  background-color: #fff;
`
