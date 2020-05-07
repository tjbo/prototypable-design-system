import theme from '../../../theme'

export const DropdownUI = styled('span')`
  box-sizing: border-box;
  cursor: pointer;
  font-family: ${theme.typography.fonts['font-2']};
  display: block;
  position: relative;

  ul {
    position: relative;
    box-sizing: border-box;
    display: block;
    list-style: none;
    margin: 0;
    padding-left: 0;
    z-index: 1;
    min-width: 100%;

    li {
      cursor: pointer;
      display: flex;
      font-size: ${theme.unit(0.75)};
      justify-content: center;
      align-content: center;
      box-sizing: border-box;
      min-width: 100%;
      margin-left: 0;
      text-align: center;
      text-transform: uppercase;
      a:active,
      a:hover,
      a:link,
      a:visited {
        color: #fff;
        display: inline-block;
        margin-left: 0;
        min-width: 100%;
        padding: ${theme.unit(0.5)};
        text-decoration: none;
      }
      a:hover {
        background-color: ${theme.colors['dark-5']};
      }
    }
  }
  :hover {
    ul {
      display: block;
    }
  }
`

export const LinkArrowUI = styled('div')`
  position: relative;
  &:after {
    content: '';
    color: ${theme.colors['light-1']};
    border: solid ${theme.colors['light-1']};
    border-width: 0 4px 4px 0;
    display: inline-block;
    margin-left: ${theme.unit(2.5)};
    padding: 4px;
    transform: ${({ isOpen }) =>
      isOpen ? `rotate(45deg)` : `rotate(-135deg)`};
    position: absolute;
    top: -${theme.unit(0.75)};
  }
`
