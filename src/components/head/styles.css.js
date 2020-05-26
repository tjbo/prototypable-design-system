import theme from '../../theme'
import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
html, body {
  height: 100%;
}

body {
  display: flex;
  flex-direction: column;
  height: 100%;
}

#root {
  height: 100%;
}

@font-face {
  font-family: 'Roboto';
  font-weight: 500;
  font-style: normal;
  src: url('/fonts/roboto-v20-latin-500.woff2') format('woff2'),
   url('/fonts/roboto-v20-latin-500.woff') format('woff');
}

@font-face {
  font-family: 'Roboto';
  font-weight: 400;
  font-style: normal;
  unicode-range: U+000-5FF;
  src: url('/fonts/roboto-v20-latin-regular.woff2') format('woff2'),
  url('/fonts/roboto-v20-latin-regular.woff') format('woff');
 }

/* css reset */
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}

/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}

blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}

html {
  font-size: 100%;
}

body {
  color: ${theme.colors.dark4};
  display: flex;
  flex-direction: column;
  font-family: ${theme.typography.fonts.font1};
  font-size: 1.125rem;
  line-height: 1.5;
  margin: 0;
  overflow: auto;
  padding: 0;
  .is-modal-open {
    overflow: none;
  }
}

img {
  max-width: 100%;
  height: auto;
}

iframe {
  max-width: 100%;
}


/* link styles */
a:active {
  color: ${theme.colors.dark3};
  text-decoration: none;
}

a:link {
  text-decoration: none;
  color: ${theme.colors.dark3};
}

a:hover {
  color: ${theme.colors.dark3};
  text-decoration: underline;
}

a:visited {
  color: ${theme.colors.dark3};
  text-decoration: none;
}

/* list and paragraph styles */
p, ul, ol, code {
  padding: 0;
  margin-bottom: ${theme.unit(0.75)};
}

b {
  font-weight: bold;
}

ul {
  list-style: disc;
  margin-left: ${theme.unit(1)};
  margin-right: ${theme.unit(0.5)};
}

ol {
  margin-left: ${theme.unit(1)};
  margin-right: ${theme.unit(0.5)};
}

li {
  margin-bottom: ${theme.unit(0.75)};
}

code {
  box-sizing: border-box;
  background-color:  ${theme.colors.light1};
  display: block;
  padding: ${theme.unit(0.5)};
  color: ${theme.colors.dark1};
  width: 100%;
  font-family: 'Courier New', Courier, monospace;
  white-space: normal;

  font-size: ${theme.typography.sizes.desktop.sm};


  @media (max-width: ${theme.breakPointsAsPixel.tablet}) {
   font-size: ${theme.typography.sizes.tablet.sm};
  }

  @media (max-width: ${theme.breakPointsAsPixel.mobile}) {
   font-size: ${theme.typography.sizes.mobile.xsm};
  }
}


/* table styles */
  table {
    border-collapse: collapse;
    border-left: ${theme.border};
    border-right: ${theme.border};
    margin: 0;
    width: 100%;
  margin-bottom: ${theme.unit(1)};
    tr {
      border-bottom: ${theme.border};
      width: 100%;
    }
    tr:first-child {
      border-top: ${theme.border};
    }
    td:first-child {
      font-weight: 700;
    }

    td, th {
      background-color: #fff;
      padding: ${theme.unit(0.25)} ${theme.unit(0.5)};
    }

    th {
      background-color: ${theme.colors.light1};
    }
  }


  @media (max-width: ${theme.breakPointsAsPixel.mobile}) {
    table.responsive-collapse {

    table, thead, tbody, th, td, tr {
		display: block;
	}

  thead tr {
		position: absolute;
		top: -9999px;
		left: -9999px;
	}
    }

  table.n-plus-2 {
  td:nth-child(n+2) {
    display: inline-block
	}
  }
  }


.lead {
  font-size: ${theme.typography.sizes.desktop.md};
  line-height: 130%;
  font-family: ${theme.typography.fonts['font-3']};

  @media (max-width: ${theme.breakPointsAsPixel.tablet}) {
   font-size: ${theme.typography.sizes.tablet.md};
  }

  @media (max-width: ${theme.breakPointsAsPixel.mobile}) {
   font-size: ${theme.typography.sizes.mobile.md};
  }
}
`

export default GlobalStyles
