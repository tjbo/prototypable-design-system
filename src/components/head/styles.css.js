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
  font-weight: 500;
  display: flex;
  flex-direction: column;
  font-family: ${theme.typography.fonts.font1};
  font-size: 1.15rem;
  line-height: 1.55;
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
  font-weight: 700;
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

  @media (max-width: ${theme.breakPointsAsPixel.tablet}) {
   font-size: ${theme.typography.sizes.tablet.md};
  }

  @media (max-width: ${theme.breakPointsAsPixel.mobile}) {
   font-size: ${theme.typography.sizes.mobile.md};
  }
}

h1,h2,h3,h4,h5,h6 {
  font-family: ${theme.typography.fonts.font1};
  font-weight: 700;
  line-height: 120%;
  padding: 0;
  margin: 0;
  margin-bottom: ${theme.unit(0.5)};
}

h3 + h4, h2 + h4 {
  margin-top: -${theme.unit(0.5)};
}



h1 {
   font-size: ${theme.typography.sizes.desktop.xxlg};
  @media (min-width: ${theme.breakPointsAsPixel.mobile}) and (max-width: ${
  theme.breakPointsAsPixel.tablet
}) {
    font-size: ${theme.typography.sizes.tablet.xxlg};
  }

  @media (max-width: ${theme.breakPointsAsPixel.mobile}) {
    font-size: ${theme.typography.sizes.mobile.xxlg};
  }
}

  h2 {
   font-size: ${theme.typography.sizes.desktop.xlg};

  @media (min-width: ${theme.breakPointsAsPixel.mobile}) and (max-width: ${
  theme.breakPointsAsPixel.tablet
}) {
    font-size: ${theme.typography.sizes.tablet.xlg};
  }

  @media (max-width: ${theme.breakPointsAsPixel.mobile}) {
    font-size: ${theme.typography.sizes.mobile.xlg};
  }
  }

  h3 {
   font-size: ${theme.typography.sizes.desktop.lg};

  @media (min-width: ${theme.breakPointsAsPixel.mobile}) and (max-width: ${
  theme.breakPointsAsPixel.tablet
}) {
    font-size: ${theme.typography.sizes.tablet.lg};
  }

  @media (max-width: ${theme.breakPointsAsPixel.mobile}) {
    font-size: ${theme.typography.sizes.mobile.lg};
  }
  }

  h4 {
   font-size: ${theme.typography.sizes.desktop.md};

  @media (min-width: ${theme.breakPointsAsPixel.mobile}) and (max-width: ${
  theme.breakPointsAsPixel.tablet
}) {
    font-size: ${theme.typography.sizes.tablet.md};
  }

  @media (max-width: ${theme.breakPointsAsPixel.mobile}) {
    font-size: ${theme.typography.sizes.mobile.md};
  }
  }

  h5 {
   font-size: ${theme.typography.sizes.desktop.sm};

  @media (min-width: ${theme.breakPointsAsPixel.mobile}) and (max-width: ${
  theme.breakPointsAsPixel.tablet
}) {
    font-size: ${theme.typography.sizes.tablet.sm};
  }

  @media (max-width: ${theme.breakPointsAsPixel.mobile}) {
    font-size: ${theme.typography.sizes.mobile.sm};
  }
  }

  h6 {
   font-size: ${theme.typography.sizes.desktop.xsm};

  @media (min-width: ${theme.breakPointsAsPixel.mobile}) and (max-width: ${
  theme.breakPointsAsPixel.tablet
}) {
    font-size: ${theme.typography.sizes.tablet.xsm};
  }

  @media (max-width: ${theme.breakPointsAsPixel.mobile}) {
    font-size: ${theme.typography.sizes.mobile.xsm};
  }
  }

.italic {
  font-style: italic;
}
`

export default GlobalStyles
