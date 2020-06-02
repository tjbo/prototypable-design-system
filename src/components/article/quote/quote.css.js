import theme from '../../../theme'

export const BoxWrapper = styled('div')`
  box-sizing: border-box;
  width: 100%;
  display: block;
  background: ${theme.colors.light1};
  position: relative;
`

export const QuoteUI = styled('span')`
  color: ${theme.colors.dark3};
  line-height: 1;
  font-size: ${theme.unit(4)};
  opacity: 0.5;
  position: absolute;
`

export const OpenQuoteUI = styled(QuoteUI)`
  left: ${theme.unit(0.375)};
  top: -${theme.unit(0.125)};
`

export const CloseQuoteUI = styled(QuoteUI)``

export const DropQuoteUI = styled('div')`
  padding: ${theme.unit(1)};
  padding-top: ${theme.unit(2)};
  blockquote {
    border: none;
    color: ${theme.colors.dark1};
    margin: 0;
    padding: 0;
  }
`
