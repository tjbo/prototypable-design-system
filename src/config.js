const unit = 32

export function makePixelValue(value) {
  return value + 'px'
}

const config = {
  breakPoints: {
    mobile: unit * 12,
    phablet: unit * 20,
    tablet: unit * 34,
    desktop: unit * 40,
  },
  colors: {
    dark1: '#000',
    dark2: '#2b6242',
    dark3: '#0090e7',
    dark4: '#454545',
    light1: '#f5faff',
    light2: '36,139,204',
  },
  fonts: {
    font1: 'PT Serif',
    font2: 'Roboto',
    font3: 'PT Serif Caption',
  },
  border: '1px solid #eee',
  unit(multiplier) {
    return makePixelValue(multiplier * unit)
  },
  layout: {
    desktop: {
      headerHeight: makePixelValue(2.5 * unit),
    },
  },
}

export default config
