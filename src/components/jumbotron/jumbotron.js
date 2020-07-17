import React from 'react'
import {
  ContainerUI,
  ContentUI,
  ImageUI,
  MainContentUI,
  OverlayUI,
} from './jumbotron.css'
import Button from '../button'
import ResponsiveImage from '../responsiveImage'

const sizes = {
  half: ['375x375', '414x414', '1280x400', '1366x384', '1440x450', '1920x540'],
  full: ['375×667', '414×816', '360×780', '1366×768', '1440×900', '1920×1080'],
}

export default function ({
  children,
  hasContentVerticalOffset = false,
  hasNavShift = false,
  alignItems = 'center',
  hasCta = true,
  justifyContent = 'center',
  image = null,
  overlay = 0,
  linkComponent,
  textAlign = 'center',
  size = 'full',
}) {
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
        <OverlayUI overlay={overlay} />
      </ImageUI>
      <ContentUI
        justifyContent={justifyContent}
        hasVerticalOffset={hasContentVerticalOffset}
      >
        <MainContentUI maxWidth="768">{children}</MainContentUI>
        {hasCta && (
          <Button to="/about/contact/" linkComponent={linkComponent}>
            Get Funded Today
          </Button>
        )}
      </ContentUI>
    </ContainerUI>
  )
}
