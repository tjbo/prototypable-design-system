import { SectionUI, SectionWrapperUI } from './section.css'

export default function ({
  children = [],
  textAlign = 'left',
  background = 'default',
  isFullWidth = false,
  innerWidth = 'big',
}) {
  if (isFullWidth) {
    return (
      <SectionWrapperUI background={background}>{children}</SectionWrapperUI>
    )
  } else {
    return (
      <SectionWrapperUI background={background}>
        <SectionUI textAlign={textAlign} innerWidth={innerWidth}>
          {children}
        </SectionUI>
      </SectionWrapperUI>
    )
  }
}
