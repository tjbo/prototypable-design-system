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
  font-weight: 700;
  font-style: normal;
  unicode-range: U+000-5FF;
  src: local('Roboto Bold'), local('Roboto-Bold'),
   url('/fonts/roboto-v20-latin-700.woff2') format('woff2'),
   url('/fonts/roboto-v20-latin-700.woff') format('woff');


@font-face {
  font-family: 'Roboto';
  font-weight: 400;
  font-style: normal;
  unicode-range: U+000-5FF;
  src: local('Roboto'), local('Roboto-Regular'),
  url('/fonts/roboto-v20-latin-regular.woff2')
  format('woff2'),
  url('/fonts/roboto-v20-latin-regular.woff')
  format('woff');
 }

/**
 * These values will not show up in content, but can be
 * queried by JavaScript to know which breakpoint is active.
 * Add or remove as many breakpoints as you like.
 */
body:before {
  content: "desktop";
  display: none;
}


@media (max-width: ${theme.breakPointsAsPixel.tablet}) {
  body:before {
    content: "tablet";
  }
}

@media (max-width: ${theme.breakPointsAsPixel.mobile}) {
  body:before {
    content: "mobile";
  }
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
  color: ${theme.colors['dark-4']};
  display: flex;
  flex-direction: column;
  font-family: ${theme.typography.fonts['font-1']};
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
  color: ${theme.colors['dark-3']};
  text-decoration: none;
}

a:link {
  text-decoration: none;
  color: ${theme.colors['dark-3']};
}

a:hover {
  color: ${theme.colors['dark-3']};
  text-decoration: underline;
}

a:visited {
  color: ${theme.colors['dark-3']};
  text-decoration: none;
}

/* list and paragraph styles */
p, ul, code {
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

li {
  margin-bottom: ${theme.unit(0.75)};
}

code {
  box-sizing: border-box;
  background-color:  ${theme.colors['light-1']};
  display: block;
  padding: ${theme.unit(0.5)};
  color: ${theme.colors['dark-1']};
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

/* heading styles */
h1, h2, h3, h4, h5, .heading-1, .heading-2, .heading-3, .heading-4, .heading-5, .heading-6 {
  font-family: ${theme.typography.fonts['font-3']};
  padding: 0;
  margin: 0;
  font-weight: 700;
  margin-bottom: ${theme.unit(0.75)};
  line-height: 120%;
}

h1, .heading-1 {
  font-size: ${theme.typography.sizes.desktop.xxlg};

  @media (max-width: ${theme.breakPointsAsPixel.tablet}) {
   font-size: ${theme.typography.sizes.tablet.xxlg};
  }

  @media (max-width: ${theme.breakPointsAsPixel.mobile}) {
   font-size: ${theme.typography.sizes.mobile.xxlg};
  }
}

h2, .heading-2 {
  font-size: ${theme.typography.sizes.desktop.xlg};

  @media (max-width: ${theme.breakPointsAsPixel.tablet}) {
   font-size: ${theme.typography.sizes.tablet.xlg};
  }

  @media (max-width: ${theme.breakPointsAsPixel.mobile}) {
   font-size: ${theme.typography.sizes.mobile.xlg};
  }
}

h3, .heading-3 {
  font-style: normal;
  font-size: ${theme.typography.sizes.desktop.lg};

  @media (max-width: ${theme.breakPointsAsPixel.tablet}) {
   font-size: ${theme.typography.sizes.tablet.lg};
  }

  @media (max-width: ${theme.breakPointsAsPixel.mobile}) {
   font-size: ${theme.typography.sizes.mobile.lg};
  }
}

h4, .heading-4 {
  font-size: ${theme.typography.sizes.desktop.md};;

  @media (max-width: ${theme.breakPointsAsPixel.tablet}) {
   font-size: ${theme.typography.sizes.tablet.md};
  }

  @media (max-width: ${theme.breakPointsAsPixel.mobile}) {
   font-size: ${theme.typography.sizes.mobile.md};
  }
}

h5, .heading-5 {
  font-family: ${theme.typography.fonts['font-1']};
  font-size:  ${theme.typography.sizes.desktop.sm};

  @media (max-width: ${theme.breakPointsAsPixel.tablet}) {
   font-size: ${theme.typography.sizes.tablet.sm};
  }

  @media (max-width: ${theme.breakPointsAsPixel.mobile}) {
   font-size: ${theme.typography.sizes.mobile.sm};
  }
}

h6, .heading-6 {
  font-family: ${theme.typography.fonts['font-1']};
  font-size:  ${theme.typography.sizes.desktop.xsm};

  @media (max-width: ${theme.breakPointsAsPixel.tablet}) {
   font-size: ${theme.typography.sizes.tablet.xsm};
  }

  @media (max-width: ${theme.breakPointsAsPixel.mobile}) {
   font-size: ${theme.typography.sizes.mobile.xsm};
  }
}

h1 + h2, h1 + h2.heading-2 {
  margin-top: -${theme.unit(0.75)};
}

h2 + h4 {
  margin-top: -${theme.unit(0.75)};
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
      background-color: ${theme.colors['light-1']};
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


/* makes a class for each color in theme */
  ${() => {
    let colors = ''
    for (const color in theme.colors) {
      colors += `.${color}
         {
          color: ${theme.colors[color]};
         }
       `
      colors += `a.${color}:active, a.${color}:link, a.${color}:hover, a.${color}:visited
         {
          color: ${theme.colors[color]};
         }
       `
    }
    return colors
  }}

/* makes a class for each font in theme */
${() => {
  let fonts = ''
  for (const font in theme.typography.fonts) {
    fonts += `.${font}
         {
          font-family: ${theme.typography.fonts[font]};
         }
       `
  }
  return fonts
}}

/* random text styles */

.italic {
  font-style: italic;
}

.text-shadow-dark {
text-shadow: 1px 2px #000
}

.line-height-1 {
  line-height: 1;
}

.line-height-1-2-0 {
  line-height: 1;
}

.bold {
  font-weight: 700;
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
