import theme from '../../theme'

export default function ({ image, size = 'half' }) {
  const _urls = theme.imageDimensions.jumbotron[size].map((_size) => {
    return image[_size].url
  })
  return [image.url, ..._urls]
}
