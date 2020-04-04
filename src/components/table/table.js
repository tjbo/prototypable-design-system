import { TableUI } from './table.css'

export default function ({ table }) {
  return (
    <div>
      <TableUI dangerouslySetInnerHTML={{ __html: table.toString() }} />
    </div>
  )
}
