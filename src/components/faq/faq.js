import { FaqWrapperUI } from './faq.css'

export default function ({ body }) {
  return <FaqWrapperUI dangerouslySetInnerHTML={{ __html: body }} />
}
