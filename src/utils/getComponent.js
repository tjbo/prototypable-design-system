import Article from '../components/article/'
import Banner from '../components/banner/'
import Box1 from '../components/box1/'
import Cards from '../components/cards/'
import Faq from '../components/faq/'
import Grid from '../components/grid/'
import Jumbotron from '../components/jumbotron/'
import Quote from '../components/quote/'
import Section from '../components/section/'
import Form from '../components/form/form'

export default function getComponent(data) {
  const wrapperComponent = {
    component_section: Section,
    component_jumbotron: Jumbotron,
    component_section_rich_text: Section,
  }

  const layoutComponent = {
    article: Article,
    banner: Banner,
    box1: Box1,
    cards: Cards,
    form: Form,
    default: 'div',
    faq: Faq,
    grid: Grid,
    quote: Quote,
  }

  const components = []

  components.push(
    React.createElement(layoutComponent[data.layout_style] || 'div', {
      ...data,
      key: `${data.id}-wrapper`,
    }),
  )

  if (data.sidebar) {
    components.push(
      React.createElement(layoutComponent[data.sidebar_layout_style] || 'div', {
        key: `${data.id}-sidebar`,
        ...data,
        id: data.id,
      }),
    )
  }

  return React.createElement(
    wrapperComponent[data.type],
    {
      ...data,
      key: data.id,
      id: data.id,
    },
    components,
  )
}
