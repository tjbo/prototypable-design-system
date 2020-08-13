import theme from '../../../theme'

export const ContainerUI = styled('footer')`
  box-sizing: border-box;
  display: block;
  max-width: 100%;
  flex-shrink: 0;
  font-size: ${theme.unit(0.5)};
`
export const AddressUI = styled('address')`
  color: #fff;
  text-align: left;
  white-space: nowrap;
  font-style: normal;
  a:active,
  a:visited,
  a:hover,
  a:link {
    color: #fff;
    text-decoration: none;
    font-family: ${theme.typography.fonts.font1};
  }
  a:first-child {
    text-transform: uppercase;
  }
  font-family: ${theme.typography.fonts.font1};
`

export const FinePrintUI = styled('div')``

export const InnerUI = styled('div')`
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  padding: ${`${theme.unit(0.5)} ${theme.unit(0.75)}`};
  padding-right: ${theme.unit(1)};
  font-family: ${theme.typography.fonts.font1};

  ${FinePrintUI} {
    font-size: ${theme.unit(0.4)};
    color: #fff;
    margin-right: ${theme.unit(1)};
  }
`

export const ColUI = styled('ul')`
  margin: 0;
  padding: 0;
  list-style: none;

  li {
    a:active,
    a:link,
    a:hover,
    a:visited {
      color: #fff;
    }
  }
`

export const LinkItemUI = styled('li')`
  margin: 0;
  padding: 0;
  display: block;
  font-weight: ${({ asTitle }) => (asTitle ? 'bold' : 'normal')};
`

export const LinkUI = styled('a')`
  :active,
  :link,
  :hover,
  :visited {
    color: #fff;
  }
`
