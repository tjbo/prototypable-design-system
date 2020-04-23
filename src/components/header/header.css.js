import styled from 'styled-components'

export const BrandUI = styled('div')``

export const HeaderUI = styled('header')``

export const NavMenuTriggerUI = styled('span')``

export const NavMobileMenuUI = styled('nav')``

export const NavLinkUI = styled('span')``

export const HeaderContainer = styled('div')`
  width: 100%;
  ${HeaderUI} {
    align-items: center;
    background-color: ${({ theme }) => theme.colors.dark1};
    box-sizing: border-box;
    display: flex;
    height: ${({ theme }) => theme.layout.desktop.headerHeight};
    flex-direction: row;
    justify-content: space-between;
    padding: ${({ theme }) => `0 ${theme.unit(0.75)} 0 ${theme.unit(0.25)}`};
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 1;
  }

  ${BrandUI} {
    font-size: ${({ theme }) => theme.unit(1.125)};
    margin: 0;
    height: 100%;
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: space-around;
    font-family: ${({ theme }) => theme.typography.fonts.font2};
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

  ${NavLinkUI} {
    align-items: center;
    justify-content: center;
    display: flex;
    height: ${({ theme }) => theme.layout.desktop.headerHeight};
    a:visited,
    a:link {
      color: #fff;
      text-decoration: none;
    }
    color: #fff;
    padding: 0;
    padding-left: ${({ theme }) => theme.unit(1)};

    a:active,
    a:hover {
      color: ${({ theme }) => theme.colors.dark3x};
    }
  }

  ${NavMobileMenuUI} {
    display: flex;
    flex-direction: row;
    font-size: ${({ theme }) => theme.unit(0.7)};
    font-family: ${({ theme }) => theme.typography.fonts.font2};
    list-style: none;
    box-sizing: border-box;

    a {
      margin-left: ${({ theme }) => theme.unit(0.5)};
      :active,
      :visited,
      :hover,
      :link {
        text-decoration: none;
      }
    }
  }

  ${NavMenuTriggerUI} {
    display: none;
  }

  @media (max-width: ${({ theme }) => theme.breakPoints.tablet}) {
    .is-open ${NavMobileMenuUI} {
      box-sizing: border-box;
      background-color: ${({ theme }) => theme.colors.dark3};
      display: flex;
      flex-direction: column;
      left: 0;
      min-height: 100vh;
      position: absolute;
      top: 0;
      width: 100%;
      z-index: 1;
    }

    .is-closed ${NavMobileMenuUI} {
      display: none;
    }

    ${NavLinkUI} {
      cursor: pointer;
      box-sizing: border-box;
      font-size: ${({ theme }) => theme.unit(0.75)};
      margin: 0;
      padding: ${({ theme }) => theme.unit(0.25)};
      text-align: center;
      width: auto;
      text-transform: uppercase;

      :hover {
        background-color: ${({ theme }) => theme.colors.dark5};
        padding: ${({ theme }) => theme.unit(0.25)};
      }
    }

    ${NavMenuTriggerUI} {
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      position: absolute;
      left: calc(100vw - ${({ theme }) => theme.layout.tablet.headerHeight});
      top: 0;
      width: ${({ theme }) => theme.layout.tablet.headerHeight};
      height: ${({ theme }) => theme.layout.tablet.headerHeight};
      z-index: 2;
    }
  }

  @media (max-width: ${({ theme }) => theme.breakPoints.mobile}) {
    ${HeaderUI} {
      height: ${({ theme }) => theme.layout.mobile.headerHeight};
    }

    ${BrandUI} {
      font-size: ${({ theme }) => theme.unit(0.66)};
    }

    ${NavMenuTriggerUI} {
      width: ${({ theme }) => theme.layout.mobile.headerHeight};
      height: ${({ theme }) => theme.layout.mobile.headerHeight};
    }
  }
`
