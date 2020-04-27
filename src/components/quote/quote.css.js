export const BoxWrapper = styled('div')`
  box-sizing: border-box;
  width: 100%;
  display: block;
  padding: ${({ theme }) => theme.unit(2)} ${({ theme }) => theme.unit(1)};
  background: ${({ theme }) => theme.colors['light-1']};
  position: relative;

  @media (max-width: ${({ theme }) => theme.breakPoints.tablet}) {
    padding: ${({ theme }) => theme.unit(1)} ${({ theme }) => theme.unit(2.5)};
  }
`

export const OpenQuoteUI = styled('div')`
  display: block;
  color: ${({ theme }) => theme.colors['dark-3']};
  height: ${({ theme }) => theme.unit(2.5)};
  opacity: 0.5;
  font-size: ${({ theme }) => theme.unit(5)};
  line-height: 1;
  position: absolute;
  top: ${({ theme }) => theme.unit(0.25)};
  left: ${({ theme }) => theme.unit(0.25)};
`

export const CloseQuoteUI = styled('div')`
  display: block;
  height: ${({ theme }) => theme.unit(2.5)};
  color: ${({ theme }) => theme.colors['dark-3']};
  opacity: 0.5;
  font-size: ${({ theme }) => theme.unit(5)};
  line-height: 1;
  position: absolute;
  bottom: ${({ theme }) => theme.unit(0.25)};
  right: ${({ theme }) => theme.unit(0.25)};
`

export const DropQuoteUI = styled('div')`
  blockquote {
    border: none;
  }
`
