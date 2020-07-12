import { ColUI, ColInnerUI, GridUI } from './grid.css'

function Grid({
  alignItems = 'flex-start',
  children,
  collapse = '',
  direction = 'row',
}) {
  return (
    <GridUI alignItems={alignItems} collapse={collapse} direction={direction}>
      {children}
    </GridUI>
  )
}

Grid.Col = function ({
  alignSelf = 'flex-start',
  children,
  isSticky = false,
  horizontalPadding = 0.25,
  maxWidth = 'initial',
  verticalPadding = 0.25,
  textAlign = 'left',
  width = '32%',
}) {
  return (
    <ColUI
      alignSelf={alignSelf}
      horizontalPadding={horizontalPadding}
      isSticky={isSticky}
      maxWidth={maxWidth}
      verticalPadding={verticalPadding}
      textAlign={textAlign}
      width={width}
    >
      <ColInnerUI>{children}</ColInnerUI>
    </ColUI>
  )
}

export default Grid
