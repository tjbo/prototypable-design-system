export const TabUI = styled('li')`
  display: inline-block;
  list-style: none;
  margin-bottom: -1px;
  padding: 0.5rem 0.75rem;

  ${({ isActive }) => {
    return (
      isActive &&
      `
  background-color: white;
  border: solid #ccc;
  border-width: 1px 1px 0 1px;
  `
    )
  }}
`
