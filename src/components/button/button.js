import { ButtonUI } from './button.css'
import SMS from '../../svgs/sms'

export default function ({
  children,
  onClick,
  maxWidth = 250,
  type = 'button',
}) {
  return (
    <ButtonUI maxWidth={maxWidth} type={type} onClick={onClick}>
      Send Russ an SMS
      <img
        style={{ marginLeft: 5 }}
        src="https://image.flaticon.com/icons/png/512/321/321812.png"
        width="30"
      />
    </ButtonUI>
  )
}
