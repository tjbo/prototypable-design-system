import { SectionUI, SectionWrapperUI } from './section.css'

export default function ({
  children,
  textAlign = 'left',
  hasBgDarkColor = false,
  hasBgLightColor = false,
  isFullWidth = false,
  innerWidth = 'big',
}) {
  if (isFullWidth) {
    return (
      <SectionWrapperUI hasBgLightColor={hasBgLightColor}>
        {children}
      </SectionWrapperUI>
    )
  } else {
    return (
      <SectionWrapperUI
        hasBgLightColor={hasBgLightColor}
        hasBgDarkColor={hasBgDarkColor}
      >
        <SectionUI textAlign={textAlign} innerWidth={innerWidth}>
          {children}
        </SectionUI>
      </SectionWrapperUI>
    )
  }
}
