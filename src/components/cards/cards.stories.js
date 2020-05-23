import Card from '../card'
import Cards from './cards'
import Section from '../section'

export default {
  title: 'Cards',
  component: Cards,
}

export function Default() {
  return (
    <Section background="dark">
      <Cards>
        <Card>
          <Card.Content>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
            eleifend volutpat arcu, id congue mi ullamcorper at. Proin sit amet
            hendrerit augue, vel fringilla ipsum.
          </Card.Content>
        </Card>
        <Card>
          <Card.Content>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
            eleifend volutpat arcu, id congue mi ullamcorper at. Proin sit amet
            hendrerit augue, vel fringilla ipsum.
          </Card.Content>
        </Card>
        <Card>
          <Card.Content>
            Proin sit amet hendrerit augue, vel fringilla ipsum.
          </Card.Content>
        </Card>
      </Cards>
    </Section>
  )
}
