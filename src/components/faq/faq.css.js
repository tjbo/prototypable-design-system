import styled from 'styled-components'
import theme from '../theme'

export const DetailsUI = styled('details')`
  display: flex;
  border: ${theme.borders['1px'] + theme.colors.gray['200']};
  box-sizing: border-box;
  margin-bottom: ${theme.space[6]};
  padding: ${theme.space[6]};
  padding-bottom: ${theme.space[2]};

  background-color: #fff;
  min-width: 100%;

  div:last-child {
    margin-bottom: -${theme.space[4]};
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
    padding-bottom: ${theme.space[4]};

    `}
`

export const SummaryUI = styled('summary')`
  width: 100%;
  cursor: pointer;
  position: relative;
  padding: 0;
  &:after {
    content: '';
    color: ${theme.colors.black};
    border: solid ${theme.colors.black};
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
