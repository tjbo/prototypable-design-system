import getSrcSets from '../../utils/getSrcSets'
import { AspectRatioUI, ImgUI } from './responsiveImage.css'

export default function ({
  aspectRatio = 56.25,
  data,
  sizes,
  spaceAfter = 'medium',
  src,
}) {
  console.log('data', data)
  const img = (
    <ImgUI
      loading="lazy"
      src={(data && data.url) || src}
      srcSet={sizes && getSrcSets(sizes, data)}
      spaceAfter={spaceAfter}
    />
  )

  if (aspectRatio === null) {
    return img
  }

  return <AspectRatioUI aspectRatio={aspectRatio}>{img}</AspectRatioUI>
}
