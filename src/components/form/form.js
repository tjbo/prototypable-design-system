import Button from '../button/'
import { FormUI } from './form.css'
import Input from './input'
import SimpleReactValidator from 'simple-react-validator'

class Form extends React.Component {
  constructor(props) {
    super(props)
    this.validator = new SimpleReactValidator({ autoForceUpdate: this })
    this.state = {
      isValidating: false,
    }
  }
  onFieldChange = (name, element) => {
    this.setState({ [name]: element.target.value })
  }

  onSubmit = (event) => {
    event.preventDefault()
    if (this.validator.allValid()) {
      return true
    } else {
      this.setState({ isValidating: true })
      this.validator.showMessages()
      return false
    }
  }

  render() {
    const { children } = this.props
    return (
      <FormUI>
        <form onSubmit={this.onSubmit}>
          {React.Children.map(children, (child) => {
            return React.cloneElement(child, {
              ...child.props,
              isValidating: this.state.isValidating,
              onChange: this.onFieldChange,
              validator: this.validator,
              value: this.state[child.props.name],
            })
          })}
        </form>
      </FormUI>
    )
  }
}

Form.Input = Input
Form.Button = Button

export default Form
