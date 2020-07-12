import Text from '.'
import Section from '../section'

export default {
  title: 'Text',
}

export function Default() {
  return (
    <Section>
      <Text as="p">If at first you don't succeed, try again.</Text>
      <Text as="p" color="success">
        If at first you don't succeed, try again.
      </Text>
      <Text as="p" color="dark3">
        If at first you don't succeed, try again.
      </Text>
    </Section>
  )
}
