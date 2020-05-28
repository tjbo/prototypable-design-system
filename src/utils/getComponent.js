import Article from '../components/article/'
import Banner from '../components/banner/'
import BlockQuote from '../components/blockQuote/'
import Card from '../components/card/'
import Cards from '../components/cards/'
import CardsSection from '../components/cardsSection'
import Faq from '../components/faq/'
import Grid from '../components/grid/'
import Icon from '../components/icon/'
import Image from '../components/image/'
import Jumbotron from '../components/jumbotron/'
import Quote from '../components/quote/'
import Section from '../components/section/'
import Title from '../components/title'
import Form from '../components/form/form'
import JsxParser from 'react-jsx-parser'
var short = require('short-uuid')

export default function getComponent(data, id, type, before) {
  const wrapperComponent = {
    blog_post: Section,
    component_cards: CardsSection,
    component_section: Section,
    component_jumbotron: Jumbotron,
    component_section_rich_text: Section,
  }

  const content =
    data.body &&
    data.body.map((block) => {
      return (
        <JsxParser
          components={{
            Article,
            Banner,
            BlockQuote,
            Card,
            Cards,
            Form,
            Faq,
            Grid,
            Icon,
            Image,
            Title,
            Quote,
          }}
          jsx={block.text}
          key={short.generate()}
          renderInWrapper={false}
        ></JsxParser>
      )
    })

  return React.createElement(
    wrapperComponent[type],
    {
      ...data,
      key: `${type}-${id}`,
      id: id,
    },
    [before, content],
  )
}
