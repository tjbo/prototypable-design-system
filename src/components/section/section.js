import {
  Col1,
  Col2,
  ColWrapper,
  SectionUI,
  SectionWrapperUI,
} from './section.css'

function getTitle(title) {
  if (!title || !title.text) {
    return ''
  }

  const headings = {
    heading1: 'h1',
    heading2: 'h2',
    heading3: 'h3',
    heading4: 'h4',
  }
  return React.createElement(headings[title.type], {
    dangerouslySetInnerHTML: { __html: title.text },
  })
}

export default function ({
  children = [],
  textAlign = 'left',
  background = 'default',
  id,
  isFullWidth = false,
  inner_width = 'big',
  title = '',
}) {
  if (isFullWidth) {
    return (
      <SectionWrapperUI background={background}>{children}</SectionWrapperUI>
    )
  } else {
    return (
      <SectionWrapperUI background={background}>
        <SectionUI textAlign={textAlign} innerWidth={inner_width}>
          {title && getTitle(title)}
          {children.length === 2 && children[0].props.sidebar.text ? (
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
    return null
  }
}
