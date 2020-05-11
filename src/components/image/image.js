import { ImageContainerUI, ImageUI } from './image.css'

export default function Image({ align, alt, height, width, src }) {
  return (
    <ImageContainerUI>
      <ImageUI
        align={align}
        alt={alt}
        height={height}
        width={width}
        src={src}
      />
    </ImageContainerUI>
  )
}
