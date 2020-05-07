import theme from '../../theme'
import { createGlobalStyle } from 'styled-components'
import ptSerifWoff2 from './fonts/pt-serif-v11-latin-regular.woff2'
import ptSerifWoff from './fonts/pt-serif-v11-latin-regular.woff'
import robotoMediumWoff from './fonts/roboto-v20-latin-500.woff'
import robotoMediumWoff2 from './fonts/roboto-v20-latin-500.woff2'
import robotoBoldWoff from './fonts/roboto-v20-latin-700.woff'
import robotoBoldWoff2 from './fonts/roboto-v20-latin-700.woff2'

const GlobalStyles = createGlobalStyle`

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



/* pt-serif-regular - latin */
@font-face {
  font-display: block;
  font-family: 'PT Serif';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: local('PT Serif'), local('PTSerif-Regular'),
       url(${ptSerifWoff2}) format('woff2'), /* Super Modern Browsers */
       url(${ptSerifWoff}) format('woff'), /* Modern Browsers */

}

/* roboto-700 - latin */
@font-face {
  font-display: block;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 500;
  font-display: swap;
  src: local('Roboto Medium'), local('Roboto-Medium'),
       url(${robotoMediumWoff2}) format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
       url(${robotoMediumWoff}) format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
}

/* roboto-700 - latin */
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-display: swap;
  src: local('Roboto Bold'), local('Roboto-Bold'),
       url(${robotoBoldWoff2}) format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
       url(${robotoBoldWoff}) format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
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
  margin-bottom: ${theme.unit(1)};
}

b {
  font-weight: bold;
}

ul {
  list-style: disc;
  padding-left: ${theme.unit(1)};
};
}

li {
  margin-bottom: ${theme.unit(0.25)};
  margin-left: ${theme.unit(0.75)};
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
  font-family: ${theme.typography.fonts['font-2']};
  padding: 0;
  margin: 0;
  margin-bottom: ${theme.unit(0.5)};
  line-height: 100%;
}

h1, .heading-1 {
  font-size: ${theme.typography.sizes.desktop.xxlg};
  font-weight: 500;

  @media (max-width: ${theme.breakPointsAsPixel.tablet}) {
   font-size: ${theme.typography.sizes.tablet.xxlg};
  }

  @media (max-width: ${theme.breakPointsAsPixel.mobile}) {
   font-size: ${theme.typography.sizes.mobile.xxlg};
  }
}

h2, .heading-2 {
  font-size: ${theme.typography.sizes.desktop.xlg};
  font-weight: 500;

  @media (max-width: ${theme.breakPointsAsPixel.tablet}) {
   font-size: ${theme.typography.sizes.tablet.xlg};
  }

  @media (max-width: ${theme.breakPointsAsPixel.mobile}) {
   font-size: ${theme.typography.sizes.mobile.xlg};
  }
}

h3, .heading-3 {
  font-size: ${theme.typography.sizes.desktop.lg};
  font-weight: 500;

  @media (max-width: ${theme.breakPointsAsPixel.tablet}) {
   font-size: ${theme.typography.sizes.tablet.lg};
  }

  @media (max-width: ${theme.breakPointsAsPixel.mobile}) {
   font-size: ${theme.typography.sizes.mobile.lg};
  }
}

h4, .heading-4 {
  font-size: ${theme.typography.sizes.desktop.md};;
  font-weight: 500;
  margin-bottom: ${theme.unit(0.3)};

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
  font-weight: 500;

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
  font-weight: 500;

  @media (max-width: ${theme.breakPointsAsPixel.tablet}) {
   font-size: ${theme.typography.sizes.tablet.xsm};
  }

  @media (max-width: ${theme.breakPointsAsPixel.mobile}) {
   font-size: ${theme.typography.sizes.mobile.xsm};
  }
}

h1 + h2, h1 + h2.heading-2 {
  margin-top: -${theme.unit(0.5)};
}

h2 + h4 {
  margin-top: -${theme.unit(0.5)};
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
blockquote {
  padding: ${theme.unit(0.75)};
  background-color: ${theme.colors['light-1']};
  border:  ${theme.border};
  margin:  ${`${theme.unit(1)} 0`};

  p:last-child, ul:last-child {
    margin-bottom: 0;
  }

}

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

/* Forms */
input, textarea {
    width: 100%;
    border: ${`1px solid ${theme.colors['dark-2']}`};
    font-size: ${theme.unit(0.5)};
    display: block;
    margin-bottom: ${theme.unit(0.75)};
    outline: none;
    padding: ${theme.unit(0.4)};
     &:focus {
      outline: none;
      box-shadow: 0 0 0 3px rgba(21, 156, 228, 0.4);
  }
  }

  textarea {
    height: ${theme.unit(3)};
    resize: none;
  }

button {
  background-color: ${theme.colors['dark-2']};
  border: 0;
  border-radius: 5px;
  color: #fff;
  cursor: pointer;
  display: block;
  font-family: ${theme.typography.fonts['font-2']};
  font-size: ${theme.unit(0.66)};
  font-weight: 700;
  height: ${theme.unit(1.75)};
  margin-top: ${theme.unit(0.66)};
  width: 100%;
  /* max-width: ${({ maxWidth }) => maxWidth}px; */
  background-image: linear-gradient(
    to bottom,
    #e52d27 0%,
    #b31217 41%,
    #e52d27 100%
  );

  border:1px solid #d02718;
  box-shadow: inset 0px 1px 0px 0px #f5978e;
}


`

export default GlobalStyles
