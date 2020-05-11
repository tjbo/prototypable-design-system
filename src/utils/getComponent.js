import Article from '../components/article/'
import Banner from '../components/banner/'
import Card from '../components/card/'
import Cards from '../components/cards/'
import Faq from '../components/faq/'
import Grid from '../components/grid/'
import Jumbotron from '../components/jumbotron/'
import Quote from '../components/quote/'
import Section from '../components/section/'
import Form from '../components/form/form'
import JsxParser from 'react-jsx-parser'

export default function getComponent(data) {
  const wrapperComponent = {
    component_section: Section,
    component_jumbotron: Jumbotron,
    component_section_rich_text: Section,
  }

  const content = (
    <JsxParser
      components={{
        Article,
        Banner,
        Card,
        Cards,
        Form,
        Faq,
        Grid,
        Quote,
      }}
      jsx={data.body.text}
    ></JsxParser>
  )

  return React.createElement(
    wrapperComponent[data.type],
    {
      ...data,
      key: data.id,
      id: data.id,
    },
    content,
  )
}
