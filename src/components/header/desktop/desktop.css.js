import theme from '../../../theme'
import { keyframes, css } from 'styled-components'

const pulseColor = (_style) => {
  console.log('flip color', _style)
  return keyframes`
    to {
      color: ${_style === 'light' ? '#fff ' : '#000'};
    }

    from {
      color:  ${_style === 'light' ? '#000' : '#fff'};
    }
    `
}

export const ContainerUI = styled('header')`
  background-color: transparent;
  box-sizing: border-box;
  display: block;
  height: ${theme.layout.desktop.headerHeight};
  width: 100%;
  position: relative;
  top: 0;
  z-index: 1;
  background-color: ${({ isTransparent }) =>
    isTransparent ? 'transparent' : '#f7f7f7'};

  border-bottom: ${({ isTransparent }) =>
    isTransparent ? '1px solid transparent' : '1px solid #d3d3d3'};
`

export const ContainerInnerUI = styled('div')`
  align-items: center;
  background-color: transparent;
  box-sizing: border-box;
  display: flex;
  height: ${theme.layout.desktop.headerHeight};
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  z-index: 1;
  padding-right: ${theme.unit(1.5)};
  padding-left: ${theme.unit(1.5)};
`

export const DropdownUI = styled('div')`
  box-sizing: border-box;
  cursor: pointer;
  display: block;
  height: ${theme.layout.desktop.headerHeight};
  position: relative;
  float: left;

  ul {
    background-color: #efefef;
    box-sizing: border-box;
    display: none;
    list-style: none;
    margin: 0;
    width: 250px;
    padding-left: 0;
    position: relative;
    z-index: 1;
    border: ${theme.border};
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
        :hover {
          background-color: ${theme.colors.dark5};
          text-decoration: none;
        }
        box-sizing: border-box;
        display: block;
        font-family: ${theme.typography.fonts.font1};
        margin-left: 0;
        min-width: 100%;
        padding: ${theme.unit(0.25)};
      }
    }

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
      border-color: transparent transparent #efefef transparent;
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
  height: ${theme.layout.desktop.headerHeight};
  padding: ${theme.unit(0.5)};
  padding-left: 0;

  img {
    max-height: 100%;
  }
`

export const LinkUI = styled('div')`
  align-items: center;
  box-sizing: border-box;
  display: flex;
  font-family: ${theme.typography.fonts.font1};
  font-weight: 500;
  justify-content: center;
  height: ${theme.layout.desktop.headerHeight};
  a:visited,
  a:link {
    text-decoration: none;
  }
  padding: 0 ${theme.unit(0.25)};
  a:active,
  a:hover {
    cursor: pointer;
    text-decoration: underline;
  }
  text-transform: uppercase;
`

export const HighlightUI = styled('div')`
  padding: ${theme.unit(0.075)} ${theme.unit(0.5)};
  background-color: ${theme.colors.dark2};
`

export const MenuUI = styled('div')`
  display: flex;
  position: relative;

  ${LinkUI}, ${LinkUI} a {
    animation: ${({ animate, style }) =>
      animate
        ? css`
            ${pulseColor(style)} 1s linear 1
          `
        : 'none'};
    color: ${({ style }) => (style === 'light' ? '#fff' : '#000')};
  }
  ${LinkUI} ${HighlightUI} a {
    animation: 'none';
    color: #fff;
  }
`
