import config from '../../config'

function getFontFamily(font) {
  const key = Object.keys(config.typography.fonts).filter((key, index) => {
    return index === parseInt(font, 10)
  })

  return config.typography.fonts[key]
}

function getFontSize(size) {
  const key = Object.keys(config.typography.sizes).filter((key, index) => {
    return key === size
  })
  return config.typography.sizes[key]
}

export const TextUI = styled('div')`
  font-size: ${(props) => getFontSize(props.size)};
  font-style: ${(props) => (props.italic === true ? 'italic' : 'normal')};
  font-family: ${(props) => getFontFamily(props.font)};
`
