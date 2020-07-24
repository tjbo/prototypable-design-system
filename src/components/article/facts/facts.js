import { ContainerUI } from './facts.css'
import Title from '../../title'

export default function ({ children, title }) {
  return (
    <div>
      <Title as="h3">{title}</Title>
      <ContainerUI>{children}</ContainerUI>
    </div>
  )
}
