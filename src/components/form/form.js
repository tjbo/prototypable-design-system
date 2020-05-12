import { FormUI } from './form.css'
import Input from './input'

function Form({ children }) {
  return <FormUI>{children}</FormUI>
  // return <FormWrapper dangerouslySetInnerHTML={{ __html: sidebar.text }} />
}

Form.Input = Input

export default Form
