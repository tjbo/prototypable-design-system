import styled from 'styled-components'
import theme from '../theme'

export const CardUI = styled('div')`
  * {
    box-sizing: border-box;
  }
  display: block;
  background: #fff;
  border: ${({ withBorder }) =>
    withBorder ? theme.borders['1px'] + theme.colors.gray[200] : 'none'};
  line-height: 1.75;
  width: 100%;
  height: 100%;
  background-color: ${theme.colors.white};

  ${({ asLink }) => {
    return (
      asLink &&
      `
  :hover {
    border: 1px solid ${theme.colors.black};
    background-color: ${theme.colors.black};
    cursor: pointer;
  }
  `
    )
  }}
`

export const ContentUI = styled('div')`
  display: flex;
  flex-direction: column;
  padding: ${theme.space[6]};
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
