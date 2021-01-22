import styled, { css, keyframes } from 'styled-components'
import theme from '../components/theme'

const pulseColor = (headerStyle) => {
  return keyframes`

    to {
        fill: ${
          headerStyle === 'light' ? theme.colors.white : theme.colors.black
        };
    }

    from {
        fill:  ${
          headerStyle === 'light' ? theme.colors.black : theme.colors.white
        };
    }
    `
}

export const AnimateFillUI = styled('path')`
  fill: ${({ headerStyle }) =>
    headerStyle === 'light' ? theme.colors.white : theme.colors.black};
  animation: ${({ isAnimated, headerStyle }) =>
    isAnimated
      ? css`
          ${pulseColor(headerStyle)} ${theme.transition.easing['ease-in-out']}
        `
      : 'none'};
`
