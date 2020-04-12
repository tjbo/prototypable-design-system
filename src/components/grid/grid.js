import { GridWrapperUI } from './grid.css'

function Grid({ body }) {
  return <GridWrapperUI dangerouslySetInnerHTML={{ __html: body }} />
}

export default Grid
