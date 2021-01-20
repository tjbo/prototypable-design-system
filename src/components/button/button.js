import { Button, Box } from '@chakra-ui/react'
import { Link } from '@reach/router'

export default function (props) {
  const { justifyContent = 'flex-start', children, to, ...rest } = props

  if (to) {
    return (
      <Box d="flex" justifyContent={justifyContent} w="100%">
        <Link to={to}>
          <Button {...{ ...rest }}>{children}</Button>
        </Link>
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
