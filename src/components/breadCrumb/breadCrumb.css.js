import theme from '../../theme'

export const ContainerUI = styled('div')`
  font-size: ${theme.unit(0.5)};
  display: flex;
  justify-content: space-around;
  padding: 1em;
  text-transform: uppercase;
  background-color: ${theme.colors['light-1']};
  color: ${theme.colors['dark-3']};
  font-weight: bold;
  font-family: ${theme.typography.fonts['font-2']};
`
