import styled from 'styled-components'
import config from '../../config'

export const Header = styled('header')`
  background-color: ${config.colors.dark1};
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  color: #fff;
  position: relative;
  top: 0;
  line-height: ${config.layout.topNavHeight};
  height: ${config.layout.topNavHeight};
  z-index: 1;
`

export const Brand = styled('div')`
  font-size: ${config.unit(1.125)};
  margin: 0;
  height: 100%;
  margin-left: ${config.unit(0.5)};
  display: flex;
  align-items: flex-start;
  text-align: center;
  justify-content: space-around;
  font-family: ${config.fonts.font2};
  font-weight: 500;
  text-transform: uppercase;
  a:active,
  a:visited,
  a:hover,
  a:link {
    color: #fff;
    text-decoration: none;
  }
`

export const NavMenu = styled('nav')`
  font-size: ${config.unit(0.7)};
  font-family: ${config.fonts.font2};
  margin: 0 ${config.unit(0.5)};
  list-style: none;
  padding: 0;
  display: flex;
  a {
    margin-left: ${config.unit(0.5)};

    :active,
    :visited,
    :hover,
    :link {
      color: #fff;
      text-decoration: none;
    }
  }
`
