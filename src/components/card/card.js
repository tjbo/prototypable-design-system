import Grid from '../grid'
import { AspectRatioUI, CardUI, ContentUI } from './card.css'

function Card({ children }) {
  return (
    <Grid.Col width="32%" stretch={true}>
      <CardUI>{children}</CardUI>
    </Grid.Col>
  )
}

Card.Image = function ({ children }) {
  return <AspectRatioUI>{children}</AspectRatioUI>
}

Card.Content = function ({ children }) {
  return <ContentUI>{children}</ContentUI>
}

export default Card
