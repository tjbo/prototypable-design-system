import React from 'react'
import {
  ContentUI,
  Intro2UI,
  JumbotronBackgroundUI,
  JumbotronContentUI,
  SubTitleUI,
  TitleUI,
} from './jumbotron.css'
import config from '../../config'

export default function () {
  return (
    <div>
      <JumbotronBackgroundUI />
      <ContentUI>
        <JumbotronContentUI>
          <Intro2UI>
            <TitleUI>
              Your Trusted Los Angeles <br />
              Hard Money Lender
            </TitleUI>
            <br />
            <SubTitleUI>
              Loans from $200K to $5 Million. <br />
              Fast. Reliable. Transparent.
              <br />
              <br />
              Call Us Today @ {config.contact.phone}
            </SubTitleUI>
          </Intro2UI>
          {/* <Form /> */}
        </JumbotronContentUI>
      </ContentUI>
    </div>
  )
}
