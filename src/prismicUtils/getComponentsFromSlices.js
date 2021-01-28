import Article from '../components/article'
import Faq from '../components/faq'
import Jumbotron from '../components/jumbotron'
import Section from '../components/section'
import Cards from '../components/cards'
import short from 'short-uuid'
import parsePrismicToReactComponents from './parsePrismicToReactComponents'
import HighlightedBox from '../components/highlightedBox'
import { AspectRatio, Image } from '@chakra-ui/react'
import ArticleWithImages from '../components/articleWithImages'
import getSrcSets from './getSrcSets'
import Posts from '../components/posts'

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
    const type = slice.__typename

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
    } else if (type === 'PageBody1Linked_component_section') {
      const { __typename } = slice.primary.body2.body[0]

      if (__typename === 'Component_sliceBodyReact_section') {
        const { body1 } = slice.primary.body2.body[0].primary
        const parsedComponents = parsePrismicToReactComponents(
          body1[0],
          options.paths,
        )
        return <Section>{parsedComponents}</Section>
      } else if (__typename === 'Component_sliceBodyFaq') {
        const items = slice.primary.body2.body[0].fields.map((item) => {
          return {
            ...item,
            answer: parsePrismicToReactComponents(item.answer),
          }
        })
        return <Faq items={items} />
      }
    } else if (type === 'responsive_image') {
      return (
        <AspectRatio ratio={16 / 9}>
          <Image
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
      const { body, call_to_action, overlay } = slice.primary

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
        },
        parsedComponents,
      )
      // } else if (type === 'PageBody1Linked_component_section') {
      //   const data = getLinkedContentById(linkedContent, slice.primary.body2.id)

      //   if (data[0].data.body[0].slice_type === 'related_content') {
      //     const items = data[0].data.body[0].items
      //       .filter((item) => {
      //         return item.link.id !== id
      //       })

      //       .map((item) => {
      //         return {
      //           link: getLink(item.link, options.paths),
      //           description: item.description,
      //           text: item.text,
      //         }
      //       })

      //     return <RelatedContent items={items} />
      //   }

      //   const { background } = slice.primary
      //   const { body, inner_width } = data[0].data

      //   if (body[0].slice_type === 'faq') {
      //     return renderFaq(body[0], options)
      //   }

      //   const parsedComponents = parsePrismicToReactComponents(
      //     body[0],
      //     options.paths,
      //   )

      //   return (
      //     <Section key={short.generate()} {...{ background, inner_width }}>
      //       {parsedComponents}
      //     </Section>
      //   )
    } else if (type === 'PageBody1Related_blog_posts') {
      // const { background } = slice.primary
      const items = slice.fields.map((item) => {
        const { related_blog_post } = item
        return {
          path: `/blog/${related_blog_post.path}/`,
          ...related_blog_post,
        }
      })

      return <Posts {...{ items }} />
    } else if (type === 'PageBody1Cards') {
      const { background } = slice.primary
      const items = slice.fields.map((card) => {
        return card.cards
      })

      return <Cards {...{ background, items }} />
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
                  src={item.image.url}
                  srcSet={getSrcSets(['540x357', '1080x713'], item.image)}
                  aspectRatio={66}
                />
              )
            }),
          }}
        />
      )
    } else if (type === 'related_blog_posts') {
      return slice.items.map((item) => {
        return item.slug
      })
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
          callToActionText={call_to_action || options.callToActionText}
          callToActionHref={options.callToActionHref}
          overlay={overlay}
          key={short.generate()}
          image={slice.primary.image}
        >
          {parsedComponents}
        </Jumbotron>
      )
    } else if (type === 'dynamic_content') {
      return slice
    }
  })
}
