import styled from 'styled-components'
import { Box } from '@chakra-ui/react'
import theme from '../theme'

export const TextContainerUI = styled(Box)`
  h1 {
    margin: 0;
  }
  p {
    margin: 0;
    font-weight: bold;
    font-size: ${theme.fontSizes['xl']};
    margin-top: 0.25em;
  }
`
