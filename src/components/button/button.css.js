import theme from '../../theme'

export const ButtonUI = styled('button')`
  background-color: ${theme.colors.dark2};
  border: 0;
  border-radius: 5px;
  color: #fff;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: ${theme.typography.fonts.font1};
  font-size: ${theme.unit(0.6)};
  font-weight: 700;
  padding: ${theme.unit(0.25)} ${theme.unit(0.5)};
  width: auto;
  margin: 0 auto;
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

  a:active,
  a:link,
  a:hover,
  a:visited {
    color: ${theme.colors.white};
  }
`

export const ButtonContainerUI = styled('div')`
  display: flex;
  align-items: flex-start;
  width: auto;
`

export const IconContainerUI = styled('div')`
  display: inline-block;
  margin-left: ${theme.unit(0.25)};
`
