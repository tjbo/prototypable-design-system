import Table from './table'
import TableMock from './table.mock'

export default {
  title: 'Table',
  component: Table,
}

export const Default = () => <Table table={TableMock}></Table>
