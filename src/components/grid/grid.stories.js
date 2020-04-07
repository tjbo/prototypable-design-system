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
      <Grid.Rows itemsPerRow={3}>
        {cardsData.map((_data, index) => {
          return (
            <Grid.Col key={short.generate()}>
              <Card data={_data} />
            </Grid.Col>
          )
        })}
      </Grid.Rows>
    </Grid>
  )
}
