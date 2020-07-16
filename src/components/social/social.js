import Facebook from '../../svgs/facebook'
import LinkedIn from '../../svgs/linkedin'
import { LinkUI } from './social.css'
import Twitter from '../../svgs/twitter'
import Email from '../../svgs/email'

export default function () {
  const url = `http://www.facebook.com/sharer/sharer.php?u=${window.location.href}`

  return (
    <div>
      <LinkUI href={url}>
        <Facebook />
      </LinkUI>
      <LinkUI href="">
        <Twitter />
      </LinkUI>
      <LinkUI href="">
        <LinkedIn />
      </LinkUI>
      <LinkUI>
        <Email />
      </LinkUI>
    </div>
  )
}
