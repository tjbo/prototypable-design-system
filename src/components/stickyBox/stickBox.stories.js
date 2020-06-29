import React from 'react'
import StickyBox from './stickyBox'
import Section from '../section'
import Title from '../title'
import Form from '../form'

export default {
  title: 'Sticky Box',
  component: StickyBox,
}

export const Default = () => (
  <Section>
    <StickyBox>
      <Section inner_width="small">
        <Title as="h3" color="dark3">
          SUBSCRIBE & SUCCEED:
        </Title>
        <p>
          We are dedicated to keeping our readers informed and up to date on the
          latest real estate investment news, strategies and ideas needed to
          succeed.
        </p>
        <Form>
          <Form.Input label="Email:" name="email" />
          <Form.Button>
            <Title as="h5" color="light3">
              Subscribe for Updates
            </Title>
          </Form.Button>
        </Form>
      </Section>
    </StickyBox>
  </Section>
)
