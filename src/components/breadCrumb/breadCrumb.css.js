import theme from '../../theme'

export const ContainerUI = styled('div')`
  font-size: ${theme.unit(0.5)};
  display: flex;
  justify-content: space-around;
  padding: 1em;
  text-transform: uppercase;
  background-color: ${theme.colors.light1};
  color: ${theme.colors.dark3};
  font-weight: bold;
  font-family: ${theme.typography.fonts.font1};
`
