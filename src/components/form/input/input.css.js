import theme from '../../../theme'
import hexToRgb from '../../../utils/hexToRgb'

export const ContainerUI = styled('div')`
  display: flex;
  flex-direction: column;
  margin-bottom: ${theme.unit(0.25)};
`

export const InputUI = styled('input')`
  border: none;
  box-sizing: content-box;
  display: block;
  max-width: ${({ maxWidth }) => maxWidth};
  width: 100%;
  font-size: ${({ size }) =>
    size === 'big' ? theme.unit(0.75) : theme.unit(0.5)};
  margin: 0;
  padding: ${theme.unit(0.4)};
  resize: none;
  box-shadow: ${({ isValid }) =>
    isValid ? `` : `0 0 0 3px rgba(${hexToRgb(theme.colors.error)}, 0.4)`};

  &:focus {
    border: none;
    outline: none;
    box-shadow: ${({ isValid }) =>
      isValid
        ? `0 0 0 3px rgba(${hexToRgb(theme.colors.dark3)}, 0.5)`
        : `0 0 0 3px rgba(${hexToRgb(theme.colors.error)}, 0.7)`};
  }

  ${({ isSelectable }) =>
    !isSelectable &&
    `
    pointer-events: none;
    user-select: none;
  `}
  text-align: ${({ textAlign }) => textAlign};
`

export const LabelUI = styled('label')`
  font-family: ${theme.typography.fonts.font1};
  font-size: ${theme.unit(0.5)};
`

export const ValidationUI = styled('div')`
  box-sizing: border-box;
  display: block;
  font-size: ${theme.unit(0.5)};
  color: ${theme.colors.error};
  height: ${theme.unit(1)};
  padding-top: ${theme.unit(0.125)};
`
