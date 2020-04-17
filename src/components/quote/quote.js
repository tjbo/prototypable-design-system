import { BoxWrapper, CloseQuoteUI, DropQuoteUI, OpenQuoteUI } from './quote.css'

export default function ({ sidebar }) {
  return (
    <BoxWrapper>
      <OpenQuoteUI>“</OpenQuoteUI>
      <DropQuoteUI>
        <blockquote
          className="heading-3 italic font2"
          dangerouslySetInnerHTML={{ __html: sidebar.text }}
        />
      </DropQuoteUI>
      <CloseQuoteUI>”</CloseQuoteUI>
    </BoxWrapper>
  )
}
