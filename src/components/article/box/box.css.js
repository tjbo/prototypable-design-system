import theme from '../../theme'

export const BoxWrapper = styled('div')`
  background-color: ${theme.colors.white};
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  border: ${theme.border} ${theme.colors.gray[300]};
  padding: ${theme.space[4]} ${theme.space[4]};
  margin-bottom: ${theme.space[1]};
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
  @media (max-width: ${theme.breakpoints[4]}) {
    ul {
      column-count: 3;
    }
  }
  @media (max-width: 800px) {
    ul {
      column-count: 2;
    }
  }
  @media (max-width: ${theme.breakpoints[1]}) {
    ul {
      column-count: 1;
    }
  }
`
