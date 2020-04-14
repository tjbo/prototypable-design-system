import config, { makePixelValue } from '../../config'

const heightLine = 3
const heightIcon = 20
const translateY = heightIcon / 2
const translateY1 = makePixelValue(translateY)

const LineUI = styled('span')`
  background: #fff;
  border-radius: (${makePixelValue(heightLine / 2)});
  display: block;
  height: ${makePixelValue(heightLine)};
  left: 0;
  position: absolute;
  transition: transform 500ms ease;
  width: 100%;
`
export const Line1UI = styled(LineUI)`
  top: 0;
  transform: ${(props) => {
    return props.isOpen
      ? `translateY(${translateY1}) rotate(45deg) translateX(0)`
      : 'rotate(0deg)'
  }};
`

export const Line2UI = styled(LineUI)`
  top: 50%;
  opacity: ${(props) => {
    console.log('onStart:', props.isOpen)
    return props.isOpen ? `0` : '1'
  }};
`

export const Line3UI = styled(LineUI)`
  top: 100%;
  transform: ${(props) => {
    return props.isOpen
      ? `translateY(-${translateY1}) rotate(-45deg) translateX(0)`
      : 'rotate(0deg)'
  }};
`

export const TriggerIconUI = styled('div')`
  display: block;
  height: ${makePixelValue(heightIcon)};
  margin: (${makePixelValue(heightIcon * 2)}) auto ${heightIcon} auto;
  margin-top: -${config.unit(0.125)};
  position: relative;
  width: ${config.unit(1)};
  z-index: 9999;
`
