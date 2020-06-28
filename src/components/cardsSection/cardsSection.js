import Card from '../card'
import Cards from '../cards'
import getSrcSets from '../../utils/getSrcSets'
import Title from '../title'
import Section from '../section'
import toProperCase from '../../utils/toProperCase'

function formatTitle(title) {
  return toProperCase(title.replace(/_/g, ' '))
}

function getImage(image) {
  if (!image) {
    return
  }
  return (
    <Card.Image>
      <img src={image.url} srcSet={getSrcSets(['600x338', '960x540'], image)} />
    </Card.Image>
  )
}

function getContent(title, content) {
  return (
    <Card.Content>
      <Title as="h4" spaceAfter="small">
        {title[0].text}
      </Title>
      {Object.entries(content).map((_content) => {
        const [key, value] = _content
        return (
          <div>
            {formatTitle(key)}: {value}
          </div>
        )
      })}
    </Card.Content>
  )
}

export default function ({ cards, showTitle = true }) {
  return (
    <Section background="light">
      {showTitle ? <Title as="h3">Recently Funded Loans</Title> : null}
      <Cards>
        {cards.map((card) => {
          if (!card.card.data) {
            return
          }
          const { image, title, ...rest } = card.card.data

          return (
            <Card>
              {getImage(image)}
              {getContent(title, rest)}
            </Card>
          )
        })}
      </Cards>
    </Section>
  )
}
