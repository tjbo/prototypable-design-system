import config from '../../config'
import styled from 'styled-components'

export const BannerUI = styled('div')`
  color: #fff;
  text-align: center;
  font-size: ${config.unit(1.25)};
  font-style: 'italic';
  font-family: ${config.fonts.font3};

  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-size: ${config.unit(1.25)};
    font-family: ${config.fonts.font3};
    font-style: 'italic';
    margin: 0;
  }
`
