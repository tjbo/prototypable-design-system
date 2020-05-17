import React from 'react'
import Form from './form'

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
