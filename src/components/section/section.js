import { SectionUI, SectionWrapperUI } from './section.css'

export default function ({
  children = [],
  textAlign = 'left',
  background = 'default',
  isFullWidth = false,
  inner_width = 'big',
}) {
  if (isFullWidth) {
    return (
      <SectionWrapperUI background={background}>{children}</SectionWrapperUI>
    )
  } else {
    return (
      <SectionWrapperUI background={background}>
        <SectionUI textAlign={textAlign} innerWidth={inner_width}>
          {children}
        </SectionUI>
      </SectionWrapperUI>
    )
    return null
  }
}
