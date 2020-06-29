import { ColUI, ColInnerUI, GridUI } from './grid.css'

function Grid({ alignItems = 'flex-start', children, collapse = '' }) {
  return (
    <GridUI alignItems={alignItems} collapse={collapse}>
      {children}
    </GridUI>
  )
}

Grid.Col = function ({
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
