import config, { makePixelValue } from '../../config'

const getBgColor = ({ background }) => {
  if (background === 'light') {
    return `${config.colors.light1}`
  } else if (background === 'dark') {
    return `${config.colors.dark3}`
  } else {
    return '#fff'
  }
}

const getInnerWidth = ({ innerWidth }) => {
  if (innerWidth === 'medium') {
    return '720px'
  } else if (innerWidth === 'small') {
    return `${config.unit(20)}`
  } else {
    return `${config.unit(33)}`
  }
}

export const SectionWrapperUI = styled('section')`
  width: 100%;
  background-color: ${getBgColor};

  @media (max-width: ${config.breakPoints.tablet}) {
    max-width: calc(100% - ${config.unit(1)});
    padding: ${config.unit(0.5)};
  }
`

export const SectionUI = styled('div')`
  max-width: ${getInnerWidth};
  margin: 0 auto;
  padding: ${config.unit(1)} 0;
  text-align: ${({ textAlign }) => textAlign};
`
