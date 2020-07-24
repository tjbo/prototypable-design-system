import {
  ContainerUI,
  ContainerInnerUI,
  Line1UI,
  Line2UI,
  Line3UI,
} from './triggerIcon.css'

export default function TriggerIcon({ isAnimated, isOpen, onClick, style }) {
  return (
    <ContainerUI isOpen={isOpen} onClick={onClick}>
      <ContainerInnerUI>
        <Line1UI isAnimated={isAnimated} isOpen={isOpen} style={style} />
        <Line2UI isAnimated={isAnimated} isOpen={isOpen} style={style} />
        <Line3UI isAnimated={isAnimated} isOpen={isOpen} style={style} />
      </ContainerInnerUI>
    </ContainerUI>
  )
}
