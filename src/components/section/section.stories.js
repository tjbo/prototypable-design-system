import React from 'react'
import Section from './section'
import { paragraphs } from './section.mocks'

export default {
  title: 'Section',
  component: Section,
}

export const Default = () => <Section>{paragraphs}</Section>

export const dark = () => <Section background="dark">{paragraphs}</Section>

export const light = () => <Section background="light">{paragraphs}</Section>

export const full = () => <Section is_full_width={true}>{paragraphs}</Section>

export const big = () => <Section inner_width="big">{paragraphs}</Section>

export const innerWidth1 = () => (
  <Section inner_width="big">{paragraphs}</Section>
)

export const innerWidth2 = () => (
  <Section inner_width="medium">{paragraphs}</Section>
)

export const innerWidth3 = () => (
  <Section inner_width="small">{paragraphs}</Section>
)
