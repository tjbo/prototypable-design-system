import Article from '../components/article'
import CardsSection from '../components/cardsSection'
import Faq from '../components/faq'
import Jumbotron from '../components/jumbotron'
import ResponsiveImage from '../components/responsiveImage'
import Section from '../components/section'
import Card from '../components/card'
import Cards from '../components/cards'
import short from 'short-uuid'
import RelatedContent from '../components/relatedContent'
import { Media } from 'react-breakpoints'
import parsePrismicToReactComponents from './parsePrismicToReactComponents'
import getLink from './getLink'
import HighlightedBox from '../components/highlightedBox'
import { Heading, Image } from '@chakra-ui/react'
import ArticleWithImages from '../components/articleWithImages'
import getSrcSets from './getSrcSets'

function getLinkedContentById(linkedContent, id) {
  return linkedContent.filter((content) => {
    return content.id === id
  })
}

const wrapperComponent = {
  text: 'div',
  highlighted_box: HighlightedBox,
}

function renderFaq(slice, options) {
  const { intro, title1 } = slice.primary

  return (
    <Section background="light" key={short.generate()}>
      <h3>{title1}</h3>
      {intro && !!intro.length && !!intro[0].text.length && (
        <Article>
          <Article.Content>
            {parsePrismicToReactComponents(intro, options.paths)}
          </Article.Content>
        </Article>
      )}

      <Faq
        items={slice.items.map((item) => {
          return {
            ...item,
            answer: parsePrismicToReactComponents(item.answer, options.paths),
          }
        })}
        paths={options.paths}
      />
    </Section>
  )
}

export default function getComponentsFromSlices({
  slices,
  id,
  linkedContent,
  options = {},
}) {
  return slices.map((slice, index) => {
    const type = slice.slice_type

    if (type === 'highlighted_box') {
      const parsedComponents = parsePrismicToReactComponents(
        slice.primary.text,
        options.paths,
      )
      return React.createElement(wrapperComponent[slice.slice_type], {}, [
        parsedComponents,
      ])
    } else if (type === 'text') {
      const parsedComponents = parsePrismicToReactComponents(
        slice.primary.text,
        options.paths,
      )
      return parsedComponents
    } else if (type === 'responsive_image') {
      return (
        <Image
          srcSet={getSrcSets(
            ['768x506', '1024x674', '1366x900', '1600x1056'],
            slice.primary.image1,
          )}
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

      const parsedComponents = parsePrismicToReactComponents(
        body2,
        options.paths,
      )

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
          textAlign: text_align,
        },
        parsedComponents,
      )
    } else if (
      type === 'linked_component_section' ||
      type === 'linked_section'
    ) {
      const data = getLinkedContentById(linkedContent, slice.primary.body2.id)

      if (data[0].data.body[0].slice_type === 'related_content') {
        const items = data[0].data.body[0].items
          .filter((item) => {
            return item.link.id !== id
          })

          .map((item) => {
            return {
              link: getLink(item.link, options.paths),
              description: item.description,
              text: item.text,
            }
          })

        return <RelatedContent items={items} />
      }

      const { background } = slice.primary
      const { body, inner_width } = data[0].data

      if (body[0].slice_type === 'faq') {
        return renderFaq(body[0], options)
      }

      const parsedComponents = parsePrismicToReactComponents(
        body[0],
        options.paths,
      )

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

      if (data[0] && data[0].type === 'link') {
        return (
          <Section background={background} key={short.generate()}>
            <h3 className="centered space-after-small italic">
              {slice.primary.title1}
            </h3>
            <Cards>
              {Object.entries(data).map((_content) => {
                return (
                  <Card key={short.generate()} horizontalPadding={0.5}>
                    <Card.Image
                      withTitle={true}
                      title={_content[1].data.title[0].text}
                      to={getLink(_content[1].data.link, options.paths)}
                    >
                      <ResponsiveImage
                        data={_content[1].data.image}
                        sizes={['600x338', '960x540']}
                      />
                    </Card.Image>
                  </Card>
                )
              })}
            </Cards>
          </Section>
        )
      } else {
        return (
          <CardsSection
            background={background}
            cards={data}
            key={short.generate()}
          >
            <h3>{slice.primary.title1}</h3>
          </CardsSection>
        )
      }
    } else if (type === 'faq') {
      return renderFaq(slice, options)
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
              {parsePrismicToReactComponents(body2, options.paths)}
            </Article.Content>
            <Article.Sidebar>
              {sidebar_style === 'quote' && (
                <Article.Quote>
                  {parsePrismicToReactComponents(sidebar, options.paths)}
                </Article.Quote>
              )}

              {sidebar_style === 'default' &&
                !!sidebar[0] &&
                !!sidebar[0].text.length &&
                !!sidebar.length && (
                  <Article.Box>
                    {parsePrismicToReactComponents(sidebar, options.paths)}
                  </Article.Box>
                )}

              {sidebar_style === 'facts' && (
                <Article.Facts title={sidebar_title}>
                  {parsePrismicToReactComponents(sidebar, options.paths)}
                </Article.Facts>
              )}
            </Article.Sidebar>
          </Article>
        </Section>
      )
    } else if (type === 'article___images') {
      const {
        items,
        primary: { background, body, reverse_order: reverseOrder },
      } = slice

      return (
        <ArticleWithImages
          {...{
            background,
            content: [
              parsePrismicToReactComponents(body, options.paths),
              ...items.map((item) => {
                console.log('item', item)
                return (
                  <Image
                    src={item.image.url}
                    srcSet={getSrcSets(['540x357', '1080x713'], item.image)}
                    aspectRatio={66}
                  />
                )
              }),
            ],
          }}
        />
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
            {parsePrismicToReactComponents(body2, options.paths)}
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

      const parsedComponents = parsePrismicToReactComponents(
        body2,
        options.paths,
      )

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
