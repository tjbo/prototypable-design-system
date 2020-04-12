import { CardsWrapperUI } from './cards.css'

import Grid from '../grid'

export default function ({ body }) {
  return (
    <CardsWrapperUI>
      <Grid body={body} />
    </CardsWrapperUI>
  )
}
