import styled from 'styled-components'
import { Box } from '@chakra-ui/react'

export const BoxUI = styled(Box)`
  p:last-child {
    margin-bottom: 0;
  }
  p: first-child {
    margin-top: 0;
  }

  ul {
    margin-bottom: 0;
  }
`
