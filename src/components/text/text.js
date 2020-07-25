import { TextUI } from './text.css'

export default function ({
  as = 'span',
  children,
  color,
  isBold,
  fontStyle = 'normal',
  size = 0.6,
}) {
  return (
    <TextUI
      as={as}
      color={color}
      fontStyle={fontStyle}
      isBold={isBold}
      size={size}
    >
      {children}
    </TextUI>
  )
}
