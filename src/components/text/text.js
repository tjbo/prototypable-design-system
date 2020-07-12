import { TextUI } from './text.css'

export default function ({
  as = 'span',
  children,
  color,
  isBold,
  fontStyle = 'normal',
}) {
  return (
    <TextUI as={as} color={color} fontStyle={fontStyle} isBold={isBold}>
      {children}
    </TextUI>
  )
}
