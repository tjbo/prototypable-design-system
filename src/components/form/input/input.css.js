import theme from '../../../theme'
import hexToRgb from '../../../utils/hexToRgb'

export const ContainerUI = styled('div')`
  display: flex;
  flex-direction: column;
  height: auto;
`

export const InputUI = styled('input')`
  border: ${({ isValid }) =>
    isValid ? `1px solid ${theme.colors.dark4}` : '1px solid #fff'};
  box-sizing: border-box;
  display: block;
  max-width: ${({ maxWidth }) => maxWidth};
  width: 100%;
  font-size: ${({ size }) =>
    size === 'big' ? theme.unit(0.75) : theme.unit(0.5)};
  margin: 0;
  padding: ${theme.unit(0.4)};
  resize: none;
  box-shadow: ${({ isValid }) =>
    isValid
      ? `0 0 0 3px rgba(${hexToRgb(theme.colors.error)}, 0.0)`
      : `0 0 0 3px rgba(${hexToRgb(theme.colors.error)}, 0.4)`};

  &:focus {
    border: 1px solid #fff;
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


${({ asHoneyPot }) =>
  asHoneyPot &&
  `
    position: absolute;
    left: 99999px;
  `}

`

export const LabelUI = styled('label')`
  font-family: ${theme.typography.fonts.font1};
  font-size: ${theme.unit(0.5)};
  font-weight: 700;
  ${({ asHoneyPot }) =>
    asHoneyPot &&
    `
    position: absolute;
    left: 99999px;
  `}
`

export const ValidationUI = styled('div')`
  box-sizing: border-box;
  display: block;
  font-size: ${theme.unit(0.5)};
  color: ${theme.colors.error};
  height: ${theme.unit(1)};
  padding-top: ${theme.unit(0.125)};
`

export const SpaceUI = styled('div')`
  content: ' ';
  height: ${theme.unit(1)};
  width: 100%;
  display: block;
`
