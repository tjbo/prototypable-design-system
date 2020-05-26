import React from 'react'
import Title from './title'
import Section from '../section'

export default {
  title: 'Title',
  component: Title,
}

export const Default = () => (
  <div>
    <Section>
      <Title as="h1" styling="h3">
        Almost before we knew it, we had left the ground.
      </Title>
    </Section>

    <Section>
      <Title as="h1" styling="h3">
        Almost before we knew it, we had left the ground.
      </Title>
    </Section>
    <Section background="dark">
      <Title as="h2" styling="h1" color="light3">
        Almost before we knew it, we had left the ground.
      </Title>
    </Section>
    <Section>
      <Title as="h2" styling="h2" spaceAfter="none">
        Almost before we knew it, we had left the ground.
      </Title>
      <Title as="h2" styling="h4">
        Almost before we knew it, we had left the ground.
      </Title>
    </Section>
    <Section background="dark">
      <Title as="h2" styling="h2" spaceAfter="small" color="light3">
        Almost before we knew it, we had left the ground.
      </Title>
      <Title as="h2" styling="h4" color="light3">
        Almost before we knew it, we had left the ground.
      </Title>
    </Section>
    <Section>
      <Title as="h2" styling="h2" spaceAfter="medium">
        Almost before we knew it, we had left the ground.
      </Title>
      <Title as="h2" styling="h4">
        Almost before we knew it, we had left the ground.
      </Title>
    </Section>
    <Section background="dark">
      <Title as="h2" styling="h2" color="light3">
        Almost before we knew it, we had left the ground.
      </Title>
      <Title as="h2" styling="h4" color="light3">
        Almost before we knew it, we had left the ground.
      </Title>
    </Section>
    <Section>
      <Title as="h1" fontStyle="italic">
        Almost before we knew it, we had left the ground.
      </Title>
      <Title as="h4" fontStyle="italic">
        Almost before we knew it, we had left the ground.
      </Title>
    </Section>
    <Section background="dark">
      <Title as="h1" fontStyle="italic" color="light3" shadow="dark">
        Almost before we knew it, we had left the ground.
      </Title>
      <Title as="h4" fontStyle="italic" color="light3" shadow="dark">
        Almost before we knew it, we had left the ground.
      </Title>
    </Section>
  </div>
)

export const TitleWithIcon = () => (
  <Section>
    <Title as="h1" styling="h3">
      Buy
    </Title>
  </Section>
)
