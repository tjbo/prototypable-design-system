import { CardsWrapperUI } from './cards.css'

import Grid from '../grid'

export default function ({ body, children }) {
  if (body) {
    return (
      <CardsWrapperUI>
        <Grid body={body.text} />
      </CardsWrapperUI>
    )
  } else {
    return (
      <CardsWrapperUI>
        <Grid>{children}</Grid>
      </CardsWrapperUI>
    )
  }
}
