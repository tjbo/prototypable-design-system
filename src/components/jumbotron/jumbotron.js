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
  return (
    <div>
      <ImageUI>
        <img srcSet={getSrcSets(sizes, image)} />
      </ImageUI>
      <ContentUI>{children}</ContentUI>
    </div>
  )
}
