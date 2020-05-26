import Grid from '../grid'
import { AspectRatioUI, CardUI, ContentUI } from './card.css'

function Card({ children, href = '', maxWidth = null, width = '32%' }) {
  const asLink = !!href

  function onClick() {
    if (asLink) {
      var loc = document.location.toString().split('#')[0]
      document.location = loc + href
      return false
    } else {
      event.preventDefault()
    }
  }

  return (
    <Grid.Col maxWidth={maxWidth} width={width}>
      <CardUI asLink={asLink} onClick={onClick}>
        {children}
      </CardUI>
    </Grid.Col>
  )
}

Card.Image = function ({ children }) {
  return <AspectRatioUI>{children}</AspectRatioUI>
}

Card.Content = function ({ alignItems, justifyContent, children }) {
  return (
    <ContentUI alignItems={alignItems} justifyContent={justifyContent}>
      {children}
    </ContentUI>
  )
}

export default Card
