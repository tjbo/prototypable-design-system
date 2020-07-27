import Card from '../card'
import Cards from '../cards'
import Section from '../section'
import toProperCase from '../../utils/toProperCase'
import ResponsiveImage from '../responsiveImage'
var short = require('short-uuid')

function formatTitle(title) {
  return toProperCase(title.replace(/_/g, ' '))
}

function getImage(image) {
  if (!image) {
    return
  }
  return (
    <ResponsiveImage
      data={image}
      sizes={['600x338', '960x540']}
      spaceAfter="none"
    ></ResponsiveImage>
  )
}

function getContent(title, content) {
  return (
    <Card.Content>
      <h4>{title[0].text}</h4>
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
      {showTitle ? <h3>{title}</h3> : null}
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
