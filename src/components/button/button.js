import { Button, Box } from '@chakra-ui/react'
import { Link, navigate } from '@reach/router'

export default function (props) {
  const { justifyContent = 'flex-start', children, isCta, to, ...rest } = props
  if (to) {
    return (
      <Box d="flex" justifyContent={justifyContent} w="100%">
        <Button
          {...{ ...rest }}
          onClick={() => {
            isCta && localStorage.setItem('cta', children)
            navigate(to)
          }}
        >
          {children}
        </Button>
      </Box>
    )
  } else {
    return (
      <Box d="flex" justifyContent={justifyContent} w="100%">
        <Button {...{ ...rest }}>{children}</Button>
      </Box>
    )
  }
}
