import config from '../../config'

export const FooterUI = styled('footer')`
  display: block;
  width: 100%;
  background-color: ${config.colors.dark1};
  width: 100%;
  flex-shrink: 0;
`

export const FooterUIInner = styled('div')`
  display: flex;
  justify-content: space-between;
  background-color: ${config.colors.dark1};
  padding: ${config.unit(0.5)} ${config.unit(0.75)};
  padding-right: ${config.unit(1)};
  font-family: ${config.fonts.font1};
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
    font-family: ${config.fonts.font2};
    font-size: ${config.unit(0.65)};
    text-transform: uppercase;
  }
  font-family: ${config.fonts.font2};
`
export const FinePrintUI = styled('div')`
  font-size: ${config.unit(0.4)};
  color: #fff;
  margin-right: ${config.unit(1)};
`
