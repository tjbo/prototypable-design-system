import { ColUI, GridUI, RowUI } from './grid.css'
import { withBreakpoints } from 'react-breakpoints'
import Break from 'react-break'
import config from '../../config'

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
        query={{ method: 'isAtMost', breakpoint: 'mobile' }}
      >
        {getChunks(itemsPerRow - 1)}
      </Break>
      <Break
        breakpoints={config.breakPoints}
        query={{ method: 'isAtMost', breakpoint: 'phablet' }}
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

Grid.Rows = withBreakpoints(Rows)

export default Grid
