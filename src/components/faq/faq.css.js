import styled from 'styled-components'
import config from '../../config'

export const ArrowUI = styled('i')`
  border: solid black;
  border-width: 0 3px 3px 0;
  display: inline-block;
  padding: 3px;
  transform: ${({ isOpen }) => (isOpen ? `rotate(45deg)` : `rotate(-135deg)`)};
  -webkit-transform: ${({ isOpen }) =>
    isOpen ? `rotate(45deg)` : `rotate(-135deg)`};
`

export const DetailsUI = styled('details')`
  display: flex;
  border: ${config.border};
  margin-bottom: ${config.unit(1)};
  padding: ${config.unit(1)};
  background-color: #fff;
`

export const SummaryUI = styled('summary')`
  width: 100%;
  color: ${config.colors.dark4};
  cursor: pointer;
  font-size: ${config.unit(0.66)};
  font-weight: 500;
  position: relative;
  padding: 0;
  &:after {
    content: '';
    color: ${config.colors.dark1};
    border: solid ${config.colors.dark4};
    border-width: 0 3px 3px 0;
    display: inline-block;
    padding: 4px;
    transform: rotate(-135deg);
    -webkit-transform: rotate(-135deg);
    position: absolute;
    right: 0;
    top: 3px;
  }
  [open] &:after {
    transform: rotate(45deg);
    -webkit-transform: rotate(45deg);
  }
  &:focus {
    outline: none;
  }
  &::-webkit-details-marker {
    display: none;
  }
`
