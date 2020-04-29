import {
  Col1,
  Col2,
  ColWrapper,
  SectionUI,
  SectionWrapperUI,
} from './section.css'

function getTitle(title, layout_style, show_title = true) {
  if (
    !title[0] ||
    !title[0].text ||
    layout_style === 'banner' ||
    !!!show_title
  ) {
    return ''
  }

  const headings = {
    heading1: 'h1',
    heading2: 'h2',
    heading3: 'h3',
    heading4: 'h4',
  }
  return React.createElement(headings[title[0].type], {
    dangerouslySetInnerHTML: { __html: title[0].text },
  })
}

export default function ({
  children = [],
  textAlign = 'left',
  background = 'default',
  id,
  isFullWidth = false,
  inner_width = 'big',
  sidebar_width = 1,
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
          {title &&
            getTitle(
              title,
              children[0].props.layout_style,
              children[0].props.show_title,
            )}
          {children.length === 2 && children[0].props.sidebar.text ? (
            <ColWrapper key={`${id}-col-wrap`}>
              <Col1 key={`${id}-col-1`}>{children[0]}</Col1>
              <Col2 key={`${id}-col-2`} sidebar_width={sidebar_width}>
                {children[1]}
              </Col2>
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
