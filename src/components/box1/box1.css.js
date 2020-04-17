export const BoxWrapper = styled('div')`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  height: 100%;
  border: ${({ theme }) => theme.border};
  padding: ${({ theme }) => theme.unit(0.25)} ${({ theme }) => theme.unit(0.5)};

  .title {
    font-weight: bold;
    flex-grow: 0;
  }

  ul {
    margin: 0;
  }

  @media (max-width: ${({ theme }) => theme.breakPoints.tablet}) {
    ul {
      column-count: 3;
    }
  }

  @media (max-width: 800px) {
    ul {
      column-count: 2;
    }
  }

  @media (max-width: ${({ theme }) => theme.breakPoints.mobile}) {
    ul {
      column-count: 1;
    }
  }
`
