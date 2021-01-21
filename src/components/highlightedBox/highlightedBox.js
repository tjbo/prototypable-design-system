import { Box } from '@chakra-ui/react'

function HighlightedBox({ children }) {
  return (
    <Box as="blockquote" bg="blue.50" p={6} mb={6}>
      {children}
    </Box>
  )
}

export default HighlightedBox
