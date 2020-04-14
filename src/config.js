const unit = 32

export function makePixelValue(value) {
  return value + 'px'
}

const config = {
  breakPoints: {
    mobile: makePixelValue(600),
    tablet: makePixelValue(35 * unit),
    desktop: unit * 40,
  },
  colors: {
    dark1: '#000',
    dark2: '#2b6242',
    dark3: '#0090e7',
    dark4: '#454545',
    dark5: '#0066a3',
    light1: '#f5faff',
    light2: '36,139,204',
    light3: '#fff',
  },
  typography: {
    fonts: {
      font1: 'PT Serif',
      font2: 'Roboto',
      font3: 'PT Serif Caption',
    },
    sizes: {
      xsm: makePixelValue(0.5 * unit),
      sm: makePixelValue(0.75 * unit),
      md: makePixelValue(0.9 * unit),
      lg: makePixelValue(1.25 * unit),
      xlg: makePixelValue(1.75 * unit),
      xxlg: makePixelValue(2 * unit),
    },
  },

  border: '1px solid #eee',
  unit(multiplier) {
    return makePixelValue(multiplier * unit)
  },
  layout: {
    desktop: {
      headerHeight: makePixelValue(2 * unit),
    },
    mobile: {
      headerHeight: makePixelValue(1.5 * unit),
    },
    tablet: {
      headerHeight: makePixelValue(2 * unit),
    },
  },
}

export default config
