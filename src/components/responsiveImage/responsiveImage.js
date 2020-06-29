import getSrcSets from '../../utils/getSrcSets'
import { ImgUI } from './responsiveImage.css'

export default function ({ data, sizes }) {
  return <ImgUI src={data.url} srcSet={getSrcSets(sizes, data)} />
}
