export const LoadingScreenContainerUI = styled('div')`
  align-items: center;
  display: flex;
  justify-content: center;
  min-height: calc(100vh - ${({ theme }) => theme.layout.desktop.headerHeight});

  @media (min-width: ${({ theme }) => theme.breakPoints.desktop}) {
    min-height: calc(
      100vh - ${({ theme }) => theme.layout.tablet.headerHeight}
    );
  }

  @media (max-width: ${({ theme }) => theme.breakPoints.tablet}) {
    min-height: calc(
      100vh - ${({ theme }) => theme.layout.mobile.headerHeight}
    );
  }
`
