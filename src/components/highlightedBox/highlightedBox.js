import { BoxUI } from './highlightedBox.css'
import { Box } from '@chakra-ui/react'

function HighlightedBox({ children, mb = 6 }) {
  return (
    <Box as="blockquote" borderRadius="md" bg="blue.50" p={6} mb={mb}>
      <BoxUI>{children}</BoxUI>
    </Box>
  )
}

export default HighlightedBox
