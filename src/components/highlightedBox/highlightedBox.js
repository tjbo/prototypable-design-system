import { Box } from '@chakra-ui/react'

function HighlightedBox({ children, mb = 6 }) {
  return (
    <Box as="blockquote" bg="blue.50" p={6} mb={mb}>
      {children}
    </Box>
  )
}

export default HighlightedBox
