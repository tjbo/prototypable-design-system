import { SectionUI, SectionWrapperUI } from './section.css'

export default function ({
  children = [],
  textAlign = 'left',
  background = 'default',
  is_full_width = false,
  inner_width = 'big',
}) {
  if (is_full_width) {
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
