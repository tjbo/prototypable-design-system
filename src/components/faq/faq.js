import { DetailsUI, SummaryUI } from './faq.css'

export default function ({ data: { answer, question } }) {
  return (
    <DetailsUI>
      <SummaryUI>
        <h4>{question}</h4>
      </SummaryUI>
      {answer}
    </DetailsUI>
  )
}
