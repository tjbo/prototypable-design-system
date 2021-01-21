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
import theme from '../theme'

export default function ({
  callToActionText,
  callToActionHref,
  children,
  hasContentVerticalOffset = false,
  hasNavShift = false,
  alignItems = 'center',
  hasCta = true,
  justifyContent = 'center',
  image = null,
  overlay = 0,
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
      <ContentUI
        justifyContent={justifyContent}
        hasVerticalOffset={hasContentVerticalOffset}
      >
        <MainContentUI maxWidth="768">{children}</MainContentUI>
        {hasCta && (
          <Button
            justifyContent="center"
            colorScheme="red"
            to={callToActionHref}
            size="lg"
            maxW="250px"
          >
            {callToActionText}
          </Button>
        )}
      </ContentUI>
      <ImageUI>
        <OverlayUI overlay={overlay} />
        <ResponsiveImage
          aspectRatio={null}
          data={image}
          loading="eager"
          sizes={theme.jumbotron[size]}
          spaceAfter="none"
        />
      </ImageUI>
    </ContainerUI>
  )
}
