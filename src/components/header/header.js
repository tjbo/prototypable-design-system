import React from 'react'
import config from '../../config'
import { Brand, Header, NavMenu } from './header.css'

export default function ({ children }) {
  return (
    <Header>
      <Brand>
        <a href="/">{config.domain}</a>
      </Brand>
      <NavMenu>{children}</NavMenu>
    </Header>
  )
}
