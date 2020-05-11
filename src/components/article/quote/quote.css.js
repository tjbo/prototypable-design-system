import theme from '../../../theme'

export const BoxWrapper = styled('div')`
  box-sizing: border-box;
  width: 100%;
  display: block;
  padding: ${theme.unit(2)} ${theme.unit(1)};
  background: ${theme.colors['light-1']};
  position: relative;
  @media (max-width: ${theme.breakPointsAsPixel.tablet}) {
    padding: ${theme.unit(1)} ${theme.unit(2.5)};
  }
`

export const OpenQuoteUI = styled('div')`
  display: block;
  color: ${theme.colors['dark-3']};
  height: ${theme.unit(2.5)};
  opacity: 0.5;
  font-size: ${theme.unit(5)};
  line-height: 1;
  position: absolute;
  top: ${theme.unit(0.25)};
  left: ${theme.unit(0.25)};
`

export const CloseQuoteUI = styled('div')`
  display: block;
  height: ${theme.unit(2.5)};
  color: ${theme.colors['dark-3']};
  opacity: 0.5;
  font-size: ${theme.unit(5)};
  line-height: 1;
  position: absolute;
  bottom: ${theme.unit(0.25)};
  right: ${theme.unit(0.25)};
`

export const DropQuoteUI = styled('div')`
  blockquote {
    border: none;
  }
`
