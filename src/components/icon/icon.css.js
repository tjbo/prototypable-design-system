import theme from '../../theme'

export const ContainerUI = styled('div')`
  position: relative;
  display: block;

  svg {
    display: block;
  }
`

export const ChevronLeftUI = styled('div')`
  bottom: 0;
  width: ${theme.unit(0.5)};
  position: absolute;
  top: 0;
  left: ${theme.unit(0)};
  margin: auto;

  transform: rotate(90deg);
`

export const ChevronRightUI = styled('div')`
  bottom: 0;
  width: ${theme.unit(0.5)};
  position: absolute;
  top: 0;
  right: ${theme.unit(0.5)};
  margin: auto;
  transform: ${({ isOpen }) => (isOpen ? `rotate(0deg)` : `rotate(-90deg)`)};
`

export const ChevronTopUI = styled('div')`
  width: ${theme.unit(0.5)};
  position: absolute;
  top: ${theme.unit(0.25)};
  right: ${theme.unit(0.75)};
  margin: auto;
`
