import { keyframes, css } from 'styled-components'
import hexToRgb from '../../../utils/hexToRgb'
import theme from '../../theme'

const pulseColor = (_style) => {
  return keyframes`
    to {
      color: ${_style === 'light' ? '#fff ' : '#000'};
    }

    from {
      color:  ${_style === 'light' ? '#000' : '#fff'};
    }
    `
}

export const LinkUI = styled('div')`
  align-items: center;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  height: ${theme.space[28]};
  a:visited,
  a:link {
    text-decoration: none;
  }
  padding: 0 ${theme.space[2]};
  a:active,
  a:hover {
    cursor: pointer;
    text-decoration: underline;
  }
  text-transform: uppercase;
`

export const ContainerUI = styled('header')`
  background-color: transparent;
  box-sizing: border-box;
  display: block;
  height: ${theme.space[28]};
  min-height: ${theme.space[28]};
  width: 100%;
  top: 0;
  position: absolute;
  z-index: 1;
  background-color: ${({ isTransparent }) =>
    isTransparent ? 'transparent' : theme.colors.white};

  border-bottom: ${({ isTransparent }) =>
    isTransparent
      ? '1px solid transparent'
      : `1px solid ${theme.colors.gray['200']}`};
`

export const ContainerInnerUI = styled('div')`
  align-items: center;
  background-color: transparent;
  box-sizing: border-box;
  display: flex;
  height: ${theme.space[28]};
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  z-index: 1;
  padding-right: ${theme.space[8]};
  padding-left: ${theme.space[8]};
`

export const DropdownUI = styled('div')`
  box-sizing: border-box;
  cursor: pointer;
  display: block;
  height: ${theme.space[28]};
  position: relative;
  float: left;

  ul {
    background-color: rgba(${hexToRgb(theme.colors.blue['800'])}, 1);
    box-sizing: border-box;
    display: none;
    list-style: none;
    margin: 0;
    width: 250px;
    padding-left: 0;
    position: relative;
    z-index: 1;
    cursor: pointer;
    position: absolute;
    margin: 0;
    left: 50%;
    transform: translatex(-50%);
    top: 85px;

    li {
      box-sizing: border-box;
      cursor: pointer;
      margin-bottom: 0;
      margin-left: 0;
      a {
        color: #fff;
        :hover {
          background-color: ${theme.colors.blue['800']};
          text-decoration: none;
        }
        box-sizing: border-box;
        display: block;
        margin-left: 0;
        min-width: 100%;
        padding: ${theme.space[2]};
      }
    }

    /* arrow */
    :before {
      content: '';
      position: absolute;
      left: 50%;
      transform: translatex(-50%);
      top: -13px;
      width: 0;
      height: 0;
      border-style: solid;
      border-width: 0 13px 13px 13px;
      border-color: transparent transparent
        rgba(${hexToRgb(theme.colors.blue['800'])}, 1) transparent;
      z-index: 9999;
    }
  }

  :hover {
    ul {
      display: block;
    }
  }
`

export const BrandUI = styled('div')`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  height: ${theme.space['28']};
  max-width: 230px;
  padding: ${theme.space['2']};
  padding-left: 0;

  img {
    max-height: 100%;
  }
`

export const HighlightUI = styled('div')`
  cursor: pointer;
  color: #fff;
  padding: ${theme.space['1']} ${theme.space['2']};
  background-color: ${theme.colors.red['600']};
`

export const MenuUI = styled('div')`
  display: flex;
  position: relative;

  ${LinkUI} > a, ${DropdownUI} ${LinkUI} {
    animation: ${({ isAnimated, headerStyle }) =>
      isAnimated
        ? css`
            ${pulseColor(headerStyle)} ${theme.transition.easing['ease-in-out']}
          `
        : 'none'};
    color: ${({ headerStyle }) =>
      headerStyle === 'light' ? theme.colors.white : theme.colors.black};
  }

  ul li ${LinkUI} {
    text-transform: none;
    height: auto;
    margin: 0;
    padding: 0;

    a {
      animation: 'none';
      color: #fff;
      margin: 0;
    }
  }
`
