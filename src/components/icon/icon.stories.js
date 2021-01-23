import Icon, { icons } from './icon'
import Grid from '../grid'
import Section from '../section'
import { Box } from '@chakra-ui/react'

export default {
  title: 'Icon',
  component: Icon,
}

export function Default() {
  const content = []

  for (let _icon in icons) {
    const icon = (
      <Grid.Col>
        <Icon name={_icon} boxSize={24} />
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

export const AsSeenOn = () => {
  return (
    <div>
      <Grid columns={[3]} maxWidth="800px" spacingY={0}>
        <Grid.Col textAlign="center">
          <Icon name="market-watch" boxSize={[24, 36, 48]} />
        </Grid.Col>
        <Grid.Col paddingTop={[0, '20px']} textAlign="center">
          <Box mb="-40px">AS SEEN ON</Box>
          <Icon name="yahoo-finance" boxSize={[24, 36, 48]} />
        </Grid.Col>
        <Grid.Col textAlign="center">
          <Icon name="business-insider" boxSize={[24, 36, 48]} />
        </Grid.Col>
      </Grid>
    </div>
  )
}
