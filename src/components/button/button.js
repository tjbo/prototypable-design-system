import { ButtonUI } from './button.css'

export default function ({
  children,
  onClick,
  maxWidth = 250,
  type = 'button',
}) {
  return (
    <ButtonUI maxWidth={maxWidth} type={type} onClick={onClick}>
      {children}
    </ButtonUI>
  )
}
