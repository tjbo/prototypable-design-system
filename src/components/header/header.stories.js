import React from 'react'
import Header from './header'

export default {
  title: 'Header',
  component: Header,
}

export const Default = () => (
  <Header
    links={[
      {
        name: 'About',
        path: '/',
      },
      {
        name: 'Recent',
        path: '/',
      },
      {
        name: 'Our Team',
        path: '/',
      },
      {
        name: 'Contact',
        path: '/',
      },
    ]}
  ></Header>
)
