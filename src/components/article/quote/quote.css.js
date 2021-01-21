import theme from '../../theme'

export const BoxWrapper = styled('div')`
  box-sizing: border-box;
  width: 100%;
  display: block;
  background: ${theme.colors.white};
  position: relative;
`

export const QuoteUI = styled('span')`
  color: ${theme.colors.black};
  line-height: ${theme.space[1]};
  font-size: ${theme.space[1]};
  opacity: 0.5;
  position: absolute;
`

export const OpenQuoteUI = styled(QuoteUI)`
  left: ${theme.space[1]};
  top: -${theme.space[1]};
`

export const CloseQuoteUI = styled(QuoteUI)``

export const DropQuoteUI = styled('div')`
  padding: ${theme.space[2]};
  padding-top: ${theme.space[4]};
  blockquote {
    border: none;
    color: ${theme.colors.black};
    margin: 0;
    padding: 0;
  }
`
