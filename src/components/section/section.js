import {
  Col1,
  Col2,
  ColWrapper,
  SectionUI,
  SectionWrapperUI,
} from './section.css'

export default function ({
  children = [],
  textAlign = 'left',
  background = 'default',
  id,
  isFullWidth = false,
  innerWidth = 'big',
  title = '',
}) {
  console.log('childs', children)
  if (isFullWidth) {
    return (
      <SectionWrapperUI background={background}>{children}</SectionWrapperUI>
    )
  } else {
    return (
      <SectionWrapperUI background={background}>
        <SectionUI textAlign={textAlign} innerWidth={innerWidth}>
          {title && title.text ? (
            <h3
              dangerouslySetInnerHTML={{ __html: title.text }}
              className="heading-3"
            />
          ) : null}

          {children.length === 2 ? (
            <ColWrapper key={`${id}-col-wrap`}>
              <Col1 key={`${id}-col-1`}>{children[0]}</Col1>
              <Col2 key={`${id}-col-2`}>{children[1]}</Col2>
            </ColWrapper>
          ) : (
            children
          )}
        </SectionUI>
      </SectionWrapperUI>
    )
  }
}
