import makePixelValue from './utils/makePixelValue'

const unit = 32

export default {
  breakPoints: {
    mobile: 608,
    tablet: 960,
    bigTablet: 1024,
    desktop: 1280,
  },
  breakPointsAsPixel: {
    mobile: '608px',
    tablet: '960px',
    desktop: '1280px',
  },
  colors: {
    dark1: '#000000',
    dark2: '#D40000',
    dark3: '#000080',
    dark4: '#565656',
    dark5: '#0042B6',
    dark6: '#dddddd',
    light1: '#f9f9f9',
    light2: '#f7f7f7',
    light3: '#ffffff',
    error: '#D40000',
    success: '#009918',
    white: '#ffffff',
    black: '#000000',
  },
  typography: {
    fonts: {
      font1: 'Roboto',
    },
    sizes: {
      desktop: {
        xsm: '1rem', // not used yet
        sm: '1.125rem',
        md: '1.5rem',
        lg: '2rem',
        xlg: '2.5rem',
        xxlg: '3.0rem',
      },
      tablet: {
        xsm: '.9rem',
        sm: '1.125rem',
        md: '1.5rem',
        lg: '2rem',
        xlg: '2.5rem',
        xxlg: '3.0rem',
      },
      mobile: {
        xsm: '.9rem',
        sm: '1.125rem',
        md: '1.375rem',
        lg: '1.75rem',
        xlg: '2.0rem',
        xxlg: '2.5rem',
      },
    },
  },
  border: '1px solid #eee',
  border2: '1px soild #454545',
  unit(multiplier) {
    return makePixelValue(multiplier * unit)
  },
  unitAsNumber(multiplier) {
    return multiplier * unit
  },
  layout: {
    desktop: {
      headerHeight: makePixelValue(3.5 * unit),
    },
    mobile: {
      headerHeight: makePixelValue(2.5 * unit),
    },
    tablet: {
      headerHeight: makePixelValue(2.5 * unit),
    },
  },
  layoutAsNumber: {
    desktop: {
      headerHeight: 3.5 * unit,
    },
    mobile: {
      headerHeight: 2.5 * unit,
    },
    tablet: {
      headerHeight: 2.5 * unit,
    },
  },
}
