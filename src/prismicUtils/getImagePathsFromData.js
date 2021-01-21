import theme from '../components/theme'

export default function ({ image, size = 'half' }) {
  const _urls = theme.jumbotron[size].map((_size) => {
    return image[_size].url
  })
  return [image.url, ..._urls]
}
