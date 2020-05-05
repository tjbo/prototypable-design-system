export const ContainerUI = styled('header')`
  background-color: ${({ theme }) => theme.colors['dark-1']};
  box-sizing: border-box;
  display: block;
  height: ${({ theme }) => theme.layout.desktop.headerHeight};
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 1;
`

export const ContainerInnerUI = styled('div')`
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
  padding-right: 75px;
`

export const BrandUI = styled('div')`
  display: flex;
  align-items: center;
  font-size: ${({ theme }) => theme.unit(1.125)};
  float: left;
  margin: 0;
  background-color: ${({ theme }) => theme.colors['dark-1']};
  height: ${({ theme }) => theme.layout.desktop.headerHeight};
  font-family: ${({ theme }) => theme.typography.fonts['font-2']};
  font-weight: 500;
  width: 40%;
  text-transform: uppercase;
  a:active,
  a:visited,
  a:hover,
  a:link {
    color: #fff;
    text-decoration: none;
  }
`

export const DropdownUI = styled('div')`
  box-sizing: border-box;
  cursor: pointer;
  display: block;
  height: ${({ theme }) => theme.layout.desktop.headerHeight};
  position: relative;
  float: left;

  ul {
    background-color: #fff;
    box-sizing: border-box;
    display: none;
    list-style: none;
    margin: 0;
    width: 250px;
    padding-left: 0;
    position: relative;
    z-index: 1;
    border: ${({ theme }) => theme.border};
    display: none;
    color: ${({ theme }) => theme.colors['dark-3']};
    cursor: pointer;
    position: absolute;
    margin-right: -125px;
    right: 50%;
    top: 100%;

    li {
      box-sizing: border-box;
      cursor: pointer;
      margin-left: 0;
      a {
        :hover {
          background-color: ${({ theme }) => theme.colors['dark-5']};
          color: #fff;
          text-decoration: none;
        }
        box-sizing: border-box;
        display: block;
        font-family: ${({ theme }) => theme.typography.fonts['font-2']};
        margin-left: 0;
        min-width: 100%;
        padding: ${({ theme }) => theme.unit(0.25)};
      }
    }
  }

  :hover {
    ul {
      display: block;
    }
  }
`

export const LinkUI = styled('div')`
  align-items: center;
  box-sizing: border-box;
  display: flex;
  font-family: ${({ theme }) => theme.typography.fonts['font-2']};
  justify-content: center;
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
    cursor: pointer;
  }
`

export const MenuUI = styled('div')`
  display: flex;
  position: relative;
`
