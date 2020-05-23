import { ColUI, GridUI } from './grid.css'

function Grid({ children, collapse = '' }) {
  return <GridUI collapse={collapse}>{children}</GridUI>
}

Grid.Col = function ({
  children,
  width = '32%',
  justifyContent = 'flex-start',
  stretch = false,
}) {
  return (
    <ColUI justifyContent={justifyContent} stretch={stretch} width={width}>
      {children}
    </ColUI>
  )
}

export default Grid
