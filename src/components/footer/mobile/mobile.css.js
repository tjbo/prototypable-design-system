import theme from '../../../theme'

export const ContainerUI = styled('footer')`
  a {
    color: #fff;
  }

  a:active,
  a:visited,
  a:hover,
  a:link {
    color: #fff;
    text-decoration: none;
    font-family: ${theme.typography.fonts.font1};
  }
`

export const LinkUI = styled('div')`
  cursor: pointer;
  display: block;
  width: 100%;
`

export const AddressUI = styled('div')`
  justify-self: flex-start;
  color: #fff;
  text-align: left;
`

export const LinkTitleUI = styled('div')`
  color: #fff;
  cursor: pointer;
  display: flex;
  border-bottom: 1px solid #fff;
  padding: ${theme.unit(0.5)};
  padding-top: 0;
  margin: 0;

  ${LinkUI} {
  }
`

export const SubMenuUI = styled('div')`
  padding: ${theme.unit(0.5)};
`
