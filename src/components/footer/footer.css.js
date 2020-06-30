import theme from '../../theme'
export const ContainerUI = styled('footer')`
  box-sizing: border-box;
  display: block;
  background-color: ${theme.colors.dark1};
  max-width: 100%;
  flex-shrink: 0;
`
export const AddressUI = styled('address')``

export const FinePrintUI = styled('div')``

export const InnerUI = styled('div')`
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  background-color: ${theme.colors.dark1};
  padding: ${`${theme.unit(0.5)} ${theme.unit(0.75)}`};
  padding-right: ${theme.unit(1)};
  font-family: ${theme.typography.fonts.font1};

  @media (max-width: ${theme.breakPointsAsPixel.mobile}) {
    flex-direction: column;
    text-align: center;
  }

  ${AddressUI} {
    color: #fff;
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
      font-size: ${theme.unit(0.65)};
    }
    font-family: ${theme.typography.fonts.font1};
  }

  ${FinePrintUI} {
    font-size: ${theme.unit(0.4)};
    color: #fff;
    margin-right: ${theme.unit(1)};
  }
`

export const LinksUI = styled('ul')`
  margin: 0;
  padding: 0;
  list-style: none;
`

export const LinkItemUI = styled('li')`
  margin: 0;
  padding: 0;
  display: block;

  @media (max-width: ${theme.breakPointsAsPixel.mobile}) {
    display: inline-block;
    margin: 0 ${theme.unit(0.25)};
  }
`

export const LinkUI = styled('a')`
  :active,
  :link,
  :hover,
  :visited {
    color: #fff;
  }
`
