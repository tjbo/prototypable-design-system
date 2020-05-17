import { ButtonUI } from './button.css'

export default function ({ children, type = 'button' }) {
  return <ButtonUI type={type}>{children}</ButtonUI>
}
