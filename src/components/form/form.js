import Button from '../button/'
import { FormUI } from './form.css'
import Input from './input'
import RadioCards from './radioCards'
import SimpleReactValidator from 'simple-react-validator'
import Slider from './slider'
import Step from './step'

class Form extends React.Component {
  static defaultProps = {
    isMultiStep: false,
  }

  constructor(props) {
    super(props)
    this.validator = new SimpleReactValidator({ autoForceUpdate: this })
    this.state = {
      isValidating: false,
      step: 0,
    }
  }

  onFieldChange = (name, value) => {
    this.setState({ [name]: value })
  }

  onNextStep = () => {
    this.setState({ step: this.state.step + 1 })
  }

  onPrevStep = (event) => {
    event.preventDefault()
    this.setState({ step: this.state.step - 1 })
  }

  onSubmit = (event) => {
    event.preventDefault()

    if (this.validator.allValid()) {
      this.props.onSubmit(this.state)
      return true
    } else {
      this.setState({ isValidating: true })
      this.validator.showMessages()
      return false
    }
  }

  renderForm() {
    const { children } = this.props
    this.validator.purgeFields()
    return (
      <FormUI>
        <form onSubmit={this.onSubmit}>
          {React.Children.map(children, (child) => {
            return React.cloneElement(child, {
              ...child.props,
              isValidating: this.state.isValidating,
              onChange: this.onFieldChange.bind(this, child.props.name),
              validator: this.validator,
              value: this.state[child.props.name],
            })
          })}
        </form>
      </FormUI>
    )
  }

  renderMultiStepForm() {
    const { children } = this.props
    const _children = React.Children.map(children, (child, index) => {
      if (this.state.step === index) {
        return React.cloneElement(child, {
          ...child.props,
          isValidating: this.state.isValidating,
          onChange: this.onFieldChange,
          step: index + 1,
          validator: this.validator,
          values: this.state,
        })
      }
    })

    return (
      <FormUI>
        <Step.Header
          step={this.state.step}
          steps={React.Children.count(children)}
        />
        <form onSubmit={this.onSubmit}>{_children}</form>
        <Step.Footer
          onNextStep={this.onNextStep}
          onPrevStep={this.onPrevStep}
          step={this.state.step}
        />
      </FormUI>
    )
  }

  render() {
    const { isMultiStep } = this.props

    if (isMultiStep) {
      return this.renderMultiStepForm()
    } else {
      return this.renderForm()
    }
  }
}

Form.Input = Input
Form.Button = Button
Form.RadioCards = RadioCards
Form.Slider = Slider
Form.Step = Step

export default Form
