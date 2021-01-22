import { Box, SimpleGrid } from '@chakra-ui/react'

function Grid({
  children,
  minChildWidth = '250px',
  spacingX = 4,
  spacingY = 4,
}) {
  return (
    <SimpleGrid {...{ minChildWidth, spacingX, spacingY }}>
      {children}
    </SimpleGrid>
  )
}

Grid.Col = function ({ children }) {
  return <Box>{children}</Box>
}

export default Grid
