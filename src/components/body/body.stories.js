import React from 'react'
import Body from './body'
import Section from '../section'

export default {
  title: 'Body',
  component: Body,
}

function MockSection() {
  return (
    <Section>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nibh
      nisi, blandit ac augue non, molestie viverra nulla. Nam sed accumsan erat.
      Praesent vitae dolor rutrum, tempor quam eget, tempor lorem. Suspendisse
      ornare ullamcorper odio quis mollis. Donec ligula massa, sodales vitae
      massa quis, mattis tincidunt urna. Nam quis nisi quis metus sagittis
      elementum nec sit amet magna. Proin sagittis metus tempus vestibulum
      aliquam. Integer ac nulla mauris. Vivamus at porta neque, id interdum
      neque. In ut maximus orci.
    </Section>
  )
}

export const Default = () => (
  <Body>
    <MockSection />
    <MockSection />
    <MockSection />
    <MockSection />
    <MockSection />
    <MockSection />
    <MockSection />
    <MockSection />
    <MockSection />
    <MockSection />
    <MockSection />
    <MockSection />
    <MockSection />
    <MockSection />
    <MockSection />
    <MockSection />
    <MockSection />
    <MockSection />
    <MockSection />
  </Body>
)
