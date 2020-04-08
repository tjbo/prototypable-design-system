import styled from 'styled-components'
import config, { makePixelValue } from '../../config'

export const HeaderUI = styled('header')`
  background-color: ${config.colors.dark1};
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  color: #fff;
  position: fixed;
  top: 0;
  height: ${config.layout.desktop.headerHeight};
  z-index: 1;

  @media (max-width: ${makePixelValue(config.breakPoints.tablet)}) {
    height: ${config.unit(2)};
  }
`

// the above header is fixed, this allows content to push down with having to compensate for it every time
export const HeaderPushUI = styled('div')`
  position: relative;
  height: ${config.layout.desktop.headerHeight};
  display: block;
  width: 100%;
`

export const BrandUI = styled('div')`
  font-size: ${config.unit(1.125)};
  margin: 0;
  height: 100%;
  margin-left: ${config.unit(0.5)};
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: space-around;
  font-family: ${config.fonts.font2};
  font-weight: 500;
  text-transform: uppercase;
  a:active,
  a:visited,
  a:hover,
  a:link {
    color: #fff;
    text-decoration: none;
  }

  @media (max-width: ${makePixelValue(config.breakPoints.tablet)}) {
    font-size: ${config.unit(0.75)};
  }
`
export const NavMenuTriggerUI = styled('span')`
  @media (max-width: ${makePixelValue(config.breakPoints.tablet)}) {
    cursor: pointer;
    display: block;
    width: ${config.unit(1.5)};
    height: ${config.unit(1.5)};
  }
`

export const NavMenuUI = styled('nav')`
  font-size: ${config.unit(0.7)};
  font-family: ${config.fonts.font2};
  margin: 0 ${config.unit(0.5)};
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: row;
  a {
    margin-left: ${config.unit(0.5)};
    :active,
    :visited,
    :hover,
    :link {
      color: #fff;
      text-decoration: none;
    }
  }

  @media (max-width: ${makePixelValue(config.breakPoints.tablet)}) {
    display: ${({ isOpen }) => {
      return isOpen === true ? 'flex' : 'none'
    }};
    align-items: center;
    margin: 0;
    position: absolute;
    top: ${config.unit(2)};
    align-content: stretch;
    flex-direction: column;
    /* border-top: 1px solid #eee; */
    min-height: calc(100vh - ${config.unit(2)});
    background-color: #000;
    background-color: ${config.colors.dark3};
    /* min-width: 100vw; */
  }
`

export const NavLinkUI = styled('span')`
  @media (max-width: ${makePixelValue(config.breakPoints.tablet)}) {
    cursor: pointer;
    font-size: ${config.unit(0.6)};
    padding: ${config.unit(0.4)} 0;
    border-bottom: ${config.border};
    margin: 0;
    width: 100vw;
    text-align: left;

    :hover,
    :active {
      /* background-color: #000; */
    }
  }
`

const heightLine = 4
const heightIcon = 30
const translateY = heightIcon / 2

export const TriggerIconUI = styled('div')`
  @media (max-width: ${makePixelValue(config.breakPoints.tablet)}) {
    width: ${config.unit(1)};
    top: ${config.unit(0.5)};
    right: ${config.unit(0.5)};
    height: ${makePixelValue(heightIcon)};
    position: absolute;
    display: block;
    margin: (${makePixelValue(heightIcon * 2)}) auto ${heightIcon} auto;

    .line {
      display: block;
      background: #fff;
      width: 100%;
      height: ${makePixelValue(heightLine)};
      position: absolute;
      left: 0;
      border-radius: (${makePixelValue(heightLine / 2)});
      transition: all 0.4;
      -webkit-transition: all 0.4;
      -moz-transition: all 0.4;

      &.line-1 {
        top: 0;
      }
      &.line-2 {
        top: 50%;
      }
      &.line-3 {
        top: 100%;
      }
    }

    ${({ isOpen }) => {
      return (
        isOpen &&
        `
    .line-1 {
      transform: translateY(${makePixelValue(
        translateY,
      )}) translateX(0) rotate(45deg);
    }
    .line-2 {
      opacity: 0;
    }
    .line-3 {
      transform: translateY(${makePixelValue(
        translateY * -1,
      )}) translateX(0) rotate(-45deg);
  }`
      )
    }}
  }
`
