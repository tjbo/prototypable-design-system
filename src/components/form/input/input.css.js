import theme from '../../../theme'

export const ContainerUI = styled('div')`
  display: flex;
  flex-direction: column;
  margin-bottom: ${theme.unit(0.25)};
`

export const InputUI = styled('input')`
  border: none;
  box-sizing: border-box;
  display: block;
  font-size: ${theme.unit(0.5)};
  margin: 0;
  padding: ${theme.unit(0.4)};
  width: 100%;
  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(21, 156, 228, 0.4);
  }
`

export const LabelUI = styled('label')`
  font-family: ${theme.typography.fonts['font-2']};
  font-size: ${theme.unit(0.5)};
`
