import Article from '../components/article'
import BlockQuote from '../components/blockQuote'
import CardsSection from '../components/cardsSection'
import Faq from '../components/faq'
import Grid from '../components/grid'
import Icon from '../components/icon'
import Jumbotron from '../components/jumbotron'
import Line from '../components/line'
import ResponsiveImage from '../components/responsiveImage'
import Text from '../components/text'
import Title from '../components/title'
import JsxParser from 'react-jsx-parser'
import reactElementToJSXString from 'react-element-to-jsx-string'
import Section from '../components/section'
var short = require('short-uuid')

function getLinkedContentById(linkedContent, id) {
  return linkedContent.filter((content) => {
    return content.id === id
  })
}

const components = {
  Article,
  Line,
  Grid,
  Icon,
  h1: ({ children }) => {
    return <Title as="h1">{children}</Title>
  },
  h2: ({ children }) => {
    return <Title as="h2">{children}</Title>
  },
  h3: ({ children }) => {
    return <Title as="h3">{children}</Title>
  },
  h4: ({ children }) => {
    return <Title as="h4">{children}</Title>
  },
  h5: ({ children }) => {
    return <Title as="h5">{children}</Title>
  },
  ResponsiveImage,
  Text,
  Title,
}

const wrapperComponent = {
  text: 'div',
  highlighted_box: BlockQuote,
}

// takes prismic data, then parses the components to react components and adds a wrapper
function parsePrismicToReactComponents(text) {
  if (text.type === 'preformatted') {
    return (
      <JsxParser
        components={components}
        jsx={text.text}
        key={short.generate()}
      ></JsxParser>
    )
  }

  const parsePrismic = PrismicReactJs.RichText.render(text)

  const string = reactElementToJSXString(parsePrismic, {
    useFragmentShortSyntax: false,
  })

  return (
    <JsxParser
      components={components}
      jsx={string}
      key={short.generate()}
    ></JsxParser>
  )
}

export default function getComponentsFromSlices(slices, linkedContent, path) {
  return slices.map((slice, index) => {
    const type = slice.slice_type

    if (type === 'text' || type === 'highlighted_box') {
      const parsedComponents = parsePrismicToReactComponents(slice.primary.text)

      return React.createElement(wrapperComponent[slice.slice_type], {}, [
        parsedComponents,
      ])
    } else if (type === 'responsive_image') {
      return (
        <ResponsiveImage
          data={slice.primary.image1}
          sizes={['768x506', '1024x674', '1366x900', '1600x1056']}
        />
      )
    } else if (type === 'jumobotron') {
      const {
        align_items,
        body2,
        justify_content,
        overlay,
        text_align,
      } = slice.primary

      const parsedComponents = parsePrismicToReactComponents(body2)

      return (
        <Jumbotron
          alignItems={align_items}
          hasNavShift={index === 0 ? true : false}
          justifyContent={justify_content}
          key={short.generate()}
          image={slice.primary.image}
          overlay={overlay}
          textAlign={text_align}
        >
          {parsedComponents}
        </Jumbotron>
      )
    } else if (type === 'linked_component_section') {
      const data = getLinkedContentById(linkedContent, slice.primary.body2.id)
      const { background, body, inner_width } = data[0].data

      const parsedComponents = parsePrismicToReactComponents(body[0])

      return (
        <Section key={short.generate()} {...{ background, inner_width }}>
          {parsedComponents}
        </Section>
      )
    } else if (type === 'cards') {
      const data = slice.items.map((card) => {
        return getLinkedContentById(linkedContent, card.cards.id)[0]
      })
      return (
        <CardsSection
          cards={data}
          key={short.generate()}
          title={slice.primary.title1}
        />
      )
    } else if (type === 'faq') {
      const { intro, title1 } = slice.primary

      return (
        <Section background="light" key={short.generate()}>
          <Title as="h3">{title1}</Title>

          {intro && (
            <Article>
              <Article.Content>
                {parsePrismicToReactComponents(intro)}
              </Article.Content>
            </Article>
          )}

          {slice.items.map((item) => {
            return (
              <Faq key={short.generate()}>
                <Faq.Details>
                  <Faq.Summary>
                    <Title as="h4">{item.question}</Title>
                  </Faq.Summary>
                  {parsePrismicToReactComponents(item.answer)}
                </Faq.Details>
              </Faq>
            )
          })}
        </Section>
      )
    } else if (type == 'article') {
      const { background, body2, sidebar, sidebar_style } = slice.primary

      return (
        <Section background={background} key={short.generate()}>
          <Article>
            <Article.Content>
              {parsePrismicToReactComponents(body2)}
            </Article.Content>
            <Article.Sidebar>
              {sidebar_style === 'quote' && (
                <Article.Quote>
                  {parsePrismicToReactComponents(sidebar)}
                </Article.Quote>
              )}

              {sidebar_style === 'default' && (
                <Article.Box>
                  {parsePrismicToReactComponents(sidebar)}
                </Article.Box>
              )}
            </Article.Sidebar>
          </Article>
        </Section>
      )
    } else if (type === 'article_w_linked') {
      const { body2, linked_sidebar_section } = slice.primary
      const sidebar = getLinkedContentById(
        linkedContent,
        linked_sidebar_section.id,
      )

      return (
        <div>
          <Section inner_width="medium">
            {parsePrismicToReactComponents(body2)}
          </Section>
        </div>
      )
    } else if (type === 'half_banner_with_image') {
      const {
        align_items,
        body2,
        justify_content,
        overlay,
        text_align,
      } = slice.primary

      const parsedComponents = parsePrismicToReactComponents(body2)

      return (
        <Jumbotron
          alignItems={align_items}
          hasNavShift={false}
          justifyContent={justify_content}
          overlay={overlay}
          key={short.generate()}
          image={slice.primary.image}
          size="half"
          textAlign={text_align}
        >
          {parsedComponents}
        </Jumbotron>
      )
    } else if (type === 'dynamic_content') {
      return slice.items.filter((item) => {
        return item.condition_value === path
      })
    }
  })
}
