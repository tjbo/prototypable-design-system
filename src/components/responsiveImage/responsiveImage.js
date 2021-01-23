import { prismicUtils } from '../../'
import { AspectRatioUI, ImgUI } from './responsiveImage.css'
import short from 'short-uuid'

export default function ({
  aspectRatio = 56.25,
  data,
  loading = 'lazy',
  sizes,
  alt,
  src,
}) {
  const img = (
    <ImgUI
      alt={alt || data.alt}
      loading={loading}
      key={short.generate()}
      src={(data && data.url) || src}
      srcSet={sizes && prismicUtils.getSrcSets(sizes, data)}
    />
  )

  if (aspectRatio === null) {
    return img
  }

  return (
    <AspectRatioUI aspectRatio={aspectRatio} key={short.generate()}>
      {img}
    </AspectRatioUI>
  )
}
