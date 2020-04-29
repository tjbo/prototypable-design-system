import { FormWrapper } from './form.css'

export default function Form({ sidebar }) {
  return <FormWrapper dangerouslySetInnerHTML={{ __html: sidebar.text }} />
}
