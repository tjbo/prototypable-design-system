import theme from '../../theme'

export const ContentUI = styled('div')`
  width: 100%;
`

export const SidebarUI = styled('div')`
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
