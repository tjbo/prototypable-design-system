import { ColUI, GridUI, RowUI } from './grid.css'
import config from '../../config'

// node safe
let Break = function ({ children }) {
  return children
}

if (typeof window !== 'undefined') {
  Break = require('react-break').default
}

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

const Rows = function ({ children, itemsPerRow = 3 }) {
  function getChunks(modifier) {
    const chunks = chunk(children, itemsPerRow - modifier)
    return chunks.map((_chunk) => {
      return <RowUI key={short.generate()}>{_chunk}</RowUI>
    })
  }

  return (
    <div>
      <Break
        breakpoints={config.breakPoints}
        query={{ method: 'is', breakpoint: 'mobile' }}
      >
        {getChunks(itemsPerRow - 1)}
      </Break>
      <Break
        breakpoints={config.breakPoints}
        query={{ method: 'is', breakpoint: 'phablet' }}
      >
        {getChunks(1)}
      </Break>
      <Break
        breakpoints={config.breakPoints}
        query={{ method: 'is', breakpoint: 'tablet' }}
      >
        {getChunks(0)}
      </Break>
      <Break
        breakpoints={config.breakPoints}
        query={{ method: 'is', breakpoint: 'desktop' }}
      >
        {getChunks(0)}
      </Break>
    </div>
  )
}

Grid.Rows = Rows

export default Grid
