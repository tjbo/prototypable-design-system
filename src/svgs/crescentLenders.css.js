import styled, { css, keyframes } from 'styled-components'

const pulseColor = (style) => {
  return keyframes`

    to {
        fill: ${style === 'light' ? '#fff ' : '#000'};
    }

    from {
        fill:  ${style === 'light' ? '#000' : '#fff'};
    }
    `
}

export const AnimateFillUI = styled('path')`
  fill: ${({ style }) => (style === 'light' ? '#fff' : '#000')};
  animation: ${({ animate, style }) =>
    animate
      ? css`
          ${pulseColor(style)} 500ms linear 1
        `
      : 'none'};
`
