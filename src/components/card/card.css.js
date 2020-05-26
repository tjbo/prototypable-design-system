import theme from '../../theme'
import styled from 'styled-components'

export const CardUI = styled('div')`
  * {
    box-sizing: border-box;
  }
  display: block;
  background: #fff;
  border: ${theme.border};
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

export const AspectRatioUI = styled('div')`
  /* Position child elements relative to this element */
  position: relative;

  /* Create a pseudo element that uses padding-bottom to take up space */
  &:after {
    display: block;
    content: '';
    /* 16:9 aspect ratio */
    padding-bottom: 56.25%;
  }

  /* Image is positioned absolutely relative to the parent element */
  img {
    /* Image should match parent box size */
    position: absolute;
    left: 0px;
    top: 0px;
    width: 100%;
    height: 100%;
  }
`
