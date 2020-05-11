import makePixelValue from './utils/makePixelValue'

const unit = 32

export default {
  breakPoints: {
    mobile: 600,
    tablet: 1025,
    desktop: 1280,
  },
  breakPointsAsPixel: {
    mobile: '600px',
    tablet: '1025px',
    desktop: '1280px',
  },
  colors: {
    ['dark-1']: '#000000',
    ['dark-2']: '#D40000',
    ['dark-3']: '#0090e7',
    ['dark-4']: '#454545',
    ['dark-5']: '#0066a3',
    ['light-1']: '#f5faff',
    ['light-2']: '36,139,204',
    ['light-3']: '#ffffff',
  },
  typography: {
    fonts: {
      ['font-1']: 'PT Serif',
      ['font-2']: 'Roboto',
      ['font-3']: 'PT Serif Caption',
    },
    sizes: {
      desktop: {
        xsm: '1rem', // not used yet
        sm: '1.125rem',
        md: '1.5rem',
        lg: '2.5rem',
        xlg: '3.5rem',
        xxlg: '4rem',
      },
      tablet: {
        xsm: '.9rem',
        sm: '1.125rem',
        md: '1.5rem',
        lg: '2rem',
        xlg: '2.75rem',
        xxlg: '3.25rem',
      },
      mobile: {
        xsm: '.9rem',
        sm: '1.125rem',
        md: '1.5rem',
        lg: '2rem',
        xlg: '2.25rem',
        xxlg: '3rem',
      },
    },
  },

  border: '1px solid #eee',
  border2: '1px soild #454545',
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