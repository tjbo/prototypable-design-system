import styled from 'styled-components'
import config, { makePixelValue } from '../../config'

export const ContentUI = styled('div')`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: calc(100vh - ${config.layout.desktop.headerHeight});
  position: absolute;
  top: ${config.unit(2.25)};
  width: 100%;

  h1 {
    font-family: ${config.fonts.font2};
    font-size: ${config.unit(2)};
    line-height: 1;
    margin-bottom: -${config.unit(1)};
    text-align: center;
  }

  h2 {
    font-family: ${config.fonts.font2};
    font-size: ${config.unit(1.5)};
    font-weight: 700;
    line-height: 1.125;
    margin-bottom: ${config.unit(0.25)};
    margin-top: 0.25em;
    text-align: center;
  }

  @media (min-width: ${config.breakPoints.desktop}) {
    min-height: calc(100vh - ${config.layout.tablet.headerHeight});
  }

  @media (max-width: ${config.breakPoints.tablet}) {
    min-height: calc(100vh - ${config.layout.mobile.headerHeight});
  }
`

export const ImageUI = styled('div')`
  max-width: 100%;
  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (min-width: ${config.breakPoints.desktop}) {
    min-height: calc(100vh - ${config.layout.tablet.headerHeight});

    img {
      height: calc(100vh - ${config.layout.tablet.headerHeight});
    }
  }

  @media (max-width: ${config.breakPoints.tablet}) {
    min-height: calc(100vh - ${config.layout.mobile.headerHeight});

    img {
      height: calc(100vh - ${config.layout.mobile.headerHeight});
    }
  }
`

// url('https://images.unsplash.com/photo-1520020324516-dba91274d8ba?ixlib=rb-1.2.1&auto=format&fit=crop&w=2734&q=80');
// background-blend-mode: overlay; */

/* background-image: linear-gradient(rgba(0, 144, 231, 0), rgba(0, 144, 231, 0)),
    url('https://images.unsplash.com/photo-1491964247380-4f630fb757c5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80'); */
/* background-image: url('https://media.istockphoto.com/photos/beautiful-sunset-of-los-angeles-downtown-skyline-and-palm-trees-in-picture-id884384784?s=2048x2048'); */

/* background-image: url('https://images.unsplash.com/photo-1576694541627-114e57070466?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80'); */
/* background-position: center bottom; */

/* background-image: url('https://images.unsplash.com/photo-1528656053220-4e535d66150d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80'); */
/* background-image: url('https://images.unsplash.com/photo-1494526585095-c41746248156?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80'); */
