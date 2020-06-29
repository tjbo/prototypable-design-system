import { ContainerUI, InputUI, LabelUI, ValidationUI } from './input.css'

function getLabel(label) {
  return <LabelUI>{label}</LabelUI>
}

function getComponent(
  type,
  onChange,
  isSelectable,
  isValid,
  maxWidth,
  name,
  readOnly,
  size,
  textAlign,
  value,
) {
  const props = {
    isSelectable,
    isValid,
    onChange,
    maxWidth,
    name,
    readOnly,
    size,
    textAlign,
    value,
  }

  if (type === 'textarea') {
    return <InputUI as="textarea" rows="5" {...{ ...props }} />
  } else {
    return <InputUI {...{ ...props }} />
  }
}

export default function Input({
  isValidating,
  isSelectable = true,
  label,
  onChange,
  name,
  type = 'input',
  readOnly = false,
  size = 'normal',
  textAlign = 'left',
  validationRules = '',
  validator,
  value = '',
  withContainer = true,
  maxWidth = '100%',
}) {
  const hasValidation = !!validationRules.length
  const validationMessage =
    hasValidation && validator.message(name, value, validationRules)

  const isValid = isValidating ? !!!validationMessage : true

  const _onChange = function (event) {
    onChange(event.target.value)
  }

  const children = (
    <div>
      {getLabel(label)}
      {getComponent(
        type,
        _onChange,
        isSelectable,
        isValid,
        maxWidth,
        name,
        readOnly,
        size,
        textAlign,
        value || '',
      )}
      {hasValidation && (
        <ValidationUI>
          {validator.message(name, value, validationRules)}
        </ValidationUI>
      )}
    </div>
  )

  return withContainer ? <ContainerUI>{children}</ContainerUI> : children
}
