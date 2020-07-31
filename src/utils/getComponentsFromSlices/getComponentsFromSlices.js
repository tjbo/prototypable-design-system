import Article from '../../components/article'
import BlockQuote from '../../components/blockQuote'
import CardsSection from '../../components/cardsSection'
import Faq from '../../components/faq'
import Grid from '../../components/grid'
import Icon from '../../components/icon'
import Jumbotron from '../../components/jumbotron'
import Line from '../../components/line'
import ResponsiveImage from '../../components/responsiveImage'
import Text from '../../components/text'
import JsxParser from 'react-jsx-parser'
import Section from '../../components/section'
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
  ResponsiveImage,
  Text,
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

  // if type isn't preformatted we just use global styles
  const parsePrismic = PrismicReactJs.RichText.render(text)
  return parsePrismic
}

function renderFaq(slice) {
  const { intro, title1 } = slice.primary

  return (
    <Section background="light" key={short.generate()}>
      <h3>{title1}</h3>
      {intro && !!intro.length && !!intro[0].text.length && (
        <Article>
          <Article.Content>
            {parsePrismicToReactComponents(intro)}
          </Article.Content>
        </Article>
      )}

      {slice.items.map((item) => {
        return (
          <Faq key={short.generate()} title={item.question}>
            {parsePrismicToReactComponents(item.answer)}
          </Faq>
        )
      })}
    </Section>
  )
}

export default function getComponentsFromSlices({
  slices,
  linkedContent,
  options = {},
}) {
  return slices.map((slice, index) => {
    const type = slice.slice_type

    if (type === 'highlighted_box') {
      const parsedComponents = parsePrismicToReactComponents(slice.primary.text)
      return React.createElement(wrapperComponent[slice.slice_type], {}, [
        parsedComponents,
      ])
    } else if (type === 'text' || type === 'highlighted_box') {
      const parsedComponents = parsePrismicToReactComponents(slice.primary.text)
      return parsedComponents
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
        call_to_action,
        justify_content,
        overlay,
        text_align,
      } = slice.primary

      const parsedComponents = parsePrismicToReactComponents(body2)

      return React.createElement(
        Jumbotron,
        {
          alignItems: align_items,
          callToActionHref: options.callToActionHref,
          callToActionText: call_to_action || options.callToActionText,
          hasNavShift: true,
          hasContentVerticalOffset: true,
          justifyContent: justify_content,
          key: short.generate(),
          image: slice.primary.image,
          overlay,
          routerLinkComponent: options.routerLinkComponent,
          textAlign: text_align,
        },
        parsedComponents,
      )
    } else if (type === 'linked_component_section') {
      const data = getLinkedContentById(linkedContent, slice.primary.body2.id)
      const { background } = slice.primary
      const { body, inner_width } = data[0].data

      if (body[0].slice_type === 'faq') {
        return renderFaq(body[0])
      }

      const parsedComponents = parsePrismicToReactComponents(body[0])

      return (
        <Section key={short.generate()} {...{ background, inner_width }}>
          {parsedComponents}
        </Section>
      )
    } else if (type === 'cards') {
      const { background } = slice.primary

      const data = slice.items.map((card) => {
        return getLinkedContentById(linkedContent, card.cards.id)[0]
      })
      return (
        <CardsSection
          background={background}
          cards={data}
          key={short.generate()}
          title={slice.primary.title1}
        />
      )
    } else if (type === 'faq') {
      return renderFaq(slice)
    } else if (type == 'article') {
      const {
        background,
        body2,
        sidebar,
        sidebar_style,
        sidebar_title,
      } = slice.primary

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

              {sidebar_style === 'default' &&
                !!sidebar[0] &&
                !!sidebar[0].text.length &&
                !!sidebar.length && (
                  <Article.Box>
                    {parsePrismicToReactComponents(sidebar)}
                  </Article.Box>
                )}

              {sidebar_style === 'facts' && (
                <Article.Facts title={sidebar_title}>
                  {parsePrismicToReactComponents(sidebar)}
                </Article.Facts>
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
        call_to_action,
        justify_content,
        overlay,
        text_align,
      } = slice.primary

      const parsedComponents = parsePrismicToReactComponents(body2)

      return (
        <Jumbotron
          alignItems={align_items}
          callToActionText={call_to_action || options.callToActionText}
          callToActionHref={options.callToActionHref}
          hasNavShift={false}
          justifyContent={justify_content}
          overlay={overlay}
          key={short.generate()}
          image={slice.primary.image}
          routerLinkComponent={options.routerLinkComponent}
          size="half"
          textAlign={text_align}
        >
          {parsedComponents}
        </Jumbotron>
      )
    } else if (type === 'dynamic_content') {
      return slice
    }
  })
}
