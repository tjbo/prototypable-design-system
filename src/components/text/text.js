import { TextUI } from './text.css'

export default function Text({
  children,
  italic = false,
  font = '2',
  selector = 'span',
  size = 'md',
}) {
  const Component = TextUI.withComponent(selector)
  return (
    <Component font={font} italic={italic} size={size}>
      {children}
    </Component>
  )
}
