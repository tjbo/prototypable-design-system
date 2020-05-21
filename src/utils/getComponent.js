import Article from '../components/article/'
import Banner from '../components/banner/'
import BlockQuote from '../components/blockQuote/'
import Card from '../components/card/'
import Cards from '../components/cards/'
import Faq from '../components/faq/'
import Grid from '../components/grid/'
import Image from '../components/image/'
import Jumbotron from '../components/jumbotron/'
import Quote from '../components/quote/'
import Section from '../components/section/'
import Form from '../components/form/form'
import JsxParser from 'react-jsx-parser'
var short = require('short-uuid')

export default function getComponent(data, id, type, before) {
  const wrapperComponent = {
    blog_post: Section,
    component_section: Section,
    component_jumbotron: Jumbotron,
    component_section_rich_text: Section,
  }

  const content = data.body.map((block) => {
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
          Image,
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
