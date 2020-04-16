import config from '../../config'

export const Col1 = styled('div')`
  flex: 2;
`

export const Col2 = styled('div')`
  flex: 1;
  margin-left: ${config.unit(0.5)};
`

export const ArticleWrapperUI = styled('div')`
  display: flex;
  flex-direction: row;

  @media (max-width: ${config.breakPoints.tablet}) {
    flex-direction: column;

    ${Col1} {
      min-width: 100%;
    }

    ${Col2} {
      margin-left: 0;
      margin-top: ${config.unit(0.5)};
    }
  }
`
