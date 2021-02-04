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
  textColor,
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
        <TextContainerUI
          display="flex"
          alignItems="center"
          flexDirection="column"
          color={textColor === 'dark' ? 'black' : 'white'}
          maxW="768px"
          textAlign="center"
        >
          {children}
        </TextContainerUI>
        {hasCta && (
          <Button
            justifyContent="center"
            colorScheme="red"
            isCta={true}
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
      <Box
        display={{ base: 'none', md: 'block' }}
        minHeight="50vh"
        maxHeight="50vh"
        width="100vw"
        overflow="hidden"
        position="absolute"
        top="0"
      >
        <Image
          height="50vh"
          srcSet={getSrcSets(theme.custom.images.sizes.jumbotron, image)}
          fit="cover"
          loading="eager"
          width="100vw"
        />
      </Box>
    </Box>
  )
}
