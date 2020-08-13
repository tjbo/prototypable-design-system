import theme from '../../theme'

export const ContainerUI = styled('div')`
  max-width: 50px;
  position: relative;
  display: block;
  border: 1px solid red;

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
  transform: rotate(-90deg);
`
