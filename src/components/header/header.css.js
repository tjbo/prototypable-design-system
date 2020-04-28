import styled from 'styled-components'

export const BrandUI = styled('div')``

export const HeaderUI = styled('header')``

export const NavMenuTriggerUI = styled('span')``

export const NavMobileMenuUI = styled('nav')``

export const NavLinkUI = styled('span')``

export const HeaderContainer = styled('div')`
  width: 100%;
  box-sizing: border-box;
  position: fixed;
  z-index: 1;
  top: 0;
  display: block;
  background-color: ${({ theme }) => theme.colors['dark-1']};
  height: ${({ theme }) => theme.layout.desktop.headerHeight};

  ${HeaderUI} {
    align-items: center;
    background-color: ${({ theme }) => theme.colors['dark-1']};
    box-sizing: border-box;
    display: flex;
    height: ${({ theme }) => theme.layout.desktop.headerHeight};
    flex-direction: row;
    justify-content: space-between;
    padding: ${({ theme }) => `0 ${theme.unit(0.75)} 0 ${theme.unit(0.25)}`};
    width: 100%;
    z-index: 1;
  }

  ${BrandUI} {
    font-size: ${({ theme }) => theme.unit(1.125)};
    margin: 0;
    background-color: ${({ theme }) => theme.colors['dark-1']};
    height: ${({ theme }) => theme.layout.desktop.headerHeight};
    display: flex;
    align-items: center;
    text-align: left;
    justify-content: space-between;
    font-family: ${({ theme }) => theme.typography.fonts['font-2']};
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
    box-sizing: border-box;
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
      color: ${({ theme }) => theme.colors['dark-3']};
    }
  }

  ${NavMobileMenuUI} {
    display: flex;
    flex-direction: row;
    font-size: ${({ theme }) => theme.unit(0.7)};
    font-family: ${({ theme }) => theme.typography.fonts['font-2']};
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
    height: ${({ theme }) => theme.layout.tablet.headerHeight};

    ${HeaderUI} {
      height: ${({ theme }) => theme.layout.tablet.headerHeight};
    }

    ${BrandUI} {
      height: ${({ theme }) => theme.layout.tablet.headerHeight};
    }

    .is-open ${NavMobileMenuUI} {
      box-sizing: border-box;
      background-color: ${({ theme }) => theme.colors['dark-3']};
      display: flex;
      flex-direction: column;
      left: 0;
      min-height: 100vh;
      position: absolute;
      top: 0;
      width: 100%;
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
        background-color: ${({ theme }) => theme.colors['dark-5']};
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

    nav {
      box-sizing: border-box;
      padding-top: ${({ theme }) => theme.unit(2)};
    }
  }

  @media (max-width: ${({ theme }) => theme.breakPoints.mobile}) {
    height: ${({ theme }) => theme.layout.mobile.headerHeight};

    ${HeaderUI} {
      height: ${({ theme }) => theme.layout.mobile.headerHeight};
    }

    ${BrandUI} {
      font-size: ${({ theme }) => theme.unit(0.66)};
      height: ${({ theme }) => theme.layout.mobile.headerHeight};
    }

    ${NavMenuTriggerUI} {
      width: ${({ theme }) => theme.layout.mobile.headerHeight};
      height: ${({ theme }) => theme.layout.mobile.headerHeight};
    }
  }
`
