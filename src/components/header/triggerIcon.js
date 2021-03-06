import {
  ContainerUI,
  ContainerInnerUI,
  Line1UI,
  Line2UI,
  Line3UI,
} from './triggerIcon.css'

export default function TriggerIcon({ isOpen }) {
  return (
    <ContainerUI isOpen={isOpen}>
      <ContainerInnerUI>
        <Line1UI isOpen={isOpen} />
        <Line2UI isOpen={isOpen} />
        <Line3UI isOpen={isOpen} />
      </ContainerInnerUI>
    </ContainerUI>
  )
}
