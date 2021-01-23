import { Box, SimpleGrid } from '@chakra-ui/react'

function Grid({
  children,
  columns = [],
  minChildWidth = '300px',
  spacingX = 4,
  spacingY = 4,
  ...rest
}) {
  if (!!columns.length) {
    return (
      <SimpleGrid {...{ columns, spacingX, spacingY, ...rest }}>
        {children}
      </SimpleGrid>
    )
  }

  return (
    <SimpleGrid {...{ columns, minChildWidth, spacingX, spacingY, ...rest }}>
      {children}
    </SimpleGrid>
  )
}

Grid.Col = function ({ children, ...rest }) {
  return (
    <Box margin="0" padding="0" {...{ ...rest }}>
      {children}
    </Box>
  )
}

export default Grid
