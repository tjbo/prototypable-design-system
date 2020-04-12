import React from 'react'
import Card from '../card'
import Grid from './'
import { cardsData } from './grid.mocks'
var short = require('short-uuid')

export default {
  title: 'Grid',
  component: Grid,
}

export const Default = () => {
  return (
    <Grid>
      {cardsData.map((_data, index) => {
        return (
          <div class="col">
            <Card data={_data} />
          </div>
        )
      })}
    </Grid>
  )
}
