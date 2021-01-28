import { Box, Flex } from '@chakra-ui/react'
import theme from '../theme'

const getBgColor = ({ background }) => {
  if (background === 'transparent') {
    return 'transparent'
  } else if (background === 'light') {
    return 'red.800'
  } else if (background === 'dark') {
    return 'gray.100'
  } else {
    return 'white'
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

function Section({
  children = [],
  textAlign = 'left',
  background = 'default',
  inner_width = 'big',
  pt = 6,
  pb = 6,
  pl = 6,
  pr = 6,
}) {
  console.log('container', background)
  return (
    <Flex
      {...{
        as: 'section',
        bg: getBgColor(background),
        justifyContent: 'center',
        width: '100%',
      }}
    >
      <Box
        {...{
          pt,
          pb,
          pl,
          pr,
          textAlign,
          maxWidth: getInnerWidth(background),
          width: '100%',
        }}
      >
        {children}
      </Box>
    </Flex>
  )
}

export default Section
