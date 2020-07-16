import { CloseButtonUI, ContainerUI, ModalUI } from './modal.css'

export default function ({ children, closeModal }) {
  return (
    <ContainerUI>
      <ModalUI>
        {children}
        <CloseButtonUI
          href=""
          onClick={(e) => {
            closeModal()
            e.preventDefault()
          }}
        ></CloseButtonUI>
      </ModalUI>
    </ContainerUI>
  )
}
