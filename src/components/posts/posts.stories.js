import Posts from './posts'
import { items } from './mock'
import Section from '../section'

export default {
  title: 'Posts',
  component: Posts,
}

export function Default() {
  return (
    <Section>
      <Posts items={items} />
    </Section>
  )
}
