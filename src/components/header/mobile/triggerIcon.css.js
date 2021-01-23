import theme from '../../theme'
import { css, keyframes } from 'styled-components'

const heightLine = 5
const heightIcon = 22.5
const translateY = heightIcon / 2
const translateY1 = translateY + 'px'

const pulseColor = ({ headerStyle, isAnimated }) => {
  const _keyframes = keyframes`
    to {
        background:${
          headerStyle === 'light' ? theme.colors.white : theme.colors.black
        };
    }

    from {
        background:  ${
          headerStyle === 'light' ? theme.colors.black : theme.colors.white
        };
    }
    `

  return isAnimated
    ? css`
        ${_keyframes} ${theme.transition.easing['ease-in-out']}
      `
    : 'none'
}

function getDefaultStyles({ isAnimated, headerStyle, isOpen }) {
  return `
  background: ${
    headerStyle === 'light' ? theme.colors.white : theme.colors.black
  };

  border-radius: (${heightLine / 2}px);
  display: block;
  height: ${heightLine}px;
  left: 0;
  position: absolute;
  transition: transform ${theme.transition.easing['ease-in-out']};
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
  animation: ${pulseColor};
`

export const Line2UI = styled('span')`
  ${getDefaultStyles};
  top: 50%;
  opacity: ${(props) => {
    return props.isOpen ? `0` : '1'
  }};
  animation: ${pulseColor};
`

export const Line3UI = styled('span')`
  ${getDefaultStyles};
  top: 100%;
  transform: ${(props) => {
    return props.isOpen
      ? `translateY(-${translateY1}) rotate(-45deg) translateX(0)`
      : 'rotate(0deg)'
  }};
  animation: ${pulseColor};
`

export const ContainerUI = styled('div')`
  position: absolute;
  padding: ${theme.space[2]};
  right: 0;
  top: 0;
  cursor: pointer;
`

export const ContainerInnerUI = styled('div')`
  display: block;
  height: ${heightIcon}px;
  margin: (${heightIcon * 2.5}px) auto ${heightIcon} auto;
  margin-top: ${theme.space[4]};
  margin-right: ${theme.space[4]};
  position: relative;
  width: ${theme.space[9]};
  z-index: 9999;
  cursor: pointer;
`
