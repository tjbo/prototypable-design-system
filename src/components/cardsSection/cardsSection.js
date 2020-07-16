import Card from '../card'
import Cards from '../cards'
import getSrcSets from '../../utils/getSrcSets'
import Title from '../title'
import Section from '../section'
import toProperCase from '../../utils/toProperCase'
var short = require('short-uuid')

function formatTitle(title) {
  return toProperCase(title.replace(/_/g, ' '))
}

function getImage(image) {
  if (!image) {
    return
  }
  return (
    <Card.Image>
      <img
        loading="lazy"
        src={image.url}
        srcSet={getSrcSets(['600x338', '960x540'], image)}
      />
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
          <div key={short.generate()}>
            {formatTitle(key)}: {value}
          </div>
        )
      })}
    </Card.Content>
  )
}

export default function ({
  background = 'light',
  cards,
  showTitle = true,
  title = '',
}) {
  return (
    <Section background={background}>
      {showTitle ? <Title as="h3">{title}</Title> : null}
      <Cards>
        {cards.map((card) => {
          if (!card.data) {
            return
          }
          const { image, title, ...rest } = card.data

          return (
            <Card key={short.generate()}>
              {getImage(image)}
              {getContent(title, rest)}
            </Card>
          )
        })}
      </Cards>
    </Section>
  )
}
