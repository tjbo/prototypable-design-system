import theme from '../../theme'

function getFontSize({ as, styling }, mediaQuery) {
  const styles = {
    h1: {
      desktop: theme.typography.sizes.desktop.xxlg,
      tablet: theme.typography.sizes.tablet.xxlg,
      mobile: theme.typography.sizes.mobile.xxlg,
    },
    h2: {
      desktop: theme.typography.sizes.desktop.xlg,
      tablet: theme.typography.sizes.tablet.xlg,
      mobile: theme.typography.sizes.mobile.xlg,
    },
    h3: {
      desktop: theme.typography.sizes.desktop.lg,
      tablet: theme.typography.sizes.tablet.lg,
      mobile: theme.typography.sizes.mobile.lg,
    },
    h4: {
      desktop: theme.typography.sizes.desktop.md,
      tablet: theme.typography.sizes.tablet.md,
      mobile: theme.typography.sizes.mobile.md,
    },
    h5: {
      desktop: theme.typography.sizes.desktop.sm,
      tablet: theme.typography.sizes.tablet.sm,
      mobile: theme.typography.sizes.mobile.sm,
    },
    h6: {
      desktop: theme.typography.sizes.desktop.xsm,
      tablet: theme.typography.sizes.tablet.xsm,
      mobile: theme.typography.sizes.mobile.xsm,
    },
  }

  if (styling) {
    return styles[styling][mediaQuery]
  } else {
    return styles[as][mediaQuery]
  }
}

function getSpaceAfter({ spaceAfter }) {
  if (spaceAfter === 'none') {
    return 0
  } else if (spaceAfter === 'small') {
    return theme.unit(0.25)
  } else if (spaceAfter === 'medium') {
    return theme.unit(0.5)
  } else {
    return theme.unit(0.75)
  }
}

function getColor({ color }) {
  return theme.colors[color]
}

function getTextShadow({ shadow }) {
  if (shadow === 'dark') {
    return `1px 2px ${theme.colors.dark1}`
  }
  return 'none'
}

export const TitleUI = styled('span')`
  color: ${getColor};
  font-family: ${theme.typography.fonts['font-3']};
  font-size: ${(props) => getFontSize(props, 'desktop')};
  font-style: ${(props) => props.fontStyle};
  font-weight: 700;
  line-height: 120%;
  margin: 0;
  margin-bottom: ${getSpaceAfter};
  padding: 0;
  text-shadow: ${getTextShadow};
`

export const AnchorUI = styled('div')`
  display: block;
  height: ${theme.layout.desktop.headerHeight};
  margin-top: -${theme.layout.desktop.headerHeight};
  visibility: hidden;

  /* @media (min-width: ${theme.breakPointsAsPixel.mobile}) and (max-width: ${
  theme.breakPointsAsPixel.tablet
}) {
    height: calc(${theme.layout.tablet.headerHeight} + ${theme.unit(0.5)});
    margin-top: calc(${theme.layout.tablet.headerHeight} + ${theme.unit(0.5)});
  }
  @media (max-width: ${theme.breakPointsAsPixel.mobile}) {
    height: calc(${theme.layout.mobile.headerHeight} + ${theme.unit(0.5)});
    margin-top: calc(${theme.layout.mobile.headerHeight} + ${theme.unit(0.5)});
  } */
`

export const IconUI = styled('img')``
