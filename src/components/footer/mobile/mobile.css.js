import theme from '../../../theme'

export const AnimatedIconUI = styled('div')`
  transform: ${({ isOpen }) => (isOpen ? `rotate deg(90)` : `rotate deg(-90)`)};
`

export const ContainerUI = styled('footer')`
  a {
    color: #fff;
  }

  a:active,
  a:visited,
  a:hover,
  a:link {
    color: #fff;
    text-decoration: none;
    font-family: ${theme.typography.fonts.font1};
  }
  font-size: ${theme.unit(0.5)};
`

export const LinkUI = styled('div')`
  cursor: pointer;
  display: block;
  width: 100%;
`

export const AddressUI = styled('div')`
  justify-self: flex-start;
  color: #fff;
  text-align: left;
`

export const LinkTitleUI = styled('div')`
  color: #fff;
  cursor: pointer;
  display: flex;
  border-bottom: 1px solid #fff;
  padding: ${theme.unit(0.5)};
  padding-top: 0;
  margin: 0;
`

export const SubMenuUI = styled('div')`
  padding: ${theme.unit(0.25)};
  padding-right: ${theme.unit(1.75)};
  padding-left: ${theme.unit(1)};
  ${LinkUI} {
    border-bottom: 1px dotted;
    border-color: rgba(255, 255, 255, 0.25);
    padding: ${theme.unit(0.375)};

    a {
      display: block;
      width: 100%;
    }
  }
`
