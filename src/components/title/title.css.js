import theme from '../../theme'
import getSpaceAfter from '../../utils/getSpaceAfter'

function getFontSize(
  { as, styling, mobileStyling, tabletStyling },
  mediaQuery,
) {
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

  if (!!mobileStyling && mediaQuery === 'mobile') {
    return styles[mobileStyling][mediaQuery]
  } else if (!!tabletStyling && mediaQuery === 'tablet') {
    return styles[tabletStyling][mediaQuery]
  } else if (styling) {
    return styles[styling][mediaQuery]
  } else {
    return styles[as][mediaQuery]
  }
}

function getSpaceBefore({ spaceBefore }) {
  if (spaceBefore === 'small') {
    return theme.unit(0.25)
  } else if (spaceBefore === 'medium') {
    return theme.unit(0.5)
  } else {
    return 0
  }
}

function getColor({ color }) {
  return theme.colors[color]
}

function getTextShadow({ shadow }) {
  if (shadow === 'dark') {
    return `2px 3px ${theme.colors.dark1}`
  } else if (shadow === 'light') {
    return `1px 2px ${theme.colors.light3}`
  }
  return 'none'
}

export const TitleUI = styled('span')`
  color: ${getColor};
  font-family: ${theme.typography.fonts['font-3']};
  font-size: ${(props) => getFontSize(props, 'desktop')};

  @media (min-width: ${theme.breakPointsAsPixel.mobile}) and (max-width: ${theme
      .breakPointsAsPixel.tablet}) {
    font-size: ${(props) => getFontSize(props, 'tablet')};
  }
  @media (max-width: ${theme.breakPointsAsPixel.mobile}) {
    font-size: ${(props) => getFontSize(props, 'mobile')};
  }

  font-style: ${(props) => props.fontStyle};
  font-weight: 700;
  line-height: 120%;
  margin: 0;
  margin-bottom: ${getSpaceAfter};
  margin-top: ${getSpaceBefore};
  padding: 0;
  text-shadow: ${getTextShadow};
`

export const AnchorUI = styled('div')`
  display: block;
  height: ${theme.layout.desktop.headerHeight};
  margin-top: -${theme.layout.desktop.headerHeight};
  visibility: hidden;
`

export const IconUI = styled('img')`
  width: ${theme.unit(1)};
  height: ${theme.unit(1)};
  margin-bottom: ${getSpaceAfter};
  margin-right: ${theme.unit(0.125)};
`
