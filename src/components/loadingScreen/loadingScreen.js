import { useState, useEffect } from 'react'
import { ContainerUI, LoaderUI } from './loadingScreen.css'

export default function () {
  const [show, setShow] = useState(false)
  useEffect(() => {
    let timeout = setTimeout(() => setShow(true), 250)
    return () => {
      clearTimeout(timeout)
    }
  }, [])

  return (
    (show && (
      <ContainerUI>
        <LoaderUI>Loading...</LoaderUI>
      </ContainerUI>
    )) ||
    null
  )
}
