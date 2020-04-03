import { SectionUI, SectionWrapperUI } from './section.css'

export default function ({
  children,
  textAlign = 'left',
  hasBgDarkColor = false,
  hasBgColor = false,
  isFullWidth = false,
  innerWidth = 'big',
}) {
  if (isFullWidth) {
    return (
      <SectionWrapperUI hasBgColor={hasBgColor}>{children}</SectionWrapperUI>
    )
  } else {
    return (
      <SectionWrapperUI hasBgColor={hasBgColor} hasBgDarkColor={hasBgDarkColor}>
        <SectionUI textAlign={textAlign} innerWidth={innerWidth}>
          {children}
        </SectionUI>
      </SectionWrapperUI>
    )
  }
}
