import { ContainerUI, InputUI, LabelUI } from './input.css'

function getLabel(label) {
  return <LabelUI>{label}</LabelUI>
}

export default function Input({ label }) {
  return (
    <ContainerUI>
      {getLabel(label)}
      <InputUI />
    </ContainerUI>
  )
}
