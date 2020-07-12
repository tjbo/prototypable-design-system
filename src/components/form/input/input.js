import {
  ContainerUI,
  InputUI,
  LabelUI,
  SpaceUI,
  ValidationUI,
} from './input.css'

function getLabel(label, affixLabel, asHoneyPot) {
  return (
    <LabelUI asHoneyPot={asHoneyPot}>
      {label} {affixLabel}
    </LabelUI>
  )
}

function getComponent(
  asHoneyPot,
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
    asHoneyPot,
    autoComplete: 'off',
    isSelectable,
    isValid,
    onChange,
    maxWidth,
    name,
    readOnly,
    size,
    textAlign,
    type,
    value,
  }

  if (type === 'textarea') {
    return <InputUI as="textarea" rows="3" {...{ ...props }} />
  } else {
    return <InputUI {...{ ...props }} />
  }
}

export default function Input({
  asHoneyPot = false,
  affixLabel = '',
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
      {getLabel(label, affixLabel, asHoneyPot)}
      {getComponent(
        asHoneyPot,
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
      {hasValidation ? (
        <ValidationUI>
          {validator.message(name, value, validationRules)}
        </ValidationUI>
      ) : (
        <SpaceUI />
      )}
    </div>
  )

  return withContainer ? <ContainerUI>{children}</ContainerUI> : children
}
