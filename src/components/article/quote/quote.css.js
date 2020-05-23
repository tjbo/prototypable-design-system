import theme from '../../../theme'

export const BoxWrapper = styled('div')`
  box-sizing: border-box;
  width: 100%;
  display: block;
  background: ${theme.colors.light1};
  position: relative;
  @media (max-width: ${theme.breakPointsAsPixel.tablet}) {
    padding: ${theme.unit(1)} ${theme.unit(2.5)};
  }
`

export const QuoteUI = styled('div')`
  display: block;
  color: ${theme.colors.dark3};
  height: ${theme.unit(2.5)};
  font-size: ${theme.unit(5)};
  line-height: 1;
  opacity: 0.5;
  position: absolute;
`

export const CloseQuoteUI = styled(QuoteUI)`
  bottom: ${theme.unit(0)};
  right: ${theme.unit(0.25)};
`

export const DropQuoteUI = styled('div')`
  padding: ${theme.unit(2.5)} ${theme.unit(1)} ${theme.unit(2)} ${theme.unit(1)};
  margin: 0;
  blockquote {
    font-family: ${theme.typography.fonts['font-3']};
    border: none;
    color: ${theme.colors.dark1};
    margin: 0;
  }
`

export const OpenQuoteUI = styled(QuoteUI)`
  top: ${theme.unit(0.25)};
  left: ${theme.unit(0.25)};
`
