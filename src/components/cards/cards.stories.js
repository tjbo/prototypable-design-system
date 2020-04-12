import React from 'react'
import Card from './cards'
import data from './cards.mocks'

export default {
  title: 'Card',
  component: Card,
}

export const Default = () => <Card data={data} />
