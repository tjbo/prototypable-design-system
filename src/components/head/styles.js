import { createGlobalStyle } from 'styled-components'
import config from '../../config'

const GlobalStyles = createGlobalStyle`

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
  margin-block-start:0; margin-block-end:0; margin-inline-start:0; margin-inline-end:0;
padding-block-start:0; padding-block-end:0; padding-inline-start:0; padding-inline-end:0;

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


h1, h2, h3, h4 {
  font-family: ${config.typography.fonts.font2};
  padding: 0;
  margin: 0;
  line-height: 1.125;
  margin-bottom: ${config.unit(0.5)};
}

p, h1, h2, h3, h4, .heading1, .heading2, .heading3, .heading4, .heading5 {
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

.italic {
  font-style: italic;
}



      `

export default GlobalStyles
