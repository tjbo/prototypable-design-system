import Grid from '../grid'
import { AhrefUI, CardUI, ContentUI } from './card.css'
import PropTypes from 'prop-types'
import short from 'short-uuid'

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

Card.propTypes = {
  href: PropTypes.string,
  maxWidth: PropTypes.string,
  width: PropTypes.string,
  withBorder: PropTypes.bool,
}

Card.Image = function ({ children, to, title, routerLinkComponent }) {
  if (!!title && to) {
    return (
      <AhrefUI>
        {React.createElement(routerLinkComponent, { to }, [
          children,
          <h3 key={short.generate()}>{title}</h3>,
        ])}
      </AhrefUI>
    )
  } else {
    return children
  }
}

Card.Image.propTypes = {
  to: PropTypes.string,
  title: PropTypes.string,
  routerLinkComponent: PropTypes.func,
}

Card.Content = function ({ alignItems, justifyContent, children }) {
  return (
    <ContentUI alignItems={alignItems} justifyContent={justifyContent}>
      {children}
    </ContentUI>
  )
}

Card.Content.propTypes = {
  alignItems: PropTypes.oneOf([
    'flex-start',
    'flex-end',
    'center',
    'baseline',
    'stretch',
  ]),
  justifyContent: PropTypes.oneOf([
    'flex-start',
    'flex-end',
    'center',
    'space-between',
    'space-around',
    'space-evenly',
  ]),
}

export default Card
