import { BoxWrapper, CloseQuoteUI, DropQuoteUI, OpenQuoteUI } from './quote.css'

export default function ({ children }) {
  return (
    <BoxWrapper>
      <OpenQuoteUI>“</OpenQuoteUI>
      <DropQuoteUI>
        <blockquote>{children}</blockquote>
      </DropQuoteUI>
    </BoxWrapper>
  )
}
