import config from '../../config'
import styled from 'styled-components'

export const BannerUI = styled('div')`
  color: #fff;
  text-align: center;
  font-size: ${config.unit(1.25)};
  font-style: 'italic';
  font-family: ${config.fonts.font3};
`
