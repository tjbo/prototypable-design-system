import theme from '../../../theme'

export const TitleUI = styled('h3')`
  display: flex;
  justify-content: flex-start;
  margin: 0;
`

export const TitleContainerUI = styled('div')`
  display: flex;
  align-items: center;
  margin-bottom: ${theme.unit(1)};

  div {
    margin-left: ${theme.unit(0.75)};
  }
`
