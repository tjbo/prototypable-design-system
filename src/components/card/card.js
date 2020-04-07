import {
  ContentUI,
  CardUI,
  CardImageUI,
  FieldUI,
  FieldTextUI,
  FieldTitleUI,
  TitleUI,
} from './card.css'
var short = require('short-uuid')

function makeField(key, value) {
  return (
    <FieldUI key={short.generate()}>
      <FieldTitleUI>{key}</FieldTitleUI>
      <FieldTextUI>{value}</FieldTextUI>
    </FieldUI>
  )
}

export default function ({ data: { fields, title, imageUrl } }) {
  return (
    <CardUI key={short.generate()}>
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
