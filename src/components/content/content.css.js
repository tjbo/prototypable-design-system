import theme from '../theme'

export const ContainerUI = styled('div')`
  flex: 1 0 auto;
  min-height: 100vh;
  margin-top: ${theme.space[28]};
  @media (max-width: ${theme.breakpoints['4']}) {
    margin-top: ${theme.space[28]};
  }
`
