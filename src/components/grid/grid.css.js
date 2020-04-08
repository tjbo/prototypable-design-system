import config, { makePixelValue } from '../../config'

export const GridUI = styled('div')``

export const RowUI = styled('div')`
  display: flex;
  flex-direction: row;

  @media (max-width: ${makePixelValue(config.breakPoints.mobile)}) {
    flex-direction: column;
  }
`

export const ColUI = styled('div')`
  flex: ${({ size = 1 }) => size};
  margin-left: ${config.unit(0.25)};

  :first-child {
    margin-left: 0;
  }
`
