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
  }

  @media (min-width: 1200px) {
  }

  @media (min-width: 650px) and (max-width: 900px) {
    .col {
      min-width: 49%;
      max-width: 49%;
    }
  }

  @media (max-width: 650px) {
    .col {
      display: block;
      min-width: 100%;
      max-width: 100%;
    }
  }
`
