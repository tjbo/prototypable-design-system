import { createGlobalStyle } from 'styled-components'
import config from '../../config'

const GlobalStyles = createGlobalStyle`
body {
  font-family: ${config.fonts.font1};
  font-size: ${config.unit(0.6)};
  line-height: 1.5;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  color: ${config.colors.dark4};
}

table {
  margin: 0;
}

h1, h2, h3, h4 {
  font-family: ${config.fonts.font2};
  padding: 0;
  margin: 0;
}

h1 {
  font-size: ${config.unit(1)};
  font-weight: 600;
  margin: 0;
}

h1.double-size {
  font-size: ${config.unit(2)};
}

h2 {
  font-size: ${config.unit(1.125)};
  font-weight: 500;
  line-height: 1;
  margin-bottom: ${config.unit(0.75)};
}


h3 {
  font-size: ${config.unit(0.9)};
  font-weight: 400;
}

h4 {
  font-size: ${config.unit(0.75)};
  font-weight: 500;
}

h5 {
  font-size: ${config.unit(0.6)};
}

p, ul {
  padding: 0;
}

p.double-size {
  font-size: ${config.unit(1)};
}

ul {
  margin-left: ${config.unit(2)};
}

a:active,
  a:visited,
  a:hover,
  a:link {
    color: ${config.colors.dark3};
  }
`

export default GlobalStyles
