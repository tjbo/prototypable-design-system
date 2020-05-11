import { DetailsUI, SummaryUI } from './faq.css'

function Faq({ children }) {
  return children
}

Faq.Details = function ({ children }) {
  return <DetailsUI>{children}</DetailsUI>
}

Faq.Summary = function ({ children }) {
  return <SummaryUI>{children}</SummaryUI>
}

export default Faq
