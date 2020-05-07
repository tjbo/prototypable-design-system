import styled from 'styled-components'
import theme from '../../theme'

export const FaqWrapperUI = styled('div')`
  details {
    display: flex;
    border: ${theme.border};
    box-sizing: border-box;
    margin-bottom: ${theme.unit(1)};
    padding: ${theme.unit(1)};
    background-color: #fff;
    min-width: 100%;
    h4 {
      width: calc(100% - 20px);
    }

    summary {
      width: 100%;
      color: ${theme.colors['dark-4']};
      cursor: pointer;
      font-size: ${theme.unit(0.66)};
      font-weight: 500;
      position: relative;
      padding: 0;
      &:after {
        content: '';
        color: ${theme.colors['dark-1']};
        border: solid ${theme.colors['dark-4']};
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
    }
  }

  details[open] summary:after {
    transform: rotate(45deg);
    -webkit-transform: rotate(45deg);
  }
`
