import styled from 'styled-components'
import theme from '../../theme'

export const ContainerUI = styled('div')`
  max-height: ${({ size }) => (size === 'half' ? '50vh' : '100vh')};
  height: ${({ size }) => (size === 'half' ? '50vh' : '100vh')};
  margin-top: ${theme.layout.desktop.headerHeight};
  position: relative;
  width: 100%;

  @media (max-width: ${theme.breakPointsAsPixel.desktop}) {
    margin-top: ${theme.layout.tablet.headerHeight};
  }
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
  height: inherit;
  img {
    display: block;
    width: 100%;
    height: inherit;
    max-height: inherit;
    object-fit: cover;
  }
`
