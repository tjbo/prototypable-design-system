import config, { makePixelValue } from '../../config'

const getBgColor = ({ hasBgLightColor, hasBgDarkColor }) => {
  if (hasBgLightColor) {
    return `${config.colors.light1}`
  } else if (hasBgDarkColor) {
    return `${config.colors.dark3}`
  } else {
    return '#fff'
  }
}

const getInnerWidth = ({ innerWidth }) => {
  if (innerWidth === 'medium') {
    return '720px'
  } else if (innerWidth === 'small') {
    return '460px'
  } else {
    return `${config.unit(33)}`
  }
}

export const SectionWrapperUI = styled('section')`
  width: 100%;
  background-color: ${getBgColor};
  @media (max-width: ${makePixelValue(config.breakPoints.tablet)}) {
    max-width: calc(100% - 50px);
    padding: 25px;
  }
`

export const SectionUI = styled('div')`
  max-width: ${getInnerWidth};
  margin: 0 auto;
  padding: ${config.unit(1)} 0;
  text-align: ${({ textAlign }) => textAlign};
`
