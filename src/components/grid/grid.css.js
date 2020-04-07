import config from '../../config'

export const GridUI = styled('div')``

export const RowUI = styled('div')`
  display: flex;
  flex-direction: row;

  @media (max-width: ${config.breakPoints.sm}) {
    flex-direction: column;
  }
`

export const ColUI = styled('div')`
  flex: ${({ size = 1 }) => size};
`
