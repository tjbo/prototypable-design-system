import { ContainerUI } from './facts.css'

export default function ({ children, title }) {
  return (
    <div>
      <h3>{title}</h3>
      <ContainerUI>{children}</ContainerUI>
    </div>
  )
}
