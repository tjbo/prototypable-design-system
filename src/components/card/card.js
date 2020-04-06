import {
  ContentUI,
  CardUI,
  CardImageUI,
  FieldUI,
  FieldTextUI,
  FieldTitleUI,
  TitleUI,
} from './card.css'

function makeField(key, value) {
  return (
    <FieldUI>
      <FieldTitleUI>{key}</FieldTitleUI>
      <FieldTextUI>{value}</FieldTextUI>
    </FieldUI>
  )
}

export default function ({ data: { fields, title, imageUrl } }) {
  console.log('imageUrl', imageUrl)
  return (
    <CardUI>
      <CardImageUI imageUrl={imageUrl} />
      <ContentUI>
        <TitleUI>{title}</TitleUI>
        {fields.map((field) => {
          return makeField(field.key, field.value)
        })}
      </ContentUI>
    </CardUI>
  )
}
