import styled from 'styled-components'
import config from '../../config'

export const CardUI = styled('div')`
  img {
    width: 100%;
  }
  display: flex;
  line-height: 1.75;
  justify-content: center;
  flex-direction: column;
  margin-bottom: ${config.unit(1)};
  background: #fff;
  border: ${config.border};
`

export const ContentUI = styled('div')`
  background: #fff;
  padding: ${config.unit(0.75)};
  padding-top: ${config.unit(0.25)};
`

export const CardImageUI = styled('div')`
  height: 200px;
  background-image: url(${(props) => props.imageUrl});
  text-align: center;
  background-size: cover;
  background-position: center;
  margin: 0;
  padding: 0;
  margin-bottom: ${config.unit(0.5)};
`

export const TitleUI = styled('h3')`
  padding: 0;
`

export const FieldUI = styled('div')`
  padding: 3px 0;
`

export const FieldTitleUI = styled('b')``

export const FieldTextUI = styled('span')``
