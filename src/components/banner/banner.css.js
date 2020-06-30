import styled from 'styled-components'
import theme from '../../theme'
import { TitleUI } from '../title/title.css'

export const BannerUI = styled('div')`
  color: #fff;
  text-align: center;
  padding: ${theme.unit(0.5)};

  ${TitleUI} {
    color: #fff;
    font-style: italic;
    margin-bottom: 0;
  }
`
