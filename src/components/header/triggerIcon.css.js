import theme from '../theme'

function makePixelValue(num) {
  return `${num}px`
}

const heightLine = 5
const heightIcon = 22.5
const translateY = heightIcon / 2
const translateY1 = makePixelValue(translateY)

function getDefaultStyles() {
  return `
  background: ${theme.colors.black};
  border-radius: (${makePixelValue(heightLine / 2)});
  display: block;
  height: ${makePixelValue(heightLine)};
  left: 0;
  position: absolute;
  width: 100%;
  transition: 250ms ease-in-out;
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
  right: 10px;
  top: 20px;
  cursor: pointer;
`

export const ContainerInnerUI = styled('div')`
  display: block;
  height: ${makePixelValue(heightIcon)};
  margin: (${makePixelValue(heightIcon * 2.5)}) auto ${heightIcon} auto;
  margin-top: 10px;
  margin-right: 10px;
  position: relative;
  width: 40px;
  z-index: 9999;
  cursor: pointer;
`
