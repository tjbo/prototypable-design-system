import makePixelValue from '../utils/makePixelValue'

const unit = 32

export default {
  animation: {
    speed: {
      quick: '300ms',
      default: '400ms',
    },
  },
  breakPoints: {
    mobile: 608,
    tablet: 960,
    bigTablet: 1024,
    desktop: 1280,
  },
  breakPointsAsPixel: {
    mobile: '608px',
    tablet: '960px',
    bigTablet: '1024px',
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
        xlg: '2.25rem',
        xxlg: '2.75rem',
      },
      tablet: {
        xsm: '.9rem',
        sm: '1.125rem',
        md: '1.5rem',
        lg: '2rem',
        xlg: '2.25rem',
        xxlg: '2.75rem',
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
  imageDimensions: {
    jumbotron: {
      ad: ['580x327', '870x490', '1160x652'],
      half: [
        '375x375',
        '414x414',
        '1280x400',
        '1366x384',
        '1440x450',
        '1920x540',
      ],
      full: [
        '375×667',
        '414×816',
        '360×780',
        '1366×768',
        '1440×900',
        '1920×1080',
      ],
    },
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
