import styled from 'styled-components'
import theme from '../../theme'

export const DetailsUI = styled('details')`
  display: flex;
  border: ${theme.border};
  box-sizing: border-box;
  margin-bottom: ${theme.unit(1)};
  padding: ${theme.unit(1)};
  padding-bottom: ${theme.unit(0.25)};

  background-color: #fff;
  min-width: 100%;

  div:last-child {
    margin-bottom: -${theme.unit(0.75)};
  }

  h4 {
    width: calc(100% - 20px);
  }

  ${({ open }) =>
    open &&
    `
    summary:after {
    transform: rotate(45deg);
    -webkit-transform: rotate(45deg);
    }
    padding-bottom: ${theme.unit(0.75)};

    `}
`

export const SummaryUI = styled('summary')`
  width: 100%;
  color: ${theme.colors.dark4};
  cursor: pointer;
  position: relative;
  padding: 0;
  &:after {
    content: '';
    color: ${theme.colors.dark1};
    border: solid ${theme.colors.dark4};
    border-width: 0 3px 3px 0;
    display: inline-block;
    padding: 4px;
    transform: rotate(-135deg);
    -webkit-transform: rotate(-135deg);
    position: absolute;
    right: 0;
    top: 10px;
  }
  :focus &:after {
  }
  &:focus {
    outline: none;
  }
  &::-webkit-details-marker {
    display: none;
  }
`
