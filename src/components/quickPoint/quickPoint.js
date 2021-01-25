import React from 'react'
import Icon from '../icon'
import { Box, SimpleGrid, Stack, Text } from '@chakra-ui/react'

function QuickPoint(props) {
  const { icon, children } = props

  return (
    <SimpleGrid
      display={{ base: 'flex', md: 'grid' }}
      flexDirection="column"
      alignItems="center"
      templateColumns="2fr 8fr"
      spacingX={[1, 3]}
    >
      <Box>
        <Icon name={icon} boxSize={24} />
      </Box>
      <Box
        maxWidth={{ base: '400px', md: '100%' }}
        textAlign={{ base: 'center', md: 'left' }}
        marginTop={{ base: 6, md: 0 }}
      >
        <Text fontSize={{ base: 'xl' }} fontWeight="400">
          {children}
        </Text>
      </Box>
    </SimpleGrid>
  )
}

export default QuickPoint
