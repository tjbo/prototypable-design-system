import getSrcSets from '../../utils/getSrcSets'
import { AspectRatioUI, ImgUI } from './responsiveImage.css'

export default function ({
  aspectRatio = 56.25,
  data,
  loading = 'lazy',
  spaceAfter = 'medium',
  sizes,
  src,
}) {
  const img = (
    <ImgUI
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
      spaceAfter={aspectRatio ? 0 : spaceAfter}
    >
      {img}
    </AspectRatioUI>
  )
}
