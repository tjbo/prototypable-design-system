import theme from '../../theme'
export const FooterUI = styled('footer')`
  box-sizing: border-box;
  display: block;
  background-color: ${theme.colors['dark-1']};
  max-width: 100%;
  flex-shrink: 0;
`
export const AddressUI = styled('address')``

export const FinePrintUI = styled('div')``

export const FooterUIInner = styled('div')`
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  background-color: ${theme.colors['dark-1']};
  padding: ${`${theme.unit(0.5)} ${theme.unit(0.75)}`};
  padding-right: ${theme.unit(1)};
  font-family: ${theme.typography.fonts['font-1']};

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
      font-family: ${theme.typography.fonts['font-2']};
      font-size: ${theme.unit(0.65)};
      text-transform: uppercase;
    }
    font-family: ${theme.typography.fonts['font-2']};
  }

  ${FinePrintUI} {
    font-size: ${theme.unit(0.4)};
    color: #fff;
    margin-right: ${theme.unit(1)};
  }
`
