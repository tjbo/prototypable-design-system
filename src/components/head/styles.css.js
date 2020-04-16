import { createGlobalStyle } from 'styled-components'
import config from '../../config'

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
  color: ${config.colors.dark4};
  display: flex;
  flex-direction: column;
  font-family: ${config.typography.fonts.font1};
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
    color: ${config.colors.dark3};
}

/* list and paragraph styles */
p, ul {
  padding: 0;
  margin-bottom: ${config.unit(0.5)};
}

b {
  font-weight: bold;
}

ul {
  list-style: disc;
}

li {
  margin-bottom: ${config.unit(0.25)};
  margin-left: ${config.unit(0.75)};
}

/* heading styles */
h1, h2, h3, h4, h5, .heading1, .heading2, .heading3, .heading4, .heading5, .heading6 {
  font-family: ${config.typography.fonts.font2};
  padding: 0;
  margin: 0;
  margin-bottom: ${config.unit(0.5)};
}

h1, .heading1 {
  font-size: ${config.typography.sizes.desktop.xxlg};
  font-weight: 600;

  @media (max-width: ${config.breakPoints.tablet}) {
   font-size: ${config.typography.sizes.tablet.xxlg};
  }

  @media (max-width: ${config.breakPoints.mobile}) {
   font-size: ${config.typography.sizes.mobile.xxlg};
  }
}

h2, .heading2 {
  font-size: ${config.typography.sizes.desktop.xlg};
  font-weight: 500;

  @media (max-width: ${config.breakPoints.tablet}) {
   font-size: ${config.typography.sizes.tablet.xlg};
  }

  @media (max-width: ${config.breakPoints.mobile}) {
   font-size: ${config.typography.sizes.mobile.xlg};
  }
}

h3, .heading3 {
  font-size: ${config.typography.sizes.desktop.lg};
  font-weight: 500;

  @media (max-width: ${config.breakPoints.tablet}) {
   font-size: ${config.typography.sizes.tablet.lg};
  }

  @media (max-width: ${config.breakPoints.mobile}) {
   font-size: ${config.typography.sizes.mobile.lg};
  }
}

h4, .heading4 {
  font-size: ${config.typography.sizes.desktop.md};;
  font-weight: 500;
  margin-bottom: ${config.unit(0.3)};

  @media (max-width: ${config.breakPoints.tablet}) {
   font-size: ${config.typography.sizes.tablet.md};
  }

  @media (max-width: ${config.breakPoints.mobile}) {
   font-size: ${config.typography.sizes.mobile.md};
  }
}

h5, .heading5 {
  font-family: ${config.typography.fonts.font1};
  font-size:  ${config.typography.sizes.desktop.sm};
  font-weight: bold;

  @media (max-width: ${config.breakPoints.tablet}) {
   font-size: ${config.typography.sizes.tablet.sm};
  }

  @media (max-width: ${config.breakPoints.mobile}) {
   font-size: ${config.typography.sizes.mobile.sm};
  }
}

h6, .heading6 {
  font-family: ${config.typography.fonts.font1};
  font-size:  ${config.typography.sizes.desktop.xsm};
  font-weight: bold;

  @media (max-width: ${config.breakPoints.tablet}) {
   font-size: ${config.typography.sizes.tablet.xsm};
  }

  @media (max-width: ${config.breakPoints.mobile}) {
   font-size: ${config.typography.sizes.mobile.xsm};
  }
}


/* table styles */
  table {
    border-collapse: collapse;
    border-left: ${config.border};
    border-right: ${config.border};
    margin: 0;
    width: 100%;
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

/* makes a class for each color in config */
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

/* makes a class for each font in config */
${(props) => {
  let fonts = ''
  for (const font in config.typography.fonts) {
    fonts += `.${font}
         {
          font-family:${config.typography.fonts[font]};
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

/* random box styles */
.box-style-1 {
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  height: 100%;
  border: ${config.border};
  padding: ${config.unit(0.25)} ${config.unit(0.5)};

  .title {
    font-weight: bold;
    flex-grow: 0;
  }

  ul {
    margin: 0;
  }

  @media (max-width: ${config.breakPoints.tablet}) {
    ul {
      column-count: 3;
    }
  }

  @media (max-width: 800px) {
    ul {
      column-count: 2;
    }
  }

  @media (max-width: ${config.breakPoints.mobile}) {
    ul {
      column-count: 1;
    }
  }

}

.border {
  border: ${config.border};
}


`

export default GlobalStyles
