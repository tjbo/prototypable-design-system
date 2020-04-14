import { createGlobalStyle } from 'styled-components'
import config from '../../config'

const GlobalStyles = createGlobalStyle`
body {
  font-family: ${config.typography.fonts.font1};
  font-size: ${config.unit(0.53)};
  line-height: 1.5;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  color: ${config.colors.dark4};

  .is-modal-open {
    overflow: none;
  }
}

h1, h2, h3, h4 {
  font-family: ${config.typography.fonts.font2};
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

  table {
    border-collapse: collapse;
    border-left: ${config.border};
    border-right: ${config.border};
    margin: 0;
    max-width: 100%;

    /* @media (max-width: ${config.breakPoints.mobile}) {
      border: 0;
        display: block;
    } */


    tr {
      border-bottom: ${config.border};
      width: 100%;

      /* @media (max-width: ${config.breakPoints.mobile}) {
        max-width: 100%;
        padding: ${config.unit(0.5)};
        display: block;
        border-left: ${config.border};
     border-right: ${config.border};
    } */
    }
    tr:first-child {
      border-top: ${config.border};
    }
    td:first-child {
      font-weight: 700;
      /* min-width: 160px; */
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
}`

export default GlobalStyles
