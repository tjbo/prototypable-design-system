import { DetailsUI, SummaryUI } from './faq.css'

export default function ({ data: { content, title } }) {
  return (
    <DetailsUI>
      <SummaryUI>
        <h4>{title}</h4>
      </SummaryUI>
      <div dangerouslySetInnerHTML={{ __html: content }}></div>
    </DetailsUI>
  )
}
