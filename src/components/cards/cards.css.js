import theme from '../../theme'
import styled from 'styled-components'

export const CardsWrapperUI = styled('div')`
  * {
    box-sizing: border-box;
  }

  .card {
    line-height: 1.75;
    background: #fff;
    border: ${theme.border};

    /* Position child elements relative to this element */
    .aspect-ratio-box {
      position: relative;
    }

    /* Create a pseudo element that uses padding-bottom to take up space */
    .aspect-ratio-box::after {
      display: block;
      content: '';
      /* 16:9 aspect ratio */
      padding-bottom: 56.25%;
    }

    /* Image is positioned absolutely relative to the parent element */
    .aspect-ratio-box img {
      /* Image should match parent box size */
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
    }
    .content {
      padding: ${`${theme.unit(0.5)} ${theme.unit(0.66)}`};
    }
  }
`

export const ContentUI = styled('div')`
  background: #fff;
`

export const CardImageUI = styled('div')`
  height: 200px;
  text-align: center;
  background-size: cover;
  background-position: center;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

export const FieldTitleUI = styled('b')``

export const FieldTextUI = styled('span')``
