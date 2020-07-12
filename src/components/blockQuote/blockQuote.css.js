import theme from '../../theme'
import getSpaceBefore from '../../utils/getSpaceBefore'

export const ContainerUI = styled('blockquote')`
  padding: ${theme.unit(0.75)};
  background-color: ${({ background }) => theme.colors[background]};
  border: ${theme.border};
  margin: ${`${theme.unit(1)} 0`};
  padding-bottom: 0;
  margin-top: ${getSpaceBefore};
`
