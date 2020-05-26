import styled from 'styled-components'
import theme from '../../theme'

export const ContainerUI = styled('div')`
  max-height: ${({ size }) => (size === 'half' ? '50vh' : '100vh')};
  margin-top: 0;
  position: relative;
  width: 100%;
`

export const ContentUI = styled('div')`
  align-items: center;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-height: inherit;
  position: absolute;
  width: 100%;
  height: 100%;
  text-align: center;
  top: 0;
`

export const ImageUI = styled('div')`
  max-width: 100%;
  max-height: inherit;
  img {
    display: block;
    width: 100%;
    max-height:inherit;
    object-fit: cover;
  }

  /* @media (min-width: ${theme.breakPointsAsPixel.desktop}) {
    min-height: calc(50vh - ${theme.layout.tablet.headerHeight});

    img {
      height: calc(50vh - ${theme.layout.tablet.headerHeight});
    }
  }

  @media (max-width: ${theme.breakPointsAsPixel.tablet}) {
    min-height: calc(50vh - ${theme.layout.mobile.headerHeight});

    img {
      height: calc(50vh - ${theme.layout.mobile.headerHeight});
    }
  } */
`
