import getSrcSets from '../../utils/getSrcSets'
import { AspectRatioUI, ImgUI } from './responsiveImage.css'

export default function ({
  aspectRatio = 56.25,
  data,
  loading = 'lazy',
  spaceAfter = 'medium',
  sizes,
  alt,
  src,
}) {
  const img = (
    <ImgUI
      alt={alt || data.alt}
      loading={loading}
      src={(data && data.url) || src}
      srcSet={sizes && getSrcSets(sizes, data)}
      spaceAfter={spaceAfter}
    />
  )

  if (aspectRatio === null) {
    return img
  }

  return (
    <AspectRatioUI
      aspectRatio={aspectRatio}
      spaceAfter={aspectRatio === null ? 0 : spaceAfter}
    >
      {img}
    </AspectRatioUI>
  )
}
