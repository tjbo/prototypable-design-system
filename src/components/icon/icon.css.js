import theme from '../../theme'

export const ContainerUI = styled('div')`
  position: relative;
  display: block;

  svg {
    display: block;
  }
`

export const PositionedChevronIconUI = styled('div')`
  display: block;
  position: absolute;
  width: ${theme.unit(0.5)};
`

export const ChevronLeftUI = styled(PositionedChevronIconUI)`
  left: ${theme.unit(0.75)};
  transform: rotate(90deg);
`

export const ChevronRightUI = styled(PositionedChevronIconUI)`
  right: ${theme.unit(0.75)};
  transform: ${({ isOpen }) => (isOpen ? `rotate(0deg)` : `rotate(-90deg)`)};
`
