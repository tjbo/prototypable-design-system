import React from 'react'
import { ContainerUI, ContentUI, ImageUI } from './jumbotron.css'
import getSrcSets from '../../utils/getSrcSets'

const fullSizes = ['360×640', '768×1024', '1366×768', '1600×900', '1920x1080']

export default function ({ children, image = null, size = 'full' }) {
  return (
    <ContainerUI size={size}>
      <ImageUI>
        <img srcSet={getSrcSets(fullSizes, image)} />
      </ImageUI>
      <ContentUI>{children}</ContentUI>
    </ContainerUI>
  )
}
