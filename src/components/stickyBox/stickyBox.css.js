import theme from '../../theme'

export const ButtonUI = styled('button')`
  border: 1px solid ${theme.colors.success};
  padding: ${theme.unit(0.5)};
`

export const ContainerUI = styled('div')`
  display: block;
  position: relative;
  height: 100%;
  background: none;
  z-index: 1;
`

export const StickyUI = styled('div')`
  position: sticky;
  max-width: 200px;
  top: ${theme.unit(4)};
  align-self: flex-start;
  height: auto;
`
