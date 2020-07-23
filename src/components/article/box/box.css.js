import theme from '../../../theme'

export const BoxWrapper = styled('div')`
  background-color: ${theme.colors.white};
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  border: ${theme.border};
  padding: ${theme.unit(0.25)} ${theme.unit(0.5)};
  margin-bottom: ${theme.unit(0.5)};
  width: 100%;

  .title {
    font-weight: bold;
    flex-grow: 0;
  }

  ul {
    list-style: none;
    margin: 0;
    padding-left: 0;
    li {
      margin-left: 0;
    }
  }
  @media (max-width: ${theme.breakPointsAsPixel.tablet}) {
    ul {
      column-count: 3;
    }
  }
  @media (max-width: 800px) {
    ul {
      column-count: 2;
    }
  }
  @media (max-width: ${theme.breakPointsAsPixel.mobile}) {
    ul {
      column-count: 1;
    }
  }
`
