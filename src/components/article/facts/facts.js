import { ContainerUI } from './facts.css'
import Title from '../../title'

export default function ({ children }) {
  return (
    <ContainerUI>
      {/* <Title as="h4">Fast Facts</Title> */}
      {children}
    </ContainerUI>
  )
}
