import Faq from '../components/faq'
import Jumbotron from '../components/jumbotron'
import Section from '../components/section'
import Cards from '../components/cards'
import short from 'short-uuid'
import parsePrismicToReactComponents from './parsePrismicToReactComponents'
import HighlightedBox from '../components/highlightedBox'
import { AspectRatio, Image } from '@chakra-ui/react'
import Article from '../components/article'
import ArticleWithImages from '../components/articleWithImages'
import ArticleWithHighlightedBox from '../components/articleWithHighlightedBox'
import getSrcSets from './getSrcSets'
import Posts from '../components/posts'

export default function getComponentsFromSlices({ slices, options = {} }) {
  return slices.map((slice, index) => {
    const type = slice.__typename

    if (type === 'PageBody1Article') {
      const {
        background,
        body3,
        sidebar,
        title1,
        sidebar_title: title2,
      } = slice.primary

      const column1 = parsePrismicToReactComponents(body3, options.paths)

      const column2 = parsePrismicToReactComponents(sidebar, options.paths)

      return (
        <ArticleWithHighlightedBox
          {...{
            background,
            column1,
            column2,
            key: short.generate(),
            title1,
            title2,
          }}
        />
      )
    } else if (type === 'PostBody1Highlighted_box') {
      const parsedComponents = parsePrismicToReactComponents(
        slice.primary.text,
        options.paths,
      )

      return (
        <HighlightedBox key={short.generate()}>
          {parsedComponents}
        </HighlightedBox>
      )
    } else if (type === 'PageBody1Faq') {
      const items = slice.fields.map((item) => {
        return {
          ...item,
          answer: parsePrismicToReactComponents(item.answer),
        }
      })

      return (
        <Faq
          key={short.generate()}
          items={items}
          title={slice.primary.title1}
          background={slice.primary.background}
        />
      )
    } else if (type === 'PostBody1Text') {
      const parsedComponents = parsePrismicToReactComponents(
        slice.primary.text,
        options.paths,
      )
      return parsedComponents
    } else if (type === 'PageBody1Article1') {
      const { body3, sub_title: subTitle, title1 } = slice.primary

      const body = parsePrismicToReactComponents(body3, options.paths)

      return <Article {...{ body, key: short.generate(), subTitle, title1 }} />
    } else if (type === 'PageBody1Linked_component_section') {
      const { __typename } = slice.primary.body2.body[0]

      const background = slice.primary.background

      if (__typename === 'Component_sliceBodyReact_section') {
        const { body1 } = slice.primary.body2.body[0].primary
        const parsedComponents = parsePrismicToReactComponents(
          body1[0],
          options.paths,
        )
        return <Section background={background}>{parsedComponents}</Section>
      } else if (__typename === 'Component_sliceBodyFaq') {
        const items = slice.primary.body2.body[0].fields.map((item) => {
          return {
            ...item,
            answer: parsePrismicToReactComponents(item.answer),
          }
        })

        return (
          <Faq
            background={background}
            items={items}
            title={slice.primary.body2.body[0].primary.title1}
          />
        )
      }
    } else if (type === 'PostBody1Responsive_image') {
      return (
        <AspectRatio ratio={16 / 9}>
          <Image
            borderRadius="md"
            alt={slice.primary.image1.alt}
            src={slice.primary.image1.url}
            srcSet={getSrcSets(
              ['768x506', '1024x674', '1366x900', '1600x1056'],
              slice.primary.image1,
            )}
          />
        </AspectRatio>
      )
    } else if (type === 'PageBody1Jumobotron') {
      const { body, call_to_action, overlay, text_color } = slice.primary

      const parsedComponents = parsePrismicToReactComponents(
        body,
        options.paths,
      )

      return React.createElement(
        Jumbotron,
        {
          callToActionHref: options.callToActionHref,
          callToActionText: call_to_action || options.callToActionText,
          key: short.generate(),
          image: slice.primary.image,
          overlay,
          textColor: text_color,
        },
        parsedComponents,
      )
    } else if (type === 'PageBody1Related_blog_posts') {
      const items = slice.fields.map((item) => {
        const { related_blog_post } = item
        return {
          path: `/blog/${related_blog_post.path}/`,
          ...related_blog_post,
        }
      })

      return <Posts {...{ items }} />
    } else if (type === 'PageBody1Cards') {
      const { background, title1 } = slice.primary
      const items = slice.fields.map((card) => {
        return card.cards
      })

      return <Cards {...{ background, items, title: title1 }} />
    } else if (type === 'PageBody1Article___images') {
      const {
        fields,
        primary: { background, body, reverse_order: reverse },
      } = slice

      return (
        <ArticleWithImages
          {...{
            background,
            reverse,
            column1: parsePrismicToReactComponents(body, options.paths),
            column2: fields.map((item) => {
              return (
                <Image
                  borderRadius="md"
                  src={item.image.url}
                  srcSet={getSrcSets(['540x357', '1080x713'], item.image)}
                  aspectRatio={66}
                />
              )
            }),
          }}
        />
      )
    }
  })
}
