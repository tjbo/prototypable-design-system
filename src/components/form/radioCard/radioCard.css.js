import styled from 'styled-components'
import theme from '../../../theme'
import hexToRgb from '../../../utils/hexToRgb'

export const ImageContainerUI = styled('div')`
  display: block;
  height: ${theme.unit(4.125)};
  width: 100%;
  position: relative;
  background-repeat: no-repeat;
  margin: ${theme.unit(0.5)};

  @media (max-width: ${theme.breakPointsAsPixel.mobile}) {
    height: 100%;
    max-width: 20%;
  }
`

export const ImageUI = styled('div')`
  background-image: url(${({ src }) => src});
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  display: block;
  height: 100%;
  position: relative;
  width: 100%;
`

export const ContainerUI = styled('div')`
  align-items: center;
  background-color: ${({ isSelected }) =>
    isSelected ? `rgba(${hexToRgb(theme.colors['success'])}, .2)` : '#fff'};
  border: ${theme.border};
  display: flex;
  flex-direction: column;
  flex: 1 1 0px;
  height: auto;
  margin-left: 1%;
  position: relative;
  text-align: center;
  width: 24%;
  z-index: 2;

  &:focus {
    outline: none;
    box-shadow: ${({ isSelected }) =>
      isSelected
        ? `0 0 0 3px rgba(${hexToRgb(theme.colors['success'])}, 1)`
        : `0 0 0 3px rgba(${hexToRgb(theme.colors['dark-3'])}, 0.5)`};

    ${ImageUI} {
      filter: none;
    }
  }

  &:hover {
    cursor: pointer;
    box-shadow: ${({ isSelected }) =>
      isSelected
        ? `0 0 0 3px rgba(${hexToRgb(theme.colors['success'])}, 1)`
        : `0 0 0 3px rgba(${hexToRgb(theme.colors['dark-3'])}, 0.5)`};

    ${ImageUI} {
      filter: none;
    }
  }
  ${ImageUI} {
    filter: ${({ isSelected }) => (isSelected ? 'none' : `grayscale(95%)`)};
  }

  box-shadow: ${({ isSelected }) =>
    isSelected
      ? `0 0 0 3px rgba(${hexToRgb(theme.colors['success'])}, 0.5)`
      : 'none'};

  margin: 0 ${theme.unit(0.5)};

  @media (max-width: ${theme.breakPointsAsPixel.mobile}) {
    min-width: 100%;
    margin: 0;
    margin-bottom: ${theme.unit(1)};
    flex-direction: row;
  }
`

export const CardContentUI = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`

export const TitleUI = styled('div')`
  font-size: ${theme.unit(0.75)};
  margin-bottom: 16px;
  text-align: center;
  font-weight: bold;
  display: block;
  margin: 0 auto;
  text-align: center;
  width: 100%;

  @media (max-width: ${theme.breakPointsAsPixel.mobile}) {
    /* position: absolute; */
    /* top: 0; */
  }
`

export const ContentUI = styled('div')`
  padding: 20px;
  font-size: ${theme.unit(0.5)};
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }
  li {
    margin: 0;
  }
`

export const CardRadioInputContainerUI = styled('div')`
  margin-left: -20px;
  align-items: center;
  display: flex;
  label {
    margin-left: 10px;
  }
`
export const CardRadioInputUI = styled('input')`
  outline: none;
  position: absolute;
  left: -99999999;
  width: 0;
  border: none;
  opacity: 0;
`
