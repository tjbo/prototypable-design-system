import getSrcSets from '../../utils/getSrcSets'
import { ImgUI } from './responsiveImage.css'

export default function ({ data, sizes, spaceAfter = 'medium', src }) {
  return (
    <ImgUI
      src={(data && data.url) || src}
      srcSet={sizes && getSrcSets(sizes, data)}
      spaceAfter={spaceAfter}
    />
  )
}
