import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
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
  color: ${({ theme }) => theme.colors.dark4};
  display: flex;
  flex-direction: column;
  font-family: ${({ theme }) => theme.typography.fonts.font1};
  font-size: 1.125rem;
  line-height: 1.5;
  margin: 0;
  padding: 0;
  .is-modal-open {
    overflow: none;
  }
}

/* link styles */
a:active, a:visited, a:hover, a:link {
    color: ${({ theme }) => theme.colors.dark3};
}

/* list and paragraph styles */
p, ul {
  padding: 0;
  margin-bottom: ${({ theme }) => theme.unit(0.5)};
}

b {
  font-weight: bold;
}

ul {
  list-style: disc;
}

li {
  margin-bottom: ${({ theme }) => theme.unit(0.25)};
  margin-left: ${({ theme }) => theme.unit(0.75)};
}

/* heading styles */
h1, h2, h3, h4, h5, .heading-1, .heading-2, .heading-3, .heading-4, .heading-5, .heading-6 {
  font-family: ${({ theme }) => theme.typography.fonts.font2};
  padding: 0;
  margin: 0;
  margin-bottom: ${({ theme }) => theme.unit(0.5)};
}

h1, .heading-1 {
  font-size: ${({ theme }) => theme.typography.sizes.desktop.xxlg};
  font-weight: 600;

  @media (max-width: ${({ theme }) => theme.breakPoints.tablet}) {
   font-size: ${({ theme }) => theme.typography.sizes.tablet.xxlg};
  }

  @media (max-width: ${({ theme }) => theme.breakPoints.mobile}) {
   font-size: ${({ theme }) => theme.typography.sizes.mobile.xxlg};
  }
}

h2, .heading-2 {
  font-size: ${({ theme }) => theme.typography.sizes.desktop.xlg};
  font-weight: 500;

  @media (max-width: ${({ theme }) => theme.breakPoints.tablet}) {
   font-size: ${({ theme }) => theme.typography.sizes.tablet.xlg};
  }

  @media (max-width: ${({ theme }) => theme.breakPoints.mobile}) {
   font-size: ${({ theme }) => theme.typography.sizes.mobile.xlg};
  }
}

h3, .heading-3 {
  font-size: ${({ theme }) => theme.typography.sizes.desktop.lg};
  font-weight: 500;

  @media (max-width: ${({ theme }) => theme.breakPoints.tablet}) {
   font-size: ${({ theme }) => theme.typography.sizes.tablet.lg};
  }

  @media (max-width: ${({ theme }) => theme.breakPoints.mobile}) {
   font-size: ${({ theme }) => theme.typography.sizes.mobile.lg};
  }
}

h4, .heading-4 {
  font-size: ${({ theme }) => theme.typography.sizes.desktop.md};;
  font-weight: 500;
  margin-bottom: ${({ theme }) => theme.unit(0.3)};

  @media (max-width: ${({ theme }) => theme.breakPoints.tablet}) {
   font-size: ${({ theme }) => theme.typography.sizes.tablet.md};
  }

  @media (max-width: ${({ theme }) => theme.breakPoints.mobile}) {
   font-size: ${({ theme }) => theme.typography.sizes.mobile.md};
  }
}

h5, .heading-5 {
  font-family: ${({ theme }) => theme.typography.fonts.font1};
  font-size:  ${({ theme }) => theme.typography.sizes.desktop.sm};
  font-weight: bold;

  @media (max-width: ${({ theme }) => theme.breakPoints.tablet}) {
   font-size: ${({ theme }) => theme.typography.sizes.tablet.sm};
  }

  @media (max-width: ${({ theme }) => theme.breakPoints.mobile}) {
   font-size: ${({ theme }) => theme.typography.sizes.mobile.sm};
  }
}

h6, .heading-6 {
  font-family: ${({ theme }) => theme.typography.fonts.font1};
  font-size:  ${({ theme }) => theme.typography.sizes.desktop.xsm};
  font-weight: bold;

  @media (max-width: ${({ theme }) => theme.breakPoints.tablet}) {
   font-size: ${({ theme }) => theme.typography.sizes.tablet.xsm};
  }

  @media (max-width: ${({ theme }) => theme.breakPoints.mobile}) {
   font-size: ${({ theme }) => theme.typography.sizes.mobile.xsm};
  }
}


/* table styles */
  table {
    border-collapse: collapse;
    border-left: ${({ theme }) => theme.border};
    border-right: ${({ theme }) => theme.border};
    margin: 0;
    width: 100%;
    tr {
      border-bottom: ${({ theme }) => theme.border};
      width: 100%;
    }
    tr:first-child {
      border-top: ${({ theme }) => theme.border};
    }
    td:first-child {
      font-weight: 700;
    }

    td {
      background-color: #fff;
      padding: ${({ theme }) => theme.unit(0.25)} ${({ theme }) =>
  theme.unit(0.5)};
    }

    @media (max-width: ${({ theme }) => theme.breakPoints.mobile}) {
      tr {
      }

      td {
        padding: 0 ${({ theme }) => theme.unit(0.5)};
        display: block;
      }

      td:first-child {
        padding-top: ${({ theme }) => theme.unit(0.5)};
      }

      td:last-child {
        padding-bottom: ${({ theme }) => theme.unit(0.5)};
      }

    }
  }

/* makes a class for each color in theme */
  ${({ theme }) => {
    let colors = ''
    for (const color in theme.colors) {
      colors += `.${color}
         {
          color: ${theme.colors[color]};
         }
       `
    }
    return colors
  }}

/* makes a class for each font in theme */
${({ theme }) => {
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

.bold {
  font-weight: 700;
}


`

export default GlobalStyles
