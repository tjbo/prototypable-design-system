import { GridWrapperUI } from './grid.css'

function Grid({ body, children }) {
  if (body) {
    return <GridWrapperUI dangerouslySetInnerHTML={{ __html: body }} />
  } else {
    return <GridWrapperUI>{children}</GridWrapperUI>
  }
}

export default Grid
