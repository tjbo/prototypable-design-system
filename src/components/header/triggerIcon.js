import { TriggerIconUI, Line1UI, Line2UI, Line3UI } from './triggerIcon.css'

export default function TriggerIcon({ isOpen }) {
  return (
    <TriggerIconUI isOpen={isOpen}>
      <Line1UI isOpen={isOpen} />
      <Line2UI isOpen={isOpen} />
      <Line3UI isOpen={isOpen} />
    </TriggerIconUI>
  )
}
