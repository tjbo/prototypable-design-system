export const ContainerUI = styled('header')`
  box-sizing: border-box;
  position: fixed;
  z-index: 1;
  top: 0;
  display: block;
  background-color: ${({ theme }) => theme.colors['dark-1']};
  height: ${({ theme }) => theme.layout.mobile.headerHeight};
  width: 100%;
`

export const ContainerInnerUI = styled('div')`
  align-items: center;
  background-color: ${({ theme }) => theme.colors['dark-1']};
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  height: ${({ theme }) => theme.layout.mobile.headerHeight};
  justify-content: space-between;
  padding: ${({ theme }) => `0 ${theme.unit(0.75)} 0 ${theme.unit(0.25)}`};
  width: 100%;
  z-index: 1;
`

export const LinkUI = styled('div')`
  color: ${({ theme }) => theme.colors['light-1']};
  cursor: pointer;
  box-sizing: border-box;
  font-family: ${({ theme }) => theme.typography.fonts['font-2']};
  font-size: ${({ theme }) => theme.unit(0.75)};
  margin: 0;
  padding: ${({ theme }) => theme.unit(0.25)};
  position: relative;
  text-align: center;
  width: auto;
  text-transform: uppercase;
  width: 100%;
  :hover {
    background-color: ${({ theme }) => theme.colors['dark-5']};
    padding: ${({ theme }) => theme.unit(0.25)};
  }
  a:active,
  a:visited,
  a:hover,
  a:link {
    color: #fff;
  }
`

export const MenuUI = styled('nav')`
  box-sizing: border-box;
  background-color: ${({ theme }) => theme.colors['dark-3']};
  display: block;
  left: 0;
  min-height: 100vh;
  padding-top: ${({ theme }) => theme.layout.mobile.headerHeight};
  position: absolute;
  top: 0;
  height: 100%;
  width: 100%;
`
