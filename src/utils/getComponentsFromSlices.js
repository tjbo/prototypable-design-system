import Article from '../components/article'
import Banner from '../components/banner'
import BlockQuote from '../components/blockQuote'
import CardsSection from '../components/cardsSection'
import Faq from '../components/faq'
import Grid from '../components/grid'
import Jumbotron from '../components/jumbotron'
import ResponsiveImage from '../components/responsiveImage'
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
  Grid,
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

export default function getComponentsFromSlices(slices, linkedContent) {
  return slices.map((slice) => {
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
      const parsedComponents = parsePrismicToReactComponents(
        slice.primary.body2,
      )

      return (
        <Jumbotron image={slice.primary.image}>{parsedComponents}</Jumbotron>
      )
    } else if (type === 'linked_component_section') {
      const data = getLinkedContentById(linkedContent, slice.primary.body2.id)
      const { background, body, inner_width } = data[0].data

      const parsedComponents = parsePrismicToReactComponents(body[0])

      return (
        <Section {...{ background, inner_width }}>{parsedComponents}</Section>
      )
    } else if (type === 'cards') {
      const data = slice.items.map((card) => {
        return getLinkedContentById(linkedContent, card.cards.id)[0]
      })
      return <CardsSection cards={data} title={slice.primary.title1} />
    } else if (type === 'banner') {
      const parsedComponents = parsePrismicToReactComponents(
        slice.primary.body2,
      )
      return (
        <Section background={slice.primary.background}>
          <Banner>{parsedComponents}</Banner>
        </Section>
      )
    } else if (type === 'faq') {
      const { intro, title1 } = slice.primary

      return (
        <Section background="light">
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
              <Faq>
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
        <Section background={background}>
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
            </Article.Sidebar>
          </Article>
        </Section>
      )
    }
  })
}
