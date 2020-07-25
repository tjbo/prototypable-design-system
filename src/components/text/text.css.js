import theme from '../../theme'

function getColor({ color }) {
  return theme.colors[color]
}

export const TextUI = styled('span')`
  color: ${getColor};
  font-style: ${(props) => props.fontStyle};
  font-weight: ${({ isBold }) => (isBold ? '700' : '500')};
  font-size: ${(props) => theme.unit(props.size)};
`
