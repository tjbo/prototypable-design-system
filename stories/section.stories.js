import React from 'react'
import Section from '../src/components/section/section'
import Paragraphs, { paragraphs } from '../mocks/paragraphs'

export default {
  title: 'Section',
  component: Section,
}

export const Default = () => <Section>{paragraphs}</Section>

export const dark = () => <Section hasBgDarkColor>{paragraphs}</Section>

export const light = () => <Section hasBgLightColor>{paragraphs}</Section>

export const full = () => <Section isFullWidth>{paragraphs}</Section>

export const big = () => <Section innerWidth="big">{paragraphs}</Section>

export const innerWidth1 = () => (
  <Section innerWidth="big">{paragraphs}</Section>
)

export const innerWidth2 = () => (
  <Section innerWidth="medium">{paragraphs}</Section>
)

export const innerWidth3 = () => (
  <Section innerWidth="small">{paragraphs}</Section>
)
