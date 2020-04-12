import config from '../config'
export const LoaderUI = styled('div')`
  height: ${config.unit(1)};
  width: ${config.unit(1)};
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
