import { BannerUI } from './banner.css'
import Text from '../text'

export default function ({ body }) {
  return (
    <BannerUI>
      <span
        className="heading3 white font3 italic"
        dangerouslySetInnerHTML={{ __html: body.text }}
      />
    </BannerUI>
  )
}
