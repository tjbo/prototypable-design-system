import { ButtonUI } from './button.css'

const DefaultLink = (href) => {
  return <a href={href}></a>
}

export default function (props) {
  const {
    align,
    href,
    text = 'Submit',
    onClick,
    maxWidth = 300,
    link = DefaultLink,
  } = props
  const Button = (
    <ButtonUI align={align} onClick={onClick} maxWidth={maxWidth}>
      {text}
    </ButtonUI>
  )

  if (href && link) {
    return (
      <ButtonUI align={align} onClick={onClick} maxWidth={maxWidth}>
        {/* <link href={href}>{text}</link> */}
      </ButtonUI>
    )
  } else {
    return (
      <ButtonUI align={align} onClick={onClick} maxWidth={maxWidth}>
        {text}
      </ButtonUI>
    )
  }
}
