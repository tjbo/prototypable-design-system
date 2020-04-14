import config from '../../config'

export const FooterUI = styled('footer')`
  box-sizing: border-box;
  display: block;
  background-color: ${config.colors.dark1};
  max-width: 100%;
  flex-shrink: 0;
`

export const FooterUIInner = styled('div')`
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  background-color: ${config.colors.dark1};
  padding: ${config.unit(0.5)} ${config.unit(0.75)};
  padding-right: ${config.unit(1)};
  font-family: ${config.typography.fonts.font1};
`

export const AddressUI = styled('address')`
  color: #fff;
  white-space: nowrap;
  font-style: normal;
  a:active,
  a:visited,
  a:hover,
  a:link {
    color: #fff;
    text-decoration: none;
    font-family: ${config.typography.fonts.font2};
    font-size: ${config.unit(0.65)};
    text-transform: uppercase;
  }
  font-family: ${config.typography.fonts.font2};
`
export const FinePrintUI = styled('div')`
  font-size: ${config.unit(0.4)};
  color: #fff;
  margin-right: ${config.unit(1)};
`