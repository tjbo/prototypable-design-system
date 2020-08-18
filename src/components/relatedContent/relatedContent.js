import BlockQuote from '../blockQuote'
import { ContainerUI } from './relatedContent.css'

export default function ({ items, routerLinkComponent }) {
  console.log(routerLinkComponent)
  return (
    <BlockQuote>
      <ContainerUI>
        <h3>Related</h3>
        <ul>
          {items.map(({ link, text, description }) => {
            return (
              <li>
                {React.createElement(routerLinkComponent, { to: link }, text)}
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
