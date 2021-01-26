import React from 'react'
import { TextContainerUI } from './jumbotron.css'
import Button from '../button'
import theme from '../theme'
import { Box, Flex, Image } from '@chakra-ui/react'
import getSrcSets from '../../prismicUtils/getSrcSets'

export default function ({
  callToActionText,
  callToActionHref,
  children,
  hasCta = true,
  image = null,
}) {
  return (
    <Box position="relative">
      <Flex
        minHeight="50vh"
        height="200px"
        backgroundSize="cover"
        display={{ base: 'none', md: 'flex' }}
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        alignSelf="center"
        justifySelf="center"
        position="relative"
        zIndex={1}
      >
        <TextContainerUI color="white" maxW="768px">
          {children}
        </TextContainerUI>
        {hasCta && (
          <Button
            justifyContent="center"
            colorScheme="red"
            to={callToActionHref}
            size="lg"
            maxW="250px"
            marginTop={6}
          >
            {callToActionText}
          </Button>
        )}
      </Flex>
      <Flex
        bg="blue.50"
        border="1px solid red"
        display={{ base: 'flex', md: 'none' }}
        flexDirection="column"
        padding={9}
        paddingTop={12}
        paddingBottom={12}
      >
        <TextContainerUI>{children}</TextContainerUI>
        {hasCta && (
          <Button
            colorScheme="red"
            to={callToActionHref}
            size="lg"
            maxW="250px"
            marginTop={6}
          >
            {callToActionText}
          </Button>
        )}
      </Flex>
      <Box display={{ base: 'none', md: 'block' }}>
        <Image
          srcSet={getSrcSets(theme.custom.images.sizes.jumbotron, image)}
          fit="cover"
          minHeight="50vh"
          position="absolute"
          top="0"
          loading="eager"
        />
      </Box>
    </Box>
  )
}
