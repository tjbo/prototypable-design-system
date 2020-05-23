import styled from 'styled-components'
import theme from '../../../theme'

export const ContainerUI = styled('div')`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
`

export const BreakUI = styled('div')`
  @media (min-width: ${theme.breakPointsAsPixel.mobile}) and (max-width: ${theme
      .breakPointsAsPixel.tablet}) {
    flex-basis: 100%;
    height: 4vh;
  }
`
