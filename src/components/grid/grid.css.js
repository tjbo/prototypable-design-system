import config from '../../config'

export const GridWrapperUI = styled('div')`
  * {
    box-sizing: border-box;
  }

  display: flex;
  justify-content: space-between;
  width: 100%;
  flex-wrap: wrap;

  .col {
    min-width: 32.5%;
    max-width: 32.5%;
    margin-bottom: 1.25%;
    flex: 1;

    @media (max-width: ${config.breakPoints.tablet}) {
      margin-bottom: ${config.unit(0.5)};
    }
  }

  @media (min-width: ${config.breakPoints.mobile}) and (max-width: ${config
      .breakPoints.tablet}) {
    .col {
      min-width: 49%;
      max-width: 49%;
    }
  }

  @media (max-width: ${config.breakPoints.mobile}) {
    .col {
      display: block;
      min-width: 100%;
      max-width: 100%;
    }
  }
`
