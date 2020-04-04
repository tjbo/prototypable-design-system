import config from '../../config'

export const TableUI = styled('div')`
  table {
    border-collapse: collapse;
    border-left: ${config.border};
    border-right: ${config.border};
    margin: 0;
    thead {
      display: none;
    }
    tr {
      border-bottom: ${config.border};
      width: 100%;
    }
    tr:first-child {
      border-top: ${config.border};
    }
    td:first-child {
      font-weight: 700;
      min-width: 160px;
    }
    td {
      background-color: #fff;
      padding: ${config.unit(0.25)} ${config.unit(0.5)};
    }
  }
`
