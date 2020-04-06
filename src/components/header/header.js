import React from 'react'
import config from '../../config'
import { Brand, Header, NavMenu } from './header.css'

export default function ({ children, siteName }) {
  return (
    <Header>
      <Brand>
        <a href="/">{siteName}</a>
      </Brand>
      <NavMenu>{children}</NavMenu>
    </Header>
  )
}
