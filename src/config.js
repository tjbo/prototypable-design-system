const unit = 32

const config = {
  breakPoints: {
    sm: '768px',
    md: '992px',
    lg: '1200px',
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
    return multiplier * unit + 'px'
  },
  layout: {
    topNavHeight: 2.25 * unit + 'px',
  },
}

export default config
