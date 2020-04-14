import { LoadingScreenContainerUI } from './loadingScreen.css'
import Loader from '../../svgs/loader'

export default function Loading() {
  return (
    <LoadingScreenContainerUI>
      <Loader />
      {'Loading'}
    </LoadingScreenContainerUI>
  )
}
