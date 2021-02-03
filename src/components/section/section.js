import { Box, Flex } from '@chakra-ui/react'
import short from 'short-uuid'

const getBgColor = (background) => {
  if (background === 'transparent') {
    return 'transparent'
  } else if (background === 'light') {
    return 'gray.50'
  } else if (background === 'dark') {
    return 'gray.100'
  } else {
    return 'white'
  }
}

const getInnerWidth = (innerWidth) => {
  if (innerWidth === 'small') {
    return '30em'
  } else if (innerWidth === 'medium') {
    return '36em'
  } else if (innerWidth === 'medium-plus') {
    return '40em'
  } else if (innerWidth === 'huge') {
    return '100%'
  } else {
    return '62em'
  }
}

function Section({
  children = [],
  textAlign = 'left',
  background = 'default',
  inner_width = 'big',
  pt = 9,
  pb = 9,
  pl = 6,
  pr = 6,
}) {
  return (
    <Flex
      {...{
        as: 'section',
        bg: getBgColor(background),
        key: short.generate(),
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
          width: '100%',
          maxWidth: getInnerWidth(inner_width),
        }}
      >
        {children}
      </Box>
    </Flex>
  )
}

export default Section
