import { createGlobalStyle } from 'styled-components'
import config from '../../config'

const GlobalStyles = createGlobalStyle`
body {
  color: ${config.colors.dark4};
  display: flex;
  flex-direction: column;
  font-family: ${config.typography.fonts.font1};
  font-size: ${config.unit(0.53)};
  line-height: 1.5;
  margin: 0;
  padding: 0;
  .is-modal-open {
    overflow: none;
  }
}


h1, h2, h3, h4 {
  font-family: ${config.typography.fonts.font2};
  padding: 0;
  margin: 0;
}

h1, .heading1 {
  font-size: ${config.typography.sizes.lg};
  font-weight: 600;
  margin: 0;
}

h2, .heading2 {
  font-size: ${config.typography.sizes.lg};
  font-weight: 500;
  line-height: 1;
  margin-bottom: ${config.unit(0.75)};
}

h3, .heading3 {
  font-size: ${config.unit(0.9)};
  font-weight: 400;
}

h4, .heading4 {
  font-size: ${config.unit(0.75)};
  font-weight: 500;
}

h5, .heading4 {
  font-size: ${config.unit(0.6)};
}

p, ul {
  padding: 0;
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

  table {
    border-collapse: collapse;
    border-left: ${config.border};
    border-right: ${config.border};
    margin: 0;
    max-width: 100%;
    tr {
      border-bottom: ${config.border};
      width: 100%;
    }
    tr:first-child {
      border-top: ${config.border};
    }
    td:first-child {
      font-weight: 700;
    }

    td {
      background-color: #fff;
      padding: ${config.unit(0.25)} ${config.unit(0.5)};
    }

    @media (max-width: ${config.breakPoints.mobile}) {
      tr {
      }

      td {
        padding: 0 ${config.unit(0.5)};
        display: block;
      }

      td:first-child {
        padding-top: ${config.unit(0.5)};
      }

      td:last-child {
        padding-bottom: ${config.unit(0.5)};
      }

    }
  }

  ${(props) => {
    let colors = ''
    for (const color in config.colors) {
      colors += `.${color}
         {
          color:${config.colors[color]};
         }
       `
    }
    return colors
  }}

      `

export default GlobalStyles
