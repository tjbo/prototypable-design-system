import { ColUI, GridUI } from './grid.css'

function Grid({ children, collapse = '' }) {
  console.log('collapse', collapse)
  return <GridUI collapse={collapse}>{children}</GridUI>
}

Grid.Col = function ({ children, width = '32%' }) {
  return <ColUI width={width}>{children}</ColUI>
}

export default Grid
