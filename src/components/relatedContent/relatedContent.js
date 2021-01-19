import BlockQuote from '../blockQuote'
import { ContainerUI } from './relatedContent.css'
import { Link } from '@reach/router'

export default function ({ items }) {
  return (
    <BlockQuote>
      <ContainerUI>
        <h3>Related</h3>
        <ul>
          {items.map(({ link, text, description }, index) => {
            return (
              <li key={`related-content-${index}`}>
                <Link to={link}>{text}</Link>
                <br />
                {description.length && description}
              </li>
            )
          })}
        </ul>
      </ContainerUI>
    </BlockQuote>
  )
}
