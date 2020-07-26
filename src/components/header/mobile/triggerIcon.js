import {
  ContainerUI,
  ContainerInnerUI,
  Line1UI,
  Line2UI,
  Line3UI,
} from './triggerIcon.css'

export default function TriggerIcon({
  isAnimated,
  isOpen,
  onClick,
  headerStyle,
}) {
  return (
    <ContainerUI isOpen={isOpen} onClick={onClick}>
      <ContainerInnerUI>
        <Line1UI
          isAnimated={isAnimated}
          isOpen={isOpen}
          headerStyle={headerStyle}
        />
        <Line2UI
          isAnimated={isAnimated}
          isOpen={isOpen}
          headerStyle={headerStyle}
        />
        <Line3UI
          isAnimated={isAnimated}
          isOpen={isOpen}
          headerStyle={headerStyle}
        />
      </ContainerInnerUI>
    </ContainerUI>
  )
}
