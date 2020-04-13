import styled from 'styled-components'
import config, { makePixelValue } from '../../config'

export const BrandUI = styled('div')``

export const HeaderUI = styled('header')``

export const HeaderPushUI = styled('div')``

export const NavMenuTriggerUI = styled('span')``

export const NavMenuUI = styled('nav')``

export const NavLinkUI = styled('span')``

export const HeaderContainer = styled('div')`
  width: 100%;
  ${HeaderUI} {
    align-items: center;
    background-color: ${config.colors.dark1};
    box-sizing: border-box;
    color: #fff;
    display: flex;
    height: ${config.layout.desktop.headerHeight};
    flex-direction: row;
    justify-content: space-between;
    padding: 0 ${config.unit(0.75)} 0 ${config.unit(0.25)};
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 1;
  }

  ${HeaderPushUI} {
    position: relative;
    height: ${config.layout.desktop.headerHeight};
    display: block;
  }

  ${BrandUI} {
    font-size: ${config.unit(1.125)};
    margin: 0;
    height: 100%;
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: space-around;
    font-family: ${config.fonts.font2};
    font-weight: 500;
    text-align: left;
    text-transform: uppercase;
    a:active,
    a:visited,
    a:hover,
    a:link {
      color: #fff;
      text-decoration: none;
    }
  }

  ${NavMenuTriggerUI} {
    display: none;
  }

  ${NavMenuUI} {
    display: flex;
    flex-direction: row;
    font-size: ${config.unit(0.7)};
    font-family: ${config.fonts.font2};
    list-style: none;
    box-sizing: border-box;

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
  }

  ${NavMenuTriggerUI} {
    display: none;
  }

  @media (max-width: ${config.breakPoints.tablet}) {
    .is-open ${NavMenuUI} {
      padding-top: 50px;
      align-content: stretch;
      align-items: center;
      background-color: ${config.colors.dark3};
      display: flex;
      flex-direction: column;
      left: 0;
      min-height: 100vh;
      position: absolute;
      top: 0;
      width: 100%;
      z-index: 1;
    }

    .is-closed ${NavMenuUI} {
      display: none;
    }

    ${NavLinkUI} {
      cursor: pointer;
      box-sizing: border-box;
      font-size: ${config.unit(0.75)};
      margin: 0;
      padding: ${config.unit(0.25)};
      text-align: center;
      width: auto;
      text-transform: uppercase;

      :hover {
        background-color: ${config.colors.dark5};

        padding: ${config.unit(0.25)};
      }
    }

    ${NavMenuTriggerUI} {
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      position: absolute;
      right: 0;
      top: 0;
      width: ${config.layout.tablet.headerHeight};
      height: ${config.layout.tablet.headerHeight};
      z-index: 2;
    }

    .is-closed ${NavMenuUI} {
      margin-right: 15px;
    }
  }

  @media (max-width: ${config.breakPoints.mobile}) {
    ${HeaderUI} {
      height: ${config.layout.mobile.headerHeight};
    }

    ${HeaderPushUI} {
      height: ${config.layout.mobile.headerHeight};
    }

    ${BrandUI} {
      font-size: ${config.unit(0.66)};
    }

    ${NavMenuTriggerUI} {
      width: ${config.layout.mobile.headerHeight};
      height: ${config.layout.mobile.headerHeight};
    }
  }
`

const heightLine = 3
const heightIcon = 20
const translateY = heightIcon / 2

export const TriggerIconUI = styled('div')`
  @media (max-width: ${config.breakPoints.tablet}) {
    width: ${config.unit(1)};
    height: ${makePixelValue(heightIcon)};
    position: relative;
    display: block;
    margin: (${makePixelValue(heightIcon * 2)}) auto ${heightIcon} auto;
    margin-top: -${config.unit(0.125)};

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
