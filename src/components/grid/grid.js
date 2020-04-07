import { ColUI, GridUI, RowUI } from './grid.css'
var short = require('short-uuid')

function Grid({ children }) {
  return <GridUI>{children}</GridUI>
}

Grid.Col = function ({ children }) {
  return <ColUI key={short.generate()}>{children}</ColUI>
}

function chunk(arr, len) {
  var chunks = [],
    i = 0,
    n = arr.length

  while (i < n) {
    chunks.push(arr.slice(i, (i += len)))
  }
  return chunks
}

Grid.Rows = function ({ children, itemsPerRow = 3 }) {
  const chunks = chunk(children, itemsPerRow)
  return chunks.map((_chunk) => {
    return <RowUI key={short.generate()}>{_chunk}</RowUI>
  })
}

export default Grid
