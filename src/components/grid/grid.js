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
  collapseHorizontalPaddingOnMobile = false,
  collapsePaddingOnMobile = false,
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
      collapseHorizontalPaddingOnMobile={collapseHorizontalPaddingOnMobile}
      collapsePaddingOnMobile={collapsePaddingOnMobile}
      horizontalPadding={horizontalPadding}
      isSticky={isSticky}
      maxWidth={maxWidth}
      verticalPadding={verticalPadding}
      textAlign={textAlign}
      _width={width}
    >
      <ColInnerUI>{children}</ColInnerUI>
    </ColUI>
  )
}

export default Grid
