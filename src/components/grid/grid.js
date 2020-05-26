import { ColUI, GridUI } from './grid.css'

function Grid({ alignItems = 'flex-start', children, collapse = '' }) {
  return (
    <GridUI alignItems={alignItems} collapse={collapse}>
      {children}
    </GridUI>
  )
}

Grid.Col = function ({ children, maxWidth = 'initial', width = '32%' }) {
  return (
    <ColUI maxWidth={maxWidth} width={width}>
      {children}
    </ColUI>
  )
}

export default Grid
