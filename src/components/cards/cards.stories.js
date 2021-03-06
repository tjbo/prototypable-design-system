import Cards from './cards'
import { items } from './mock'
import Section from '../section'

export default {
  title: 'Cards',
  component: Cards,
}

export function Default() {
  return (
    <Section>
      <Cards items={items} />
    </Section>
  )
}
