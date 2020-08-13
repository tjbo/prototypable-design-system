import Icon, { icons } from './icon'
import Grid from '../grid'
import Section from '../section'

export default {
  title: 'Icon',
  component: Icon,
}

export function Default() {
  const content = []

  for (let _icon in icons) {
    const icon = (
      <Grid.Col>
        <Icon name={_icon} size={3} />
      </Grid.Col>
    )

    content.push(icon)
  }
  return (
    <Section inner_width="medium">
      <Grid>{content}</Grid>
    </Section>
  )
}
