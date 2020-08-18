import BlockQuote from '../blockQuote'
import { ContainerUI } from './relatedContent.css'

export default function ({ items }) {
  return (
    <BlockQuote>
      <ContainerUI>
        <h3>Related</h3>
        <ul>
          {items.map(({ link, text, description }) => {
            return (
              <li>
                <a href={link}>{text}</a>
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
