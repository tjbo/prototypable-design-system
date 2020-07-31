import { ButtonUI, ContainerUI, GoBackUI } from './footer.css'

export default function Footer({ onNextStep, onPrevStep, step }) {
  return (
    <ContainerUI>
      {step > 0 ? (
        <GoBackUI href="#" onClick={onPrevStep}>
          Go Back
        </GoBackUI>
      ) : null}
      <ButtonUI onClick={onNextStep}>Next</ButtonUI>
    </ContainerUI>
  )
}
