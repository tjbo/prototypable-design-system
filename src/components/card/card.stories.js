import React from 'react'
import Card from './card'
import data from './card.mocks'

export default {
  title: 'Card',
  component: Card,
}

export const Default = () => <Card data={data} />
