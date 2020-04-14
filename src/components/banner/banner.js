import { BannerUI } from './banner.css'
import Section from '../section/'

export default function ({ body }) {
  return (
    <BannerUI>
      <span dangerouslySetInnerHTML={{ __html: body.text }}></span>
    </BannerUI>
  )
}
