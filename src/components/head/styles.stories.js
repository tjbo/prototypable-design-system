import { tableMock } from './styles.mock'

export default {
  title: 'Table',
}

export const Default = () => (
  <div dangerouslySetInnerHTML={{ __html: tableMock.toString() }} />
)
