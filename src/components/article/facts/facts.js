import { Box } from '@chakra-ui/react'

export default function ({ children, title }) {
  return (
    <Box bg="blackAlpha.50" p={3} pt={6}>
      <h3>{title}</h3>
      <Box>{children}</Box>
    </Box>
  )
}
