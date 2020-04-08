import Jumbotron from '../jumbotron'
import Loader from '../../svgs/loader'

export default function Loading() {
  return (
    <Jumbotron>
      <Loader />
      {'Loading'}
    </Jumbotron>
  )
}
