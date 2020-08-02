import theme from '../../theme'
import styled from 'styled-components'

export const CardUI = styled('div')`
  * {
    box-sizing: border-box;
  }
  display: block;
  background: #fff;
  border: ${({ withBorder }) => (withBorder ? theme.border : 'none')};
  line-height: 1.75;
  width: 100%;
  height: 100%;
  background-color: ${theme.colors.light3};

  ${({ asLink }) => {
    return (
      asLink &&
      `
  :hover {
    border: 1px solid ${theme.colors.dark3};
    background-color: ${theme.colors.dark3};
    cursor: pointer;
  }
  `
    )
  }}
`

export const ContentUI = styled('div')`
  display: flex;
  flex-direction: column;
  padding: ${`${theme.unit(0.5)} ${theme.unit(0.66)}`};
  width: 100%;
`

export const ImageUI = styled('div')``

export const AhrefUI = styled('div')`
  cursor: pointer;
  position: relative;
  img {
    filter: none;
    transition: 400ms;
  }

  h3 {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    display: inline-block;
    color: ${theme.colors.white};
    text-align: center;
  }

  :hover {
    img {
      filter: grayscale(100%) brightness(50%) sepia(100%) hue-rotate(-180deg)
        saturate(500%) contrast(0.9);
    }
    h3 {
      text-decoration: underline;
    }
  }
`
