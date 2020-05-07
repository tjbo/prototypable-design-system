import theme from '../../theme'

export const ButtonUI = styled('button')`
  background-color: ${theme.colors['dark-2']};
  border: 0;
  border-radius: 5px;
  color: #fff;
  cursor: pointer;
  display: block;
  font-family: ${theme.typography.fonts['font-2']};
  font-size: ${theme.unit(0.75)};
  font-weight: 700;
  height: ${theme.unit(1.75)};
  margin-top: ${theme.unit(0.66)};
  width: 100%;
  max-width: ${({ maxWidth }) => maxWidth}px;
  background-image: linear-gradient(
    to bottom,
    #e52d27 0%,
    #b31217 41%,
    #e52d27 100%
  );
  ${({ align }) => {
    if (align === 'center') {
      return `margin-left: 50%;
      transform: translateX(-50%);
      `
    } else if (align === 'right') {
      return `float: right;`
    }
  }}

  border:1px solid #d02718;
  box-shadow: inset 0px 1px 0px 0px #f5978e;
`
