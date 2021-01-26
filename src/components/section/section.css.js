import theme from '../theme'
import { Box } from '@chakra-ui/react'

const getBgColor = ({ background }) => {
  if (background === 'transparent') {
    return 'transparent'
  } else if (background === 'light') {
    return theme.colors.gray['50']
  } else if (background === 'dark') {
    return theme.colors.blue['700']
  } else {
    return theme.colors.white
  }
}

const getInnerWidth = ({ innerWidth }) => {
  if (innerWidth === 'medium') {
    return theme.breakpoints[3]
  } else if (innerWidth === 'small') {
    return theme.breakpoints[1]
  } else if (innerWidth === 'medium-plus') {
    return theme.breakpoints[4]
  } else if (innerWidth === 'huge') {
    return theme.breakpoints[6]
  } else {
    return theme.breakpoints[3]
  }
}

export const SectionWrapperUI = styled('section')`
  box-sizing: border-box;
  display: flex;
  width: 100%;
  background-color: ${getBgColor};
  justify-content: center;
  align-items: center;
`

export const SectionUI = styled(Box)`
  box-sizing: border-box;
  max-width: ${getInnerWidth};
  width: ${getInnerWidth};
  position: relative;
  margin: 0 auto;
  padding: ${theme.space[6]} ${theme.space[9]};
  width: 100%;
  text-align: ${({ textAlign }) => textAlign};
`

export const SectionInnerUI = styled('div')`
  width: 100%;
`
