import theme from '../theme'

export const ContainerUI = styled('div')`
  position: relative;
  display: block;

  svg {
    display: block;
  }
`

export const ChevronLeftUI = styled('div')`
  bottom: 0;
  width: ${theme.space[3]};
  position: absolute;
  top: 0;
  left: ${theme.space[3]};
  margin: auto;

  transform: rotate(90deg);
`

export const ChevronRightUI = styled('div')`
  bottom: 0;
  width: ${theme.space[3]};
  position: absolute;
  top: 0;
  right: ${theme.space[3]};
  margin: auto;
  transform: ${({ isOpen }) => (isOpen ? `rotate(0deg)` : `rotate(-90deg)`)};
`

export const ChevronTopUI = styled('div')`
  width: ${theme.space[3]};
  position: absolute;
  top: ${theme.space[1]};
  right: ${theme.space[4]};
  margin: auto;
`
