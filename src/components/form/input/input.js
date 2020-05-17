import { ContainerUI, InputUI, LabelUI, ValidationUI } from './input.css'

function getLabel(label) {
  return <LabelUI>{label}</LabelUI>
}

function getComponent(type, onChange, isValid, name) {
  const props = {
    isValid,
    onChange: onChange.bind(null, name),
  }

  if (type === 'textarea') {
    return <InputUI as="textarea" rows="5" {...{ ...props }} />
  } else {
    return <InputUI {...{ ...props }} />
  }
}

export default function Input({
  isValidating,
  label,
  onChange,
  name,
  type = 'input',
  validationRules = '',
  validator,
  value,
}) {
  const validationMessage = validator.message(name, value, validationRules)

  const isValid = isValidating ? !!!validationMessage : true

  return (
    <ContainerUI>
      {getLabel(label)}
      {getComponent(type, onChange, isValid, name)}
      <ValidationUI>
        {validator.message(name, value, validationRules)}
      </ValidationUI>
    </ContainerUI>
  )
}
