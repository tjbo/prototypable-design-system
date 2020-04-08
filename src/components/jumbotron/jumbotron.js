import React from 'react'
import {
  ContentUI,
  Intro2UI,
  JumbotronBackgroundUI,
  JumbotronContentUI,
  SubTitleUI,
  TitleUI,
} from './jumbotron.css'

export default function ({ children, imageUrl }) {
  return (
    <div>
      <JumbotronBackgroundUI imageUrl={imageUrl} />
      <ContentUI>{children}</ContentUI>
    </div>
  )
}
