import Grid from '../grid'
import { CardUI, ContentUI, ImageUI, ImageOverlayUI } from './card.css'

function Card({
  children,
  href = '',
  maxWidth = null,
  width = '33.33%',
  withBorder = true,
}) {
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
    <Grid.Col maxWidth={maxWidth} width={width} alignSelf="stretch">
      <CardUI asLink={asLink} onClick={onClick} withBorder={withBorder}>
        {children}
      </CardUI>
    </Grid.Col>
  )
}

Card.Image = function ({ children, title }) {
  if (!!title) {
    return (
      <ImageUI>
        {children}
        <ImageOverlayUI />
        <h3>{title}</h3>
      </ImageUI>
    )
  } else {
    return children
  }
}

Card.Content = function ({ alignItems, justifyContent, children }) {
  return (
    <ContentUI alignItems={alignItems} justifyContent={justifyContent}>
      {children}
    </ContentUI>
  )
}

export default Card
