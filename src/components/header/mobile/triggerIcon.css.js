import makePixelValue from '../../../utils/makePixelValue'
import theme from '../../../theme'
import { css, keyframes } from 'styled-components'

const heightLine = 5
const heightIcon = 25
const translateY = heightIcon / 2
const translateY1 = makePixelValue(translateY)

const pulseColor = (style) => {
  return keyframes`

    to {
        background: ${
          style === 'light' ? theme.colors.white : theme.colors.black
        };
    }

    from {
        background:  ${
          style === 'light' ? theme.colors.black : theme.colors.white
        };
    }
    `
}

function getDefaultStyles({ isAnimated, style, isOpen }) {
  const _style = isOpen ? 'dark' : style

  return `
  background: ${_style === 'light' || isOpen ? '#fff ' : theme.colors.black};
  animation: ${({ isAnimated, isOpen }) =>
    isAnimated
      ? css`
          ${pulseColor(_style)} 500ms linear 1
        `
      : 'none'};
  border-radius: (${makePixelValue(heightLine / 2)});
  display: block;
  height: ${makePixelValue(heightLine)};
  left: 0;
  position: absolute;
  transition: transform 500ms ease;
  width: 100%;
`
}

export const Line1UI = styled('span')`
  ${getDefaultStyles};
  top: 0;
  transform: ${(props) => {
    return props.isOpen
      ? `translateY(${translateY1}) rotate(45deg) translateX(0)`
      : 'rotate(0deg)'
  }};
`

export const Line2UI = styled('span')`
  ${getDefaultStyles};
  top: 50%;
  opacity: ${(props) => {
    return props.isOpen ? `0` : '1'
  }};
`

export const Line3UI = styled('span')`
  ${getDefaultStyles};
  top: 100%;
  transform: ${(props) => {
    return props.isOpen
      ? `translateY(-${translateY1}) rotate(-45deg) translateX(0)`
      : 'rotate(0deg)'
  }};
`

export const ContainerUI = styled('div')`
  position: absolute;
  padding: ${theme.unit(0.5)};
  right: 0;
  top: 0;
  cursor: pointer;
`

export const ContainerInnerUI = styled('div')`
  display: block;
  height: ${makePixelValue(heightIcon)};
  margin: (${makePixelValue(heightIcon * 2.5)}) auto ${heightIcon} auto;
  margin-top: ${theme.unit(0.125)};
  position: relative;
  width: ${theme.unit(1.5)};
  z-index: 9999;
  cursor: pointer;
`
