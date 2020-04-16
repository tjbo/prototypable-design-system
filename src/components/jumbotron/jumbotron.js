import React from 'react'
import { ContentUI, ImageUI } from './jumbotron.css'
import config from '../../config'
import { CardImageUI } from '../cards/cards.css'

const sizes = [
  '360×640',
  '768×1024',
  '1024x768',
  '1366×768',
  '1600×900',
  '1920x1080',
]

function getSrcSets(image) {
  if (!image) {
    return null
  }

  return sizes
    .map((size) => {
      const {
        dimensions: { width },
        url,
      } = image[size]
      return `${url} ${width}w`
    })
    .join(',')
}

export default function ({ body, image = null }) {
  console.log('jumbo', body, image)
  return (
    <div>
      <ImageUI>
        <img srcSet={getSrcSets(image)} />
      </ImageUI>
      <ContentUI
        dangerouslySetInnerHTML={{
          __html: body && body.text,
        }}
      ></ContentUI>
    </div>
  )
}
