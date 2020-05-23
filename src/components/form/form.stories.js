import React from 'react'
import Form from './form'
import Grid from '../grid/'

export default {
  title: 'Form',
  component: Form,
}

export const Default = () => (
  <Form>
    <Form.Input label="Name" name="name" validationRules="required|alpha" />
    <Form.Input label="Email" name="email" validationRules="required|email" />
    <Form.Input
      label="Message"
      name="message"
      type="textarea"
      validationRules="required"
    />
    <Form.Button type="submit">Send Us A Message</Form.Button>
  </Form>
)

const cards = [
  {
    content: (
      <ul>
        <li>Multi-family</li>
        <li>Single-family</li>
        <li>Condominiums</li>
      </ul>
    ),
    image: 'icons/504989-real-estate/png/011-house-14.png',
    title: 'Residential',
    value: 'residential',
  },
  {
    content: (
      <ul>
        <li>Office Buildings</li>
        <li>Retail Centers</li>
      </ul>
    ),
    image: 'icons/504989-real-estate/png/041-building-1.png',
    title: 'Commercial',
    value: 'commercial',
  },
  {
    content: (
      <ul>
        <li>Industrial & Warehouse</li>
        <li>Parking Garages & Lots</li>
      </ul>
    ),
    image: 'icons/504989-real-estate/png/076-factory.png',
    title: 'Industrial',
    value: 'industrial',
  },
  {
    content: (
      <ul>
        <li>Hotels & Motels</li>
        <li>Special Purpose & Mixed Use</li>
      </ul>
    ),
    image: 'icons/504989-real-estate/png/040-mansion.png',
    title: 'Other',
    value: 'other',
  },
]

export const RadioCards = () => (
  <Form>
    <Form.RadioCards cards={cards} name="property_type" />
  </Form>
)

export const Slider = () => (
  <div>
    <Form isMultiStep={true}>
      <Form.Step>
        <Form.Slider
          defaultValue={25}
          formatString="percent"
          label="Down Payment"
          name="down_payment"
          asPercentage={true}
        />
      </Form.Step>
      <Form.Step>
        <Form.Slider
          formatString="currency"
          label="Purchase Price"
          maxWidth="10ch"
          name="dollars"
          defaultValue={1000000}
          min={200000}
          max={5000000}
          step={100000}
        />
      </Form.Step>
      <Form.Step>
        <Form.Slider
          label="FICO Score"
          maxWidth="10ch"
          name="fico"
          defaultValue={650}
          min={300}
          max={900}
          step={10}
        />
      </Form.Step>
    </Form>
  </div>
)
