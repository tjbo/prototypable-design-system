import { ColUI, GridUI } from './grid.css'

function Grid({ children, collapse = '' }) {
  return <GridUI collapse={collapse}>{children}</GridUI>
}

Grid.Col = function ({ children, width = '32%', stretch = false }) {
  return (
    <ColUI stretch={stretch} width={width}>
      {children}
    </ColUI>
  )
}

export default Grid
