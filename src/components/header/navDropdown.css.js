import { NavLinkUI } from './header.css'

export const NavDropdownDividerUI = styled('div')`
  border-bottom: ${({ theme }) => theme.border};
  height: 1px;
  min-width: 100%;
`

export const NavLinkDropdownIconUI = styled('div')``

export const NavDropdownUI = styled('div')`
  box-sizing: border-box;
  cursor: pointer;
  position: relative;
  ul {
    position: relative;
    box-sizing: border-box;
    display: block;
    list-style: none;
    margin: 0;
    padding-left: 0;
    z-index: 1;
    min-width: 100%;

    li {
      box-sizing: border-box;
      min-width: 100%;
      margin-left: 0;
      cursor: pointer;

      a {
        :hover {
          background-color: ${({ theme }) => theme.colors.dark5};
        }
        box-sizing: border-box;
        margin-left: 0;
        padding: ${({ theme }) => theme.unit(0.5)};
        display: inline-block;
        min-width: 100%;
      }
    }
  }

  @media (max-width: ${({ theme }) => theme.breakPoints.desktop}) {
    ul li {
      text-align: center;
      margin-left: 0;
      a:active,
      a:visited,
      a:hover,
      a:link {
        margin-left: 0;
        color: ${({ theme }) => theme.colors.light1};
        font-size: ${({ theme }) => theme.typography.sizes.desktop.md};
        text-transform: uppercase;
      }
    }

    ${NavLinkUI} {
      background: ${({ isOpen, theme }) =>
        isOpen ? theme.colors.dark5 : 'none'};
    }

    ${NavLinkDropdownIconUI} {
      &:after {
        content: '';
        color: ${({ theme }) => theme.colors.dark1};
        border: solid ${({ theme }) => theme.colors.light1};
        border-width: 0 4px 4px 0;
        display: inline-block;
        margin-left: ${({ theme }) => theme.unit(0.5)};
        padding: 4px;
        transform: ${({ isOpen }) =>
          isOpen ? `rotate(45deg)` : `rotate(-135deg)`};
        position: absolute;
        top: ${({ theme }) => theme.unit(0.75)};
      }
    }
  }

  @media (min-width: ${({ theme }) => theme.breakPoints.desktop}) {
    ul {
      background-color: #fff;
      border: ${({ theme }) => theme.border};
      display: none;
      position: absolute;
      top: 100%;
      right: 0;
      width: ${({ theme }) => theme.unit(8)};
      li {
        margin: 0;
        a {
          margin-left: 0;
        }
      }
      a:active,
      a:visited,
      a:hover,
      a:link {
        color: ${({ theme }) => theme.colors.dark3};
        font-size: ${({ theme }) => theme.typography.sizes.desktop.sm};
        margin-left: 0;
      }

      li:hover a {
        color: #fff;
      }
    }
  }
  :hover,
  :focus-within {
    ul {
      display: block;
    }
  }
`
