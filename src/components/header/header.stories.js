import React from 'react'
import Header from './header'

export default {
  title: 'Header',
  component: Header,
}

export const Default = () => (
  <Header>
    <Header.Brand>SOMELONGBRANDNAMEGOES</Header.Brand>
    <Header.NavMenu>
      <Header.NavLink>
        <a href="/">Home</a>
      </Header.NavLink>
      <Header.NavLink>
        <a href="/">About</a>
      </Header.NavLink>
      <Header.NavLink>
        <a href="/">Blog</a>
      </Header.NavLink>
      <Header.NavLink>
        <a href="/">Contact</a>
      </Header.NavLink>
    </Header.NavMenu>
  </Header>
)
