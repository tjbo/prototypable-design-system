import {
  CardContentUI,
  ContentUI,
  ImageContainerUI,
  CardRadioInputUI,
  ContainerUI,
  ImageUI,
  CardRadioInputContainerUI,
  TitleUI,
} from './radioCard.css'

import CheckMark from '../../../svgs/checkMark'

export default function ({
  content,
  image,
  hover,
  onChange,
  selectedValue,
  title,
  value,
  types,
}) {
  const isChecked = selectedValue === value

  return (
    <ContainerUI
      onClick={(e) => onChange(value)}
      isSelected={isChecked}
      tabIndex={1}
      onKeyDown={(event) => {
        if (event.keyCode === 13) {
          event.preventDefault()
          onChange(value)
        }
      }}
    >
      <ImageContainerUI>
        <ImageUI src={image} selected={isChecked} />
      </ImageContainerUI>
      <CardContentUI>
        <CardRadioInputContainerUI>
          <CardRadioInputUI
            checked={isChecked}
            type="radio"
            name="property_type"
            onChange={(e) => onChange(value)}
            tabIndex="-1"
          />
        </CardRadioInputContainerUI>
        <ContentUI>
          {title} <CheckMark isChecked={isChecked} />
          {content}
        </ContentUI>
      </CardContentUI>
    </ContainerUI>
  )
}
