export const BodyUI = styled('div')`
  margin-top: ${({ theme }) => theme.layout.desktop.headerHeight};
  min-height: 100vh;

  @media (max-width: ${({ theme }) => theme.breakPoints.desktop}) {
    margin-top: ${({ theme }) => theme.layout.mobile.headerHeight};
  }

  @media (max-width: ${({ theme }) => theme.breakPoints.mobile}) {
    margin-top: ${({ theme }) => theme.layout.mobile.headerHeight};
  }
`
