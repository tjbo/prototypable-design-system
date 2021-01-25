import theme from '../components/theme'

export default function ({ image }) {
  const _urls = theme.custom.images.sizes.jumbotron.map((_size) => {
    return image[_size].url
  })
  return [image.url, ..._urls]
}
