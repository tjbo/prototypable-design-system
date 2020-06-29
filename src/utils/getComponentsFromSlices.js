import BlockQuote from '../components/blockQuote'
import Image from '../components/image'
import Quote from '../components/quote'
import ResponsiveImage from '../components/responsiveImage'
import Title from '../components/title'
import JsxParser from 'react-jsx-parser'
import reactElementToJSXString from 'react-element-to-jsx-string'
var short = require('short-uuid')

export default function getComponentFromSlices(slices) {
  return slices.map((slice) => {
    if (slice.slice_type !== 'responsive_image') {
      const parsePrismic = PrismicReactJs.RichText.render(slice.primary.text)

      const string = reactElementToJSXString(parsePrismic, {
        useFragmentShortSyntax: false,
      })

      const parsedComponents = (
        <JsxParser
          components={{
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
            Title,
          }}
          disableFragments={false}
          jsx={string}
          key={short.generate()}
          renderInWrapper={false}
        ></JsxParser>
      )

      const wrapperComponent = {
        text: 'div',
        highlighted_box: BlockQuote,
      }

      return React.createElement(wrapperComponent[slice.slice_type], {}, [
        parsedComponents,
      ])
    }

    if (slice.slice_type === 'responsive_image') {
      return (
        <ResponsiveImage
          data={slice.primary.image1}
          sizes={['768x506', '1024x674', '1366x900', '1600x1056']}
        />
      )
    }
  })
}