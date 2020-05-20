import React from 'react'
import { ContentUI, ImageUI } from './jumbotron.css'
import getSrcSets from '../../utils/getSrcSets'

const sizes = [
  '360×640',
  '768×1024',
  '1024x768',
  '1366×768',
  '1600×900',
  '1920x1080',
]

export default function ({ children, body, id, image = null }) {
  const content = body.map((block) => {
    return block.text
  })

  return (
    <div>
      <ImageUI key={`${id}-jumbotron-image`}>
        <img srcSet={getSrcSets(sizes, image)} />
      </ImageUI>
      <ContentUI>{children}</ContentUI>
    </div>
  )
}
