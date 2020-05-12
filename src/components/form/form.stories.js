import React from 'react'
import Form from './form'

export default {
  title: 'Form',
  component: Form,
}

export const Default = () => (
  <Form>
    <Form.Input label="Name" />
    <Form.Input label="Email" />
  </Form>
)
