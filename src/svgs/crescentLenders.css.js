import styled, { css, keyframes } from 'styled-components'

const pulseColor = (_style) => {
  return keyframes`

    to {
        fill: ${_style === 'light' ? '#fff ' : '#000'};
    }

    from {
        fill:  ${_style === 'light' ? '#000' : '#fff'};
    }
    `
}

export const AnimateFillUI = styled('path')`
  fill: ${({ style }) => (style === 'light' ? '#fff' : '#000')};
  animation: ${({ animate, style }) =>
    animate
      ? css`
          ${pulseColor(style)} 1s linear 1
        `
      : 'none'};
`
