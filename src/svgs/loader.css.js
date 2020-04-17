export const LoaderUI = styled('div')`
  height: ${({ theme }) => theme.unit(1)};
  width: ${({ theme }) => theme.unit(1)};
  animation-name: spin;
  animation-duration: 1100ms;
  animation-iteration-count: infinite;
  animation-timing-function: linear;

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(15deg);
    }
  }
`
