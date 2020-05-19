import Header from './header'
import Footer from './footer'

function Step(props) {
  const { children } = props
  return React.Children.map(children, (child, index) => {
    return React.cloneElement(child, {
      ...child.props,
      onChange: props.onChange.bind(null, child.props.name),
      value: props.values[child.props.name],
    })
  })
}

Step.Footer = Footer
Step.Header = Header

export default Step
