import { BoxWrapper, CloseQuoteUI, DropQuoteUI, OpenQuoteUI } from './quote.css'

export default function ({ children }) {
  return (
    <BoxWrapper>
      <OpenQuoteUI>“</OpenQuoteUI>
      <DropQuoteUI>
        <blockquote className="heading-3 italic font-2">{children}</blockquote>
      </DropQuoteUI>
      <CloseQuoteUI>”</CloseQuoteUI>
    </BoxWrapper>
  )
}
