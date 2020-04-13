import styled from 'styled-components'
import config from '../../config'

export const CardsWrapperUI = styled('div')`
  h3 {
    /* padding: 0; */
  }

  * {
    box-sizing: border-box;
  }

  .card {
    line-height: 1.75;
    background: #fff;
    border: ${config.border};

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
      padding: ${config.unit(0.5)} ${config.unit(0.66)};
    }
  }
`

/* export const FieldUI = styled('div')`
  padding: 3px 0; */

export const ContentUI = styled('div')`
  background: #fff;
  /* padding: ${config.unit(0.75)}; */
  /* padding-top: ${config.unit(0.25)}; */
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
