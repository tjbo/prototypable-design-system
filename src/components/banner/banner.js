import { BannerUI } from './banner.css'

export default function ({ body, children }) {
  if (body) {
    return (
      <BannerUI>
        <span
          className="heading-3 light-3 font-3 italic"
          dangerouslySetInnerHTML={{ __html: body.text }}
        />
      </BannerUI>
    )
  } else {
    return <BannerUI>{children}</BannerUI>
  }
}
