import React from 'react'
import { ContainerUI, ContentUI, ImageUI, MainContentUI } from './jumbotron.css'
import Button from '../button'
import ResponsiveImage from '../responsiveImage'

const sizes = {
  half: ['375x375', '414x414', '1280x400', '1366x384', '1440x450', '1920x540'],
  full: ['375×667', '414×816', '360×780', '1366×768', '1440×900', '1920×1080'],
}

export default function ({
  children,
  hasNavShift = false,
  alignItems = 'center',
  hasCta = true,
  justifyContent = 'center',
  image = null,
  linkComponent,
  textAlign = 'center',
  size = 'full',
}) {
  console.log('hasNavShift', hasNavShift)
  return (
    <ContainerUI
      size={size}
      alignItems={alignItems}
      hasNavShift={hasNavShift}
      justifyContent={justifyContent}
      textAlign={textAlign}
    >
      <ImageUI>
        <ResponsiveImage aspectRatio={null} data={image} sizes={sizes[size]} />
      </ImageUI>
      <ContentUI>
        <MainContentUI>{children}</MainContentUI>
        {hasCta && <p></p>}
        {hasCta && (
          <Button to="/contact/" linkComponent={linkComponent}>
            Get Funded Today
          </Button>
        )}
      </ContentUI>
    </ContainerUI>
  )
}
